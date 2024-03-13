import { client } from "@/sanity/lib/client";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";

interface cartProduct {
  _id: string;
  name: string;
  price: number;
  currency: string;
  slug: string;
  imageUrl: string;
}


// Fetching Tea Products
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
  console.log(products);

  return (
    <div>
      <div className="w-full h-2/3 bg-slate-200 m-3 rounded-xl flex flex-col justify-center items-center">
        <div className="max-w-md text-center flex flex-col items-center">
          <h1 className="text-3xl font-extralight my-12 text-center">
            Tea Products
          </h1>
        </div>
      </div>

      <div className="w-full h-2/3 m-3 flex flex-col justify-center items-center">
        <div className="flex flex-row w-full gap-4 justify-center items-center md:hidden">
          <Button variant="secondary" className="w-full sm:w-72 rounded-xl">
            Filters
          </Button>
          <Button variant="secondary" className="w-40 rounded-xl">
            Sort
          </Button>
        </div>
        <div className="md:flex flex-row w-full gap-4 justify-center items-center hidden">
          <div className="bg-slate-400 w-2/3 lg:w-3/4 rounded-xl">
            <h1 className="text-xl font-extralight text-center my-8">
              Filters
            </h1>
          </div>
          <div className="bg-slate-400 w-1/3 lg:w-1/4 rounded-xl">
            <h1 className="text-xl font-extralight text-center my-8">Sort</h1>
          </div>
        </div>
      </div>
 

      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
<TeaProductList />

      </div>
    </div>
  );
}

async function TeaProductList() {
  const products: cartProduct[] = await getTeaProducts();

  return (
    <div className="grid grid-col-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

function BasicProductCard({ product }: any) {
  return <div></div>
}
