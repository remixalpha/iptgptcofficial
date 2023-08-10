import React from "react";
import { ImLab } from "react-icons/im"; // Import the lab icon from react-icons

export default function Content() {
  return (
    <div className="relative grid grid-cols-1 space-y-10 bg-orange-200 h-auto w-auto rounded-3xl mb-8 mx-auto max-w-2xl items-center gap-x-2 px-4 sm:py-10 lg:max-w-2xl lg:grid-cols-1">
      <div className="absolute top-8  left-1/2 transform -translate-x-1/2 bg-white scale-125 rounded-full w-12 h-12 flex items-center justify-center">
        {/* Add the lab icon */}
        <ImLab className="text-orange-300 text-xl" />
      </div>
      <p className="relative top-5 scale-95 text-justify text-gray-800 leading-8 text-xl min-h-[200px] flex-grow">
        Engineering (Applied) Science Lab The science lab is well furnished and
        elaborated. We have the facility of doing sufficient experiments in
        Physics and Chemistry. The labs will be highly useful for developing the
        experimental and practical skills of the students, so that they will get
        a strong foundation for their Engineering courses.
      </p>
    </div>
  );
}
