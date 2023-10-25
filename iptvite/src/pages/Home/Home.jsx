import { useState, useEffect } from "react";
import "./css/home.css";
import { IoIosArrowUp } from "react-icons/io";

import Snowfall from "react-snowfall";
import Navbar from "../../components/Navbar/Navbar";
import BannerSlider from "./components/BannerSlider";
import AboutUS from "./components/AboutUs/About";
import VisionMission from "./components/MissionVision/Visionmission";
import PrincipalM from "./components/PrincipalM";
import Reference from "./components/Reference";
import Departments from "./components/Departments";
import ContactUS from "./components/ContactUs";

import Footer from "../../components/Footer";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowScrollToTop(position > 300);
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
        <div>
          <BannerSlider />
        </div>
      </div>

      <div
        className={`flex flex-col gap-0 bg-white z-50 ${
          scrollPosition > 0 ? "sticky top-0" : ""
        }`}
      >
        {showScrollToTop && (
          <div
            className="fixed z-50 p-2 text-white scale-150 bg-red-400 rounded-full cursor-pointer bottom-10 right-10 "
            onClick={handleScrollToTop}
          >
            <IoIosArrowUp />
          </div>
        )}

        <div className="flex items-center justify-center ">
          <AboutUS />
        </div>
        <div>
          <VisionMission />
        </div>
        <div className="">
          <PrincipalM />
        </div>
        <div>
          <Reference />
        </div>
        <div className="">
          <Departments />
        </div>
        <div>
          <ContactUS />
        </div>

        <div>
          <Footer />
        </div>
        <Snowfall snowflakeCount={50} />
      </div>
    </div>
  );
}
