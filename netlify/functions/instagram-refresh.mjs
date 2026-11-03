// Weekly: refresh the 60-day Instagram token so the feed never silently expires.
// Instagram allows refreshing any valid token that is at least 24 hours old.
import { getToken, saveToken } from './lib/token.mjs';

export default async () => {
  const token = await getToken();
  if (!token) {
    console.log('No Instagram token configured; nothing to refresh.');
    return;
  }
  const res = await fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(token)}`);
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body.access_token) {
    console.error('Instagram token refresh failed', res.status, body.error?.type, body.error?.code);
    return;
  }
  await saveToken({ access_token: body.access_token, expires_at: new Date(Date.now() + body.expires_in * 1000).toISOString() });
  console.log('Instagram token refreshed; valid for', Math.round(body.expires_in / 86400), 'days.');
};

export const config = { schedule: '@weekly' };
