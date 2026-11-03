import { expect, test } from '@playwright/test';
import { normalize } from '../netlify/functions/instagram.mjs';

// Sample posts shaped like the Netlify Function's response (images are local gallery photos).
const photos = ['balayage-rubio', 'iluminaciones-rostro', 'mechas-cafe-miel', 'ombre-cobrizo', 'peinado-en-estudio', 'corte-y-color', 'estudio', 'zona-de-lavado', 'equipo'];
const POSTS = photos.map((name, i) => ({
  id: String(1000 + i),
  type: i === 1 ? 'VIDEO' : i === 2 ? 'CAROUSEL_ALBUM' : 'IMAGE',
  image: `/img/gallery/${name}-sm.webp`,
  url: `https://www.instagram.com/p/post${i}/`,
  caption: i === 0 ? 'Balayage rubio para el fin de semana' : '',
  date: new Date(Date.UTC(2026, 9, 30 - i)).toISOString(),
}));

const feed = (page) => page.locator('#instagram');

test('shows the latest 8 posts as links to Instagram', async ({ page }) => {
  await page.route('**/api/instagram', (route) => route.fulfill({ json: { posts: POSTS } }));
  await page.goto('/');
  await feed(page).scrollIntoViewIfNeeded();
  const tiles = feed(page).locator('.ig-tile a');
  await expect(tiles).toHaveCount(8);
  await expect(tiles.first()).toHaveAttribute('href', 'https://www.instagram.com/p/post0/');
  await expect(tiles.first()).toHaveAttribute('target', '_blank');
  await expect(tiles.first()).toHaveAccessibleName(/Balayage rubio para el fin de semana/);
  // Video and carousel posts are marked with a badge.
  await expect(feed(page).locator('.ig-tile').nth(1).locator('.ig-type')).toHaveCount(1);
  await expect(feed(page).locator('.ig-tile').nth(2).locator('.ig-type')).toHaveCount(1);
  await expect(feed(page).locator('.ig-tile').nth(3).locator('.ig-type')).toHaveCount(0);
  await expect(page.getByTestId('ig-profile')).toHaveAttribute('href', 'https://www.instagram.com/glorianorato/');
});

for (const [label, handler] of [
  ['no posts', (route) => route.fulfill({ json: { posts: [], reason: 'not-configured' } })],
  ['an API error', (route) => route.fulfill({ status: 502, json: { posts: [] } })],
  ['a network failure', (route) => route.abort()],
]) {
  test(`falls back to a follow card on ${label}`, async ({ page }) => {
    await page.route('**/api/instagram', handler);
    await page.goto('/');
    await feed(page).scrollIntoViewIfNeeded();
    await expect(page.getByTestId('ig-follow')).toBeVisible();
    await expect(page.getByTestId('ig-follow')).toContainText('@glorianorato');
    await expect(feed(page).locator('.ig-tile a')).toHaveCount(0);
  });
}

test('the function normalizes Instagram media (videos use thumbnails, posts without an image are skipped)', () => {
  const posts = normalize([
    { id: '1', media_type: 'IMAGE', media_url: 'https://cdn/a.jpg', permalink: 'https://ig/p/1', caption: '  Hola  ', timestamp: '2026-10-30T12:00:00+0000' },
    { id: '2', media_type: 'VIDEO', media_url: 'https://cdn/v.mp4', thumbnail_url: 'https://cdn/v.jpg', permalink: 'https://ig/p/2', timestamp: '2026-10-29T12:00:00+0000' },
    { id: '3', media_type: 'VIDEO', permalink: 'https://ig/p/3', timestamp: '2026-10-28T12:00:00+0000' },
    { id: '4', media_type: 'CAROUSEL_ALBUM', media_url: 'https://cdn/c.jpg', permalink: 'https://ig/p/4', caption: 'x'.repeat(400), timestamp: '2026-10-27T12:00:00+0000' },
  ]);
  expect(posts.map((p) => p.id)).toEqual(['1', '2', '4']);
  expect(posts[0].caption).toBe('Hola');
  expect(posts[1].image).toBe('https://cdn/v.jpg');
  expect(posts[2].caption).toHaveLength(160);
});
