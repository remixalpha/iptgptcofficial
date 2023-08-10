import { useState } from "react";
import HODImage from "../../../../../assets/images/section/Departments/computer/kadharsir.jpeg";

const HOD = [
  {
    name: "Kadhar",
    Post: "HOD",
    Qualification: "M Tech,FIE",
    imageSrc: HODImage,
    imageAlt: "Electronics HOD of IPT & GPTC Shoranur",
    href: "#",
  },
];

export default function Hod() {
  return (
    <div className="relative grid grid-cols-1 mx-auto space-y-10  max-w-2xl  items-center mb-20   gap-x-2 px-4 sm:mb-20   md:max-w-7xl md:grid-cols-1    lg:max-w-7xl lg:grid-cols-2 xl:max-w-7xl xl:grid-cols-2">
      <p className=" relative scale-95  text-justify text-gray-900 leading-8 text-xl ">
        Computer Engineering Department was established in 1989. We have an
        annual intake of 60 with additional 10% for lateral entry students. Our
        laboratories are well equipped with new generation Computers and
        softwares to endure students with rapidly changing technologies. The
        Department guides and molds the students to become eminent computer
        engineers who have sound technical and management skills. Students are
        given opportunities to develop their personality along with technical
        skills. Department highly promote and provides support to student's
        innovative ideas. Department organises Industrial visits at various
        Companies that have high turnover. The students are also provided with
        various training to develop soft skill, communication skill, teamwork
        and lifelong learning skill as part of ASAP. As the learning method is
        being outcome based which makes the transition effortless from
        institution to industry. The Computer Engineering Association conducts
        and co-ordinates various programs like seminars, exhibitions etc. In
        order to gather ideas from the industry. the association conducts
        various industry interaction programmes. It also demands students to
        present papers on various topics during association meetings to make
        sure that they are actively participating. Majority of students from
        this department are getting placements in good IT companies after
        completing their course of study. We are maintaining a good relation
        with alumni which helps the students for better prospects and
        improvement of quality
      </p>

      <div
        className=" lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
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
