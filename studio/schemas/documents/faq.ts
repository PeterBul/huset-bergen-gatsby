export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      title: 'Questions and Answers',
      name: 'questionsAndAnswers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'questionAndAnswer' }] }],
    },
    { type: 'fraction', name: 'fraction' },
  ],
}
