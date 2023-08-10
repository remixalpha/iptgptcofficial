import React from "react";
import General from "../../../../../assets/images/section/Facilities/canteen.jpg";
export default function Content() {
  return (
    <div className="relative grid grid-cols-1 space-y-10  h-auto w-auto mb-8  mx-auto  max-w-2xl  items-center  gap-x-2 px-4  sm:py-10 lg:max-w-7xl lg:grid-cols-2">
      <div className="relative h-[35rem] w-[30rem] overflow-hidden rounded-[3rem] bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
        {" "}
        <img
          src={General}
          alt="General"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <p className="relative scale-95  text-justify text-gray-800 leading-8 text-xl min-h-[200px] flex-grow">
        Mechanical Engineering Workshop is the branch of science and technology
        through which we develop or only things which is beneficial for mankind
        Workshop is the place where practical work has been undertaken basic
        training on fitting welding carpentry sheet metal are given in
        engineering workshop.
      </p>
    </div>
  );
}
