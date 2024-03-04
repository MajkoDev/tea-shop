"use client";

import { Product } from "@/lib/types";

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: any) {
  return (
    <div className="bg-slate-50 py-6">
      <h1 className="font-extralight text-3xl text-center">
        Product Informations
      </h1>
    </div>
  );
}

// component to display detailed product information
