import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

// typescript interface
interface TeaAccessory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  images: any;
}

// fetching api
const getTeaAccessories = async (): Promise<TeaAccessory[]> => {
  const query = `*[_type == "accessory"]{
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

export default function Page() {
  return (
    <div>
      <div className="text-center font-semibold text-xl my-12">
        Product List
      </div>
      <div className="h-24" />

      {/*  HERO Section
          <HeroSection />
       */}

      {/* PRODUCTS */}
      <ProductsList />
    </div>
  );
}

// page component

// hero section
function HeroSection() {
  return (
    <section className="w-full h-[93vh] bg-slate-50 mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:h-96 m-2 rounded-xl">
          <div className="flex flex-row md:flex-col justify-start items-start md:items-end">
            <h1 className="text-[80px] md:text-[96px] font-extrabold p-0 m-0">
              02
            </h1>
            <h2 className="text-[40px] md:text-[44px] font-light mb-4">
              Tea Accessories
            </h2>
          </div>
          <p className="text-[14px] md:text-[16px] text-slate-400 font-medium">
            Enhance your tea ritual with our exquisite collection of
            accessories, meticulously designed to bring out the best flavors and
            aromas in every cup.
          </p>
          <div className="flex flex-row justify-end items-center">
            <Button variant="outline" className="m-2 rounded-xl">
              View Now
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:ml-5 m-4">
          <Image
            alt="primaryImage"
            width={600}
            height={600}
            src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="h-full w-full object-cover object-center sm:h-80 lg:h-96 rounded-3xl rounded-tr-none hover:scale-105 duration-700 ease-in-out"
          />
        </div>
      </div>

      <div className="flex h-60 flex-col md:flex-row">
        <div className="hidden md:block w-full md:w-1/3 bg-gray-200 m-2 rounded-3xl rounded-bl-none">
          <Image
            alt="secondaryImage"
            width={300}
            height={300}
            src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="object-cover object-center rounded-3xl rounded-tr-none hover:scale-105 duration-700 ease-in-out"
          />
        </div>
        <div className="w-full md:w-2/3 bg-gray-700 m-2 rounded-xl">
          <div className="text-center text-2xl font-extralight text-slate-100">
            Filters and Categories
          </div>
        </div>
      </div>
    </section>
  );
}

// filter component
function ProductFilter() {}

// product list component
async function ProductsList() {
  const accessories = await getTeaAccessories();

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 md:gap-x-3 lg:gap-x-4 gap-y-2 my-6">
        {accessories.map((accessory) => (
          <div key={accessory._id}>
            <TeaAccCard accessory={accessory} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:col-span-3 lg:gap-x-8 pb-12">
        {accessories.map((accessory) => (
          <div key={accessory._id}>
            <FirstProductCard accessory={accessory} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:col-span-3 lg:gap-x-8 pb-12">
        {accessories.map((accessory) => (
          <div key={accessory._id}>
            <SecondProductCard accessory={accessory} />
          </div>
        ))}
      </div>
    </>
  );
}

// product cart (test)
function TeaAccCard({ accessory }: any) {
  return (
    <Card className="container">
      <CardHeader className="mb-0">
        <CardTitle className="text-lg">{accessory.name}</CardTitle>
        <CardDescription>
          <p className="text-xs">{accessory.description}</p>
          <p className="text-sm font-bold">{accessory.price / 100}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

// product card (type one)
function FirstProductCard({ accessory }: any) {
  return (
    <article className="group m-2 shadow-xl h-fit p-2 rounded-xl">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-xl">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-64 w-63 object-cover transition group-hover:scale-110 duration-700 ease-in-out"
        />
      </div>

      <div className="p-1 text-center">
        <h3 className="text-md font-medium text-gray-900 line-clamp-1">
          {accessory.name}
        </h3>

        <p className="mt-2 font-semibold text-sm/relaxed text-gray-500">
          11.25 Eur
        </p>
      </div>
    </article>
  );
}

// product card (type two)
function SecondProductCard({ accessory }: any) {
  return (
    <Link
      href={`/products/accessories/${accessory.slug}`}
      className="group block"
    >
      <div className="relative h-[250px] sm:h-[350px]">
        <ImageGalleryForSecondProductCard images={accessory.images} />
      </div>

      <div className="mt-3">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {accessory.name}
        </h3>

        <p className="mt-1.5 text-pretty text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          quibusdam ab maiores placeat odio id?
        </p>
      </div>
    </Link>
  );
}

function ImageGalleryForSecondProductCard({ images }: any) {
  return (
    <>
      {images.map((image: any, idx: any) => (
        <Image
          key={idx}
          src={urlFor(image).url()}
          width={400}
          height={400}
          className={`absolute inset-0 h-full w-full object-cover ${
            idx % 2 === 0
              ? "opacity-100 group-hover:opacity-0"
              : "opacity-0 group-hover:opacity-100"
          }`}
          alt="img"
        />
      ))}
    </>
  );
}
