import React, { useState } from "react";
import { PageTitle } from "../../../../../widgets/layout/page-title";
import { TeamCard } from "../../../../../widgets/cards/team-card";

import faculty1 from "../../../../../assets/images/section/Departments/Office/Abhijith.jpg";
import faculty2 from "../../../../../assets/images/section/Departments/Office/Aithru.jpg";
import faculty3 from "../../../../../assets/images/section/Departments/Office/Ajithkumar.jpg";
import faculty4 from "../../../../../assets/images/section/Departments/Office/Aneesh.jpg";
import faculty5 from "../../../../../assets/images/section/Departments/Office/Anton.jpg";
import faculty6 from "../../../../../assets/images/section/Departments/Office/Basheer.jpg";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const teamData = [
  {
    id: 1,
    name: "Abhijith",
    img: faculty1,
    position: "Faculty",
  },
  {
    id: 2,
    name: "Aithru",
    img: faculty2,
    position: "Faculty",
  },
  {
    id: 3,
    name: "Abhijith",
    img: faculty3,
    position: "Faculty",
  },
  {
    id: 4,
    name: "Abhijith",
    img: faculty4,
    position: "Faculty",
  },
  {
    id: 5,
    name: "Abhijith",
    img: faculty5,
    position: "Faculty",
  },
  {
    id: 6,
    name: "Abhijith",
    img: faculty6,
    position: "Faculty",
  },
];

export function Faculty() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <div className="px-4 pt-20 pb-48">
        <div className="container mx-auto overflow-hidden">
          <PageTitle heading="Staff"></PageTitle>
          <div className="overflow-hidden px-48 py-20  ">
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              onSlideChange={handleSlideChange}
              navigation={true}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {teamData.map(({ img, name, position }, index) => (
                <SwiperSlide
                  className={`py-12 cursor-pointer  ${
                    index === activeIndex ? "scale-150 " : ""
                  }`}
                  key={name}
                >
                  <TeamCard img={img} name={name} position={position} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faculty;
