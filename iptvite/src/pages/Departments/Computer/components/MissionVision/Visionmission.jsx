import React from "react";
import Mission from "../../../../../assets/images/section/Departments/computer/mission.jpg";
import Vision from "../../../../../assets/images/section/Departments/computer/vision.jpg";

export default function MissionVision() {
  return (
    <div className=" relative  mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-20 px-8 space-y-10   sm:px-6 sm:py-4 sm:space-y-10 lg:max-w-7xl  lg:grid-cols-2 lg:px-20  xl:max-w-7xl xl:grid-cols-2 xl:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Vision} alt="" className="" />
      </div>
      <div className="space-y-9 group">
        <h2 className=" text-gray-900 sm:text-4xl  antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3">
          Vision
        </h2>
        <p className="mt-4  text-justify  block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800">
          To be a center of expertise producing a generation with deep technical
          problem solving and leadership skills to confront with the latest
          technology and to harness software skills to empower the society and
          environment
        </p>
      </div>

      <div className="space-y-9">
        <h2 className=" text-gray-900 sm:text-4xl  antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3">
          Mission
        </h2>
        <p className="mt-4  text-justify  block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800">
          Developing emerging leaders in education by encouraging industrial
          interaction and societal connection with safety and environmental
          standards..<br></br>
          <br></br> Building up of infrastructure and facilities to endure with
          rapidly changing technological advancements
          <br></br>
          <br></br> Improving the morale of students with self confidence
          through technical and interactive learning.
        </p>
      </div>
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Mission} alt="" className="" />
      </div>
    </div>
  );
}
