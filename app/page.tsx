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
      <h1 className="text-3xl font-bold text-center">Hello World</h1>
      <div className="flex flex-col gap-2">
        {origins.map((origin) => (
          <div key={origin._id}>
            <p className="text-center">{origin.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
