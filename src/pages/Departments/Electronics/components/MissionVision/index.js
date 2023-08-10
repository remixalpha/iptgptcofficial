import React from "react";

import Illu1 from "../../../../../assets/images/section/AboutUs/explain.jpg";
import Illu2 from "../../../../../assets/images/section/AboutUs/tech1.jpg";

export default function MotoAim() {
  return (
    <div className=" relative  grid grid-cols-1 max-w-2xl  items-center gap-x-40 gap-y-20 mx-8 bg-white mb-4  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu1} alt="" className="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Vision
        </h1>
        <p className="mt-4 text-gray-900 leading-8  text-justify text-xl ">
          Transform the students into committed technical person for the socio
          economie needs of the nation.
        </p>
      </div>

      <div>
        <h1 className="text-4xl  font-bold tracking-tight text-gray-900 sm:text-4xl">
          Mission
        </h1>
        <p className="mt-4 text-gray-900 leading-8 text-justify text-xl ">
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
