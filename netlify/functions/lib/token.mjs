// Long-lived Instagram tokens last 60 days. The first one comes from the INSTAGRAM_ACCESS_TOKEN
// environment variable; refreshed tokens are stored in Netlify Blobs and take precedence.
import { getStore } from '@netlify/blobs';

const store = () => getStore('instagram');

export async function getToken() {
  try {
    const saved = await store().get('token', { type: 'json' });
    if (saved?.access_token) return saved.access_token;
  } catch {
    // Blobs unavailable (e.g. local preview): fall back to the env var.
  }
  return process.env.INSTAGRAM_ACCESS_TOKEN || null;
}

export async function saveToken(token) {
  await store().setJSON('token', token);
}
