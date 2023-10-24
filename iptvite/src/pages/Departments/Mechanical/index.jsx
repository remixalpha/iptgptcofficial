import React, { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";

import Navbar from "../../../components/Navbar/Navbar";
import Banners from "./components/Banner";
import Content from "./components/Content/index";
import Sections from "./components/Section/index";
import Staff from "./components/Staff-card";
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
      <div>
        <Banners />
      </div>

      <div className="">
        {showScrollToTop && (
          <div
            className="fixed scale-150 bottom-10 right-10 cursor-pointer bg-red-400 p-2 rounded-full text-white z-50 "
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
        <div>
          <Staff />
        </div>
      </div>
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
};

export default Mechanical;
