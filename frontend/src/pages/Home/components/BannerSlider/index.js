import React, { useState, useEffect } from "react";
import "./style.css";
//Home page images
import Banner1 from "../../../../assets/images/Banner/ipt banner 2.jpeg";
import Banner2 from "../../../../assets/images/Banner/ipt banner 3.jpeg";
import Banner3 from "../../../../assets/images/Banner/iptimage1.jpg";
import Logo from "../../../../assets/images/logos/iptlogomin.png";

import Opening from "../Open-Close";

// Slider
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Backend
import { image_url, postLogin, FetchRequest } from "../../../../utils/agent";

const banners = [Banner1, Banner2, Banner3];

const BannerSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const [notifications, setNotifications] = useState([]);
  const [Gallerys, setGallerys] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextNotification = () => {
    if (currentIndex < notifications.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const notificationInterval = setInterval(showNextNotification, 500);
    return () => {
      clearInterval(notificationInterval);
    };
  }, [currentIndex, notifications]);

  //fetch data
  function fetchNotification() {
    postLogin("/notification/")
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
  //fetching Images data
  function fetchImage() {
    FetchRequest("/hero/")
      .then((res) => {
        // console.log(res.data);
        if (res.statusText === "OK") {
          console.log(res.data.doc);
          setGallerys(res.data.doc);
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
    fetchImage();
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
      <div className="absolute inset-0 grid grid-cols-2  ">
        {/* Notification */}
        <div className="relative w-[40rem] min-h-screen -top-24 mx-0 transition-all duration-300 z-40 overflow-hidden overflow-y-scroll container ">
          <div className="relative flex flex-col space-y-10 px-10 py-4 scale-75">
            {notifications.slice(0, currentIndex + 1).map((item, index) => (
              <div
                key={item._id}
                className={`group backdrop-blur-lg bg-white opacity-70 shadow-lg rounded-full max-w-lg px-8 py-4 flex flex-row items-center justify-start space-x-6 hover:scale-110 transition-all duration-300 notifications ${
                  index === currentIndex ? "show" : ""
                }`}
              >
                <div className="flex-shrink-0 ">
                  <img
                    className="object-cover w-16 h-16 rounded-full"
                    src={Logo}
                    alt=""
                  />
                </div>

                <span className="text-md text-balck antialiased tracking-normal font-sans font-bold leading-[1.3] text-transform: capitalize  cursor-pointer text-justify ">
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
              </div>
            ))}
          </div>
        </div>

        {/* Title */}
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
          }}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          className=" max-w-screen-4xl max-h-[40rem] right-[58rem] top-14 "
        >
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center p-10 transition-all duration-300 z-30">
              <div
                className="absolute transition-all duration-300   top-[24rem]  sm:top-[22rem]  sm:right-[5rem]   md:top-[20rem]  md:right-[6rem]   lg:top-[20rem]  lg:right-[3rem]  xl:top-[15rem]  xl:right-[26rem] mx-4  "
                style={{ transform: `translateY(-${animationDistance}px)` }}
              >
                <Opening />
              </div>
              <h1 className="text-white opacity-50 antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] xl:text-[15rem] text-center ">
                IPT GPTC
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {Gallerys.map((item, index) => (
              <div
                key={item.id}
                className="w-full h-full flex justify-center items-center p-10 transition-all duration-300 scale-150  z-50 "
              >
                <div className=" -ml-12  p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                  <img
                    className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    key={item.id}
                    src={`${image_url + item.fileUrl}`}
                    alt={`${item.event}_${index}`}
                  />
                </div>
              </div>
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSlider;
