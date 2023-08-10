import React from "react";

const LAB = [
  {
    line: "PRE PRESS",
  },
  {
    line: "PRESS",
  },
  {
    line: "POST PRESS",
  },
  {
    line: "QUALITY CONTROL LAB",
  },
];

export default function Lab() {
  return (
    <div className=" grid grid-cols-1 mx-auto max-w-2xl items-center  gap-x-2 px-4 sm:py-32 lg:max-w-7xl lg:grid-cols-1">
      <h1 className=" flex justify-center  items-center  text-4xl mb-4 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Labs
      </h1>
      <div className=" relative space-y-10 bg-lightPrimary p-20 h-auto w-auto rounded-3xl ">
        <h2 className=" font-bold tracking-tight text-gray-900 sm:text-2xl ">
          The laboratories
        </h2>
        <ul className=" grid grid-cols-3 relative  text-gray-900 leading-8 text-start text-xl list-disc gap-x-10 space-y-2 ">
          {LAB.map((Item) => (
            <li key={Item.line} className="flex items-start  ">
              <span className="w-6 h-6 mt-1 mr-2 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              {Item.line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
