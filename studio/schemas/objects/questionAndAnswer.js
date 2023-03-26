export default {
  name: 'questionAndAnswer',
  title: 'Question And Answer',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      title: 'Answer',
      name: 'answer',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
