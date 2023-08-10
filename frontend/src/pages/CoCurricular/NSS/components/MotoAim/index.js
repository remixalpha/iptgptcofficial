import React from "react";

import Illu1 from "../../../../../assets/images/section/AboutUs/explain.jpg";

export default function MotoAim() {
  return (
    <div className=" relative  mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-40 gap-y-40 px-4  mb-4  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu1} alt="" className="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Mission
        </h1>
        <p className="mt-4 text-gray-900 leading-8  text-justify text-xl ">
          The main objective of NSS programme is to prepare the NSS volunteers
          for the democratic, self-disciplined and self-reliant way of life
        </p>
      </div>
    </div>
  );
}
