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
      <section className="flex flex-col md:flex-row-reverse justify-start items-start h-[93vh] bg-slate-50">
        <div className="w-full md:w-2/3 lg:w-1/2 h-[30rem] md:h-[26rem] bg-slate-400 m-2 rounded-xl">
          <h2 className="text-center text-white text-2xl">Hero Image</h2>
        </div>
        <div className="w-full md:w-1/2 bg-slate-300 m-2">
          <h2 className="text-center text-white text-3xl">Hero Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel
            nam quas soluta. Veritatis tenetur soluta, optio libero quaerat
            architecto aut. Vero, error in.
          </p>
          <div className="flex flex-row">
            <Button className="m-1 rounded-lg">Explore</Button>
            <Button className="m-1 rounded-lg">Become Customer</Button>
          </div>
        </div>
      </section>

      <section>
        <div>Image</div>
        <div>What We Offer</div>
      </section>

      <section>
        <h1>Introduction</h1>
        <div className="flex">
          <div />
          <div>Subscribe</div>
          <div />
        </div>
      </section>

      <section>
        <div>First Table</div>
        {/*
  
      <div>Second Table</div>
      <div>Third Table</div>
  */}
      </section>

      <div className="container bg-slate-300 h-96 w-full"></div>

      <div className="flex flex-col md:flex-row gap-3 bg-slate-50 p-3 w-full">
        <div className="flex-1 w-full h-52 bg-slate-200">
          <h3 className="text-center font-extralight">Content</h3>
        </div>
        <div className="flex-1 w-full h-52 bg-slate-200">
          <h3 className="text-center font-extralight">Content</h3>
        </div>
      </div>
    </div>
  );
}

async function OriginList() {
  const origins: Origin[] = await getOrigins();

  return (
    <div className="flex flex-col gap-1">
      {origins.map((origin) => (
        <div key={origin._id}>
          <p className="text-center">{origin.name}</p>
        </div>
      ))}
    </div>
  );
}
