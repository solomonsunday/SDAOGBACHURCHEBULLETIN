"use client";
import Announcement from "@/components/Programs/Announcement";
import DivineService from "@/components/Programs/DivineService";
import Footer from "@/components/Programs/Footer";
import Header from "@/components/Programs/Header";
import PastorDesk from "@/components/Programs/PastorDesk";
import SabbathSchool from "@/components/Programs/SabbathSchool";
import Services from "@/components/Programs/Services";
import Welcome from "@/components/Programs/Welcome";

import React, { useRef } from "react";

const Home = () => {
  const ref = useRef(null);

  return (
    <div>
      <div ref={ref} className="duration-300 ease-in"></div>
      <Header />
      <div className="w-9/12 mx-auto">
        {/* <LandingPageCarousel /> */}
        <Welcome />
        <SabbathSchool />
        <DivineService />
        <Announcement />
        <PastorDesk />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
