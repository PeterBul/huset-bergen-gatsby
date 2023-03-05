export default {
  name: "contextImage",
  title: "Image with description",
  type: "document",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
      // fields: [
      //   {
      //     name: "alt",
      //     type: "string",
      //     title: "Generic Alternative Text",
      //     options: { isHighLighted: true },
      //     description: `This is alternative text that will be used for image
      //       if it is not overruled by another alt text`,
      //   },
      // ],
    },
    {
      title: "Alt",
      name: "alt",
      type: "string",
      description: `Text used by for example screen readers 
    and people that for some reason not can see the image`,
    },
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Description",
      name: "desc",
      type: "string",
      description: "Text that will accompany image",
      rows: 20,
    },
    {
      title: "Link",
      name: "link",
      type: "reference",
      to: [{ type: "homepageLink" }],
    },
  ],
}
