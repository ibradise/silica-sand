# Diriba Silica Sand Supplier

Corporate website for Diriba Silica Sand Supplier — a construction materials supplier based in Sheger City, Oromia, Ethiopia.

Built with **Next.js 16**, **React 19**, and **TypeScript**. Statically generated for fast deployment on Vercel.

## Pages

- **Home** — hero, featured products, business info
- **Products** — full catalogue (Silica Sand, White Silica Sand, River Sand, River Stone, Limestone, Crushed Limestone)
- **Product detail** — per-product hero image, specs placeholder, related products
- **About** — business story, mission, why choose us
- **Contact** — address, phone, hours, map link
- **FAQ** — hidden from nav, accessible at `/faq`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` in your environment before building for production.

## Project structure

```
src/
  app/            # Next.js App Router pages
  components/     # Header, Footer, ProductCard, MobileNav, etc.
  config/
    site.ts       # All business data, products, navigation (single source of truth)
public/
  images/         # Product photos, hero image, logo
docs/
  answer.md       # Owner's raw data
  PLACEHOLDERS.md # Remaining gaps to fill before launch
```

## Updating business data

All business information lives in `src/config/site.ts`. Edit that single file to update name, phone, address, hours, products, and social links.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, static generation)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules (no Tailwind)
- Next.js Image component for optimized images
- JSON-LD structured data for local business SEO
