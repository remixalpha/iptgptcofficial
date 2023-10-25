import { useState, useEffect } from "react";
import "./style.css";
//Home page images
import Banner1 from "../../../../assets/images/Banner/ipt banner 2.jpeg";
import Banner2 from "../../../../assets/images/Banner/ipt banner 3.jpeg";
import Banner3 from "../../../../assets/images/Banner/iptimage1.jpg";
import Logo from "../../../../assets/images/logos/iptlogomin.png";

import Opening from "../Open-Close";

import { IoMdNotificationsOutline } from "react-icons/io";

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
  const [isContentVisible, setIsContentVisible] = useState(true);

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
            className="relative -top-[6rem] min-h-screen w-full object-cover object-center"
            src={banners[currentImage]}
            alt=""
          />
        </div>
      </div>
      <div className="absolute inset-0 grid grid-cols-2 z-20 ">
        {/* Notification */}
        <div className="relative flex items-center justify-center w-[40rem] min-h-screen -top-[18rem] lg:-top-24 right-[10rem] lg:-left-20 overflow-y-scroll container scale-50 lg:scale-75 transition-all duration-300 z-40">
          <button
            onClick={() => setIsContentVisible(!isContentVisible)}
            className="flex items-center justify-center h-20 w-20 absolute top-40 left-20 lg:mt-10 lg:top-0 lg:left-4 backdrop-blur-lg opacity-70 bg-white rounded-full shadow-xl cursor-pointer z-40 "
          >
            <div className="text-3xl">
              <IoMdNotificationsOutline />
            </div>
          </button>

          <div className="relative flex flex-col space-y-10 lg:px-2 lg:py-4 max-h-screen ">
            {isContentVisible &&
              notifications.slice(0, currentIndex + 1).map((item, index) => (
                <div
                  key={index}
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
                        target=""
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
            <div className="z-30 flex items-center justify-center w-full h-full p-10 transition-all duration-300">
              <div
                className="fixed mb-24 transition-all duration-300 duration-300transition-all "
                style={{ transform: `translateY(-${animationDistance}px)` }}
              >
                <Opening />
              </div>
              <h1 className="text-white text-center opacity-50 antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] xl:text-[15rem] ">
                IPT GPTC
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {Gallerys.map((item, index) => (
              <div
                key={index * 3}
                className="z-50 flex items-center justify-center w-full h-full p-10 transition-all duration-300 scale-50 md:scale-150 "
              >
                <div className="p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
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
