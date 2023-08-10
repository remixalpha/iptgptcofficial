import React from "react";

import Illu1 from "../../../../../assets/images/section/AboutUs/explain.jpg";
import Illu2 from "../../../../../assets/images/section/AboutUs/tech1.jpg";

export default function MotoAim() {
  return (
    <div className=" relative  mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-40 gap-y-40 px-4 bg-white mb-4  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu1} alt="" className="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Vision
        </h1>
        <p className="mt-4 text-gray-900 leading-8  text-justify text-xl ">
          Kerala Startup Mission (KSUM) is an agency under the Kerala government
          working to develop an entrepreneurship culture by promoting Startups
          and incubating activities. Innovation And Entrepreneurship Development
          Centre (IEDC) are Companies which works as facilitators to achieve the
          vision of KSUM.
        </p>
      </div>
      <div>
        <h1 className="text-4xl  font-bold tracking-tight text-gray-900 sm:text-4xl">
          Mission
        </h1>
        <p className="mt-4 text-gray-900 leading-8 text-justify text-xl ">
          IEDC mainly focused on fostering of innovative ideas of students and
          also provide both the technical and financial support to implement
          them.
          <br />
          <br /> IEDC is providing an Entrepreneurial eco system in the campus.
          <br />
          <br />
          IEDC is also providing additional technical skill training to its
          members.
        </p>
      </div>
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu2} alt="" className="" />
      </div>
    </div>
  );
}
