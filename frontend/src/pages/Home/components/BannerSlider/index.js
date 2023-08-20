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

  const animationDistance = Math.min(0.4 * scrollY, 100);
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
    <div className="relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-50 ">
        <div
          className="text-center"
          style={{ transform: `translateY(-${animationDistance}px)` }}
        >
          <h1 className="text-[10rem] xl:text-[17rem] text-white opacity-70  font-bold tracking-wider capitalize">
            IPT GPTC
          </h1>
          <p className="text-[10rem] xl:text-[3rem] scale-50 text-black font-bold tracking-wider  bg-white  opacity-50 rounded-full px-14 py-8 relative -top-[5rem]  capitalize">
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
