import React, { useState, useEffect } from "react";
import Banner1 from "../../../../assets/images/Banner/ipt banner 2.jpeg";
import Banner2 from "../../../../assets/images/Banner/ipt banner 3.jpeg";
import Banner3 from "../../../../assets/images/Banner/iptimage1.jpg";

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
    <div className="relative z-0">
      <img
        className=" relative -top-[6rem] h-[60rem] w-full object-cover "
        src={banners[currentImage]}
        alt=""
      />
      <div className="absolute inset-3 " />
      <div className="absolute inset-0 flex  opacity-70 items-center justify-center ">
        <h1
          className=" text-[10rem] text-center xl:text-[15rem] text-gray-50 font-bold tracking-wider opacity-30 p-4 rounded-lg animated-heading"
          style={{ transform: `translateY(-${animationDistance}px)` }}
        >
          IPT & GPTC
        </h1>
      </div>
    </div>
  );
};

export default BannerSlider;
