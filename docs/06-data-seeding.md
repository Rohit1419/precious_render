# 06 — Data Seeding

The seed script (`scripts/seed-sanity.ts`) auto-populates your Sanity dataset with the content that was previously hardcoded in the React components.

---

## What Gets Seeded

| Document | Content |
|---|---|
| `siteSettings` | Site name, logo path, tagline, email, phone, address, social URLs, nav items, footer link groups |
| `hero` | Headline parts, rotating words, CTA labels & hrefs |
| `features` | 6 feature cards with icons and descriptions |
| `problemSolution` | 3 pain points, 3 benefits, case study, 5 traditional + 5 virtual process steps |
| `services` | 6 service cards with icons and feature lists |
| `portfolioConfig` | 4 category tabs with descriptions |
| `process` | 4 timeline steps |
| `testimonials` | 5 testimonials with names, titles, quotes, avatar URLs + 5 company logos |
| `pricing` | 3 pricing plans with features lists and CTA buttons |
| `faq` | 11 FAQ items |
| `blogPost` | 3 sample blog posts |

---

## Running the Seed

```bash
# 1. Make sure .env.local is configured (see docs/01-sanity-setup.md)
# 2. Run:
bun seed
```

Or directly:

```bash
bun scripts/seed-sanity.ts
```

---

## Is It Safe to Re-Run?

**Yes.** The seed uses `client.createOrReplace()` with fixed `_id` values. Running it multiple times is idempotent — it replaces documents with the same content rather than creating duplicates.

---

## Customising the Seed

The seed script is plain TypeScript. To change the default content:

1. Open `scripts/seed-sanity.ts`
2. Find the document you want to change (search for the `_id`)
3. Edit the field values
4. Re-run `bun seed`

---

## Resetting to Defaults

If you want to reset a single document to its seeded values after editing it in the Studio:

```bash
bun seed   # re-runs createOrReplace for all documents
```

If you only want to reset one document, comment out the other `createOrReplace` calls in the script.

---

## Adding New Blog Posts via Seed

The seed creates 3 sample blog posts. To add more programmatically, add entries to the `blogSamples` array in the script:

```ts
const blogSamples = [
  // existing 3 posts ...
  {
    _id: "blog-4",
    title: "How to Photograph Jewelry with AI Renders",
    category: "technology",
    readTime: "7 min read",
    excerpt: "...",
    coverImageUrl: "https://...",
    author: "Precious Render Team",
  },
];
```

---

## Seeding Portfolio Projects

The seed script does **not** create portfolio projects by default (they contain local image paths that vary per environment). Add your projects manually in the Studio, or extend the seed script with entries pointing to externally hosted thumbnail URLs.

---

## Troubleshooting

| Error | Fix |
|---|---|
| `Error: project not found` | Wrong `NEXT_PUBLIC_SANITY_PROJECT_ID` |
| `Error: Insufficient permissions` | Write token missing or expired; create a new Editor token |
| `Cannot read properties of undefined` | Missing `.env.local` or env vars not loaded |
| Slug collision on blog posts | Two posts with overlapping slugs — rename one `_id` |
