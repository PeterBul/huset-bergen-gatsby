export default {
  name: 'verticalBlock',
  title: 'Vertical Block',
  type: 'document',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'verticalBlockElement' }, { type: 'image' }],
    },
  ],
}
