import React from "react";

import Illu1 from "../../../../../assets/images/section/AboutUs/explain.jpg";
import Illu2 from "../../../../../assets/images/section/AboutUs/tech1.jpg";

export default function MotoAim() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className=" relative  grid grid-cols-1 max-w-2xl  items-center gap-x-40 gap-y-[5rem] mx-8 bg-white mb-4  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu1} alt="" className="" />
      </div>
      <div className="space-y-9 group">
        <h2 className=" text-gray-900 sm:text-4xl  antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3">
          Vision
        </h2>
        <span
          className={classNames(
            "absolute bottom-0 top-[15rem] left-[45.5rem]  h-1 bg-red-400 rounded-full transform w-0 transition-all duration-300",
            "group-hover:w-20"
          )}
        />
        <p className="mt-4  text-justify block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800">
          Transform the students into committed technical person for the socio
          economie needs of the nation.
        </p>
      </div>

      <div className="space-y-9 ">
        <h2 className=" text-gray-900 sm:text-4xl  antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3">
          Mission
        </h2>

        <p className="mt-4  text-justify block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800">
          Endeavor to stretch the itellectual and creative capacity of the
          students so as to meet the market requirements of becoming employable
          and developing entrepreneurship.
          <br />
          <br /> To impact society in transformative way by engaging with
          partners outside the traditional boarder of the college campus.
          <br />
          <br />
          To create an ambience in which new ideas, research and form leaders
          and innovators of tomorrow emerge
        </p>
      </div>
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu2} alt="" className="" />
      </div>
    </div>
  );
}
