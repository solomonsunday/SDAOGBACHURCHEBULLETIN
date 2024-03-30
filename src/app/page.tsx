"use client";
import Announcement from "@/components/Programs/Announcement";
import DivineService from "@/components/Programs/DivineService";
import Footer from "@/components/Programs/Footer";
import Header from "@/components/Programs/Header";
import PastorDesk from "@/components/Programs/PastorDesk";
import SabbathSchool from "@/components/Programs/SabbathSchool";
import Welcome from "@/components/Programs/Welcome";
import React, { useRef } from "react";

const Home = () => {
  const ref = useRef(null);

  return (
    <div>
      <div ref={ref} className="duration-300 ease-in"></div>
      <Header />
      <div className="w-9/12 mx-auto">
        {/* <Welcome />
        <SabbathSchool />
        <DivineService />
        <Announcement />
        <PastorDesk /> */}

        <div>
          <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2 pl-8 ">
            <span className="px-1 text-xs italic">
              <span className="font-bold text-center flex justify-center text-4xl">
                {" "}
                No Bulletin for today!!!
              </span>
            </span>
          </blockquote>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
