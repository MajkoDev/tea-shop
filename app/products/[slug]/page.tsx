import { Product } from "@/lib/types";
import { client } from "@/sanity/lib/client";

import ProductInfo from "@/components/product-info";
import ProductGallery from "@/components/product-gallery";
import ProductRelated from "@/components/product-related";

interface Props {
  params: {
    slug: string;
  };
}

const getProduct = async (slug: string): Promise<Product> => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
    _id, 
    name,
    sku, 
    description,
    price, 
    currency,
    "imageUrl": images[0].asset->url,
    "categoryName": category->name,
    "originName": origin->name
  }`;

  const data = await client.fetch(query);
  return data;
};

export default async function Page({ params }: Props) {
  const product = await getProduct(params.slug);
  // console.log(product);

  return (
    <div className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* Product gallery */}
          <ProductGallery product={product} />
          {/* Product info */}
          <ProductInfo product={product} />
        </div>
      </div>

      <ProductRelated />
    </div>
  );
}
