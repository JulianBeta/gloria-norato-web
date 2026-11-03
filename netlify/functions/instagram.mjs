// GET /api/instagram → Gloria's latest Instagram posts, normalized for the site.
// Uses the Instagram API with Instagram Login (professional account, instagram_business_basic).
// The access token never reaches the browser: it lives in Netlify (env var or Blobs, see token.mjs).
import { getToken } from './lib/token.mjs';

const API = 'https://graph.instagram.com/v26.0/me/media';
const FIELDS = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
const LIMIT = 12;

const json = (body, status, cache) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      // Browsers keep it 5 minutes; Netlify's CDN serves it for an hour and refreshes in the background,
      // so visitors never wait on Instagram and the API rate limit is never a concern.
      'Cache-Control': 'public, max-age=300',
      'Netlify-CDN-Cache-Control': cache,
    },
  });

export function normalize(items = []) {
  return items
    .map((m) => ({
      id: m.id,
      type: m.media_type, // IMAGE | VIDEO | CAROUSEL_ALBUM
      // Videos use their thumbnail; media_url can be missing (e.g. licensed audio), so skip those posts.
      image: m.media_type === 'VIDEO' ? m.thumbnail_url : m.media_url,
      url: m.permalink,
      caption: (m.caption ?? '').trim().slice(0, 160),
      date: m.timestamp,
    }))
    .filter((p) => p.image && p.url);
}

export default async () => {
  const token = await getToken();
  if (!token) return json({ posts: [], reason: 'not-configured' }, 200, 'public, s-maxage=300');

  try {
    const res = await fetch(`${API}?fields=${FIELDS}&limit=${LIMIT}&access_token=${encodeURIComponent(token)}`);
    if (!res.ok) {
      // Log Instagram's error type only; the request URL contains the token.
      const { error } = await res.json().catch(() => ({}));
      console.error('Instagram API error', res.status, error?.type, error?.code);
      return json({ posts: [], reason: 'upstream-error' }, 502, 'public, s-maxage=60');
    }
    const { data } = await res.json();
    return json({ posts: normalize(data) }, 200, 'public, s-maxage=3600, stale-while-revalidate=86400, durable');
  } catch (err) {
    console.error('Instagram fetch failed', err.message);
    return json({ posts: [], reason: 'unreachable' }, 502, 'public, s-maxage=60');
  }
};

export const config = { path: '/api/instagram' };
