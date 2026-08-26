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
- [x] Investigate the existing GBP website URL relationship — **RESOLVED**:
      mistakenly entered URL; `silicasupplier.com` is unrelated
- [ ] Basic keyword/intent research for relevant Ethiopian searches
      (validate which target queries actually match real offerings)
- [ ] Confirm domain choice; ensure it is purchased/owned by the business

## Phase 2 — Architecture & Config

- [x] Expand `site.ts` into a typed structure covering NAP (name/address/
      phone), opening hours, contact channels, and product data slots
      (placeholder values — tracked in `docs/PLACEHOLDERS.md`)
- [x] Decide page set: home, products, about, FAQ, contact (all built)
- [ ] Set up Vercel deployment pipeline (temporary domain first)
- [ ] Establish baseline: deploy skeleton, submit to Search Console once live

## Phase 3 — Website Implementation ✅ (complete)

Built with sample data tracked in `docs/PLACEHOLDERS.md`; all facts to be
replaced when verified information arrives.

- [x] Global layout: header/nav/footer with consistent NAP
- [x] Home page (hero, products preview, visit/contact info, CTA section)
- [x] Products pages (index + per-product detail pages from site config)
- [x] Contact page (call/visit/hours cards; WhatsApp + Maps slots ready)
- [x] About page (placeholder sections: story, mission, what we do, why us)
- [x] FAQ page (8 expandable questions with placeholder answers)
- [x] Mobile responsive hamburger menu with accessible toggle
- [x] Custom 404 page
- [ ] Design polish pass on real devices / feedback from owner

## Phase 4 — Technical SEO

- [x] Unique title + meta description per page (from site config)
- [x] Proper heading hierarchy across all pages
- [x] XML sitemap (`app/sitemap.ts`)
- [x] robots.txt (`app/robots.ts`)
- [x] Canonical URLs in metadata
- [x] LocalBusiness JSON-LD structured data
- [x] Open Graph / social metadata per page
- [ ] Image optimization (alt text on real photos when available)
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

1. **~~GBP website URL~~** — **RESOLVED:** mistakenly entered URL; `silicasupplier.com` is unrelated. Fix: update GBP website field once real domain is configured.
2. **Office relocation** — GBP still shows the old location; needs updating with verified new address.
3. **Domain ownership** — no custom domain confirmed yet. Must be registered
   under the business owner's account.
