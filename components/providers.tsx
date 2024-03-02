"use client";

import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";
import { ThemeProvider } from "@/components/theme-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CartProvider
        currency="EUR"
        cartMode="checkout-session"
        stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
        shouldPersist
      >
        {children}
      </CartProvider>
    </ThemeProvider>
  );
}
