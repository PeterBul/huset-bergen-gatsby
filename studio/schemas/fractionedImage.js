export default {
  title: 'Fractioned Image',
  name: 'fractionedImage',
  type: 'object',
  fields: [
    {
      type: 'image',
      name: 'image',
      title: 'Image',
    },
    { type: 'fraction', name: 'fraction' },
  ],
  preview: {
    select: {
      title: 'image.asset.originalFilename',
      media: 'image',
      fraction: 'fraction',
    },
    prepare: ({ title, fraction, media }) => {
      return {
        title,
        subtitle: fraction && `Fraction: ${fraction}`,
        media,
      }
    },
  },
}
