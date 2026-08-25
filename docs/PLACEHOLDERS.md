# Placeholder Tracking

This project temporarily uses placeholder ("dummy") data because verified
business information has not been collected yet
(see `docs/BUSINESS_INFO_CHECKLIST.md`).

## Rule

Per `docs/PROJECT_CONTEXT.md` §11 (Content Accuracy Rule): the site must
NEVER go live with any item from this list still unfilled. Every value below
is deliberately fake-looking (`[Square Brackets]`) so it cannot be mistaken
for real information.

## Data placeholders

| Location | Field | Placeholder value |
|----------|-------|-------------------|
| `src/config/site.ts` | name | `[Business Name]` |
| `src/config/site.ts` | legalName | `[Business Legal Name]` |
| `src/config/site.ts` | description | `[Short business description]` |
| `src/config/site.ts` | contact.phone | `[Phone Number]` |
| `src/config/site.ts` | contact.whatsapp | `null` |
| `src/config/site.ts` | contact.email | `null` |
| `src/config/site.ts` | address.* | `[Street Address]` etc. |
| `src/config/site.ts` | address.mapsLink | `null` |
| `src/config/site.ts` | openingHours | `[Days]` / `[e.g. 8:30 - 17:30]` |

### Sample data that looks real but is NOT verified

| Location | Item | Sample value | Must be |
|----------|------|--------------|---------|
| `src/config/site.ts` | `description` | generic supplier sentence | owner-approved wording |
| `src/config/site.ts` | `contact.phone` | `[+251 9XX XXX XXX]` (fake format) | real phone from owner |
| `src/config/site.ts` | `products[]` | Silica Sand, Silica Powder, Silica Quartz | actual products sold by the business |
| `src/app/page.tsx`, product pages, etc. | body copy | structural/generic text only | reviewed against checklist answers |

## Image placeholders

All files in `public/images/` are temporary stand-ins. See
`public/images/README.md` for the replacement workflow. Real photos must come
from the business owner (or properly licensed stock for decorative use only —
never presented as the business's own facility or products).

## Pre-launch checklist

Before deploying to the custom domain:

1. Every row above replaced with verified data from the owner
2. Every file in `public/images/` replaced with real/licensed assets
3. Page copy reviewed against `docs/BUSINESS_INFO_CHECKLIST.md` answers
4. Final accuracy pass against the Content Accuracy Rule
