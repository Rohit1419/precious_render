# 03 — Editing Content in Sanity Studio

Access the Studio at **[http://localhost:3000/studio](http://localhost:3000/studio)** while the dev server is running.

---

## Navigating the Studio

The left sidebar lists all document types:

- **Site Configuration** — siteSettings, hero
- **Landing Page** — features, problem-solution, services, portfolioConfig, process, testimonials, pricing, faq
- **Portfolio** — portfolioProject (add as many as you like)
- **Blog** — blogPost (add, edit, publish articles)

---

## Editing a Singleton (e.g. Hero)

1. Click **Hero** in the sidebar
2. The single document opens immediately
3. Edit any field
4. Click **Publish** (top right) when done

Changes go live within **60 seconds** (ISR revalidate period).

---

## Field-by-Field Guide for Key Documents

### siteSettings

| Field | What it changes |
|---|---|
| Site Name | Logo alt text and footer copyright |
| Logo | Header and footer logo image |
| Tagline | Footer company description |
| Email / Phone / Address | Footer and contact cards |
| Social Links | Footer social icon hrefs |
| Nav Items | Navigation menu links |
| Footer Link Groups | Footer column links |

### hero

| Field | What it changes |
|---|---|
| Headline Prefix | First line of the main headline |
| Headline Highlight | Gradient-coloured middle word(s) |
| Headline Suffix | Last line of the headline |
| Static Lead Text | Subheadline paragraph |
| Rotating Words | Words that cycle with the WordRotate animation |
| Primary / Secondary CTA | Button labels and destinations |
| Background Video | The looping MP4 behind the hero |

### pricing → Plans

To add or reorder pricing plans:
1. Open **Pricing** in the sidebar
2. Scroll to the **Plans** array
3. Click **"Add item"** to add a new plan
4. Drag the handle ☰ to reorder
5. Toggle **Highlighted** to make a plan appear in the "featured" style

### faq → FAQs

- Click **"Add item"** to add a new Q&A
- Drag to reorder questions
- Click the trash icon to delete

---

## Adding a Portfolio Project

1. Go to **Portfolio → Portfolio Projects** in the sidebar
2. Click **"Create new"**
3. Fill in: Title, Category (still / classic / creative / onbody), Description
4. Upload a Thumbnail from your computer
5. Toggle **Is Video** if it's an animation, then paste the YouTube embed URL
6. Set **Order** (lower number = appears first)
7. Click **Publish**

---

## Writing a Blog Post

1. Go to **Blog → Blog Posts** → **"Create new"**
2. Fill Title, Category, Read Time, Excerpt
3. Upload a Cover Image **or** paste an external Cover Image URL
4. Set Published At date
5. Write the body in the Portable Text editor:
   - Use the toolbar for headings (H2, H3, H4), bold, italic, links
   - Drag an image block in for inline images
6. Click **Publish** — the post appears at `/blog/[slug]` automatically

---

## Drafts vs Published

- Sanity uses a draft system. Edits are saved as drafts instantly (auto-save)
- The site only shows **published** content
- Click **Publish** to make changes live
- Click **Unpublish** to revert to draft

---

## Reverting Changes

1. Click the **clock icon** (History) in the top bar of any document
2. Browse previous versions
3. Click **Restore** to roll back
