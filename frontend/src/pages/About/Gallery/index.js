import React, { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Navbar from "../../../components/Navbar/navbar";
import Banner from "../../../assets/images/Banner/iptimage1.jpg";
import Footer from "../../../components/Footer/index";

// Backend
import { image_url, FetchRequest } from "../../../utils/agent";

import Card from "./components/Card/index";
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedTabs, setSelectedTabs] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  const handleTabsSelect = (tabs) => {
    setSelectedTabs(tabs);

    if (tabs === "All") {
      setFilteredImages(gallerys);
    } else {
      const filtered = gallerys.filter((items) => items.tabs === tabs);
      setFilteredImages(filtered);
    }
  };

  const handleImageClick = (items) => {
    setSelectedImage(items);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [gallerys, setgallerys] = useState([]);
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
    fetchImage();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function fetchImage() {
    FetchRequest("/gallery/")
      .then((res) => {
        // console.log(res.data);
        if (res.statusText === "OK") {
          console.log(res.data.doc);
          setgallerys(res.data.doc);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }

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

        <div className="absolute inset-0 flex items-center justify-center -top-[5rem] ">
          <h1
            className="text-[15rem] text-gray-50 font-bold tracking-wider opacity-30 p-4 animated-heading"
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
            className="fixed scale-150 bottom-10 right-10 cursor-pointer bg-red-400 p-2 rounded-full text-white z-50 "
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
                  selectedTabs === "All"
                    ? "bg-gray-900 text-sm  text-white rounded-full px-5 py-2 antialiased tracking-normal font-sans  font-semibold leading-[1.3]  mb-3"
                    : "bg-transparent rounded-full text-sm scale-125 text-gray-900 px-5 py-2 antialiased tracking-normal font-sans font-semibold leading-[1.3]  mb-3"
                }`}
                onClick={() => handleTabsSelect("All")}
              >
                All
              </button>
              <button
                className={`gallery-button transition ${
                  selectedTabs === "CAMPUS"
                    ? "bg-gray-900 text-sm  text-white rounded-full px-5 py-2 antialiased tracking-normal font-sans  font-semibold leading-[1.3]  mb-3"
                    : "bg-transparent rounded-full text-sm scale-125 text-gray-900 px-5 py-2 antialiased tracking-normal font-sans font-semibold leading-[1.3]  mb-3"
                }`}
                onClick={() => handleTabsSelect("CAMPUS")}
              >
                CAMPUS
              </button>
              <button
                className={`gallery-button transition ${
                  selectedTabs === "NCC"
                    ? "bg-gray-900 text-sm  text-white rounded-full px-5 py-2 antialiased tracking-normal font-sans  font-semibold leading-[1.3]  mb-3"
                    : "bg-transparent rounded-full text-sm scale-125 text-gray-900 px-5 py-2 antialiased tracking-normal font-sans font-semibold leading-[1.3]  mb-3"
                }`}
                onClick={() => handleTabsSelect("NCC")}
              >
                NCC
              </button>
              <button
                className={`gallery-button transition ${
                  selectedTabs === "NSS"
                    ? "bg-gray-900 text-sm  text-white rounded-full px-5 py-2 antialiased tracking-normal font-sans  font-semibold leading-[1.3]  mb-3"
                    : "bg-transparent rounded-full text-sm scale-125 text-gray-900 px-5 py-2 antialiased tracking-normal font-sans font-semibold leading-[1.3]  mb-3"
                }`}
                onClick={() => handleTabsSelect("NSS")}
              >
                NSS
              </button>
              <button
                className={`gallery-button transition ${
                  selectedTabs === "HOSTEL"
                    ? "bg-gray-900 text-sm  text-white rounded-full px-5 py-2 antialiased tracking-normal font-sans  font-semibold leading-[1.3]  mb-3"
                    : "bg-transparent rounded-full text-sm scale-125 text-gray-900 px-5 py-2 antialiased tracking-normal font-sans font-semibold leading-[1.3]  mb-3"
                }`}
                onClick={() => handleTabsSelect("HOSTEL")}
              >
                HOSTEL
              </button>
              <button
                className={`gallery-button transition ${
                  selectedTabs === "AUDITORIUM"
                    ? "bg-gray-900 text-sm  text-white rounded-full px-5 py-2 antialiased tracking-normal font-sans  font-semibold leading-[1.3]  mb-3"
                    : "bg-transparent rounded-full text-sm scale-125 text-gray-900 px-5 py-2 antialiased tracking-normal font-sans font-semibold leading-[1.3]  mb-3"
                }`}
                onClick={() => handleTabsSelect("AUDITORIUM")}
              >
                AUDITORIUM
              </button>
              <button
                className={`gallery-button transition ${
                  selectedTabs === "CANTEEN"
                    ? "bg-gray-900 text-sm  text-white rounded-full px-5 py-2 antialiased tracking-normal font-sans  font-semibold leading-[1.3]  mb-3"
                    : "bg-transparent rounded-full text-sm scale-125 text-gray-900 px-5 py-2 antialiased tracking-normal font-sans font-semibold leading-[1.3]  mb-3"
                }`}
                onClick={() => handleTabsSelect("CANTEEN")}
              >
                CANTEEN
              </button>
              <button
                className={`gallery-button transition ${
                  selectedTabs === "WORKSHOP"
                    ? "bg-gray-900 text-sm  text-white rounded-full px-5 py-2 antialiased tracking-normal font-sans  font-semibold leading-[1.3]  mb-3"
                    : "bg-transparent rounded-full text-sm scale-125 text-gray-900 px-5 py-2 antialiased tracking-normal font-sans font-semibold leading-[1.3]  mb-3"
                }`}
                onClick={() => handleTabsSelect("WORKSHOP")}
              >
                WORKSHOP
              </button>
              <button
                className={`gallery-button transition ${
                  selectedTabs === "ASAP"
                    ? "bg-gray-900 text-sm  text-white rounded-full px-5 py-2 antialiased tracking-normal font-sans  font-semibold leading-[1.3]  mb-3"
                    : "bg-transparent rounded-full text-sm scale-125 text-gray-900 px-5 py-2 antialiased tracking-normal font-sans font-semibold leading-[1.3]  mb-3"
                }`}
                onClick={() => handleTabsSelect("ASAP")}
              >
                ASAP
              </button>
              <button
                className={`gallery-button transition ${
                  selectedTabs === "LIBRARY"
                    ? "bg-gray-900 text-sm  text-white rounded-full px-5 py-2 antialiased tracking-normal font-sans  font-semibold leading-[1.3]  mb-3"
                    : "bg-transparent rounded-full text-sm scale-125 text-gray-900 px-5 py-2 antialiased tracking-normal font-sans font-semibold leading-[1.3]  mb-3"
                }`}
                onClick={() => handleTabsSelect("LIBRARY")}
              >
                LIBRARY
              </button>
              <button
                className={`gallery-button transition  ${
                  selectedTabs === "SEMINAR HALL"
                    ? "bg-gray-900 text-sm  text-white rounded-full px-5 py-2 antialiased tracking-normal font-sans  font-semibold leading-[1.3]  mb-3"
                    : "bg-transparent rounded-full text-sm scale-125 text-gray-900 px-5 py-2 antialiased tracking-normal font-sans font-semibold leading-[1.3]  mb-3"
                }`}
                onClick={() => handleTabsSelect("SEMINAR HALL")}
              >
                SEMINAR HALL
              </button>
            </div>
          </Card>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 relative -top-[8rem] px-10  ">
            {filteredImages.map((item, index) => (
              <img
                key={item.id}
                src={`${image_url + item.fileUrl}`}
                alt={`${item.event}_${index}`}
                className="w-full h-full object-cover cursor-pointer rounded-md "
                onClick={() => handleImageClick(`${image_url + item.fileUrl}`)}
              />
            ))}
          </div>

          {selectedImage && (
            <div className="fixed -top-[5rem]  left-0 w-full h-full mt-[5rem]  flex justify-center items-center z-50 0 ">
              <div
                className="fixed h-full w-full inset-0 hidden transition-opacity bg-gray-400 bg-opacity-75 md:block"
                style={{ backdropFilter: "blur(8px)" }}
              />
              <div className="max-w-4xl max-h-4xl relative shadow-lg ">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-full object-contain"
                />
              </div>
              <button
                onClick={handleCloseModal}
                className="absolute top-10 right-10 text-gray-800 cursor-pointer bg-transparent scale-150 h-8 w-8 p-2 bg-white shadow-lg rounded-primary  "
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
