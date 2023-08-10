import React from "react";
import HODImage from "../../../../../assets/images/section/Departments/Printing/Anoop.jpg";

const HOD = [
  {
    name: "Anoop",
    Post: "HOD",
    Qualification: "M Tech,FIE",
    imageSrc: HODImage,
    imageAlt: "Electronics HOD of IPT & GPTC Shoranur",
    href: "#",
  },
];

export default function Hod() {
  return (
    <div className="relative grid grid-cols-1 mx-auto  max-w-2xl  items-center   gap-x-2 px-4  sm:py-32 lg:max-w-7xl lg:grid-cols-2">
      <p className=" relative scale-95  text-justify text-gray-900 leading-8 text-xl ">
        Institute of Printing Technology & Govt. Polytechnic College was started
        in the year 1967. Initially it was started functioning at Technical High
        School Shoranur. Later Govt. acquired 32 acres of land and new building
        was constructed and Institution was shifted to the new premises in 1980.
        Started in the year 1967 as school of printing with an intention to
        promote the study of printing at an academic level. This is the only
        institution in Kerala having Printing Technology as an academic course
        in the diploma level. Initially the intake was for 32 students. Now it
        is turned up to 77. The faculty members included Principal, Lectures on
        concerned subject and the Lab staff. With the rapid growth of printing
        industry the institute also changed their academic profile. Semester
        system was implemented, Syllabus changed for every four years and new
        lab facilities are introduced. The present syllabus consists of subjects
        according to the changes of the industry and printing market
      </p>

      <div
        className=" lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {HOD.map((item) => (
          <div key={item.name} className="group relative ">
            <div className="relative h-[35rem] w-[30rem] overflow-hidden rounded-[3rem] bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
              {" "}
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h1
              className="mt-5 text-4xl font-semibold text-gray-900"
              style={{ textAlign: "center" }}
            >
              <a href={item.href}>
                <span className="absolute inset-0" />
                {item.name}
              </a>
            </h1>
            <p
              className="mt-1 text-xl text-gray-500"
              style={{ textAlign: "center" }}
            >
              {item.Post}
            </p>
            <p
              className="mt-1 text-sm text-gray-500"
              style={{ textAlign: "center" }}
            >
              {item.Qualification}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
