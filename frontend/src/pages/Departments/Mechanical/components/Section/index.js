import React from "react";
import Card from "./Card/index";
import COMPUTER from "../../../../../assets/images/section/Facilities/computer.jpg";
import ELECTRONICS from "../../../../../assets/images/section/Departments/ele.jpg";
import PRINTING from "../../../../../assets/images/section/Departments/print.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./swiper-custom.css";

const subjects = [
  {
    id: 1,
    name: "CARPENTRY",
    href: "#",
    imageSrc: COMPUTER,
    imageAlt: "CARPENTRY",
    Des: "  Carpentry is a skilled trade and a craft in which the primary work performed is the cutting, shaping and installation of building materials during the construction of buildings, ships,timber bridges, concrete formwork, etc.",
  },
  {
    id: 2,
    name: "FITTING",
    href: "#",
    imageSrc: ELECTRONICS,
    imageAlt: "FITTING",
    Des: " in engineering bench work and fitting have an important role to play to complete and finish a job in a desired accuracy. fitting is the assembling together of arts and removing metals to secure the necessary fit and may or may not be carried out at bench ot out at the bench.",
  },
  {
    id: 3,
    name: "SHEET METAL",
    href: "#",
    imageSrc: PRINTING,
    imageAlt: "SHEET METAL",
    Des: "Sheet metal work is generally regards as the working of sheet from 16 gauge down to 30 gauge with hand tools and simple machines by cutting and forming into shape the joining them by soldering riveting etc.",
  },
  {
    id: 4,
    name: "Graphics",
    href: "#",
    imageSrc: PRINTING,
    imageAlt: "Graphics",
    Des: "  The subject of 'Engineering Graphics' has become an indispensable tool for Engineers, Technocrats, Architects, Draftsmen, Surveyors, Designers and many other professionals in the recent times.",
  },
];
export default function Section() {
  return (
    <div className=" bg-white w-[90rem] mx-auto my-10  lg:px-20 scale-100 sm:py-2">
      <h1 className="text-center text-4xl pb-10 font-bold leading-8 text-gray-900">
        Sections
      </h1>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
          {subjects.map((items) => (
            <SwiperSlide key={items.id} className="py-8 px-5 ">
              <Card>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-primary group-hover:rounded-none bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[15rem]">
                    <img
                      src={items.imageSrc}
                      alt={items.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>

                  <div className="mt-4 flex justify-between p-6">
                    <div>
                      <h3 className="text-xl font-bold text-navy-700">
                        <a href={items.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {items.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-700">{items.Des}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
