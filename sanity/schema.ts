import { type SchemaTypeDefinition } from "sanity";

import { product } from "./schemas/product-schema";
import { category } from "./schemas/category-schema";
import { origin } from "./schemas/origin-schema";
import { accessory } from "./schemas/accessory-schema";
import { course } from "./schemas/course-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, origin, accessory, course],
};
