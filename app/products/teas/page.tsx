import { client } from "@/sanity/lib/client";
import ProductCard from "@/components/product-card";

interface cartProduct {
  _id: string;
  name: string;
  price: number;
  currency: string;
  slug: string;
  imageUrl: string;
}

const getTeaProducts = async (): Promise<cartProduct[]> => {
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
  const products: cartProduct[] = await getTeaProducts();

  return (
    <div>
      <h1 className="text-3xl font-extralight my-12 text-center">
        Tea Products
      </h1>
      {/* ProductSort */}
      {/* ProductFilters */}

      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-col-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
