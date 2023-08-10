import React, { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";

import Logo from "../../../assets/images/logos/ncc logo.png";

import Navbar from "../../../components/Navbar/navbar";
import Banners from "./components/Banner";
import Introduction from "./components/Introduction/index";
import MotoAim from "./components/MotoAim/index";
import Activities from "./components/Activities/index";
import Footer from "../../../components/Footer/index";

export default function NCC() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowScrollToTop(position > 100);
    };

    window.scrollTo({ top: 0, behavior: "smooth" });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden ">
      <div className="mx-auto">
        <Navbar />
      </div>

      <div>
        <Banners />
      </div>
      <div className="flex flex-col justify-center items-center relative bottom-[10rem] mb-8   sm:grid sm:grid-cols-2  sm:p-[0rem] sm:scale-125  sm:relative  sm:bottom-[5rem] sm:mx-4       md:grid md:grid-cols-2  md:pr-[8rem] md:scale-110  md:relative  md:bottom-[5rem] md:mx-8   lg:flex lg:flex-col lg:scale-110  lg:relative lg:bottom-[10rem] lg:pl-[10rem]        xl:flex xl:flex-col xl:scale-150 xl:relative  xl:bottom-[10rem] xl:pl-[8rem]    ">
        <div className="flex justify-center items-center h-25 w-25 mb-2  sm:scale-50 md:scale-50  lg:scale-75 xl:scale-75  ">
          <img
            src={Logo}
            alt="Profile"
            className="h-full w-full  object-contain"
          />
        </div>
        <div className="flex flex-col justify-center items-center   sm:items-start  sm:scale-100    md:scale-150  md:items-center   lg:scale-150  lg:items-center   xl:scale-150  xl:items-cenetr  ">
          <h1 className="text-4xl font-black tracking-tight text-orange-200 ">
            Welcome
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 ">
            Few Words About Us
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center -space-y-[12.2rem] transition-all duration-300  ">
        {showScrollToTop && (
          <div
            className="fixed scale-150 bottom-10 right-10 cursor-pointer bg-blue-500 p-2 rounded-full text-white z-50 "
            onClick={handleScrollToTop}
          >
            <IoIosArrowUp />
          </div>
        )}
        <div className="pt-20">
          <Introduction />
        </div>

        <div>
          <MotoAim />
        </div>
        <div className="flex flex-col justify-start items-center relative top-[25rem] ">
          <h1 className=" text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 ">
            ACTIVITIES OF NCC
          </h1>
          <Activities />
        </div>
      </div>
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
}
