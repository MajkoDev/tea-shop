import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface cartProduct {
  _id: string;
  name: string;
  price: number;
  currency: string;
  slug: string;
  imageUrl: string;
}

// fetch products based on category of tea
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

export default async function ProductRelated() {
  const products: cartProduct[] = await getProducts();

  return (
    <section className="bg-slate-50 w-full pl-4 py-6">
      <h1 className="text-2xl text-center md:text-start md:text-3xl font-medium pb-2 pl-4">
        Related Products
      </h1>
      <div className="relative flex flex-row gap-x-2 overflow-x-auto whitespace-nowrap py-3 pl-4">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/product/${product.slug}`}
            className="mb-3"
          >
            <div
              className="flex-none w-64 h-64 rounded-lg py-4 px-2 inline-block hover:scale-105 ease-in-out duration-300 scroll-smooth cursor-pointer"
              style={{
                background: "linear-gradient(to bottom, #ccc, #999)",
              }}
            ></div>
            <div className="w-64 px-1">
              <h1 className="text-sm text-center font-medium text-slate-700 overflow-hidden">
                {product.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
