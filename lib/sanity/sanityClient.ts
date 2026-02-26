import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  perspective: 'published',
  stega: { enabled: false },
});

/**
 * Write client — only used server-side (seed scripts, webhooks).
 * Requires SANITY_API_WRITE_TOKEN in environment — NEVER expose to the browser.
 */
export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  stega: { enabled: false },
  token: process.env.SANITY_API_WRITE_TOKEN,
});