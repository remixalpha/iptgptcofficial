import React from "react";

const Intro = [
  {
    id: "1",
    Title: "INTERNATIONAL YOGA DAY",
    Des: "In connection with the International Yoga Day celebrations, excellent Yoga performance are conducting on 21 June of each year at the college auditorium. Independence Day: Independence day celebrates in a befitting manner by hoisting the National Flag and conducting various social service activities.",
  },
  {
    id: "2",
    Title: "INTERNATIONAL YOGA DAY",
    Des: "In connection with the International Yoga Day celebrations, excellent Yoga performance are conducting on 21 June of each year at the college auditorium. Independence Day: Independence day celebrates in a befitting manner by hoisting the National Flag and conducting various social service activities.",
  },
  {
    id: "3",
    Title: "INTERNATIONAL YOGA DAY",
    Des: "In connection with the International Yoga Day celebrations, excellent Yoga performance are conducting on 21 June of each year at the college auditorium. Independence Day: Independence day celebrates in a befitting manner by hoisting the National Flag and conducting various social service activities.",
  },
  {
    id: "4",
    Title: "INTERNATIONAL YOGA DAY",
    Des: "In connection with the International Yoga Day celebrations, excellent Yoga performance are conducting on 21 June of each year at the college auditorium. Independence Day: Independence day celebrates in a befitting manner by hoisting the National Flag and conducting various social service activities.",
  },
  {
    id: "5",
    Title: "INTERNATIONAL YOGA DAY",
    Des: "In connection with the International Yoga Day celebrations, excellent Yoga performance are conducting on 21 June of each year at the college auditorium. Independence Day: Independence day celebrates in a befitting manner by hoisting the National Flag and conducting various social service activities.",
  },
  {
    id: "6",
    Title: "INTERNATIONAL YOGA DAY",
    Des: "In connection with the International Yoga Day celebrations, excellent Yoga performance are conducting on 21 June of each year at the college auditorium. Independence Day: Independence day celebrates in a befitting manner by hoisting the National Flag and conducting various social service activities.",
  },
  {
    id: "7",
    Title: "INTERNATIONAL YOGA DAY",
    Des: "In connection with the International Yoga Day celebrations, excellent Yoga performance are conducting on 21 June of each year at the college auditorium. Independence Day: Independence day celebrates in a befitting manner by hoisting the National Flag and conducting various social service activities.",
  },
  {
    id: "8",
    Title: "INTERNATIONAL YOGA DAY",
    Des: "In connection with the International Yoga Day celebrations, excellent Yoga performance are conducting on 21 June of each year at the college auditorium. Independence Day: Independence day celebrates in a befitting manner by hoisting the National Flag and conducting various social service activities.",
  },
];

export default function Activities() {
  return (
    <div
      className={
        "mx-auto grid max-w-3xl  grid-cols-1  -gap-x-56  -gap-y-56 mb-[22rem] scale-90 lg:max-w-[200rem] lg:grid-cols-2  xl:max-w-[200rem] xl:grid-cols-3"
      }
    >
      {Intro.map((item) => (
        <div
          key={item.id}
          className="bg-orange-200 rounded-[3rem] p-20 scale-90   space-y-10 shadow-lg hover:scale-95 transition-all duration-300 cursor-pointer"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {item.Title}
          </h1>

          <p className="mt-4 text-justify text-gray-900 leading-8 text-xl">
            {item.Des}{" "}
          </p>
        </div>
      ))}
    </div>
  );
}
