# Business Information Collection Checklist

Give this to the business owner. Every answer must be **verified fact** —
not guesses, not "probably", not copied from other websites.

Answers feed directly into `src/config/site.ts`, website content, and the
Google Business Profile update. Items marked **(blocks launch)** are required
before the site can go live; everything else can be added later.

---

## 1. Identity

| # | Question | Answer | Notes |
|---|----------|--------|-------|
| 1.1 | Official business name exactly as it should appear on the website AND Google Business Profile | ______ | Must match GBP exactly (local SEO consistency) |
| 1.2 | Is the business name changing with the relocation? | ______ | If yes, both old and new name |
| 1.3 | Amharic name, if any (for bilingual content decision) | ______ | |
| 1.4 | Short description of what the business does, in the owner's own words (2–3 sentences) | ______ | Will be refined together, but must start from owner's words |

## 2. Location (blocks launch)

The office has moved — this section is critical.

| # | Question | Answer | Notes |
|---|----------|--------|-------|
| 2.1 | Full new office address (street, landmark, sub-city/city, region) | ______ | As precise as possible |
| 2.2 | Has the Google Business Profile address been updated to the new location? | ______ | If not → needs updating before/at launch |
| 2.3 | Google Maps link or plus code of the NEW location | ______ | Used for directions button + LocalBusiness schema |
| 2.4 | Directions guidance by common transport (e.g., "near X, take taxi to Y") | ______ | Very useful for local customers |
| 2.5 | Does the business serve customers outside the city? Which areas realistically? | ______ | Only what actually happens — no aspirational claims |

## 3. Contact & Hours (blocks launch)

| # | Question | Answer | Notes |
|---|----------|--------|-------|
| 3.1 | Primary phone number(s) customers should call | ______ | Must match GBP phone |
| 3.2 | WhatsApp available? Same number or different? | ______ | Enables click-to-chat CTA |
| 3.3 | Email address (if any) | ______ | Preferably business-branded |
| 3.4 | Telegram/other channels actively used for business? | ______ | Ethiopia-specific: confirm which are real |
| 3.5 | Opening hours (per day, including lunch breaks and holidays) | ______ | Must match GBP hours |
| 3.6 | Preferred contact method for new customers | ______ | Drives primary call-to-action |

## 4. Products (blocks launch)

Only products genuinely sold at the office. For each product:

| # | Question | Answer | Notes |
|---|----------|--------|-------|
| 4.1 | Complete list of actual products sold | ______ | Owner's list, in their terms |
| 4.2 | For each product: how it's commonly described by customers | ______ | Real vocabulary = real search intent |
| 4.3 | Specifications known for certain (purity, grain size, packaging) | ______ | ONLY if owner can verify; leave blank otherwise |
| 4.4 | Who are the typical buyers (construction, manufacturing, labs…)? | ______ | Actual customer types only |
| 4.5 | Are prices fixed, negotiable, or quote-based? | ______ | Do NOT publish prices without explicit approval |
| 4.6 | Any certifications or lab test reports that exist and can be shown? | ______ | Only include if documented copies exist |

## 5. Photos & Media

| # | Question | Answer | Notes |
|---|----------|--------|-------|
| 5.1 | Photos of the office/shop exterior (for "find us" content) | ______ | Needed: yes/no |
| 5.2 | Photos of products | ______ | Real photos only — no stock images presented as own |
| 5.3 | Logo file (format/vector if available) | ______ | |
| 5.4 | Permission status for any people appearing in photos | ______ | |

## 6. Company Background

| # | Question | Answer | Notes |
|---|----------|--------|-------|
| 6.1 | Year founded / years operating (verified) | ______ | Blank if uncertain — never estimate publicly |
| 6.2 | Founder/owner story the owner approves sharing | ______ | Optional |
| 6.3 | Any existing website/social pages owned by the business? | ______ | Includes the silicasupplier.com question below |
| 6.4 | **Who created/controls `silicasupplier.com/DiribaGemechu`?** Does the business have an account on that platform? | ______ | Investigate before changing GBP URL |
| 6.5 | Languages customers use (Amharic, English, Afaan Oromo…) | ______ | Informs language strategy |

## 7. Accounts & Ownership (blocks launch)

Digital assets must belong to the business (see PROJECT_CONTEXT §8).

| # | Question | Answer | Notes |
|---|----------|--------|-------|
| 7.1 | Who owns/controls the Google Business Profile login? | ______ | Owner must retain control |
| 7.2 | Does the owner have a Google account to own Search Console/domain? | ______ | |
| 7.3 | Domain preference(s) and budget for registration | ______ | Registered under owner's account |
| 7.4 | Business email desired (e.g., info@domain)? | ______ | |

## 8. Preferences

| # | Question | Answer | Notes |
|---|----------|--------|-------|
| 8.1 | Anything the owner explicitly does NOT want published | ______ | Respect fully |
| 8.2 | Competitors the owner considers relevant | ______ | For reference/research only — never copy content |

---

## How to fill this in

- Fill answers directly into the tables, or record them in any format and
  transfer here.
- An honest "unknown" or blank answer is always acceptable and expected.
  Blanks simply mean: do not publish that item yet.
- Once completed, we transfer verified values into `src/config/site.ts` and
  begin Phase 2/3 implementation.
