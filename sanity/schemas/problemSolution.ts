import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'problemSolution',
  title: 'Problem & Solution Section',
  type: 'document',
  groups: [
    { name: 'problem', title: 'Problem Section' },
    { name: 'solution', title: 'Solution Section' },
    { name: 'caseStudy', title: 'Case Study' },
    { name: 'comparison', title: 'Process Comparison' },
  ],
  fields: [
    // ── Problem Section ──────────────────────────────────────
    defineField({
      name: 'problemHeading',
      title: 'Problem Heading',
      type: 'string',
      group: 'problem',
      description: 'e.g. "Why Traditional Jewelry Inventory Is Holding You Back"',
    }),
    defineField({
      name: 'problemSubtitle',
      title: 'Problem Subtitle',
      type: 'text',
      rows: 2,
      group: 'problem',
    }),
    defineField({
      name: 'painPoints',
      title: 'Pain Points',
      type: 'array',
      group: 'problem',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'body', title: 'Body', type: 'text', rows: 3 }),
            defineField({ name: 'riskLabel', title: 'Risk Label', type: 'string', description: 'Short risk text at the bottom of the card' }),
          ],
          preview: { select: { title: 'title', subtitle: 'riskLabel' } },
        },
      ],
    }),
    // ── Solution Section ─────────────────────────────────────
    defineField({
      name: 'solutionBadge',
      title: 'Solution Badge Text',
      type: 'string',
      group: 'solution',
    }),
    defineField({
      name: 'solutionHeading',
      title: 'Solution Heading',
      type: 'string',
      group: 'solution',
    }),
    defineField({
      name: 'solutionBody',
      title: 'Solution Body Text',
      type: 'text',
      rows: 4,
      group: 'solution',
    }),
    defineField({
      name: 'compareBeforeImage',
      title: 'Compare Before Image (CAD)',
      type: 'image',
      options: { hotspot: true },
      group: 'solution',
    }),
    defineField({
      name: 'compareAfterImage',
      title: 'Compare After Image (Render)',
      type: 'image',
      options: { hotspot: true },
      group: 'solution',
    }),
    defineField({
      name: 'compareBeforeLabel',
      title: 'Compare Before Label',
      type: 'string',
      group: 'solution',
    }),
    defineField({
      name: 'compareAfterLabel',
      title: 'Compare After Label',
      type: 'string',
      group: 'solution',
    }),
    defineField({
      name: 'solutionCtaLabel',
      title: 'Solution CTA Label',
      type: 'string',
      group: 'solution',
    }),
    defineField({
      name: 'solutionCtaHref',
      title: 'Solution CTA Link',
      type: 'string',
      group: 'solution',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      group: 'solution',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
    // ── Case Study ───────────────────────────────────────────
    defineField({
      name: 'caseStudyLabel',
      title: 'Case Study Label',
      type: 'string',
      group: 'caseStudy',
    }),
    defineField({
      name: 'caseStudyHeading',
      title: 'Case Study Heading',
      type: 'string',
      group: 'caseStudy',
    }),
    defineField({
      name: 'caseStudyQuote',
      title: 'Case Study Quote',
      type: 'text',
      rows: 4,
      group: 'caseStudy',
    }),
    defineField({
      name: 'caseStudyName',
      title: 'Person Name',
      type: 'string',
      group: 'caseStudy',
    }),
    defineField({
      name: 'caseStudyBusiness',
      title: 'Business Name',
      type: 'string',
      group: 'caseStudy',
    }),
    defineField({
      name: 'workingCapitalFreed',
      title: 'Working Capital Freed',
      type: 'string',
      group: 'caseStudy',
      description: 'e.g. "₹45 lakhs"',
    }),
    defineField({
      name: 'caseStudyStats',
      title: 'Case Study Stats',
      type: 'array',
      group: 'caseStudy',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Stat Label', type: 'string', validation: (Rule) => Rule.required() }),
          ],
          preview: { select: { title: 'label' } },
        },
      ],
    }),
    // ── Process Comparison ───────────────────────────────────
    defineField({
      name: 'comparisonHeading',
      title: 'Comparison Heading',
      type: 'string',
      group: 'comparison',
    }),
    defineField({
      name: 'traditionalImage',
      title: 'Traditional Model Image',
      type: 'image',
      options: { hotspot: true },
      group: 'comparison',
    }),
    defineField({
      name: 'traditionalSteps',
      title: 'Traditional Model Steps',
      type: 'array',
      group: 'comparison',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'traditionalResult',
      title: 'Traditional Model Result Text',
      type: 'string',
      group: 'comparison',
    }),
    defineField({
      name: 'virtualImage',
      title: 'Virtual Model Image',
      type: 'image',
      options: { hotspot: true },
      group: 'comparison',
    }),
    defineField({
      name: 'virtualSteps',
      title: 'Virtual Model Steps',
      type: 'array',
      group: 'comparison',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'virtualResult',
      title: 'Virtual Model Result Text',
      type: 'string',
      group: 'comparison',
    }),
    defineField({
      name: 'closingCtaHeading',
      title: 'Closing CTA Heading',
      type: 'string',
      group: 'comparison',
    }),
    defineField({
      name: 'closingCtaBody',
      title: 'Closing CTA Body',
      type: 'text',
      rows: 2,
      group: 'comparison',
    }),
    defineField({
      name: 'closingCtaLabel',
      title: 'Closing CTA Button Label',
      type: 'string',
      group: 'comparison',
    }),
    defineField({
      name: 'closingCtaHref',
      title: 'Closing CTA Button Link',
      type: 'string',
      group: 'comparison',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Problem & Solution Section' }),
  },
})
