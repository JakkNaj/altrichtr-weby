# Altrichter Goalie Academy — design suggestion

Static Astro homepage concept for a client proposal. It is intentionally not a booking system: event buttons and the contact form are visual placeholders for the future registration flow.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. Use `npm run build` for a type check and production build.

## Content model

- `src/content/events/*.md` — event cards; `source: source` marks facts taken from `golmansketreninky-obsah.json`, while `source: demo` marks proposal-only schedule records.
- `src/data/site.ts` — shared site settings, navigation, training types, preparation cards, FAQ, gallery metadata, and currently a short academy profile.

For Decap CMS, migrate the arrays in `src/data/site.ts` into separate Markdown/JSON collections (`siteSettings`, `trainingTypes`, `coaches`, `galleryItems`, `faq`) beside the existing `events` collection. The Astro components should then use `getCollection()` for each collection; their displayed fields already match that structure. A future registration form should post to a dedicated service or CMS workflow rather than extending this static demo.
