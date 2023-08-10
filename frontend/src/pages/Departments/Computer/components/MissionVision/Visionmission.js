import React from "react";
import Mission from "../../../../../assets/images/section/mission3.jpg";
import About from "../../../../../assets/images/section/Departments/computer/vision-removebg-preview.png";

export default function MissionVision() {
  return (
    <div className=" relative  mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-20 px-8 space-y-10   sm:px-6 sm:py-4 sm:space-y-10 lg:max-w-7xl  lg:grid-cols-2 lg:px-20  xl:max-w-7xl xl:grid-cols-2 xl:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img
          src={About}
          alt=""
          className=""
          style={{ filter: "drop-shadow(10px 8px 6px gray )" }}
        />
      </div>
      <div className="space-y-9">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Vision
        </h2>
        <p className="mt-4 text-gray-900 leading-8  text-justify text-xl ">
          To be a center of expertise producing a generation with deep technical
          problem solving and leadership skills to confront with the latest
          technology and to harness software skills to empower the society and
          environment
        </p>
      </div>

      <div className="space-y-9">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Mission
        </h2>
        <p className="mt-4 text-gray-900 leading-8 text-justify text-xl ">
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
