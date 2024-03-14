import { defineField, defineType } from "sanity";

export const course = defineType({
  name: "course",
  title: "Tea Course",
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
    { name: "currency", title: "Currency", type: "string" },
    { name: "price", title: "Price", type: "number" },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    { name: "sku", title: "SKU", type: "string" },
  ],
});
