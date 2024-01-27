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
  title: "Seventh-Day Adventist Church, Ogba  | E-Bulletin ",
  description: "Stay Updated Globally & remain blessed",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${(openSans.className, raleWay.className)}"light "`}
    >
      <body className="bg-white text-black dark:bg-slate-700 font-opensans">
        {children}
      </body>
    </html>
  );
}
