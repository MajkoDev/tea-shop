import Link from "next/link";
import Image from "next/image";

import { Product } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

interface cartProduct {
  _id: string;
  name: string;
  price: number;
  currency: string;
  slug: string;
  imageUrl: string;
}

const getProducts = async (): Promise<cartProduct[]> => {
  const query = `*[_type == "product"]{
    _id, 
    name, 
    price, 
    currency,
    "slug": slug.current,
    "imageUrl": images[0].asset->url,
  }`;
  const data = await client.fetch(query);
  return data;
};

export default async function Page() {
  const products: cartProduct[] = await getProducts();

  return (
    <div>
      <h1 className="text-center text-2xl font-light my-12 italics">
        Products
      </h1>
      {/* ProductSort */}
      {/* ProductFilters */}

      {/* ProductGrid */}
      <div className="my-6 flex flex-col gap-2">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/products/${product.slug}`}
            className="text-md my-2"
          >
            <div className="h-44 w-44">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={155}
                height={180}
                className="h-full w-full object-cover object-center"
  
              />
            </div>

            <h3 className="mt-4 font-medium">{product.name}</h3>
          </Link>
        ))}
      </div>
      {/* ProductCard */}
    </div>
  );
}
