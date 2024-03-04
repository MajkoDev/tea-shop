"use client";

import { Product } from "@/lib/types";

interface Props {
  product: Product;
}

export default function ProductGallery({ product }: Props) {
  return (
    <div className="bg-slate-100 py-6">
      <div className="aspect-h-1 aspect-w-1 w-full grid place-items-center mb-4">
        <div
          className="flex-none w-96 h-96 rounded-lg py-4 px-2 inline-block hover:scale-105 ease-in-out duration-300 scroll-smooth cursor-pointer"
          style={{
            background: "linear-gradient(to bottom, #ccc, #999)",
          }}
        ></div>
      </div>
    </div>
  );
}
