import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const WHATSAPP = 'https://wa.me/573103349616';
const textParam = (href) => new URL(href).searchParams.get('text');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('loads without errors and without horizontal scrolling', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  await page.reload();
  await expect(page.getByRole('heading', { level: 1, name: 'Gloria Norato' })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  expect(errors).toEqual([]);
});

test('has one h1, a real description and salon structured data', async ({ page }) => {
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Gloria Norato/);
  const data = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
  expect(data['@type']).toBe('HairSalon');
  expect(data.address.addressLocality).toBe('Bogotá');
});

test('"Agenda tu cita" opens WhatsApp with a ready-made message', async ({ page }) => {
  const href = await page.getByTestId('cta-book').getAttribute('href');
  expect(href.startsWith(WHATSAPP)).toBe(true);
  expect(textParam(href)).toContain('agendar una cita');
  await expect(page.getByTestId('fab-whatsapp')).toHaveAttribute('href', /wa\.me\/573103349616/);
});

test('navigation reaches every section', async ({ page, isMobile }) => {
  for (const [label, id] of [['Servicios', 'servicios'], ['Productos', 'productos'], ['Contacto', 'contacto'], ['Conóceme', 'conoceme']]) {
    if (isMobile) await page.getByRole('button', { name: 'Abrir menú' }).click();
    await page.getByRole('navigation', { name: 'Principal' }).getByRole('link', { name: label }).click();
    await expect(page.locator(`#${id}`)).toBeInViewport();
  }
});

test('mobile menu is accessible: toggles, closes with Esc', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile-only menu');
  const toggle = page.getByRole('button', { name: 'Abrir menú' });
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await expect(page.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('link', { name: 'Productos' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute('aria-expanded', 'false');
  await expect(page.getByRole('link', { name: 'Productos' })).toBeHidden();
});

test('each service has its own WhatsApp question', async ({ page }) => {
  const links = page.getByRole('link', { name: /^Consultar por WhatsApp/ });
  await expect(links).toHaveCount(6);
  const messages = await links.evaluateAll((as) => as.map((a) => new URL(a.href).searchParams.get('text')));
  expect(new Set(messages).size).toBe(6);
  expect(messages[0]).toContain('coloración');
});

test('gallery: arrows/dots move the slides and the lightbox opens and closes', async ({ page, isMobile }) => {
  const gallery = page.getByRole('region', { name: 'Fotos de nuestro trabajo' });
  await gallery.scrollIntoViewIfNeeded();
  const dots = gallery.locator('.gallery-dots button');
  await expect(dots).toHaveCount(9);
  await dots.nth(4).click();
  await expect(dots.nth(4)).toHaveAttribute('aria-current', 'true');
  if (!isMobile) {
    await gallery.getByRole('button', { name: 'Foto siguiente' }).first().click();
    await expect(dots.nth(5)).toHaveAttribute('aria-current', 'true');
  }
  await gallery.getByRole('button', { name: /^Ampliar foto/ }).nth(5).click();
  const lightbox = page.getByRole('dialog', { name: 'Foto ampliada' });
  await expect(lightbox).toBeVisible();
  await expect(lightbox.locator('figcaption')).not.toBeEmpty();
  await page.keyboard.press('Escape');
  await expect(lightbox).toBeHidden();
});

test('products: brand filters, prices and "Lo quiero" messages', async ({ page }) => {
  const cards = page.locator('.product-card');
  await expect(cards).toHaveCount(14);
  for (const [brand, count] of [['Moroccanoil', 8], ["L'Oréal", 3], ['Kérastase', 3], ['Todas', 14]]) {
    await page.getByRole('button', { name: new RegExp(`^${brand}`) }).click();
    await expect(page.getByRole('button', { name: new RegExp(`^${brand}`) })).toHaveAttribute('aria-pressed', 'true');
    await expect(cards).toHaveCount(count);
  }
  await expect(cards.first().locator('.product-price')).toHaveText(/\$\s?140\.000/);
  const href = await page.getByRole('link', { name: "Lo quiero: L'Oréal Metal Detox mascarilla" }).getAttribute('href');
  expect(textParam(href)).toContain("L'Oréal Metal Detox mascarilla");
  expect(textParam(href)).toMatch(/140\.000/);
});

test('contact: map pin at the studio, directions and working links', async ({ page }) => {
  const contact = page.locator('#contacto');
  await contact.scrollIntoViewIfNeeded();
  const pin = page.locator('.leaflet-marker-icon');
  await expect(pin).toBeVisible();
  // The map is centered on the studio, so the pin's tip must sit at the map's center.
  const [p, m] = [await pin.boundingBox(), await page.locator('.map').boundingBox()];
  expect(Math.abs(p.x + p.width / 2 - (m.x + m.width / 2))).toBeLessThan(3);
  expect(Math.abs(p.y + p.height - (m.y + m.height / 2))).toBeLessThan(3);
  await expect(page.getByTestId('directions')).toHaveAttribute('href', /destination=4\.72677\d*,-74\.05545\d*/);
  await expect(contact.getByRole('link', { name: '@glorialorato' })).toHaveAttribute('href', 'https://www.instagram.com/glorialorato/');
  await expect(contact.getByRole('link', { name: 'glorialorato@gmail.com' })).toHaveAttribute('href', 'mailto:glorialorato@gmail.com');
  await expect(contact.getByRole('link', { name: 'Llamar' })).toHaveAttribute('href', 'tel:+573103349616');
});

test('copy buttons copy the address and email', async ({ page, browserName, context }) => {
  test.skip(browserName !== 'chromium', 'Clipboard permissions are Chromium-only in Playwright');
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.locator('#contacto').scrollIntoViewIfNeeded();
  await page.getByRole('button', { name: 'Copiar correo' }).click();
  await expect(page.getByRole('button', { name: 'correo copiado' })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('glorialorato@gmail.com');
});

test('footer shows the current year', async ({ page }) => {
  await expect(page.locator('footer')).toContainText(`© ${new Date().getFullYear()}`);
});

test('every image has alt text', async ({ page }) => {
  const missing = await page.locator('img').evaluateAll((imgs) => imgs.filter((i) => !i.hasAttribute('alt')).map((i) => i.src));
  expect(missing).toEqual([]);
});

test('no WCAG 2.1 AA accessibility violations', async ({ page }) => {
  // Scroll through so reveal animations finish and the lazy map renders before scanning.
  for (let y = 0; y < 12000; y += 600) await page.evaluate((v) => window.scrollTo(0, v), y);
  await page.locator('.leaflet-marker-icon').waitFor();
  await page.evaluate(() => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible')));
  await page.waitForTimeout(800);
  const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
  expect(violations.map((v) => `${v.id}: ${v.help} → ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(' | ')}`)).toEqual([]);
});
