import { Image } from "sanity";

export interface Product {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  sku: string;
  description: string;
  images: Image[];
  price: number;
  currency: string;
  category: Array<Category>;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Origin {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}
