import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
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
  ],
});
