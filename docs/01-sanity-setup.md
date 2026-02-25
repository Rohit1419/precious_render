# 01 — Sanity Setup Guide

This guide walks you through setting up Sanity CMS from scratch for the Precious Render project.

---

## Prerequisites

- Node.js 18+ and **Bun** installed
- A free account at [sanity.io](https://sanity.io)

---

## Step 1 — Create a Sanity Project

1. Visit [sanity.io/manage](https://sanity.io/manage)
2. Click **"New project"**
3. Give it a name (e.g. `Precious Render`)
4. Select **"Production"** as the dataset name (this is already the default)
5. Click **"Create project"**
6. Copy the **Project ID** shown on the dashboard (looks like `abc12345`)

---

## Step 2 — Configure Environment Variables

Open `.env.local` in the project root and fill in your values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12345        # your project ID from step 1
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_WRITE_TOKEN=your_token_here        # see Step 3
```

> ⚠️ Never commit `.env.local` to git — it's already in `.gitignore`.

---

## Step 3 — Create a Write API Token

This token is only needed to run the seed script (one time).

1. In Sanity Manage, go to **API → Tokens**
2. Click **"Add API token"**
3. Name: `Seed Script`
4. Permissions: **Editor** (allows create/replace)
5. Copy the token and paste it as `SANITY_API_WRITE_TOKEN` in `.env.local`

---

## Step 4 — Configure CORS for Localhost

1. In Sanity Manage, go to **API → CORS Origins**
2. Click **"Add CORS origin"**
3. Add `http://localhost:3000` with **"Allow credentials"** checked
4. (For production) also add your live domain

---

## Step 5 — Start the Development Server

```bash
bun dev
```

---

## Step 6 — Access Sanity Studio

Open [http://localhost:3000/studio](http://localhost:3000/studio) in your browser.

You will be prompted to sign in with your Sanity account. After signing in, the full embedded Studio is available.

---

## Step 7 — Seed Initial Content

Populate all documents with the existing hardcoded content:

```bash
bun seed
```

This runs `scripts/seed-sanity.ts` and creates one document per schema type
using the default content that is currently hardcoded in the components.

Expected output:
```
🌱  Starting Sanity seed...
   Project: abc12345  |  Dataset: production
  ✓ siteSettings
  ✓ hero
  ✓ features
  ✓ problemSolution
  ✓ services
  ✓ portfolioConfig
  ✓ process
  ✓ testimonials
  ✓ pricing
  ✓ faq
  ✓ blogPosts (3 samples)

✅  Seed complete! Open http://localhost:3000/studio to verify.
```

After seeding, refresh the Studio and you should see all documents populated.

---

## Troubleshooting

| Error | Fix |
|---|---|
| `403 Forbidden` on fetch | Wrong project ID or dataset name |
| `401 Unauthorized` on seed | Wrong or expired write token |
| Content not updating | Wait 60 seconds (ISR revalidate period) or restart dev server |
| Studio not loading | Check CORS origin includes `http://localhost:3000` |
