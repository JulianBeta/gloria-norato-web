# Gloria Norato · Hair Design Studio

[![Tests](https://github.com/JulianBeta/gloria-norato-web/actions/workflows/ci.yml/badge.svg)](https://github.com/JulianBeta/gloria-norato-web/actions/workflows/ci.yml)

Website of Gloria Norato's hair design studio in Bogotá → **https://glorianorato.netlify.app**

Built with React 19 + Vite. A Playwright suite tests every change on desktop and mobile, and Netlify deploys `main` automatically.

## What the site does

| Section | Features |
|---|---|
| **Header** | Logo between the links on desktop; shrinks on scroll and highlights the current section. Full-screen menu on mobile (keyboard and Esc support). |
| **Conóceme** | Portrait and intro. **"Agenda tu cita"** opens WhatsApp with a ready-made message. |
| **Servicios** | Six service cards; each **"Consultar"** opens WhatsApp asking about that specific service. |
| **Nuestro trabajo** | Swipeable photo gallery with arrows, dots and gentle autoplay (pauses on hover, touch and when the visitor prefers reduced motion). Tap a photo to open it full screen. |
| **Productos** | 14 products with **brand filters** (L'Oréal · Moroccanoil · Kérastase), real text prices and a **"Lo quiero"** button that sends the product to WhatsApp. |
| **Síguenos en Instagram** | Gloria's latest posts in a grid (hover/tap shows the date and caption; video and carousel badges), each linking to the post. Until the feed is connected it shows a follow card instead. |
| **Contacto** | Map with the studio's pin (loaded only when it scrolls into view), **"Cómo llegar"** directions, tap-to-call/WhatsApp/Instagram/email links and copy buttons. Optional opening hours with a live **"Abierto ahora"** badge. |
| **Everywhere** | Floating WhatsApp button, back-to-top (desktop), subtle scroll-reveal animations, WhatsApp/Facebook link previews, and Google-friendly `HairSalon` structured data. |

## Editing content

Everything Gloria might change lives in `src/data/`:

- **`site.js`**: phone, WhatsApp, Instagram, email, address, map coordinates and **opening hours** (`hours: null` hides the hours and the "Abierto ahora" badge until they're filled in).
- **`products.js`**: product names, brands and prices (COP). Images go in `public/img/products/<slug>.webp`.
- **`services.js`**: service cards and gallery photos (`public/img/gallery/<name>.webp` plus a `-sm.webp` thumbnail).

## Instagram feed

The section reads `/api/instagram`, a Netlify Function (`netlify/functions/instagram.mjs`) that calls the
**Instagram API with Instagram Login** and returns the latest posts. The access token never reaches the browser,
and Netlify's CDN caches the response for an hour.

One-time setup (needs Gloria's Instagram login; the account must be **Professional**: Business or Creator):

1. In [Meta for Developers](https://developers.facebook.com/apps/) create an app → add the **Instagram** product →
   *API setup with Instagram login*.
2. Under *Generate access tokens*, add Gloria's account (`@glorianorato`) and generate a token
   (permission `instagram_business_basic`). It's a long-lived token (60 days).
3. Save it in Netlify (it's a secret: don't commit it):
   ```bash
   npx netlify-cli env:set INSTAGRAM_ACCESS_TOKEN "<token>" --secret --context production
   ```
   then redeploy.

`netlify/functions/instagram-refresh.mjs` runs weekly and renews the token before it expires, storing the new
one in Netlify Blobs, so the feed keeps working without anyone touching it.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm test           # Playwright: desktop + mobile, links, gallery, filters, map, accessibility
npm run test:live  # the same suite against https://glorianorato.netlify.app
```

## Deployment

Netlify builds and publishes `main` automatically through its GitHub integration (site `glorianorato`).
`netlify.toml` sets the build command (`npm run build`), the publish folder (`dist`), Node 22 and cache headers,
overriding the old Create React App settings in the Netlify UI.

`.github/workflows/ci.yml` runs the Playwright suite on every push and pull request. Open a pull request to see
the tests (and a Netlify deploy preview) before merging into `main`.

---

Built by [Julian Betancourt Cuervo](https://julianbeta.github.io).
