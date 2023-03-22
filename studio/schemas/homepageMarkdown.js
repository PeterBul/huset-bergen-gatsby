export default {
  name: 'homepageMarkdown',
  title: 'Homepage Markdown',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    { title: 'Heading', name: 'heading', type: 'string' },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
