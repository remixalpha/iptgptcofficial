import React from "react";

import Illu1 from "../../../../../assets/images/section/AboutUs/explain.jpg";
import Illu2 from "../../../../../assets/images/section/AboutUs/tech1.jpg";

export default function MotoAim() {
  return (
    <div className=" relative  mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-40 gap-y-40 px-4 bg-white mb-4  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu1} alt="" className="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Vision
        </h1>
        <p className="mt-4 text-gray-900 leading-8  text-justify text-xl ">
          Technical institution of the highest order with a transformative
          impact on society.
        </p>
      </div>
      <div>
        <h1 className="text-4xl  font-bold tracking-tight text-gray-900 sm:text-4xl">
          Mission
        </h1>
        <p className="mt-4 text-gray-900 leading-8 text-justify text-xl ">
          Endeavour to create and sustain an academic environment that
          accelerates intellectual growth and skill acquisition.
          <br />
          <br /> Realise a collaborative relationship between the institute and
          industry.
          <br />
          <br />
          Facilitate an active involvement in the society through technology
          transfer, entrepreneurship development and societal outreach
          programmes
        </p>
      </div>
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu2} alt="" className="" />
      </div>
    </div>
  );
}
