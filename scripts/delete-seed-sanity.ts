/**
 * Sanity Clear-Seed Script
 * Clears all fields from documents created by seed-sanity.ts, without deleting
 * the documents themselves. Drafts are also cleared if they exist.
 *
 * Prerequisites:
 *   1. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local
 *   2. Run: bun scripts/delete-seed-sanity.ts
 *
 * This script is idempotent — safe to run even if fields are already empty.
 */

// Bun automatically loads .env.local — no dotenv needed.
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || projectId === "your_project_id_here") {
  console.error("❌  Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local first");
  process.exit(1);
}
if (!token || token === "your_write_token_here") {
  console.error("❌  Set SANITY_API_WRITE_TOKEN in .env.local first");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-01-01", useCdn: false });

/** Sanity internal fields that must never be unset. */
const INTERNAL_FIELDS = new Set(["_id", "_type", "_rev", "_createdAt", "_updatedAt"]);

/**
 * Clear all custom fields from a document (published + draft) without deleting it.
 */
async function clearDoc(id: string) {
  for (const docId of [id, `drafts.${id}`]) {
    const doc = await client.getDocument(docId).catch(() => null);
    if (!doc) continue;

    const fieldsToUnset = Object.keys(doc).filter((key) => !INTERNAL_FIELDS.has(key));
    if (fieldsToUnset.length === 0) continue;

    await client.patch(docId).unset(fieldsToUnset).commit();
  }
  console.log(`  ✓ ${id}`);
}

async function clearAll() {
  console.log("🧹  Starting Sanity seed field clearing...");
  console.log(`   Project: ${projectId}  |  Dataset: ${dataset}`);

  // ─── Singletons ──────────────────────────────────────────────────────────
  await clearDoc("siteSettings");
  await clearDoc("hero");
  await clearDoc("features");
  await clearDoc("problemSolution");
  await clearDoc("services");
  await clearDoc("portfolioConfig");
  await clearDoc("process");
  await clearDoc("testimonials");
  await clearDoc("pricing");
  await clearDoc("faq");

  // ─── Sample blog posts ───────────────────────────────────────────────────
  await clearDoc("blog-1");
  await clearDoc("blog-2");
  await clearDoc("blog-3");

  console.log("\n✅  All seeded fields cleared! Documents still exist. Open http://localhost:3000/studio to verify.");
}

clearAll().catch((err) => {
  console.error("❌  Clear failed:", err.message);
  process.exit(1);
});
