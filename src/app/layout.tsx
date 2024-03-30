import type { Metadata } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  description: "Stay Updated Globally & Remain Blessed",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${(openSans.className, raleWay.className)}"light "`}
    >
      <body className="text-black bg-white dark:bg-slate-700 font-opensans">
        <ToastContainer />
        {children}
      </body>
      {/* OgbachurchAWS94! */}
    </html>
  );
}
