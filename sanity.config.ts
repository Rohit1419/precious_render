'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Precious Render Studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton documents
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Hero Section')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('Features Section')
              .child(S.document().schemaType('features').documentId('features')),
            S.listItem()
              .title('Problem & Solution Section')
              .child(S.document().schemaType('problemSolution').documentId('problemSolution')),
            S.listItem()
              .title('Services Section')
              .child(S.document().schemaType('services').documentId('services')),
            S.listItem()
              .title('Portfolio Config')
              .child(S.document().schemaType('portfolioConfig').documentId('portfolioConfig')),
            S.listItem()
              .title('Process Section')
              .child(S.document().schemaType('process').documentId('process')),
            S.listItem()
              .title('Testimonials Section')
              .child(S.document().schemaType('testimonials').documentId('testimonials')),
            S.listItem()
              .title('Pricing Section')
              .child(S.document().schemaType('pricing').documentId('pricing')),
            S.listItem()
              .title('FAQ Section')
              .child(S.document().schemaType('faq').documentId('faq')),
            S.divider(),
            // Multi-document types
            S.documentTypeListItem('portfolioProject').title('Portfolio Projects'),
            S.documentTypeListItem('blogPost').title('Blog Posts'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
