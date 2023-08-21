import React, { useState, useEffect } from "react";
import Banner1 from "../../../../assets/images/Banner/ipt banner 2.jpeg";
import Banner2 from "../../../../assets/images/Banner/ipt banner 3.jpeg";
import Banner3 from "../../../../assets/images/Banner/iptimage1.jpg";

import Opening from "../Open-Close";

const banners = [Banner1, Banner2, Banner3];

const BannerSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const animationDistance = Math.min(0.9 * scrollY, 100);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;

      setScrollY(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative  ">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-50 ">
        <div
          className="absolute transition-all duration-300   top-[24rem]  sm:top-[22rem]  sm:right-[5rem]   md:top-[20rem]  md:right-[6rem]   lg:top-[20rem]  lg:right-[3rem]  xl:top-[20rem]  xl:right-[24rem] mx-4  "
          style={{ transform: `translateY(-${animationDistance}px)` }}
        >
          <Opening />
        </div>

        <div
          className="text-center transition-all duration-300 "
          style={{ transform: `translateY(-${animationDistance}px)` }}
        >
          <h1 className=" text-white opacity-50  font-bold tracking-wider capitalize   text-[5rem]   sm:text-[7rem]   md:text-[9rem]   lg:text-[12rem]   xl:text-[15rem] ">
            IPT GPTC
          </h1>
          <p className="scale-50 text-black font-bold tracking-wider capitalize bg-white  opacity-50 rounded-full px-14 py-8  relative   text-[1.2rem] -top-[2rem]  sm:text-[2rem] sm:-top-[2rem]  md:text-[2rem]   lg:text-[2rem] lg:-top-[3rem]   xl:text-[3rem] xl:-top-[5rem]  transition-all duration-300 ">
            institute of printing technology and government polytechnic college
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-black z-10 -top-40 h-[64rem] -mx-10 opacity-30" />

      <div className="relative z-0 ">
        <img
          className="relative -top-[6rem] h-[60rem] w-full object-cover"
          src={banners[currentImage]}
          alt=""
        />
      </div>
    </div>
  );
};

export default BannerSlider;
