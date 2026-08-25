# Project Plan

The working roadmap, broken into phases and tasks. Check off tasks as they are
completed and committed.

Read `docs/PROJECT_CONTEXT.md` first — it defines the rules this plan follows
(especially the Content Accuracy Rule in §11).

---

## Phase 0 — Scaffolding ✅ (complete)

- [x] Next.js + React + TypeScript + App Router + ESLint scaffold
- [x] Minimal dependencies only (no Tailwind/UI libraries yet)
- [x] `src/config/site.ts` as centralized source of truth (placeholder values)
- [x] Scripts: dev / build / start / lint verified working
- [x] Initial git commit

## Phase 1 — Research & Information Collection ⏳ (current phase)

Goal: gather every verified fact needed to build accurate content.
Nothing in later phases should use unverified information.

- [x] Create an information-collection checklist for the business owner
      (see `docs/BUSINESS_INFO_CHECKLIST.md`)
- [ ] Collect verified business information from the owner
      (fill in `docs/BUSINESS_INFO_CHECKLIST.md`)
- [ ] Investigate the existing GBP website URL relationship
      (`silicasupplier.com/DiribaGemechu` → Jinsha page) with the owner
- [ ] Basic keyword/intent research for relevant Ethiopian searches
      (validate which target queries actually match real offerings)
- [ ] Confirm domain choice; ensure it is purchased/owned by the business

## Phase 2 — Architecture & Config

- [x] Expand `site.ts` into a typed structure covering NAP (name/address/
      phone), opening hours, contact channels, and product data slots
      (placeholder values — tracked in `docs/PLACEHOLDERS.md`)
- [ ] Decide page set based on real content availability (home, products,
      contact, about — only pages with genuine purpose)
- [ ] Set up Vercel deployment pipeline (temporary domain first)
- [ ] Establish baseline: deploy skeleton, submit to Search Console once live

## Phase 3 — Website Implementation

Built with sample data tracked in `docs/PLACEHOLDERS.md`; all facts to be
replaced when verified information arrives.

- [x] Global layout: header/nav/footer with consistent NAP
- [x] Home page (hero, products preview, visit/contact info sections)
- [x] Products pages (index + per-product detail pages from site config)
- [x] Contact page (call/visit/hours cards; WhatsApp + Maps slots ready)
- [ ] About page (blocked: needs real company information)
- [ ] FAQ page (blocked: needs real customer questions and answers)
- [ ] Design polish pass on real devices / feedback from owner

## Phase 4 — Technical SEO

- [ ] Unique title + meta description per page (from site config)
- [ ] Proper heading hierarchy across all pages
- [x] XML sitemap (`app/sitemap.ts`)
- [x] robots.txt (`app/robots.ts`)
- [ ] Canonical URLs
- [ ] Structured data where appropriate (LocalBusiness schema with real data)
- [ ] Image optimization (next/image, proper alt text, compressed assets)
- [ ] Open Graph / social metadata
- [ ] Core Web Vitals check on slow/mobile connections

## Phase 5 — Google Integration & Launch

- [ ] Update GBP: new address, website URL pointing to the new domain
- [ ] Verify NAP consistency between website and GBP
- [ ] Google Search Console setup and domain verification (business-owned)
- [ ] Submit sitemap; monitor indexing
- [ ] Analytics if agreed upon (business-owned account)
- [ ] Final pre-launch review: build passes, content accuracy double-checked

## Phase 6 — Measurement & Optimization (ongoing)

- [ ] Track Search Console metrics (impressions, clicks, CTR, queries)
- [ ] Track business outcomes (calls, direction requests, inquiries)
- [ ] Iterate content/pages based on real query data
- [ ] Maintain GBP (photos, posts, responding to reviews) as ongoing work

---

## Unresolved Business Items

Tracked separately because they block or affect other tasks:

1. **GBP website URL** — currently points to
   `silicasupplier.com/DiribaGemechu` showing a Chinese company (Jinsha).
   Relationship unknown. Must be clarified with the owner before changing.
2. **Office relocation** — GBP still shows the old location; needs updating
   with verified new address.
3. **Domain ownership** — no custom domain confirmed yet. Must be registered
   under the business owner's account.
