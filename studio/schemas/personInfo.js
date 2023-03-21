import email from './email'

export default {
  name: 'personInfo',
  title: 'Person Info',
  type: 'document',
  fields: [
    { title: 'Image', name: 'image', type: 'image' },
    { title: 'Name', name: 'name', type: 'string' },
    {
      title: 'About Description',
      name: 'desc',
      type: 'string',
      description: 'Add a one line description used mainly on the about page',
    },
    { title: 'Job Title', name: 'jobTitle', type: 'string' },
    email,
  ],
}
