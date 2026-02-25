import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Still Images', value: 'still' },
          { title: 'Classic Animations', value: 'classic' },
          { title: 'Creative Animations', value: 'creative' },
          { title: 'On-Body Visuals', value: 'onbody' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Main image shown in the portfolio grid',
    }),
    defineField({
      name: 'isVideo',
      title: 'Is this a video item?',
      type: 'boolean',
      description: 'When true, a play button is shown on hover and videoUrl is used',
      initialValue: false,
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (YouTube embed or direct)',
      type: 'url',
      description: 'Only used when "Is Video" is enabled. Use YouTube embed URL format: https://www.youtube.com/embed/VIDEO_ID',
      hidden: ({ document }) => !document?.isVideo,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within their category',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'thumbnail' },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle: subtitle || 'No category',
      media,
    }),
  },
})
