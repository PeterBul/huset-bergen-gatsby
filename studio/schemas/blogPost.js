export default {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    { title: "Image", name: "image", type: "image" },
    { title: "Text", name: "text", type: "string" },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],
}
