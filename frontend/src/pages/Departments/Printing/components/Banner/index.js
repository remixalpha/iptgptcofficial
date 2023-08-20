import React, { useState, useEffect } from "react";
import Banner from "../../../../../assets/images/Banner/iptimage1.jpg";

export default function Banners() {
  const [scrollY, setScrollY] = useState(0);

  const animationDistance = Math.min(0.2 * scrollY, 100);
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
    <div className="relative -top-[8rem]  h-[25rem] w-full">
      <img className=" h-full w-full object-cover " src={Banner} alt="" />
      <div className="absolute inset-0 flex items-center justify-center top-20 ">
        <h1
          className="flex justify-center text-center items-center text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4rem] xl:text-[7rem] text-gray-50 font-bold tracking-wider opacity-40 p-4 rounded-lg"
          style={{ transform: `translateY(-${animationDistance}px)` }}
        >
          PRINTING
        </h1>
      </div>
    </div>
  );
}
