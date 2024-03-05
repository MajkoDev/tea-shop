import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";

export default function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/90 sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur mb-4 px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
      <div className="flex h-14 justify-between items-center">
        <NavLogo />
        <div className="flex gap-1 items-center">
          <Link href="/cart">
            <Button variant="outline" className="h-8 rounded-lg">
              Shopping Cart
            </Button>
          </Link>
          <Button className="h-8 rounded-lg">Log In</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

function NavLogo() {
  return (
    <div className="">
      <span className="text-lg font-semibold">Silk Road Tea House</span>
    </div>
  );
}
