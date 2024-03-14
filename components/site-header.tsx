"use client";

import React from "react";
import Link from "next/link";

import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { MenuIcon, ShoppingBasket } from "lucide-react";
import { NavigationMenu, NavigationMenuList } from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function SiteHeader() {
  return (
    <header
      className="w-full top-0 z-50 sticky border-b bg-background/90 backdrop-blur
    px-[0.8rem] md:px-[2rem] lg:px-[4rem] xl:px-[6rem] 2xl:px-[10rem]"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-row gap-x-1">
                <NavLinks />
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex flex-row gap-x-1 items-center">
            <ShoppingCartBtn />
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="py-2">
      <h1 className="text-xl font-bold">Tea House</h1>
    </Link>
  );
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" className="rounded-lg md:hidden">
          <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-y-3">
            <Logo />
            <NavLinks />
          </div>

          <p className="text-center text-slate-500 font-medium">Social Links</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function NavLinks() {
  return (
    <>
      <Link href="/products/teas">
        <Button
          variant="ghost"
          className="rounded-lg text-lg md:text-sm md:font-medium md:text-slate-700 font-semibold"
        >
          Tea
        </Button>
      </Link>
      <Link href="/products/accessories">
        <Button
          variant="ghost"
          className="rounded-lg text-lg md:text-sm md:font-medium md:text-slate-700 font-semibold"
        >
          Cup & Pot
        </Button>
      </Link>
      <Link href="/products/courses">
        <Button
          variant="ghost"
          className="rounded-lg text-lg md:text-sm md:font-medium md:text-slate-700 font-semibold"
        >
          School
        </Button>
      </Link>
    </>
  );
}

function ShoppingCartBtn() {
  return (
    <>
      <Link href="/cart">
        <Button variant="outline" className="hidden md:block rounded-lg">
          Shopping Cart
        </Button>
        <Button variant="ghost" className="rounded-lg md:hidden">
          <ShoppingBasket className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </Link>
    </>
  );
}
