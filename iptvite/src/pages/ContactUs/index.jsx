import React, { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";

import Navbar from "../../components/Navbar/Navbar";
import Banners from "./components/Banner";
import Form from "./components/Form";
import Footer from "../../components/Footer/index";

export default function SCST() {
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
      <div className="flex flex-col justify-center items-center  relative mb-[10rem] transition-all duration-300  ">
        {showScrollToTop && (
          <div
            className="fixed scale-150 bottom-10 right-10 cursor-pointer bg-red-400 p-2 rounded-full text-white z-50 "
            onClick={handleScrollToTop}
          >
            <IoIosArrowUp />
          </div>
        )}
        <div className="">
          <Form />
        </div>
      </div>
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
}
