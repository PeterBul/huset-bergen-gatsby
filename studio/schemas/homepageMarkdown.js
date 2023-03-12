export default {
  name: 'homepageMarkdown',
  title: 'Homepage Markdown',
  type: 'document',
  fields: [
    { title: 'Heading', name: 'heading', type: 'string' },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
