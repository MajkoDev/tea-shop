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

interface TeaAccessory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
}

const getTeaAccessories = async (): Promise<TeaAccessory[]> => {
  const query = `*[_type == "accessory"]{
    _id, 
    name, 
    "slug": slug.current,
    description, 
    price, 
    currency
  }`;
  const data = await client.fetch(query);
  return data;
};

export default function Page() {
  return (
    <div>
      {/* HERO */}

      <ListTeaAccessories />

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
              accessories, meticulously designed to bring out the best flavors
              and aromas in every cup.
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
              className=" object-cover object-center sm:h-80 lg:h-96 rounded-3xl rounded-tr-none hover:scale-105 duration-700 ease-in-out"
            />
          </div>
          <div className="w-full md:w-2/3 bg-gray-700 m-2 rounded-xl">
            <div className="text-center text-2xl font-extralight text-slate-100">
              Filters and Categories
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <div className="m-12" />

      <section className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:col-span-3 lg:gap-x-8 pb-12">
        <TeaAccessoryCard />

        <a href="#" className="group block">
          <div className="relative h-[350px] sm:h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />

            <img
              src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="mt-3">
            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Small Headphones
            </h3>

            <p className="mt-1.5 text-pretty text-xs text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quibusdam ab maiores placeat odio id?
            </p>
          </div>
        </a>
        <TeaAccessoryCard />
      </section>
    </div>
  );
}

function TeaAccessoriesFilter() {
  return (
    <div>
      <h1>Choose category you are interested in.</h1>
    </div>
  );
}

function TeaAccessoryCard() {
  return (
    <article className="group m-2 shadow-xl h-fit p-2 rounded-xl">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-xl">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-64 w-full object-cover transition group-hover:scale-110 duration-700 ease-in-out"
        />
      </div>

      <div className="p-1 text-center">
        <h3 className="text-md font-medium text-gray-900 line-clamp-1">
          Finding the Journey to Mordor vfvfavf
        </h3>

        <p className="mt-2 font-semibold text-sm/relaxed text-gray-500">
          11.35 Eur
        </p>
      </div>
    </article>
  );
}

async function ListTeaAccessories() {
  const accessories = await getTeaAccessories();

  return (
    <div className="w-full p-3 flex flex-wrap gap-3">
      {accessories.map((accessory) => (
        <div key={accessory._id}>
          <TeaAccCard accessory={accessory} />
        </div>
      ))}
    </div>
  );
}

function TeaAccCard({ accessory }: any) {
  return (
    <Card className="container">
      <CardHeader className="mb-0">
        <CardTitle className="text-lg">{accessory.name}</CardTitle>
        <CardDescription>
          <p className="text-sm">{accessory.description}</p>
          <p className="text-sm font-bold">{accessory.price}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
