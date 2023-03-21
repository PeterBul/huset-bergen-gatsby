export default {
  name: 'peopleInfo',
  title: 'People Info',
  type: 'document',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'Heading', name: 'heading', type: 'string' },
    { title: 'Kicker', name: 'kicker', type: 'string' },
    { title: 'Subhead', name: 'subhead', type: 'string' },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'personInfo' }],
        },
      ],
    },
  ],
}
