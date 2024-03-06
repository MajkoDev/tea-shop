"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import Navbar from "./navbar";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "supports-backdrop-blur:bg-background/80"
          : "supports-backdrop-blur:bg-background/90 "
      } sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]`}
    >
      <div
        className={`flex justify-between items-center transition-height duration-300 ${
          isScrolled ? "pt-1" : "my-3"
        } `}
      >
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
      <div
        className={`px-12 lg:px-24 transition-height duration-300 ${
          isScrolled ? "my-1" : "my-3"
        }`}
      >
        <Navbar />
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
