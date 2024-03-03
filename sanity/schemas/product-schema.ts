import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
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
  ],
});
