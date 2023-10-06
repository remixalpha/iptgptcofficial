import React, { useState, useEffect } from "react";
import "./style.css";
//Home page images
import Banner1 from "../../../../assets/images/Banner/ipt banner 2.jpeg";
import Banner2 from "../../../../assets/images/Banner/ipt banner 3.jpeg";
import Banner3 from "../../../../assets/images/Banner/iptimage1.jpg";
import Logo from "../../../../assets/images/logos/iptlogomin.png";

//icons

import Opening from "../Open-Close";

//Backend
import { image_url, getRequest } from "../../../../utils/agent";

const banners = [Banner1, Banner2, Banner3];
const BannerSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const [Notifications, setNotifications] = useState([]);
  //fetch data
  function fetchNotification() {
    getRequest("/notification/")
      .then(async (res) => {
        if (res.statusText === "OK") {
          // console.log(res.data.doNotTrack);
          setNotifications(res.data.doNotTrack);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    fetchNotification();
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

  //Download pdf

  // const handleFileDownload = (fileUrl, fileName) => {
  //   const dummyLink = document.createElement("a");
  //   dummyLink.href = fileUrl;
  //   dummyLink.download = fileName;
  //   dummyLink.click();
  // };

  return (
    <div className="relative">
      <div>
        <div className="absolute inset-0 bg-black z-10 -top-[6rem] max-h-screen  opacity-30" />

        <div className="relative z-0">
          <img
            className="relative -top-[6rem] max-h-screen w-full object-fill"
            src={banners[currentImage]}
            alt=""
          />
        </div>
      </div>
      <div className="absolute inset-0 grid grid-cols-2 z-50 ">
        <div
          className="absolute transition-all duration-300   top-[24rem]  sm:top-[22rem]  sm:right-[5rem]   md:top-[20rem]  md:right-[6rem]   lg:top-[20rem]  lg:right-[3rem]  xl:top-[18rem]  xl:right-[26rem] mx-4  "
          style={{ transform: `translateY(-${animationDistance}px)` }}
        >
          <Opening />
        </div>
        {/* notification */}
        <div
          className=" w-[40rem] mx-0 transition-all duration-300 "
          style={{ transform: `translateY(-${animationDistance}px)` }}
        >
          <div className="relative scale-75 ">
            {/* Notification */}
            <div className="flex flex-col space-y-10 px-10 py-8  ">
              {Notifications.map((item) => (
                <div
                  key={item._id}
                  className="group bg-white opacity-70 shadow-lg rounded-full max-w-lg px-8 py-4 flex flex-row items-center justify-start text-justify space-x-6 antialiased tracking-normal font-sans  font-semibold leading-[1.3] "
                >
                  <div className="flex-shrink-0 ">
                    <img
                      className="object-cover w-16 h-16 rounded-full"
                      src={Logo}
                      alt=""
                    />
                  </div>

                  <span className="text-md text-balck antialiased tracking-normal font-sans font-bold leading-[1.3] text-transform: capitalize  cursor-pointer ">
                    {item.fileUrl ? (
                      <a
                        href={`${image_url + item.fileUrl}`}
                        target="_blank"
                        className="text-xl font-base "
                      >
                        {item.message}
                      </a>
                    ) : (
                      <a
                        className="text-xl cursor-pointer font-base "
                        onClick={() => {
                          // Check if it's a link before opening
                          if (item.link) {
                            window.open(item.link, "_blank");
                          }
                        }}
                      >
                        {item.message}
                      </a>
                    )}
                  </span>
                  {/* {item.fileUrl && (
                    <button
                      className="relative z-50 flex items-center justify-center w-20 h-20 p-6 text-4xl text-white transition-all duration-300 bg-red-400 rounded-full cursor-pointer top-10 left-10 group-hover:scale-110"
                      onClick={() =>
                        handleFileDownload(`${image_url + item.fileUrl}`)
                      }
                    >
                      <div className="w-full h-full">
                        <MdArrowOutward />
                      </div>
                    </button>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Title */}
        <div
          className="absolute right-[18rem] top-40 items-center justify-center p-10 transition-all duration-300  "
          style={{ transform: `translateY(-${animationDistance}px)` }}
        >
          <h1 className="text-white opacity-50  antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] xl:text-[15rem]  ">
            IPT GPTC
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
