import React from "react";
import principalImage from "../../../../assets/images/section/Home/Principal.jpeg";

const principal = [
  {
    name: "Asamis",
    Post: "Principal",
    Qualification: "M Tech,FIE",
    imageSrc: principalImage,
    imageAlt: "Principal of IPT & GPTC Shoranur",
    href: "#",
  },
];
export default function Principal() {
  return (
    <div className=" bg-white ">
      <h1 className=" relative flex items-center justify-center -top-10 text-gray-900 sm:text-4xl antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3 ">
        Principal's Message
      </h1>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-20 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8  ">
        <div>
          <p className=" relative -top-[8rem] text-justify  block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800">
            <span className="font-bold ">"</span> Education is the most powerful
            weapon which you can use to change the world{" "}
            <span className="font-bold">"</span>
            <br></br>
            <span className="flex items-end justify-end font-bold ">
              - Nelson Mandela
            </span>
            <br></br>
            <br></br> In a world that has seen rapid technological advancement,
            technical education serves as a vanguard to the future. Institute of
            Printing Technology and Government Polytechnic College, as one of
            the oldest Institute of technical education in the state, consider
            it our responsibility to empower our learners to rise up to the
            challenges of the society and the industry. We draw strength from a
            glorious past that has enriched us with a host of prodigious alumni.
            The goodwill of the public and the support of the government is the
            wind beneath our wings that gives momentum to our journey towards
            excellence. We invite students to enter our gates as learners and
            leave as technicians of the highest calibre.
          </p>
        </div>
        <div
          className=" lg:grid lg:grid-cols-3 lg:gap-x-4 lg:space-y-0 bg-gray-100 rounded-primary relative -top-14 h-[40rem] "
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {principal.map((principal) => (
            <div key={principal.name} className="group relative -top-20 ">
              <div className="relative h-[35rem] w-[30rem] overflow-hidden rounded-primary bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300  ">
                <img
                  src={principal.imageSrc}
                  alt={principal.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h1
                className="mt-5 text-4xl font-semibold text-gray-900 antialiased tracking-normal font-sans  leading-[1.3]"
                style={{ textAlign: "center" }}
              >
                <a href={principal.href}>
                  <span className="absolute inset-0" />
                  {principal.name}
                </a>
              </h1>
              <p
                className=" block antialiased font-sans text-2xl font-normal  text-gray-800"
                style={{ textAlign: "center" }}
              >
                {principal.Post}
              </p>
              <p
                className="block antialiased font-sans text-lg font-normal  text-gray-700"
                style={{ textAlign: "center" }}
              >
                {principal.Qualification}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
