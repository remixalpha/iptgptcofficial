import React, { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";

import Navbar from "../../../components/Navbar/Navbar";
import Banner from "../../../assets/images/Banner/iptimage1.jpg";
import Count from "./components/Count";
import AboutD from "./components/AboutD";
import Principals from "./components/Principals";
import CollegeMap from "./components/CollegeMap";
import Footer from "../../../components/Footer";

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const animationDistance = Math.min(0.2 * scrollY, 100);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowScrollToTop(position > 300);
      setScrollY(position);
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
      <div className="relative z-0">
        <img
          className=" relative -top-[6rem] h-[25rem] w-full object-cover "
          src={Banner}
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center -top-[5rem] ">
          <h1
            className="text-[15rem] text-gray-50 font-bold tracking-wider opacity-30  animated-heading"
            style={{ transform: `translateY(-${animationDistance}px)` }}
          >
            ABOUT US
          </h1>
        </div>
      </div>

      <div
        className={`flex flex-col gap-0 bg-white z-50 ${
          scrollPosition > 0 ? "sticky top-0" : ""
        }`}
      >
        {showScrollToTop && (
          <div
            className="fixed scale-150 bottom-10 right-10 cursor-pointer bg-red-400 p-2 rounded-full text-white z-50 "
            onClick={handleScrollToTop}
          >
            <IoIosArrowUp />
          </div>
        )}
        <div>
          <Count />
        </div>

        <div className="relative -top-[13rem] ">
          <AboutD />
        </div>
        <div className="relative -top-[8rem] ">
          <Principals />
        </div>
        <div className="relative -top-[4rem]  ">
          <CollegeMap />
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
