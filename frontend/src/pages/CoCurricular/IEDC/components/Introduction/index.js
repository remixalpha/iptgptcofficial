import React from "react";
import Librarys from "../../../../../assets/images/language-removebg-preview.png";
import InstructorImage from "../../../../../assets/images/section/Departments/Electronics/Asharaf.jpg";
import { FiChevronRight } from "react-icons/fi";

const Intro = [
  {
    Title: "Introduction",
    Des: "Kerala Startup Mission (KSUM) is an agency under the Kerala government working to develop an entrepreneurship culture by promoting Startups and incubating activities. Innovation And Entrepreneurship Development Centre (IEDC) are Companies which works as facilitators to achieve the vision of KSUM.",
    Image: Librarys,
  },
];
const Formation = [
  {
    Title: "Why IEDC ?",
    Des: "The Innovation and Entrepreneurship Development Centres (IEDC) are platforms set up in Engineering, Management, Arts & Science Colleges and Polytechnics with an aim to provide students an opportunity to experiment and innovate. Kerala Startup Mission has set up IEDCs in 226 institutions across the State which provide avenues for creative students to learn, collaborate and transform their innovative ideas into prototypes of viable products and services. IEDCs works as the first launch pad for a student’s entrepreneurial journey and provide them with access to cutting edge technology, world class infrastructure, high quality mentorship, early risk capital and global exposure.",
    Image: Librarys,
  },
];

const Organization = [
  {
    Title: "IEDC Organization",
    Des: "IEDC mainly focused on fostering of innovative ideas of students and also provide both the technical and financial support to implement them. IEDC is providing an Entrepreneurial eco system in the campus. IEDC is also providing additional technical skill training to its members. ",
    Image: Librarys,
  },
];
const OFFICER = [
  {
    name: "Asharaf",
    Post: "NODAL OFFICER",
    imageSrc: InstructorImage,
    imageAlt: "IEDC",
    href: "#",
  },
];

export default function Introduction() {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 items-center    lg:max-w-[110rem] lg:grid-cols-1">
      {Intro.map((item) => (
        <div
          key={item.Title}
          className="bg-lime-50 shadow-lg rounded-[4rem] p-20 -mx-20 scale-75 space-y-10 "
        >
          <div className="flex justify-center items-center scale-125  ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {item.Title}
            </h1>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-1 items-center  lg:max-w-[110rem] lg:grid-cols-2  ">
            <div className=" relative -left-10 ">
              <img src={item.Image} alt="" className="h-full w-full" />
            </div>
            <div className="space-y-10 ">
              <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
                {item.Des}{" "}
              </p>
              <div className="flex flex-row ">
                <button
                  type="submit"
                  className=" flex w-[10rem] items-center justify-center rounded-md  bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go To Gallery
                </button>{" "}
                <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer ">
                  <FiChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className=" scale-90 justify-center items-center relative -top-[10rem] lg:flex lg:flex-col  xl:flex xl:flex-row ">
        {Organization.map((item) => (
          <div
            key={item.Title}
            className="bg-lime-50 shadow-lg rounded-[4rem] p-20 -mx-20 scale-75 space-y-10 "
          >
            <div className="flex justify-center items-center scale-125  ">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {item.Title}
              </h1>
            </div>

            <div className="mx-auto grid max-w-3xl grid-cols-1 items-center  xl:max-w-[110rem]  ">
              <div className=" ">
                <img src={item.Image} alt="" className="h-full w-full" />
              </div>

              <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
                {item.Des}{" "}
              </p>
            </div>
          </div>
        ))}

        <div>
          {OFFICER.map((item) => (
            <div
              key={item.name}
              className="group relative ml-[15rem] justify-center items-center top-8 -left-[12rem]  lg:scale-90 scale-95 "
            >
              <div className="relative h-[35rem] w-[30rem] overflow-hidden rounded-lg bg-white sm:aspect-h-1  group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
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
            </div>
          ))}
        </div>
      </div>
      <div className="relative -top-32 ">
        {Formation.map((item) => (
          <div
            key={item.Title}
            className="bg-lime-50 rounded-[4rem] p-20 -mx-20 shadow-lg scale-75   "
          >
            <div className="flex justify-center items-center scale-125  ">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {item.Title}
              </h1>
            </div>

            <div className="mx-auto grid max-w-[110rem] grid-cols-1 items-center  sm:max-w-[100rem]  sm:grid-cols-1    md:max-w-[110rem]  md:grid-cols-1   lg:max-w-[110rem] lg:grid-cols-2  xl:max-w-[110rem]  xl:grid-cols-2  ">
              <div className="space-y-10 ">
                <p className="mt-4 text-justify text-gray-900 leading-8 text-xl  py-10 scale-110 sm:px-10 sm:py-10 ">
                  {item.Des}{" "}
                </p>
              </div>
              <div className=" relative  ">
                <img src={item.Image} alt="" className="h-full w-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
