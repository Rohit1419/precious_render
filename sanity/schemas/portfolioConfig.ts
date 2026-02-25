import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'portfolioConfig',
  title: 'Portfolio Section Config',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'e.g. "Our Portfolio"',
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'e.g. "Featured Projects"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Portfolio Categories / Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'Category ID (slug)',
              type: 'string',
              description: 'e.g. "still", "classic", "creative", "onbody" — used for filtering',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Tab Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Category Description',
              type: 'text',
              rows: 2,
            }),
          ],
          preview: { select: { title: 'label', subtitle: 'id' } },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Portfolio Section Config' }),
  },
})
