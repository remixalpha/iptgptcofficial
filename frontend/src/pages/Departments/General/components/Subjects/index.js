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
    name: "English",
    href: "#",
    imageSrc: COMPUTER,
    imageAlt: "English",
    Des: " It is the method of human communication, either spoken or written, consisting of use of words in a structure and conventional way. The importance of this one is that it helps students to read and write well, how to use the English Language to its greatest effect and being creative with the language itself.",
  },
  {
    id: 2,
    name: "Physics",
    href: "#",
    imageSrc: ELECTRONICS,
    imageAlt: "Physics",
    Des: "Physics is a natural science based on experiments, measurements and mathematical analysis with the purpose of finding quantitative physical laws for everything from the nanoworld of the microcosmos to the planets, solar systems and galaxies that occupy the macrocosmos.",
  },
  {
    id: 3,
    name: "Chemistry",
    href: "#",
    imageSrc: PRINTING,
    imageAlt: "Chemistry",
    Des: "In the scope of its subject, chemistry occupies an intermediate position between physics and biology.It is sometimes called the central science because it provides a foundation for understanding both basic and applied scientific disciplines at a fundamental level.",
  },
  {
    id: 4,
    name: "Maths",
    href: "#",
    imageSrc: PRINTING,
    imageAlt: "Maths",
    Des: " Mathematics is the science that deals with the logic of shape, quantity and arrangement. Math is all around us, in everything we do. ... The needs of math arose based on the wants of society. The more complex a society, the more complex the mathematical needs.",
  },
  {
    id: 5,
    name: "H & PE",
    href: "#",
    imageSrc: PRINTING,
    imageAlt: "H & PE",
    Des: "Physical Education (PE) develops students' competence and confidence to take part in a range of physical activities that become a central part of their lives, both in and out of school. A high-quality PE curriculum enables all students to enjoy and succeed in many kinds of physical activity.",
  },
];
export default function Subject() {
  return (
    <div className=" bg-white w-[90rem] mx-auto mb-28  lg:px-20 scale-110 sm:py-2">
      <h1 className="text-center text-4xl pb-10 font-bold leading-8 text-gray-900">
        Subjects
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
