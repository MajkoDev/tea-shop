import { defineField, defineType } from "sanity";

export const accessory = defineType({
  name: "accessory",
  title: "Tea Accessory",
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
      of: [{ type: "image" }] 
    },
    { name: "sku", title: "SKU", type: "string" },
 
    
  ],
});
