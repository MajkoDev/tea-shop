import { defineField, defineType } from "sanity";

export const origin = defineType({
  name: "origin",
  title: "Origin",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    { name: "description", title: "Description", type: "string" },
    { name: "image", title: "Image", type: "image" }
    ],
});
