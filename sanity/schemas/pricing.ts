import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Pricing Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'e.g. "Pricing Plans"',
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
      name: 'footerText',
      title: 'Footer Text (below plans)',
      type: 'string',
    }),
    defineField({
      name: 'footerCtaLabel',
      title: 'Footer CTA Label',
      type: 'string',
    }),
    defineField({
      name: 'footerCtaHref',
      title: 'Footer CTA Link',
      type: 'string',
    }),
    defineField({
      name: 'plans',
      title: 'Pricing Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Plan Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Plan Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'e.g. "₹4,499" or "₹49,999+"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'priceSuffix',
              title: 'Price Suffix',
              type: 'string',
              description: 'e.g. "/ project" or "/ SKU"',
            }),
            defineField({
              name: 'highlighted',
              title: 'Highlighted (Featured Plan)',
              type: 'boolean',
              description: 'Mark as the recommended / most popular plan',
              initialValue: false,
            }),
            defineField({
              name: 'features',
              title: 'Features List',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (Rule) => Rule.min(1),
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
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'price' },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Pricing Section' }),
  },
})
