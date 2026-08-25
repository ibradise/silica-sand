# Project Context: Silica Sand Business Website

This document is the source of truth for the project's goals, rules, and
constraints. It should be read at the start of every working session.

---

## 1. Project Background

This is a real website project for a silica-related business in Ethiopia.

The business operates a physical office where it sells silica-related products.
The business already has an established Google Business Profile and appears on
Google Maps.

The website is being built as part of an effort to improve the business's
online presence and, most importantly, generate more potential customers.

This is NOT a fictional portfolio project or a generic practice website.

The website must represent a real business, so factual accuracy is extremely
important.

## 2. Primary Business Goal

The main goal is:

Increase the number of relevant potential customers who discover the business
through Google Search and Google Maps and then contact or visit the business.

The website itself is not the final goal.

The desired funnel is:

Google Search → Business website / Google Business Profile → Customer learns
about the business and products → Customer trusts the business → Customer
contacts the business / requests information / visits → Potential customer →
Business revenue

The website should therefore prioritize:

1. SEO
2. Search intent
3. Useful and trustworthy content
4. Local discoverability
5. Conversion/contact opportunities
6. Performance
7. Accessibility
8. Good UX
9. Visual design

Visual design is important, but it is secondary to the business and SEO goals.

## 3. Main SEO Goal

The business should become more discoverable for relevant searches in
Ethiopia, particularly searches related to silica sand and silica suppliers.

Examples of target search intent include:

- silica sand Ethiopia
- silica sand supplier Ethiopia
- silica supplier Ethiopia
- silica sand in Ethiopia
- silica products Ethiopia
- silica supplier Addis Ababa
- other relevant commercial searches discovered through proper keyword research

These are examples only. Do NOT assume that every keyword is relevant.

Keyword research must be based on actual customer intent and the
products/services the business genuinely provides.

Never create pages simply to insert keywords.

## 4. SEO Philosophy

SEO must be legitimate and user-focused.

Do NOT use:

- keyword stuffing
- hidden text
- doorway pages
- automatically generated low-value pages
- fake reviews
- fake business information
- fake certifications
- fake product specifications
- misleading claims
- copied competitor content
- spammy backlinks
- irrelevant keyword pages

The goal is to build a website that deserves to rank because it provides
useful information about a real business.

Important SEO areas include:

- Search intent
- Page titles
- Meta descriptions
- Proper heading hierarchy
- Semantic HTML
- Useful content
- Internal linking
- Descriptive URLs
- Canonical URLs
- XML sitemap
- robots.txt
- Structured data where appropriate
- Image optimization
- Mobile performance
- Core Web Vitals
- Accessibility
- Crawlability
- Indexability
- Local SEO
- Google Business Profile integration
- Search Console
- Legitimate authority/backlinks

## 5. Google Business Profile

The business already has a Google Business Profile.

The profile currently has:

- Business name
- Location
- Phone number
- Photos
- Opening hours
- Reviews

However, the physical office location has changed and the profile needs to be
updated accordingly.

The website should support the Google Business Profile rather than operate
independently.

The website and Business Profile should have consistent information such as:

- Official business name
- Address
- Phone number
- Opening hours
- Website
- Business description

Do not create a second Google Business Profile without a legitimate reason.

## 6. Existing Website Situation

The existing Google Business Profile currently contains this website URL:

https://www.silicasupplier.com/DiribaGemechu

This URL is unusual because:

- `silicasupplier.com` is the domain
- `/DiribaGemechu` is a path/page on that domain

The page currently displays content associated with:
Jinsha Precipitated Silica Manufacturing Co., Ltd.

The relationship between this website and the Ethiopian business has NOT yet
been established.

Therefore:

- Do not assume the Ethiopian business owns this domain.
- Do not assume the link is incorrect.
- Do not remove or replace it without understanding the relationship.
- Treat this as an unresolved business requirement that needs investigation.

## 7. New Website

We are building a new website specifically for the Ethiopian business.

The website will eventually use a custom domain. During development, it may
temporarily use the Vercel-provided domain.

The final architecture is expected to be:

Custom domain → Vercel → Next.js website

The domain should ultimately be owned/controlled by the business owner, not
the developer personally.

The developer can manage the website while the business retains ownership of
its digital assets.

## 8. Ownership and Accounts

Important business assets should belong to the business. This includes:

- Domain
- Google Business Profile
- Google Search Console
- Analytics accounts where applicable
- Business email
- Website hosting/project access where practical

The developer should receive appropriate access rather than becoming the
permanent owner of the business's digital assets.

## 9. Current Technical Stack

- Next.js (App Router)
- React
- TypeScript
- ESLint
- Vercel for hosting/deployment

Project structure:

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
└── config/
    └── site.ts
```

Also present: `package.json`, `package-lock.json`, `tsconfig.json`,
`next.config.ts`, `eslint.config.mjs`, `.gitignore`.

`src/config/site.ts` acts as the centralized source of truth for
site/business metadata.

## 10. Development Philosophy

Keep the project:

- Simple
- Maintainable
- Fast
- Production-ready
- SEO-friendly
- Accessible
- Easy to understand

Avoid unnecessary dependencies. Do not introduce a library merely because it
is popular. Before installing a dependency, determine whether it is actually
necessary.

Prefer native Next.js/React functionality when appropriate.

Do not over-engineer a small business website.

## 11. Content Accuracy Rule

This is one of the most important rules.

The developer does not yet know all verified details about the business.

Therefore, NEVER invent:

- Products
- Product names
- Product specifications
- Chemical composition
- Certifications
- Production capacity
- Years of experience
- Industries served
- Export claims
- Geographic coverage
- Customer names
- Testimonials
- Prices
- Addresses
- Phone numbers
- Emails
- Company history

If information is unknown, mark it as information that needs to be collected
from the business owner. Do not fill missing information with
plausible-looking content.

## 12. SEO Content Strategy

The website should eventually contain genuinely useful content related to what
the company actually sells.

Potential content areas may include:

- Company/about information
- Actual products
- Product details
- Product applications
- Industries served
- Location
- Contact information
- Frequently asked customer questions
- Useful educational information about silica

However, every page must have a real purpose. Do not create pages solely for
keyword variations unless there is a legitimate unique user intent that
justifies them.

## 13. Local SEO

The business is located in Ethiopia and has a physical office.

Local SEO is therefore important. The website should clearly communicate:

- Where the business is located
- What it sells
- How customers can contact it
- How customers can reach the office
- Business hours
- Relevant service/product area

The website should support Google Maps/Google Business Profile rather than
trying to replace it.

## 14. Performance

Performance is important because search engines care about page experience,
many users may have slower connections, and mobile users are important.

Prioritize:

- Optimized images
- Appropriate image formats
- Minimal JavaScript
- Server-side rendering/static generation where appropriate
- Efficient fonts
- No unnecessary client components
- Minimal dependencies

Do not sacrifice performance for unnecessary animations.

## 15. Accessibility

Build the website with proper accessibility:

- Semantic HTML
- Correct heading hierarchy
- Accessible navigation
- Alt text for meaningful images
- Keyboard accessibility
- Proper labels
- Sufficient contrast
- Appropriate buttons/links

Accessibility is part of building a professional website.

## 16. Architecture Rule

Before implementing major features:

1. Understand the requirement.
2. Inspect the existing code.
3. Determine whether existing architecture should be reused.
4. Make the smallest appropriate change.
5. Test the result.
6. Explain what changed.

Do not rewrite existing code unnecessarily. Do not modify unrelated files.

## 17. Working Style

The coding agent behaves like a senior engineer working inside an existing
project. For every task:

1. Inspect the repository first.
2. Understand the current implementation.
3. Plan the change.
4. Implement only the requested scope.
5. Run appropriate checks/tests/build.
6. Report what changed.
7. Report any assumptions.
8. Report any unresolved issues.

Do not silently make large architectural decisions.

If a requirement is ambiguous and the decision could materially affect SEO,
architecture, security, or business accuracy, stop and explain the ambiguity
before implementing.

## 18. No Blind SEO Claims

Never claim that a change will guarantee Google ranking.

SEO improvements should be described in terms such as:

- improves crawlability
- improves relevance
- improves discoverability
- provides better search intent coverage
- improves technical SEO
- improves local SEO signals

The target is to compete for relevant searches, not to promise #1 rankings.

## 19. Measurement

The project should eventually use measurable SEO/business metrics.

Google Search Console:

- Impressions
- Clicks
- CTR
- Average position
- Search queries
- Indexed pages

Business outcomes:

- Phone calls
- Contact clicks
- WhatsApp clicks if used
- Direction requests
- Website visits
- Customer inquiries

Before major SEO changes, establish a baseline whenever possible.

## 20. Long-Term Objective

Research → Architecture → Accurate content collection → Website implementation
→ Technical SEO → Google integration → Launch → Indexing → Measurement →
Optimization → Business growth

The ultimate success metric is not how beautiful the code is. The ultimate
success is:

More relevant people discover the business → more inquiries → more customers →
more revenue for the business.

The developer is also using this project as an opportunity to learn
professional software development, SEO, deployment, and working with a real
client. Implementation should therefore be professional but understandable.
