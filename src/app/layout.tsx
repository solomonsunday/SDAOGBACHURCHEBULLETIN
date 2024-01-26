import type { Metadata } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const openSans = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

const raleWay = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "The Drycleaner's Son | Drycleaners ",
  description: "Your fabric best friend",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${(openSans.className, raleWay.className)}"light "`}
    >
      <body className="bg-white text-black font-opensans">{children}</body>
    </html>
  );
}
