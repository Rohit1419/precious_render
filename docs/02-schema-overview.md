# 02 — Schema Overview

The Precious Render Sanity project uses **12 schema types**: 9 singleton documents (one of each) and 3 multi-document types.

---

## Singleton Documents

These documents exist exactly once and control specific page sections.

| Document ID | Schema Type | Controls |
|---|---|---|
| `siteSettings` | `siteSettings` | Header logo, nav links, footer links, social URLs, contact details |
| `hero` | `hero` | Hero headline, rotating words, CTA buttons, background video |
| `features` | `features` | "Why Precious Render?" section cards |
| `problemSolution` | `problemSolution` | Pain points, benefits, case study, process comparison |
| `services` | `services` | Services grid section |
| `portfolioConfig` | `portfolioConfig` | Portfolio tab categories and section header |
| `process` | `process` | "How It Works" timeline steps |
| `testimonials` | `testimonials` | Client quote carousel and company logos |
| `pricing` | `pricing` | Pricing plans and footer CTA |
| `faq` | `faq` | FAQ accordion items |

In the Studio sidebar these appear as individual links — click any to edit.

---

## Multi-Document Types

These can have many entries.

### `portfolioProject`

Represents one portfolio work item shown in the tabbed grid.

| Field | Type | Notes |
|---|---|---|
| `title` | string | Display name of the piece |
| `category` | string (radio) | One of: `still`, `classic`, `creative`, `onbody` |
| `description` | text | Short caption |
| `thumbnail` | image | Uploaded to Sanity CDN |
| `isVideo` | boolean | Toggles video URL field |
| `videoUrl` | url | YouTube embed URL (visible only when `isVideo` is true) |
| `order` | number | Controls display order |

### `blogPost`

Full blog articles with Portable Text body.

| Field | Type | Notes |
|---|---|---|
| `title` | string | Article headline |
| `slug` | slug | Auto-generated from title — used in `/blog/[slug]` route |
| `category` | string (dropdown) | guide, workflow, case-study, industry, strategy, technology, analysis |
| `readTime` | string | e.g. `"8 min read"` |
| `excerpt` | text | Short summary shown on blog cards |
| `coverImage` | image | Optional — upload to Sanity CDN |
| `coverImageUrl` | url | Fallback external URL (used if no uploaded image) |
| `author` | string | Author display name |
| `publishedAt` | datetime | Publication date |
| `body` | Portable Text | Full rich-text content with h2/h3/h4, blockquotes, inline images, links |

---

## Schema File Locations

All schema files live in `sanity/schemas/`:

```
sanity/schemas/
  index.ts             ← exports schemaTypes[] used by sanity.config.ts
  siteSettings.ts
  hero.ts
  features.ts
  problemSolution.ts
  services.ts
  portfolioConfig.ts
  portfolioProject.ts
  process.ts
  testimonials.ts
  pricing.ts
  faq.ts
  blogPost.ts
```

---

## Data Flow

```
Sanity CMS
    │
    │  GROQ queries (lib/sanity/queries.ts)
    ▼
sanityFetch functions (lib/sanity/sanityFetch.ts)
    │
    │  getAllLandingPageData() ← called once per page render
    ▼
app/page.tsx  (async server component, revalidate: 60s)
    │
    │  data props passed to each component
    ▼
components/  (each accepts data? prop, falls back to hardcoded defaults)
```
