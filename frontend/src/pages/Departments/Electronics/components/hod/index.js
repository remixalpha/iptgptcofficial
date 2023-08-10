import React from "react";
import HODImage from "../../../../../assets/images/section/Departments/Electronics/Anjana.jpg";

const HOD = [
  {
    name: "Anjana",
    Post: "HOD",
    Qualification: "M Tech,FIE",
    imageSrc: HODImage,
    imageAlt: "Electronics HOD of IPT & GPTC Shoranur",
    href: "#",
  },
];

export default function Hod() {
  return (
    <div className="relative flex flex-col-reverse  mx-auto  max-w-2xl  items-center   gap-x-2 px-4  sm:py-32 lg:max-w-7xl lg:grid lg:grid-cols-2">
      <p className=" relative scale-95  text-justify text-gray-900 leading-8 text-xl ">
        Electronics Department established in the year 1988. The annual intake
        is 60 with an additional 10% lateral entry students at second year
        onwards. We are following Outcome Based Education. The teaching
        methodology combines the standard methods of education lecturers,
        tutorials, practical using various soft wares, written assignments,
        tests, project work and students presentations. The students undergo in
        plant training at various industries, like BSNL KELTRON Doordharsan, All
        India Radio etc. Programs are conducted for students under finishing
        school and visiting faculty schemes to cope with present industrial
        requirements. Also there are classes under scholor support programs to
        train accademically weaker students. Entrepreneurship development
        activities are conducting under IEDC. The Electronics Association of the
        department is one of the most vibrant association in college. The
        complete planning and execution of the activities of the association is
        carried out by the students in consultation with the faculty members.
        The main motivation is to inculate a sense of responsibility, leadership
        qualities, team management and practical experience of an event
        management for the overall personality development of the students. The
        end result of any program is the placement and majority of our students
        are placed in reputed organisations. Creating an engaged, supportive
        alumni network is crucial to every department's success. Our Alumni play
        an active role in voluntary programs like mentoring students in their
        areas of expertise and best practices in a given field.
      </p>

      <div
        className="mb-4  lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {HOD.map((item) => (
          <div key={item.name} className="group relative ">
            <div className="relative h-[35rem] w-[30rem] overflow-hidden rounded-[3rem] bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
              {" "}
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h1
              className="mt-5 text-4xl font-semibold text-gray-900"
              style={{ textAlign: "center" }}
            >
              <a href={item.href}>
                <span className="absolute inset-0" />
                {item.name}
              </a>
            </h1>
            <p
              className="mt-1 text-xl text-gray-500"
              style={{ textAlign: "center" }}
            >
              {item.Post}
            </p>
            <p
              className="mt-1 text-sm text-gray-500"
              style={{ textAlign: "center" }}
            >
              {item.Qualification}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
