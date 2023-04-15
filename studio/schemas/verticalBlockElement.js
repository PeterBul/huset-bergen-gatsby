export default {
  title: 'Vertical Block Element',
  name: 'verticalBlockElement',
  type: 'object',
  fields: [
    {
      type: 'reference',
      name: 'element',
      to: [{ type: 'faq' }, { type: 'homepageMarkdown' }, { type: 'form' }],
    },
  ],
  preview: {
    select: {
      title: 'element.title',
      heading: 'element.heading',
      fraction: 'fraction',
    },
    prepare: ({ title, heading }) => {
      return {
        title: title || heading,
      }
    },
  },
}
