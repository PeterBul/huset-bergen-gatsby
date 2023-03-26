export default {
  title: 'Horizontal Section Element',
  name: 'horizontalSectionElement',
  type: 'object',
  fields: [
    {
      type: 'reference',
      name: 'element',
      to: [
        // { type: 'faq' },
        { type: 'homepageMarkdown' },
        //  { type: 'form' }
      ],
    },
    { type: 'fraction', name: 'fraction' },
  ],
  preview: {
    select: {
      title: 'element.title',
      heading: 'element.heading',
      fraction: 'fraction',
    },
    prepare: ({ title, fraction, heading }) => {
      return {
        title: title || heading,
        subtitle: fraction && `Fraction: ${fraction}`,
      }
    },
  },
}
