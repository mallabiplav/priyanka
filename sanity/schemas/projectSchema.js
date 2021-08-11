export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 50,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 50),
      },
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
