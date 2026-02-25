import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description / SEO Meta Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Main logo shown in header and footer',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 2,
      description: 'Short description shown in the footer below the logo',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp URL', type: 'url' }),
        defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
      ],
    }),
    defineField({
      name: 'navItems',
      title: 'Navigation Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'href', title: 'Link (href)', type: 'string', validation: (Rule) => Rule.required() }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        },
      ],
    }),
    defineField({
      name: 'footerLinkGroups',
      title: 'Footer Link Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Group Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'name', title: 'Label', type: 'string', validation: (Rule) => Rule.required() }),
                    defineField({ name: 'href', title: 'Href', type: 'string', validation: (Rule) => Rule.required() }),
                  ],
                  preview: { select: { title: 'name', subtitle: 'href' } },
                },
              ],
            }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'siteName' },
    prepare: ({ title }) => ({ title: title || 'Site Settings' }),
  },
})
