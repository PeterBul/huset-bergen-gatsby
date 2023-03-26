export default {
  name: 'horizontalSection',
  title: 'Horizontal Section',
  type: 'object',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'horizontalSectionElement' }, { type: 'fractionedImage' }],
    },
  ],
}
