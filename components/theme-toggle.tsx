"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className='m-2'>
      
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-lg dark:hidden"
        onClick={() => setTheme("dark")}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-lg hidden dark:inline-block dark:visible"
        onClick={() => setTheme("light")}
      >
        <span>Dark</span>
        <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all" />
      </Button>
    </div>
  );
}
