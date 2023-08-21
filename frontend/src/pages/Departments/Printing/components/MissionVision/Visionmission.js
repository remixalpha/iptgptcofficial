import React from "react";
import Mission from "../../../../../assets/images/section/Departments/Printing/mission.jpg";
import Vision from "../../../../../assets/images/section/Departments/Printing/vision.jpg";

export default function MissionVision() {
  return (
    <div className=" relative  mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-40 gap-y-[5rem] px-4  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Vision} alt="" className=" " />
      </div>

      <div className="space-y-9">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Vision
        </h2>
        <p className="mt-4 text-gray-900 leading-8  text-justify text-xl ">
          To be a leading department in the field of printing technology that
          empower the student to meet the current and emerging prerequisite of
          the society and industry.
        </p>
      </div>

      <div className="space-y-9">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Mission
        </h2>
        <p className="mt-4 text-gray-900 leading-8 text-justify text-xl ">
          To provide the students with academic, technical and managerial skills
          along with leadership qualities.<br></br>
          <br /> Enable the student to excel in their academic pursuits, making
          them sensitive to the needs of progressive Printing Industry by
          fostering the relationship between the industry and institute.
          <br />
          <br /> To enrich intellectual and learning culture between faculties,
          students and Alumni that helps to share experience and ideas as well
          as impart ethical values.
        </p>
      </div>
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Mission} alt="" className="" />
      </div>
    </div>
  );
}
