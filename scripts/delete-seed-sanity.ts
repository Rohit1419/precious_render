/**
 * Sanity Delete-Seed Script
 * Removes all documents created by seed-sanity.ts, including their drafts.
 *
 * Prerequisites:
 *   1. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local
 *   2. Run: bun scripts/delete-seed-sanity.ts
 *
 * This script is idempotent — safe to run even if documents are already deleted.
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

/**
 * Delete the published document AND its draft, ignoring 404s.
 */
async function deleteDoc(id: string) {
  await client.delete(id).catch(() => null);
  await client.delete(`drafts.${id}`).catch(() => null);
  console.log(`  ✓ ${id}`);
}

async function deleteAll() {
  console.log("🗑️   Starting Sanity seed deletion...");
  console.log(`   Project: ${projectId}  |  Dataset: ${dataset}`);

  // ─── Singletons ──────────────────────────────────────────────────────────
  await deleteDoc("siteSettings");
  await deleteDoc("hero");
  await deleteDoc("features");
  await deleteDoc("problemSolution");
  await deleteDoc("services");
  await deleteDoc("portfolioConfig");
  await deleteDoc("process");
  await deleteDoc("testimonials");
  await deleteDoc("pricing");
  await deleteDoc("faq");

  // ─── Sample blog posts ───────────────────────────────────────────────────
  await deleteDoc("blog-1");
  await deleteDoc("blog-2");
  await deleteDoc("blog-3");

  console.log("\n✅  All seeded documents deleted! Open http://localhost:3000/studio to verify.");
}

deleteAll().catch((err) => {
  console.error("❌  Delete failed:", err.message);
  process.exit(1);
});
