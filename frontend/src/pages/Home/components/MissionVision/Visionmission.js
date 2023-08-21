import React from "react";
import Mission from "../../../../assets/images/section/Home/mission.jpg";
import About from "../../../../assets/images/section/Home/vision.jpg";

export default function MissionVision() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className=" relative -top-10 grid max-w-2xl grid-cols-1 items-center gap-x-40  gap-y-[5rem] px-12 py-40 mx-auto  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img src={About} alt="" className="" />
      </div>
      <div className="space-y-9 group">
        <h2 className=" text-gray-900 sm:text-4xl  antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3">
          Vision
        </h2>
        <span
          className={classNames(
            "absolute bottom-0 top-[20.5rem] left-[45.5rem]  h-1 bg-red-400 rounded-full transform w-0 transition-all duration-300",
            "group-hover:w-20"
          )}
        />
        <p className="mt-4  text-justify  block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800">
          Technical institution of the highest order with a transformative
          impact on society.
        </p>
      </div>

      <div className="space-y-9 ">
        <h2 className=" text-gray-900 sm:text-4xl   antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3">
          Mission
        </h2>
        <p className="mt-4  text-justify block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800">
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
