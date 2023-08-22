import React from "react";
import { Link } from "react-router-dom";
import About from "../../../../assets/images/section/Home/aboutus.jpg";
import { FiChevronRight } from "react-icons/fi";

export default function AboutUS() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="mx-auto  max-w-2xl flex flex-col-reverse items-center gap-x-20  px-10 mb-10 bg-white    md:max-w-7xl  lg:grid  lg:grid-cols-2 lg:max-w-7xl   xl:grid  xl:grid-cols-2 xl:max-w-7xl ">
      <div className=" group space-y-10 border  rounded-primary p-8 ">
        <h1 className=" text-gray-900 sm:text-4xl antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3">
          About Us
        </h1>
        <span
          className={classNames(
            "absolute bottom-0 top-10 left-[24.5rem]  h-1 bg-red-400 rounded-full transform w-0 transition-all duration-300",
            "group-hover:w-20"
          )}
        />
        <p className="mt-4 text-justify  block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800 ">
          Nestled within a luscious green forest cover stretching over
          kilometres, Institute of Printing Technology and Government
          Polytechnic College was established in 1967 by the Govt. of Kerala
          under the department of Technical Education and is approved by AICTE
          (Permanent ID: 1-474656361) and affiliated to SBTE (Affiliation No.
          SBTE101901). What started as an Institute of Printing Technology,
          developed and evolved to be one of the major centres of excellence in
          Technical Education with the incorporation of the Department of
          Electronics Engineering in 1987 and the Department of Computer
          Engineering in 1989. It has the privilege of being the only Institute
          in the entire state which offers a three-year Diploma Programme in
          Printing Technology.
        </p>
        <Link to="/about" className="flex flex-row ">
          <button
            type="submit"
            className="group flex w-[10rem] items-center justify-center rounded-md  bg-red-400 px-8 py-3 text-base font-medium text-white hover:bg-gray-800  transition delay-150 duration-300 ease-in-out "
          >
            Read More
          </button>
          <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer group-hover:right-1 transition-all duration-300 ">
            <FiChevronRight />
          </div>
        </Link>
      </div>
      <div className=" relative xl:left-10 sm:gap-6 lg:gap-8">
        <img src={About} alt="" className="" />
      </div>
    </div>
  );
}
