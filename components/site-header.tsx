"use client";

import React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";

export default function SiteHeader() {
  return (
    <header className="w-full h-[7vh] top-0 z-50 border-b bg-background/90 backdrop-blur px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
      <div className="h-full flex flex-row items-center justify-between">
        <Link href="/">
          <h1 className="text-lg font-bold">Tea House</h1>
        </Link>

        <div className="flex flex-row gap-1">
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
                <NavigationMenuItem>
                  <Button variant="ghost" className="rounded-lg">
                    Tea
                  </Button>
                </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="rounded-lg">
                  Other Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href="/products/accessories">
                    <ListItem>Tea Accessories</ListItem>
                  </Link>

                  <Link href="/products/courses">
                    <ListItem>Tea Courses</ListItem>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-1 items-center">
            <Link href="/cart">
              <Button variant="outline" className="rounded-lg">
                Shopping Cart
              </Button>
            </Link>
            <Button className="rounded-lg">Log In</Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = ({ children }: { children: string }) => {
  return (
    <NavigationMenuLink asChild>
      <div className="w-44 block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
        <h3 className="text-sm font-medium">{children}</h3>
      </div>
    </NavigationMenuLink>
  );
};
