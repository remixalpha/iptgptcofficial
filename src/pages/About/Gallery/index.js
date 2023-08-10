import React, { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Navbar from "../../../components/Navbar/navbar";
import Banner from "../../../assets/images/Banner/iptimage1.jpg";
import Footer from "../../../components/Footer/index";
import IPTIMAGE1 from "../../../assets/images/section/Gallery/iptimage1.jpg";
import IPTIMAGE2 from "../../../assets/images/section/Gallery/iptimage2.jpg";
import IPTIMAGE3 from "../../../assets/images/section/Gallery/iptimage3.jpg";
import IPTIMAGE4 from "../../../assets/images/section/Gallery/iptimage4.jpg";
import IPTIMAGE5 from "../../../assets/images/section/Gallery/iptimage5.jpg";
import IPTIMAGE6 from "../../../assets/images/section/Gallery/iptimage6.jpg";
import IPTIMAGE7 from "../../../assets/images/section/Gallery/iptimage7.jpg";
import IPTIMAGE8 from "../../../assets/images/section/Gallery/iptimage8.jpg";
import IPTIMAGE9 from "../../../assets/images/section/Gallery/iptimage9.png";
import IPTIMAGE10 from "../../../assets/images/section/Gallery/iptimage10.jpg";
import IPTIMAGE11 from "../../../assets/images/section/Gallery/iptimage11.jpg";
import IPTIMAGE12 from "../../../assets/images/section/Gallery/iptimage12.jpg";
import IPTIMAGE13 from "../../../assets/images/section/Gallery/iptimage13.jpg";
import IPTIMAGE14 from "../../../assets/images/section/Gallery/iptimage14.jpg";
import IPTIMAGE15 from "../../../assets/images/section/Gallery/iptimage15.jpg";
import IPTIMAGE16 from "../../../assets/images/section/Gallery/iptimage16.jpg";
import IPTIMAGE17 from "../../../assets/images/section/Gallery/iptimage17.jpg";
import IPTIMAGE18 from "../../../assets/images/section/Gallery/iptimage18.jpeg";
import IPTIMAGE19 from "../../../assets/images/section/Gallery/iptimage19.jpg";
import IPTIMAGE20 from "../../../assets/images/section/Gallery/iptimage20.jpg";
import IPTIMAGE21 from "../../../assets/images/section/Gallery/iptimage21.jpg";
import IPTIMAGE22 from "../../../assets/images/section/Gallery/iptimage22.jpg";
import IPTIMAGE23 from "../../../assets/images/section/Gallery/iptimage23.jpg";
import IPTIMAGE24 from "../../../assets/images/section/Gallery/iptimage24.jpg";
import IPTIMAGE25 from "../../../assets/images/section/Gallery/iptimage25.jpg";

import Card from "./components/Card/index";
const Gallery = () => {
  // Sample image URLs
  const images = [
    {
      src: IPTIMAGE1,
      category: "IPT",
    },
    {
      src: IPTIMAGE2,
      category: "IPT",
    },
    {
      src: IPTIMAGE3,
      category: "IPT",
    },
    {
      src: IPTIMAGE4,
      category: "IPT",
    },
    {
      src: IPTIMAGE5,
      category: "IPT",
    },
    {
      src: IPTIMAGE6,
      category: "IPT",
    },
    {
      src: IPTIMAGE7,
      category: "IPT",
    },
    {
      src: IPTIMAGE8,
      category: "IPT",
    },
    {
      src: IPTIMAGE9,
      category: "IPT",
    },
    {
      src: IPTIMAGE10,
      category: "NCC",
    },
    {
      src: IPTIMAGE11,
      category: "NCC",
    },
    {
      src: IPTIMAGE12,
      category: "NCC",
    },
    {
      src: IPTIMAGE13,
      category: "NCC",
    },
    {
      src: IPTIMAGE14,
      category: "NCC",
    },
    {
      src: IPTIMAGE15,
      category: "NCC",
    },
    {
      src: IPTIMAGE16,
      category: "NSS",
    },
    {
      src: IPTIMAGE17,
      category: "NSS",
    },
    {
      src: IPTIMAGE18,
      category: "NSS",
    },
    {
      src: IPTIMAGE19,
      category: "HOSTEL",
    },
    {
      src: IPTIMAGE20,
      category: "AUDITORIUM",
    },
    {
      src: IPTIMAGE21,
      category: "CANTEEN",
    },
    {
      src: IPTIMAGE22,
      category: "WORKSHOP",
    },
    {
      src: IPTIMAGE23,
      category: "ASAP",
    },
    {
      src: IPTIMAGE24,
      category: "LIBRARY",
    },
    {
      src: IPTIMAGE25,
      category: "SEMINAR HALL",
    },

    // Add more image URLs here
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(images);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredImages(images);
    } else {
      const filtered = images.filter((image) => image.category === category);
      setFilteredImages(filtered);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const animationDistance = Math.min(0.2 * scrollY, 100);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowScrollToTop(position > 300);
      setScrollY(position);
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
        <img
          className=" relative -top-[6rem] h-[25rem] w-full object-cover "
          src={Banner}
          alt=""
        />
        <div className="absolute inset-3 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center -top-[5rem] ">
          <h1
            className="text-[15rem] text-gray-50 font-bold tracking-wider opacity-30 bg-black p-4 rounded-lg animated-heading"
            style={{ transform: `translateY(-${animationDistance}px)` }}
          >
            GALLERY
          </h1>
        </div>
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

        <div className="gallery-container relative p-5  ">
          <Card extra="relative -top-[10rem]  p-6 mb-5 mx-[14rem] ">
            <div className="gallery-buttons flex flex-row justify-center items-center gap-4 ">
              <button
                className={`gallery-button transition ${
                  selectedCategory === "All"
                    ? "bg-navy-900 text-sm font-extrabold text-white rounded-full px-5 py-2 "
                    : "bg-transparent rounded-full text-sm font-extrabold scale-125 text-navy-900 px-5 py-2 "
                }`}
                onClick={() => handleCategorySelect("All")}
              >
                All
              </button>
              <button
                className={`gallery-button transition ${
                  selectedCategory === "IPT"
                    ? "bg-navy-900 text-sm font-extrabold text-white rounded-full px-5 py-2 "
                    : "bg-transparent rounded-full text-sm font-extrabold scale-125 text-navy-900 px-5 py-2 "
                }`}
                onClick={() => handleCategorySelect("IPT")}
              >
                IPT
              </button>
              <button
                className={`gallery-button transition ${
                  selectedCategory === "NCC"
                    ? "bg-navy-900 text-sm font-extrabold text-white rounded-full px-5 py-2 "
                    : "bg-transparent rounded-full text-sm font-extrabold scale-125 text-navy-900 px-5 py-2 "
                }`}
                onClick={() => handleCategorySelect("NCC")}
              >
                NCC
              </button>
              <button
                className={`gallery-button transition ${
                  selectedCategory === "NSS"
                    ? "bg-navy-900 text-sm font-extrabold text-white rounded-full px-5 py-2 "
                    : "bg-transparent rounded-full text-sm font-extrabold scale-125 text-navy-900 px-5 py-2 "
                }`}
                onClick={() => handleCategorySelect("NSS")}
              >
                NSS
              </button>
              <button
                className={`gallery-button transition ${
                  selectedCategory === "HOSTEL"
                    ? "bg-navy-900 text-sm font-extrabold text-white rounded-full px-5 py-2 "
                    : "bg-transparent rounded-full text-sm font-extrabold scale-125 text-navy-900 px-5 py-2 "
                }`}
                onClick={() => handleCategorySelect("HOSTEL")}
              >
                HOSTEL
              </button>
              <button
                className={`gallery-button transition ${
                  selectedCategory === "AUDITORIUM"
                    ? "bg-navy-900 text-sm font-extrabold text-white rounded-full px-5 py-2 "
                    : "bg-transparent rounded-full text-sm font-extrabold scale-125 text-navy-900 px-5 py-2 "
                }`}
                onClick={() => handleCategorySelect("AUDITORIUM")}
              >
                AUDITORIUM
              </button>
              <button
                className={`gallery-button transition ${
                  selectedCategory === "CANTEEN"
                    ? "bg-navy-900 text-sm font-extrabold text-white rounded-full px-5 py-2 "
                    : "bg-transparent rounded-full text-sm font-extrabold scale-125 text-navy-900 px-5 py-2 "
                }`}
                onClick={() => handleCategorySelect("CANTEEN")}
              >
                CANTEEN
              </button>
              <button
                className={`gallery-button transition ${
                  selectedCategory === "WORKSHOP"
                    ? "bg-navy-900 text-sm font-extrabold text-white rounded-full px-5 py-2 "
                    : "bg-transparent rounded-full text-sm font-extrabold scale-125 text-navy-900 px-5 py-2 "
                }`}
                onClick={() => handleCategorySelect("WORKSHOP")}
              >
                WORKSHOP
              </button>
              <button
                className={`gallery-button transition ${
                  selectedCategory === "ASAP"
                    ? "bg-navy-900 text-sm font-extrabold text-white rounded-full px-5 py-2 "
                    : "bg-transparent rounded-full text-sm font-extrabold scale-125 text-navy-900 px-5 py-2 "
                }`}
                onClick={() => handleCategorySelect("ASAP")}
              >
                ASAP
              </button>
              <button
                className={`gallery-button transition ${
                  selectedCategory === "LIBRARY"
                    ? "bg-navy-900 text-sm font-extrabold text-white rounded-full px-5 py-2 "
                    : "bg-transparent rounded-full text-sm font-extrabold scale-125 text-navy-900 px-5 py-2 "
                }`}
                onClick={() => handleCategorySelect("LIBRARY")}
              >
                LIBRARY
              </button>
              <button
                className={`gallery-button transition  ${
                  selectedCategory === "SEMINAR HALL"
                    ? "bg-navy-900 text-sm font-extrabold text-white rounded-full px-5 py-2 "
                    : "bg-transparent rounded-full text-sm font-extrabold scale-125 text-navy-900 px-5 py-2 "
                }`}
                onClick={() => handleCategorySelect("SEMINAR HALL")}
              >
                SEMINAR HALL
              </button>
            </div>
          </Card>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 relative -top-[8rem] px-10  ">
            {filteredImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`${index + 1}`}
                className="w-full h-full object-cover cursor-pointer rounded-md "
                onClick={() => handleImageClick(image.src)}
              />
            ))}
          </div>
          {selectedImage && (
            <div class="fixed top-0 left-0 w-full h-full mt-[5rem] scale-75 flex justify-center items-center">
              <img
                src={selectedImage}
                alt="Selected"
                className="relative max-w-6xl max-h-6xl object-contain  "
              />
              <button
                onClick={handleCloseModal}
                className=" relative -right-[4rem] -top-[24rem] text-white cursor-pointer bg-transparent scale-150 h-8 w-8 p-2 bg-Third rounded-full "
              >
                <IoClose />
              </button>
            </div>
          )}
        </div>

        <div className=" ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
