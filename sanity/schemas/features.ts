import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'features',
  title: 'Features Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'e.g. "Why Choose Precious Render"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Button Link',
      type: 'string',
       options: {
        list: [
          { title: 'Services', value: '#services' },
          { title: 'Portfolio', value: '#portfolio' },
          { title: 'Pricing', value: '#pricing' },
        ],
        layout: 'dropdown', // 'dropdown' is the default layout for string lists
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Name (Lucide)',
              type: 'string',
              description: 'Lucide icon name e.g. "zap", "gem", "shopping-bag", "sparkles", "check-circle", "video"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'icon' },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Features Section' }),
  },
})
