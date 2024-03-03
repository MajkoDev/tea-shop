import { type SchemaTypeDefinition } from "sanity";

import { product } from "./schemas/product-schema";
import { category } from "./schemas/category-schema";
import { origin } from "./schemas/origin-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, origin],
};
