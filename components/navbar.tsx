import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="my-4 px-12 lg:px-24 flex flex-row justify-between items-center">
        <h1 className="text-xl font-semibold">Logo</h1>
        <div className="flex flex-row gap-2 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
