export default {
  name: 'departmentPage',
  title: 'Department Page',
  type: 'document',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'Description', name: 'description', type: 'string' },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'peopleInfo' }, { type: 'homepageMarkdown' }],
        },
      ],
    },
  ],
}
