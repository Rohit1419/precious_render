# 04 — Images & Media

This guide covers how to handle images and videos in the Sanity CMS for Precious Render.

---

## Sanity Image CDN

When you upload an image through the Studio, it is stored on Sanity's global CDN at `cdn.sanity.io`. The Next.js `<Image>` component is already configured to serve images from this domain (`next.config.ts` → `remotePatterns`).

### Best Upload Sizes

| Use case | Recommended size |
|---|---|
| Logo | 640 × 240 px PNG (transparent background) |
| Portfolio thumbnail | 800 × 800 px JPEG, square crop |
| Blog cover image | 1400 × 780 px JPEG (16:9) |
| Testimonial avatar | 256 × 256 px JPEG |
| Company logo | 400 × 160 px PNG (transparent background) |

---

## Uploading Images in the Studio

1. Click any **Image** field in the Studio
2. Click **"Upload"** or drag & drop
3. The image is uploaded instantly to `cdn.sanity.io`
4. Optionally set a **hotspot** (click the focal point) so the image crops correctly at all sizes

---

## External Image URLs (Fallback)

Several schemas accept both an uploaded image **and** an external URL field:

- `blogPost` → `coverImage` (Sanity) + `coverImageUrl` (external fallback)
- `testimonials.testimonials[].image` (Sanity) + `imageUrl` (external URL)
- `testimonials.companyLogos[].logo` (Sanity) + `logoUrl` (external URL)

The GROQ queries coalesce them: `image.asset->url` is used first, falling back to the external URL field. This lets you use Unsplash or CDN URLs during development without uploading files.

---

## Portfolio Project Thumbnails

Portfolio project thumbnails must be uploaded to Sanity:

```
portfolioProject.thumbnail  →  image asset
```

The frontend resolves this with `@sanity/image-url`:

```ts
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);
builder.image(project.thumbnail).width(800).url()
```

The GROQ query already includes `.thumbnailUrl` (resolved URL) in the fetch.

---

## Background Video (Hero)

The hero background video is stored as a **file** asset in Sanity:

1. In Studio → Hero → **Background Video**
2. Click **"Upload"** and select an MP4 file
3. The asset is stored on `cdn.sanity.io/files/...`

The GROQ query returns `backgroundVideo.asset->url` as `videoSrc`.

> 💡 Keep hero videos under 10 MB for fast loading. Use H.264 MP4 at 720p.

---

## Compare Slider Images (Problem-Solution)

The before/after compare slider images (`compareBeforeImage`, `compareAfterImage`) are external URL fields in the `problemSolution` schema. Upload the images to your `/public` folder and reference them as `/before.png` and `/after.png`, or use Sanity image assets and update the GROQ query to resolve their URLs.

---

## Company Logos (Testimonials)

Company logos on the testimonials section are stored as `logo` image assets per logo entry. They support an `invertOnDark` toggle for dark-mode inversion.

1. In Studio → Testimonials → **Company Logos** → add or edit a logo entry
2. Upload the logo PNG
3. Toggle **Invert on Dark Mode** if the logo has dark text/lines that need to be white on dark backgrounds

---

## Image Optimization

All images served through Next.js `<Image>` are automatically:
- Resized via `sizes` prop
- Lazy-loaded by default
- Served in WebP format where supported
- Cached at the CDN edge

No additional configuration needed for Sanity CDN images.
