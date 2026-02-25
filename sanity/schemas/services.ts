import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Small badge above heading, e.g. "Our Services"',
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Name (Lucide)',
              type: 'string',
              description: 'e.g. "camera", "rotate-3d", "clapperboard", "user"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'features',
              title: 'Feature Bullets',
              type: 'array',
              of: [{ type: 'string' }],
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
    prepare: () => ({ title: 'Services Section' }),
  },
})
