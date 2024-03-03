import { Product } from "@/lib/types";
import { client } from "@/sanity/lib/client";

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
    <div>
      <h1 className="text-center text-2xl font-light my-12 italics">
        {product.name}
      </h1>
      {/* ProductGallery */}
      {/* ProductInfo */}
      {/* ProductRelated */}
    </div>
  );
}
