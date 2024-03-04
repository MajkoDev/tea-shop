"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductCard({ product }: any) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Link className="group" href={`/products/${product.slug}`}>
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-8 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
          className={cn(
            "group-hover:opacity-75 duration-700 ease-in-out",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <h3 className="mt-2 text-md text-gray-800 text-center font-medium">
        {product.name}
      </h3>
      <p className="my-1 text-sm text-center font-medium text-gray-400">
        Most popular tea in southern Japan...
      </p>
    </Link>
  );
}
