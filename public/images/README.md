# public/images

Temporary placeholder images live here. Every file in this folder is a
stand-in and must be replaced before launch.

## Convention

- Image files live here; their paths are referenced from
  `src/config/site.ts` (for content images: logo, product photos, office
  photo) so swapping in real photos means dropping a file here and updating
  one line of config.
- Decorative layout images may be imported directly next to the component
  that uses them instead.
- Use `next/image` for all rendered images (automatic optimization,
  responsive sizes, lazy loading).

## Replacement workflow

1. Get the real photo from the business owner.
2. Name it descriptively, e.g. `office-exterior.jpg`, `logo.png`.
3. Optimize before committing (compress, sensible dimensions, WebP/AVIF via
   next/image at runtime — just avoid multi-MB originals).
4. Update the path in `site.ts`, delete the placeholder file.
5. Tick the item off in `docs/PLACEHOLDERS.md`.

## Current placeholders

- `placeholder.svg` — generic labeled stand-in for any image slot.
