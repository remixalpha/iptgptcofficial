import React, { useState, useEffect } from "react";
import "./css/home.css";
import { IoIosArrowUp } from "react-icons/io";

import Snowfall from "react-snowfall";
import Navbar from "../../components/Navbar/navbar";
import BannerSlider from "./components/BannerSlider";
import AboutUS from "./components/AboutUs/about";
import VisionMission from "./components/MissionVision/Visionmission";
import PrincipalM from "./components/PrincipalM/index";
import Reference from "./components/Reference";
import Departments from "./components/Departments/index";
import ContactUS from "./components/ContactUs/index";
import Footer from "../../components/Footer/index";
import Card from "../../components/Card/index";

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

  function isOpeningTime() {
    const currentTime = new Date();
    const openingTime = new Date();
    const closingTime = new Date();

    openingTime.setHours(8, 30, 0);
    closingTime.setHours(17, 0, 0);

    return currentTime >= openingTime && currentTime <= closingTime;
  }

  return (
    <div className="relative min-h-screen overflow-hidden ">
      <div className="mx-auto">
        <Navbar />
      </div>
      <div className="relative z-0">
        <div>
          <BannerSlider />
        </div>

        {/* Display the opening status */}
        <Card extra="  -top-[20rem] z-50 ">
          <div className="absolute inset-0 flex items-center justify-center text-white ">
            {" "}
            <div
              className={`opening-status ${
                isOpeningTime() ? "open" : "closed"
              }`}
            >
              {isOpeningTime() ? "Open" : "Closed"}
            </div>
          </div>
        </Card>
        {/* <div className="water-droplets" /> */}
      </div>

      <div
        className={`flex flex-col gap-0 bg-white z-50 ${
          scrollPosition > 0 ? "sticky top-0" : ""
        }`}
      >
        {showScrollToTop && (
          <div
            className="fixed scale-150 bottom-10 right-10 cursor-pointer bg-blue-500 p-2 rounded-full text-white z-50 "
            onClick={handleScrollToTop}
          >
            <IoIosArrowUp />
          </div>
        )}

        <div className="items-center justify-center ">
          <AboutUS />
        </div>
        <div>
          <VisionMission />
        </div>
        <div>
          <PrincipalM />
        </div>
        <div>
          <Reference />
        </div>
        <div>
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
