import React from "react";

import Illu1 from "../../../../../assets/images/section/AboutUs/explain.jpg";
import Illu2 from "../../../../../assets/images/section/AboutUs/tech1.jpg";

export default function About() {
  return (
    <div className=" relative  mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-40 gap-y-40 px-4 bg-white  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu1} alt="" className="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          WHAT ARE WE ?
        </h1>
        <p className="mt-4 text-gray-900 leading-8  text-justify text-xl ">
          A Team of highly professional and hardworking employees who cordially
          perform their respected duties under the supervision of a
          Superintendent and the authority of the honourable Principal of this
          institution. This office holds up all the integrity and responsibility
          this institution demands as well as offers all the services with at
          most professionalism.
        </p>
      </div>
      <div>
        <h1 className="text-4xl  font-bold tracking-tight text-gray-900 sm:text-4xl">
          WHAT WE SERVE ?
        </h1>
        <p className="mt-4 text-gray-900 leading-8 text-justify text-xl ">
          Service is a part of Duty, Not an offering this remains the undeniable
          motto of this office and each staff taking responsibility one after
          the other holds the spirit of making the work at office as a team
          effort rather than fulfilling it as individual work.
          <br />
          <br /> We the whole department on behalf of the respected Principal
          who Heads Up for the responsibilities and leads this team from the
          front are always prepared to serve our beloved students and the
          designated faculties of this institution
        </p>
      </div>
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu2} alt="" className="" />
      </div>
    </div>
  );
}
