const placementTitles = {
  start: 'Left',
  center: 'Center',
  end: 'Right',
}

export default {
  name: 'portableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
      options: {
        hotspot: true,
      },
      preview: {
        select: {
          filename: 'asset.originalFilename',
          media: 'asset',
          placement: 'justifyContent',
          width: 'width',
          // fraction: 'fraction',
        },
        prepare: ({ filename, placement, width, media }) => {
          let subtitle = placement
            ? `Placement: ${placementTitles[placement].toLowerCase()}`
            : ''
          if (width) {
            if (subtitle) {
              subtitle += ' - '
            }
            subtitle += `Width: ${width}`
          }
          return {
            title: filename,
            subtitle,
            media,
          }
        },
      },
      fields: [
        {
          name: 'width',
          title: 'Width',
          type: 'string',
          validation: (Rule) =>
            Rule.custom((widthString: string) => {
              if (widthString.endsWith('%')) {
                const value = widthString.substring(0, widthString.length - 1)
                const numberValue = parseFloat(value)
                if (isNaN(numberValue)) {
                  return 'Percentage value has to be number'
                }
                if (numberValue < 0 || numberValue > 100) {
                  return 'Percentage value must be between 0 and 100'
                }
              } else if (widthString.endsWith('px')) {
                const value = widthString.substring(0, widthString.length - 2)
                const numberValue = parseFloat(value)

                if (isNaN(numberValue)) {
                  return 'Pixel value must be a number'
                }
                if (numberValue < 0) {
                  return 'Pixel value must be positive'
                }
              } else if (isNaN(Number(widthString))) {
                return 'Width must be pixel value, percentage or number value'
              }
              return true
            }),
        },
        {
          name: 'justifyContent',
          title: 'Placement',
          type: 'string',
          initialValue: 'start',
          options: {
            list: [
              { title: placementTitles['start'], value: 'start' },
              { title: placementTitles['center'], value: 'center' },
              { title: placementTitles['end'], value: 'end' },
            ],
          },
        },
      ],
    },
  ],
}
