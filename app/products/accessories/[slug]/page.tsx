import { client } from "@/sanity/lib/client";
import { Product } from "@/lib/types";

// typescript interface
interface Props {
  params: {
    slug: string;
  };
}

interface TeaAccessory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  images: any;
}

// fetching tea accessory product
const getTeaAccProduct = async (slug: string): Promise<TeaAccessory[]> => {
  const query = `*[_type == "accessory" && slug.current == "${slug}"][0]{
      _id, 
      name, 
      "slug": slug.current,
      description, 
      price, 
      currency,
      images,
  
    }`;
  const data = await client.fetch(query);
  return data;
};

export default async function Page({ params }: Props) {
  const product: TeaAccessory = await getTeaAccProduct(params.slug);

  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold my-12">
        {product.name}
      </h1>
    </div>
  );
}
