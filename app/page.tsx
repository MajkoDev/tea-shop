import Image from "next/image";

import { Origin } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

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

export default async function Home() {
  const origins: Origin[] = await getOrigins();

  return (
    <main className="flex min-h-screen flex-col items-center justify-items p-24">

      <div className="flex flex-col gap-2">
        {origins.map((origin) => (
          <div key={origin._id}>
            <p className="text-center">{origin.name}</p>
          </div>
        ))}
      </div>

      <div className="container bg-slate-300 h-96 w-full"></div>

      <div className="flex flex-col md:flex-row gap-3 bg-slate-50 p-3 w-full">
        <div className="flex-1 w-full h-52 bg-slate-200">
          <h3 className="text-center font-extralight">Content</h3>
        </div>
        <div className="flex-1 w-full h-52 bg-slate-200">
          <h3 className="text-center font-extralight">Content</h3>
        </div>
      </div>
    </main>
  );
}
