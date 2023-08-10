import React, { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";

import Navbar from "../../../components/Navbar/navbar";
import Banner from "../../../assets/images/Banner/iptimage1.jpg";
import Content from "./components/Content/index";
import Sections from "./components/Section/index";
import Footer from "../../../components/Footer/index";

const Mechanical = () => {
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
          className=" relative -top-[6rem]  h-[25rem] w-full object-cover "
          src={Banner}
          alt=""
        />
        <div className="absolute inset-3 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center -top-[5rem] ">
          <h1
            className="text-[10rem] text-gray-50 font-bold tracking-wider opacity-30 bg-black p-4 rounded-lg animated-heading"
            style={{ transform: `translateY(-${animationDistance}px)` }}
          >
            MECHANICAL
          </h1>
        </div>
      </div>

      <div className="">
        {showScrollToTop && (
          <div
            className="fixed scale-150 bottom-10 right-10 cursor-pointer bg-blue-500 p-2 rounded-full text-white z-50 "
            onClick={handleScrollToTop}
          >
            <IoIosArrowUp />
          </div>
        )}
        <div className="">
          <Content />
        </div>
        <div>
          <Sections />
        </div>
      </div>
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
};

export default Mechanical;
