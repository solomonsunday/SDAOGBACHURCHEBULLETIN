"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [toggleHamburger, setTogglehambugger] = useState(false);

  useEffect(() => {
    // https://www.freecodecamp.org/news/how-to-build-a-dark-mode-switcher-with-tailwind-css-and-flowbite
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handlehamburgerToogle = () => {
    setShowMenu((preshowMenu) => !preshowMenu);
    setTogglehambugger((prevToggleHamburger) => !prevToggleHamburger);
  };

  const handleClickMenu = () => {
    setShowMenu((preshowMenu) => !preshowMenu);
    setTogglehambugger((prevToggleHamburger) => !prevToggleHamburger);
  };

  return (
    <div className="sticky top-0 z-20">
      <header className="px-8 py-3 mx-auto text-white border-b md:px-16 bg-[#304D30] border-orange-50">
        <nav className="flex items-center justify-between font-semibold ">
          <div>
            <Image
              src="/assets/imgs/sda-logo.jpeg"
              alt="Church-logo"
              width={50}
              height={10}
              className="h-15 w-15 rounded-full"
            />
          </div>
          <p className="text-orange-400 font-mono text-sm">
            SDA Church Ogba E-Bulletin
          </p>

          <div className="items-center hidden h-10 font-serif md:flex md:space-x-8 text-sm">
            <div className="group">
              <Link href="#welcome">Welcome</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-white"></div>
            </div>
            <div className="group">
              <Link href="#sabbathschool">Sabbath School</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-white"></div>
            </div>
            <div className="group">
              <Link href="#divineservice">Divine Service</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-white"></div>
            </div>
            <div className="group">
              <Link href="#announcement">Announcement</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-white"></div>
            </div>
            <div className="group">
              <Link href="#pastordesk">Pastor's Desk</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-white"></div>
            </div>
          </div>

          {/* Hamburger button goes here */}
          <div className="md:hidden">
            <button
              onClick={handlehamburgerToogle}
              className={`${
                !toggleHamburger ? "open" : ""
              } z-40 block hamburger md:hidden focus:outline-none`}
              id="menu-btn"
              type="button"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>
        {/*  Mobile Menu Goes shere */}
        <div
          id="menu"
          className={`${
            showMenu
              ? "hidden"
              : "md:hidden flex absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-16 pl-12 space-y-3 text-lg text-orange-400 uppercase bg-[#304D30]  z-10 "
          }`}
        >
          <Link
            href="#welcome"
            className="hover:text-[#163020]"
            onClick={handleClickMenu}
          >
            Welcome
          </Link>
          <Link
            href="#sabbathschool"
            className="hover:text-[#163020]"
            onClick={handleClickMenu}
          >
            Sabbath School
          </Link>
          <Link
            href="#divineservice"
            className="hover:text-[#163020]"
            onClick={handleClickMenu}
          >
            Divine Service
          </Link>
          <Link
            href="#announcement"
            className="hover:text-[#163020]"
            onClick={handleClickMenu}
          >
            Anounancement
          </Link>

          <Link
            href="#pastordesk"
            className="hover:text-[#163020]"
            onClick={handleClickMenu}
          >
            Pastor's Desk
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
