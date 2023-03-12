export default {
  name: 'homepageCarousel',
  title: 'Homepage Carousel',
  type: 'document',
  fields: [
    { title: 'Text', name: 'text', type: 'string' },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'contextImage' }],
        },
      ],
    },
    {
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'homepageHero' }],
        },
      ],
    },
  ],
}
