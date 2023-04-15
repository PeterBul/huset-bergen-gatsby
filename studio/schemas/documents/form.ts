export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'Heading', name: 'heading', type: 'string' },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'categoryElement' }],
    },
    { name: 'namePlaceholder', title: 'Name Placeholder', type: 'string' },
    {
      name: 'addressPlaceholder',
      title: 'Address Placeholder',
      type: 'string',
    },
    {
      name: 'postCodePlaceholder',
      title: 'Post Code Placeholder',
      type: 'string',
    },
    { name: 'cityPlaceholder', title: 'City Placeholder', type: 'string' },
    { name: 'phonePlaceholder', title: 'Phone Placeholder', type: 'string' },
    { name: 'emailPlaceholder', title: 'Email Placeholder', type: 'string' },
    {
      name: 'messagePlaceholder',
      title: 'Message Placeholder',
      type: 'string',
    },
  ],
}
