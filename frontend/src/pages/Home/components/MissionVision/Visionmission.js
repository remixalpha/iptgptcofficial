import { useState } from "react";
import Mission from "../../../../assets/images/section/Home/mission.jpg";
import About from "../../../../assets/images/section/Home/vision.jpg";

export default function MissionVision() {
  return (
    <div className=" relative -top-10 mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-40  gap-y-[5rem] px-4   sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img src={About} alt="" className="" />
      </div>
      <div className="space-y-9">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Vision
        </h2>
        <p className="mt-4 text-gray-900 leading-8  text-justify text-xl ">
          Technical institution of the highest order with a transformative
          impact on society.
        </p>
      </div>

      <div className="space-y-9 ">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Mission
        </h2>
        <p className="mt-4 text-gray-900 leading-8 text-justify text-xl ">
          Endeavor to stretch the itellectual and creative capacity of the
          students so as to meet the market requirements of becoming employable
          and developing entrepreneurship.<br></br>
          <br></br> To impact society in transformative way by engaging with
          partners outside the traditional boarder of the college campus.
          <br></br>
          <br></br> To create an ambience in which new ideas, research and form
          leaders and innovators of tomorrow emerge.
        </p>
      </div>
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Mission} alt="" className="" />
      </div>
    </div>
  );
}
