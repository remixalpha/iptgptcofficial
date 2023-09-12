import React, { useState, useEffect } from "react";
import "./style.css";
//Home page images
import Banner1 from "../../../../assets/images/Banner/ipt banner 2.jpeg";
import Banner2 from "../../../../assets/images/Banner/ipt banner 3.jpeg";
import Banner3 from "../../../../assets/images/Banner/iptimage1.jpg";
import Logo from "../../../../assets/images/logos/iptlogomin.png";

//Home page pdf
import pdf1 from "../../../../assets/pdf/B08_QuotationExtensionNotice.pdf";
import pdf2 from "../../../../assets/pdf/quotation10.pdf";

//icons
import { MdArrowOutward } from "react-icons/md";

import Opening from "../Open-Close";

const banners = [Banner1, Banner2, Banner3];

const BannerSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(false);

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
      if (position > 100 && !showWelcomeAnimation) {
        setShowWelcomeAnimation(true);
      }
      if (position <= 100 && !showWelcomeAnimation) {
        setShowWelcomeAnimation(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Download pdf
  const handlePdfDownload = (pdfPath, pdfFileName) => {
    const pdfUrl = process.env.PUBLIC_URL + pdfPath;

    const anchor = document.createElement("a");
    anchor.href = pdfUrl;

    anchor.download = pdfFileName;

    anchor.click();
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
        <div
          className="absolute transition-all duration-300   top-[24rem]  sm:top-[22rem]  sm:right-[5rem]   md:top-[20rem]  md:right-[6rem]   lg:top-[20rem]  lg:right-[3rem]  xl:top-[13rem]  xl:right-[26rem] mx-4  "
          style={{ transform: `translateY(-${animationDistance}px)` }}
        >
          <Opening />
        </div>

        <div
          className="text-center transition-all duration-300"
          style={{ transform: `translateY(-${animationDistance}px)` }}
        >
          <h1 className="text-white opacity-50 antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] mb-8 text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] xl:text-[15rem] ">
            IPT GPTC
          </h1>
          {/* notification */}
          <div
            className={`absolute items-center justify-center welcome-container mx-auto scale-90 ${
              showWelcomeAnimation ? "active" : ""
            }`}
            style={{
              overflow: "hidden",
              textAlign: "left",
              marginLeft: "2rem",
            }}
          >
            <div className="overflow-hidden">
              {/* <div className="  bg-white h-32 opacity-60 rounded-3xl mx-20 shadow-lg  " />
              <p className="text-black text-3xl font-bold tracking-wider capitalize relative -top-[5rem] moving-text  ">
                Welcome to Institute of Printing Technology & Goverment
                Polytechnic College Shoranur official Website.
              </p> */}
            </div>
            <div className="flex flex-col space-y-10 px-20 py-8 mx-[30rem]">
              <div className="group bg-white opacity-70 shadow-lg rounded-full px-10 py-4 flex flex-row items-center justify-center text-justify space-x-6 antialiased tracking-normal font-sans text-lg font-semibold leading-[1.3] ">
                <div className="flex-shrink-0">
                  <img
                    className="object-fill w-16 h-16 rounded-full"
                    src={Logo}
                    alt=""
                  />
                </div>

                <span className="text-black font-bold">
                  Quotations For Supply Of Books To Library Under Book Bank
                  Scheme Are Invited{" "}
                  <a className="text-sm font-bold">For More Details</a>
                </span>
                <div
                  className="relative top-10 left-10 h-20 w-20 flex items-center justify-center p-6  text-4xl cursor-pointer bg-red-400 rounded-full text-white z-50  group-hover:scale-110 transition-all duration-300"
                  onClick={() =>
                    handlePdfDownload(pdf1, "B08_QuotationExtensionNotice.pdf")
                  }
                >
                  <div className=" h-full w-full ">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
              <div className="group bg-white opacity-70 shadow-lg rounded-full px-10 py-4 flex flex-row items-center justify-center text-justify space-x-6 antialiased tracking-normal font-sans text-lg font-semibold leading-[1.3]">
                <div className="flex-shrink-0">
                  <img
                    className="object-fill w-16 h-16 rounded-full"
                    src={Logo}
                    alt=""
                  />
                </div>
                <span className="text-black font-bold">
                  Quotation for the purchase of Napkin incinerator to ladies
                  friendly building are invited{" "}
                  <a className="text-sm font-bold">For More Details</a>
                </span>
                <div
                  className="relative top-10 left-10 h-20 w-20 flex items-center justify-center p-6  text-4xl  cursor-pointer bg-red-400 rounded-full text-white z-50  group-hover:scale-110 transition-all duration-300"
                  onClick={() => handlePdfDownload(pdf2, "quotation10.pdf")}
                >
                  <div className=" h-full w-full ">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black z-10 -top-40 h-[64rem] -mx-10 opacity-30" />

      <div className="relative z-0">
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
