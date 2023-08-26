import React, { useState } from "react";
import Mechanical from "../../../../../assets/images/section/Departments/Workshop/workshop.jpg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const Content = [
  {
    id: 1,
    Des: "        Mechanical Engineering Workshop is the branch of science and technology         through which we develop or only things which is beneficial for mankind         Workshop is the place where practical work has been undertaken basic         training on fitting welding carpentry sheet metal are given in         engineering workshop.",
  },
];

export default function Contents() {
  const [expandedSubjects, setExpandedSubjects] = useState([]);

  const toggleDescription = (id) => {
    if (expandedSubjects.includes(id)) {
      setExpandedSubjects(expandedSubjects.filter((item) => item !== id));
    } else {
      setExpandedSubjects([...expandedSubjects, id]);
    }
  };
  return (
    <div className="relative grid grid-cols-1 space-y-10  h-auto w-auto mb-8  mx-auto  max-w-2xl  items-center  gap-x-2 px-4  sm:py-10 lg:max-w-7xl lg:grid-cols-2">
      <div className="relative h-[35rem] w-[30rem] overflow-hidden rounded-[3rem] bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
        <img
          src={Mechanical}
          alt="General"
          className="h-full w-full object-cover object-center"
        />
      </div>
      {Content.map((items) => (
        <div key={items.id}>
          <p className="mt-4 text-justify  block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800  border rounded-primary p-8  ">
            {expandedSubjects.includes(items.id)
              ? items.Des
              : `${items.Des.substring(0, 1100)} ...`}
          </p>

          {items.Des.length > 100 && (
            <button
              onClick={() => toggleDescription(items.id)}
              className="self-end text-navy-900 font-bold  focus:outline-none relative -top-5 -right-[35rem] z-50 hover:-top-7 transition-all ease-in-out duration-300 "
            >
              {expandedSubjects.includes(items.id) ? (
                <div className="bg-gray-900 text-white rounded-full h-10 w-10 p-3  ">
                  <IoIosArrowUp />
                </div>
              ) : (
                <div className="bg-gray-900 text-white rounded-full h-10 w-10 p-3  ">
                  <IoIosArrowDown />
                </div>
              )}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
