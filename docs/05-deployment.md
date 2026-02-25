# 05 — Deployment

This guide covers deploying the Precious Render Next.js + Sanity project to production.

---

## Recommended Platform: Vercel

Vercel is the recommended host for Next.js projects — zero-config ISR, automatic edge caching, and seamless environment variables.

---

## Step 1 — Push to GitHub

```bash
git add .
git commit -m "feat: Sanity CMS integration"
git push origin main
```

---

## Step 2 — Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework: **Next.js** (auto-detected)
4. Click **"Deploy"** — the first deployment will fail (missing env vars). That's expected.

---

## Step 3 — Add Environment Variables

In Vercel Dashboard → Your Project → **Settings → Environment Variables**, add:

| Name | Value | Environments |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `abc12345` | Production, Preview, Development |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Production, Preview, Development |
| `SANITY_API_WRITE_TOKEN` | `sk...` | Production only (for seed script) |

Click **"Save"**, then **Redeploy**.

---

## Step 4 — Configure CORS for Production Domain

1. In Sanity Manage → **API → CORS Origins**
2. Add your Vercel domain: `https://your-site.vercel.app`
3. Add your custom domain if you have one: `https://preciousrender.com`
4. Both should have **"Allow credentials"** checked

---

## Step 5 — Configure Sanity Studio for Production

The embedded Studio at `/studio` needs your production URL added to the Studio's allowed origins.

In Sanity Manage → **API → CORS Origins**, the same URLs added in Step 4 cover this.

---

## ISR Revalidation

The page uses `export const revalidate = 60` — content updates in Sanity go live within **60 seconds** on production automatically.

To force an immediate revalidation, call the Next.js revalidation API:

```bash
curl -X POST https://your-site.vercel.app/api/revalidate?secret=YOUR_SECRET
```

(You would need to implement a `/api/revalidate` route with a secret if you want on-demand revalidation triggered from Sanity webhooks.)

---

## Sanity Webhooks for Instant Revalidation (Optional)

To revalidate the page immediately on every Sanity publish:

1. Create `app/api/revalidate/route.ts`:

```ts
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }
  revalidatePath("/");
  return NextResponse.json({ revalidated: true });
}
```

2. Add `REVALIDATE_SECRET` to Vercel env vars
3. In Sanity Manage → **API → Webhooks**, create a webhook:
   - URL: `https://your-site.vercel.app/api/revalidate?secret=YOUR_SECRET`
   - Trigger: On **publish** for all document types

---

## Custom Domain

In Vercel → **Settings → Domains**, add your custom domain and follow the DNS instructions. Sanity Studio embedded at `/studio` works on custom domains with no additional config.
