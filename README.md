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
| **Contacto** | Map with the studio's pin (loaded only when it scrolls into view), **"Cómo llegar"** directions, tap-to-call/WhatsApp/Instagram/email links and copy buttons. Optional opening hours with a live **"Abierto ahora"** badge. |
| **Everywhere** | Floating WhatsApp button, back-to-top (desktop), subtle scroll-reveal animations, WhatsApp/Facebook link previews, and Google-friendly `HairSalon` structured data. |

## Editing content

Everything Gloria might change lives in `src/data/`:

- **`site.js`**: phone, WhatsApp, Instagram, email, address, map coordinates and **opening hours** (`hours: null` hides the hours and the "Abierto ahora" badge until they're filled in).
- **`products.js`**: product names, brands and prices (COP). Images go in `public/img/products/<slug>.webp`.
- **`services.js`**: service cards and gallery photos (`public/img/gallery/<name>.webp` plus a `-sm.webp` thumbnail).

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm test           # Playwright: desktop + mobile, links, gallery, filters, map, accessibility
```

## Deployment

Netlify builds and publishes `main` automatically through its GitHub integration (site `glorianorato`).
`netlify.toml` sets the build command (`npm run build`), the publish folder (`dist`), Node 22 and cache headers,
overriding the old Create React App settings in the Netlify UI.

`.github/workflows/ci.yml` runs the Playwright suite on every push and pull request. Open a pull request to see
the tests (and a Netlify deploy preview) before merging into `main`.

---

Built by [Julian Betancourt Cuervo](https://julianbeta.github.io).
