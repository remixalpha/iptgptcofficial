import React from "react";

import Illu1 from "../../../../../assets/images/section/AboutUs/explain.jpg";
import Illu2 from "../../../../../assets/images/section/AboutUs/tech1.jpg";

export default function MotoAim() {
  return (
    <div className="relative grid items-center max-w-2xl grid-cols-1 mx-8 mb-4 bg-white gap-x-40 gap-y-20 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu1} alt="" className="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Motto
        </h1>
        <p className="mt-4 text-xl leading-8 text-justify text-gray-900 ">
          Technical institution of the highest order with a transformative
          impact on society.
        </p>
      </div>

      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Aim
        </h1>
        <p className="mt-4 text-xl leading-8 text-justify text-gray-900 ">
          To Create a Human Resource of Organized, Trained and Motivated Youth,
          To Provide Leadership in all Walks of life and be Always Available for
          the Service of the Nation.
          <br />
          <br /> To Provide a Suitable Environment to Motivate the Youth to Take
          Up a Career in the Armed Forces
          <br />
          <br />
          Facilitate an active involvement in the society through technology
          transfer, entrepreneurship development and societal outreach
          programmes
        </p>
      </div>
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu2} alt="" className="" />
      </div>
    </div>
  );
}
