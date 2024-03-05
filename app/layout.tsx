import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Providers from "@/components/providers";
import Navbar from "@/components/navbar";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Silk Road Tea House",
  description:
    "Step into the enchanting world of Silk Road Tea House, where ancient traditions meet modern indulgence",
  icons: {
    icon: "../public/tea-pot.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <SiteHeader />
        
          {children}
        </Providers>
      </body>
    </html>
  );
}
