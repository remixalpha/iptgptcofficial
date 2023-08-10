import { useState } from "react";

import Illu1 from "../../../../../assets/images/section/AboutUs/explain.jpg";
import Illu2 from "../../../../../assets/images/section/AboutUs/tech1.jpg";
import Illu3 from "../../../../../assets/images/section/AboutUs/creative.jpg";
import Illu4 from "../../../../../assets/images/section/AboutUs/alumine.jpg";
import Illu5 from "../../../../../assets/images/section/AboutUs/distance.jpg";
export default function About() {
  return (
    <div className=" relative -top-10 mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-40 gap-y-40 px-4 bg-white  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu1} alt="" className="" />
      </div>

      <p className="mt-4 text-gray-900 leading-8  text-justify text-xl ">
        Nestled within a luscious green forest cover stretching over kilometres,
        Institute of Printing Technology and Government Polytechnic College was
        established in 1967 by the Govt. of Kerala under the department of
        Technical Education and is approved by AICTE (Permanent ID: 1-474656361)
        and affiliated to SBTE (Affiliation No.: SBTE101901).
      </p>

      <p className="mt-4 text-gray-900 leading-8 text-justify text-xl ">
        What started as an Institute of Printing Technology, developed and
        evolved to be one of the major centres of excellence in Technical
        Education with the incorporation of the Department of Electronics
        Engineering in 1987 and the Department of Computer Engineering in 1989.
        It has the privilege of being the only Institute in the entire state
        which offers a three-year Diploma Programme in Printing Technology.
      </p>

      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu2} alt="" className="" />
      </div>

      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu3} alt="" className="" />
      </div>

      <p className="mt-4 text-gray-900 leading-8  text-justify text-xl ">
        Surrounded on all sides by historic centres and icons of culture and
        education such as the Kerala Kalamandalam at Cheruthuruthi, deemed to be
        University of Art and Culture, the Regional Agricultural Research
        Station (RARS)- Kerala Agricultural University and the SNGS College at
        Pattambi, the birth place of the renowned Malayalam poet, performer,
        satirist and inventor of the local art form of Ottamthullal, Kalakkathu
        Kunchan Nambiar and the celebrated Nila river, the institution has been
        a landmark in the academic and technical progress of the region.
      </p>

      <p className="mt-4 text-gray-900 leading-8 text-justify text-xl ">
        Needless to say, the college is particularly proud of its Alumni
        Association that comprises of many distinguished personalities including
        Vice-chancellors of Universities and Engineers at leading companies like
        the Microsoft. An active and vibrant Parent Teacher Association goes
        hand in hand to guarantee the comprehensive development of the learners.
        The Skill Development programmes by ASAP (Additional Skill Acquisition
        Programme, a joint initiative of General and Higher Education
        Departments, Kerala) that mimics a Community College and Continuing
        Education programmes like the CCEK ( Centre for Continuing Education
        Kerala) ensure that the college gives back to the community.
      </p>

      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu4} alt="" className="" />
      </div>

      <div className=" sm:gap-6 lg:gap-8">
        <img src={Illu5} alt="" className="" />
      </div>

      <p className="mt-4 text-gray-900 leading-8  text-justify text-xl ">
        The campus is well connected by air, railway and road transport and can
        boast of the Shoranur Railway Station, one of the major railway
        junctions in the state and the Pattambi Railway Station nearby.
      </p>
    </div>
  );
}
