export default {
  name: 'horizontalSection',
  title: 'Horizontal Section',
  type: 'document',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'homepageMarkdown' }],
        },
        { type: 'image', title: 'Image', options: { hotspot: true } },
      ],
    },
  ],
}
