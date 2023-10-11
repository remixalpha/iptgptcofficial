import React, { useState, useEffect } from "react";
import { PageTitle } from "../../../../../widgets/layout/page-title";
import { TeamCard } from "../../../../../widgets/cards/team-card";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { image_url, postLogin } from "../../../../../utils/agent";

export function Faculty() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [Staffs, setStaffs] = useState([]);
  const [deptId, setDeptId] = useState("64bad26c578e4a044eb886a1");
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  // Backend
  // Fetching HOD data
  function fetchStaff() {
    postLogin("/staff/")
      .then((res) => {
        // console.log(res.data);
        if (res.statusText === "OK") {
          console.log(res.data.doc);
          setStaffs(res.data.doc);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }

  useEffect(() => {
    fetchStaff();
  }, []);

  const filteredStaff = Staffs.filter((item) => item.dept === deptId);

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
              {filteredStaff.map(({ img, name, position, fileUrl }, index) => (
                <SwiperSlide
                  className={`py-12 cursor-pointer  ${
                    index === activeIndex ? "scale-150 " : ""
                  }`}
                  key={name}
                >
                  <TeamCard
                    img={`${image_url + fileUrl}`}
                    name={name}
                    position={position}
                  />
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
