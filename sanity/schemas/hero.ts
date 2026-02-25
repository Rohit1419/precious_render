import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'headlinePrefix',
      title: 'Headline Line 1',
      type: 'string',
      description: 'e.g. "Premium Jewelry"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headlineSuffix',
      title: 'Headline Line 2',
      type: 'string',
      description: 'e.g. "Rendering Services for"',
    }),
    defineField({
      name: 'headlineHighlight',
      title: 'Headline Highlight Text (Aurora)',
      type: 'string',
      description: 'e.g. "Modern Jewelers" — displayed with animated aurora gradient',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'staticLeadText',
      title: 'Static Lead Text (before rotating words)',
      type: 'string',
      description: 'e.g. "We create beautiful"',
    }),
    defineField({
      name: 'rotatingWords',
      title: 'Rotating Words',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Words that rotate in the hero subtitle',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'primaryCtaLabel',
      title: 'Primary CTA Button Label',
      type: 'string',
    }),
    defineField({
      name: 'primaryCtaHref',
      title: 'Primary CTA Button Link',
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
      name: 'secondaryCtaLabel',
      title: 'Secondary CTA Button Label',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaHref',
      title: 'Secondary CTA Button Link',
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
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file',
      options: { accept: 'video/mp4,video/webm' },
      description: 'MP4 video for the hero background',
    }),
  ],
  preview: {
    select: { title: 'headlineHighlight' },
    prepare: ({ title }) => ({ title: `Hero: ${title}` }),
  },
})
