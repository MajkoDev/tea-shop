import Image from "next/image";

import { Origin } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";

const getOrigins = async (): Promise<Origin[]> => {
  const query = `*[_type == "origin"]{
    _id, 
    name, 
    slug,
    description, 
    image
  }`;
  const data = await client.fetch(query);
  return data;
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col justify-start items-start h-screen bg-slate-50">
        <div className="w-full h-2/3 bg-slate-200 rounded-xl flex flex-col mt-2 justify-center items-center">
          <div className="max-w-md text-center flex flex-col items-center">
            <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text">
              Tea Hero Image
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              vel nam quas soluta. Veritatis tenetur soluta, optio libero
              quaerat architecto aut. Vero, error in.
            </p>
            <div className="flex flex-row gap-3">
              <Button className="m-1 rounded-lg">Explore</Button>
              <Button className="m-1 rounded-lg" variant="outline">
                Become Customer
              </Button>
            </div>
          </div>
        </div>
   
   
      </section>

      <section className="flex flex-col justify-start items-start h-screen bg-slate-100">
        <div className="w-full text-center md:flex justify-center items-center">
          <h1 className="my-12 text-2xl md:text-3xl font-extralight mx-4 md:w-3/4">
            Discover teas from around the world <br /> - China, Japan, India,
            and more! Explore now!
          </h1>
        </div>
        <OriginList />
      </section>
    </div>
  );
}

async function OriginList() {
  const origins: Origin[] = await getOrigins();

  return (
    <div className="w-full flex flex-row gap-4 mb-6 px-8">
      {origins.map((origin) => (
        <div
          key={origin._id}
          className="bg-slate-500 flex-1 h-24 rounded-xl flex items-center justify-center hover:cursor-pointer hover:scale-105 duration-100 ease-in-out"
        >
          <h3 className="text-xl font-bold text-center text-slate-50">
            {origin.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
