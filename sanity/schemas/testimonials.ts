import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'e.g. "Client Testimonials"',
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
      rows: 2,
    }),
    defineField({
      name: 'footerLabel',
      title: 'Footer Label',
      type: 'string',
      description: 'Text shown below the testimonials, e.g. "Trusted by businesses of all sizes"',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Job Title & Company',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Avatar Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'imageUrl',
              title: 'Avatar URL (external, fallback)',
              type: 'url',
              description: 'External URL fallback if no image is uploaded (e.g. Unsplash)',
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'title', media: 'image' },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'companyLogos',
      title: 'Trusted Company Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Company Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Logo Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'invertOnDark',
              title: 'Invert Logo in Dark Mode',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: 'name', media: 'logo' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Testimonials Section' }),
  },
})
