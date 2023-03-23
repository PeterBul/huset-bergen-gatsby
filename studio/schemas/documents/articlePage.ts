export default {
  name: 'articlePage',
  title: 'Article page',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'homepageHero' },
            { type: 'homepageMarkdown' },
            { type: 'horizontalSection' },
          ],
        },
      ],
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
    },
  ],
}
