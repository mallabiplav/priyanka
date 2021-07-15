export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
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
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your blog.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
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
