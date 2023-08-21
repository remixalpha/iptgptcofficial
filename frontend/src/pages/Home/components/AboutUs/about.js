import React from "react";
import { Link } from "react-router-dom";
import About from "../../../../assets/images/section/Home/aboutus.jpg";
import { FiChevronRight } from "react-icons/fi";

export default function AboutUS() {
  return (
    <div className="mx-auto  max-w-2xl flex flex-col-reverse items-center gap-x-20  px-10 mb-10 bg-white       md:flex md:flex-col-reverse  md:max-w-7xl    lg:grid  lg:grid-cols-2 lg:max-w-7xl   xl:grid  xl:grid-cols-2 xl:max-w-7xl ">
      <div className="space-y-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About Us
        </h1>
        <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
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
            className=" flex w-[10rem] items-center justify-center rounded-md  bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Read More
          </button>{" "}
          <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer ">
            <FiChevronRight />
          </div>
        </Link>
      </div>
      <div className=" relative left-10 sm:gap-6 lg:gap-8">
        <img src={About} alt="" className="" />
      </div>
    </div>
  );
}
