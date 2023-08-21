import React from "react";
import Librarys from "../../../../../assets/images/language-removebg-preview.png";
import InstructorImage from "../../../../../assets/images/section/Departments/Printing/Staff/Praveen.jpg";
import { FiChevronRight } from "react-icons/fi";

const Intro = [
  {
    Title: "Introduction",
    Des: "NSS launched in the year, 1969. Aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges working for a campus-community linkage.NSS unit no 127, in Institute of Printing Technology and Government Polytechnic College is functioning well from the beginning itself. We are conducting regular activities through out the year and special residential camps at December vacations. We are doing social awareness campaigns, socioeconomic surveys, campus- environmental cleaning etc every year to uplift campus- social linkage. We have an intake of 100 volunteer's for our unit, 50 each from first and second year students. We can accommodate 50 volunteer's to our special residential camps.",
    Image: Librarys,
  },
];
const Formation = [
  {
    Title: "Formation Of NSS",
    Des: "The educated youth who are expected to take the reins of administration in future are found to be unaware of the problems of the village/slum community and in certain cases are indifferent towards their needs and problems. Therefore, it is necessary to arouse the social conscience of the students, and to provide them an opportunity to work with the people in the villages and slums. It is felt that their interaction with the common villagers and slum dwellers will expose them to the realities of life and bring about a change in their social perception.",
    Image: Librarys,
  },
];

const Organization = [
  {
    Title: "NSS MOTTO",
    Des: "The Motto of The Motto of NSS Not Me but You” reflects the essence of democratic living and upholds the need for self-less service. NSS helps the students develop appreciation to other person's point of view and also show consideration to other living beings. The philosophy of the NSS is well doctrine in this motto, which underlines the belief that the welfare of an individual is ultimately dependent on the welfare of the society on the whole and therefore, the NSS volunteers shall strive for the well-being of the society.NSS Not Me but You” reflects the essence of democratic living and upholds the need for self-less service. NSS helps the students develop appreciation to other person's point of view and also show consideration to other living beings. The philosophy of the NSS is well doctrine in this motto, which underlines the belief that the welfare of an individual is ultimately dependent on the welfare of the society on the whole and therefore, the NSS volunteers shall strive for the well-being of the society.",
    Image: Librarys,
  },
];
const OFFICER = [
  {
    name: "Praveen",
    Post: "PROGRAMME OFFICER",
    imageSrc: InstructorImage,
    imageAlt: "NSS",
    href: "#",
  },
];

export default function Introduction() {
  return (
    <div
      className={
        "mx-auto grid max-w-3xl grid-cols-1 items-center    lg:max-w-[110rem] lg:grid-cols-1"
      }
    >
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
      <div
        className={
          " scale-90 justify-center items-center relative -top-[10rem] lg:flex lg:flex-col  xl:flex xl:flex-row "
        }
      >
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
