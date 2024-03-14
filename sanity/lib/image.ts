import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";
import { client } from "./client";
import ImageUrlBuilder from "@sanity/image-url";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
