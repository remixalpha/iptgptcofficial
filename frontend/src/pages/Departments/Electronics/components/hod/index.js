import React, { useState, useEffect } from "react";
import "./style.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { image_url, FetchRequest } from "../../../../../utils/agent";

const Content = [
  {
    id: 1,
    Des: "Electronics Department established in the year 1988. The annual intake is 60 with an additional 10% lateral entry students at second year onwards. We are following Outcome Based Education. The teaching methodology combines the standard methods of education lecturers, tutorials, practical using various soft wares, written assignments, tests, project work and students presentations. The students undergo in plant training at various industries, like BSNL KELTRON Doordharsan, All India Radio etc. Programs are conducted for students under finishing school and visiting faculty schemes to cope with present industrial requirements. Also there are classes under scholor support programs to train accademically weaker students. Entrepreneurship development activities are conducting under IEDC. The Electronics Association of the department is one of the most vibrant association in college. The complete planning and execution of the activities of the association is carried out by the students in consultation with the faculty members. The main motivation is to inculate a sense of responsibility, leadership qualities, team management and practical experience of an event management for the overall personality development of the students. The end result of any program is the placement and majority of our students are placed in reputed organisations. Creating an engaged, supportive alumni network is crucial to every department's success. Our Alumni play an active role in voluntary programs like mentoring students in their areas of expertise and best practices in a given field.",
  },
];

export default function Hod() {
  const [expandedSubjects, setExpandedSubjects] = useState([]);
  const [hods, setHods] = useState([]);
  const [deptId, setDeptId] = useState("64bad287578e4a044eb886a5");

  const toggleDescription = (id) => {
    if (expandedSubjects.includes(id)) {
      setExpandedSubjects(expandedSubjects.filter((item) => item !== id));
    } else {
      setExpandedSubjects([...expandedSubjects, id]);
    }
  };

  // Backend
  // Fetching HOD data
  function fetchHod() {
    FetchRequest("/hod/")
      .then((res) => {
        // console.log(res.data);
        if (res.statusText === "OK") {
          console.log(res.data.doc);
          setHods(res.data.doc);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }

  useEffect(() => {
    fetchHod();
  }, []);

  const filteredHod = hods.filter((item) => item.dept === deptId);

  return (
    <div className="relative flex flex-col-reverse items-center max-w-2xl px-4 mx-auto mb-20 lg:mb-auto gap-x-2 sm:py-32 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:space-x-20 ">
      {Content.map((items) => (
        <div key={items._id}>
          <p className="block p-8 mt-4 font-sans text-xl antialiased font-normal leading-relaxed text-justify text-gray-800 border rounded-primary ">
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
                <div className="w-10 h-10 p-3 text-white bg-gray-900 rounded-full ">
                  <IoIosArrowUp />
                </div>
              ) : (
                <div className="w-10 h-10 p-3 text-white bg-gray-900 rounded-full ">
                  <IoIosArrowDown />
                </div>
              )}
            </button>
          )}
        </div>
      ))}
      <div
        className=" lg:grid lg:grid-cols-3 lg:gap-x-4 lg:space-y-0 bg-gray-100 rounded-primary relative h-[40rem] scale-75  sm:scale-90 lg:scale-100  "
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="pattern" />
        {filteredHod.map((item) => (
          <div key={item.id} className="relative group -top-20 ">
            <div className="relative h-[35rem] w-[30rem] overflow-hidden rounded-primary bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300  ">
              <img
                className="object-cover object-center w-full h-full"
                src={`${image_url + item.fileUrl}`}
                alt=""
              />
            </div>
            <h1
              className="mt-5 text-4xl font-semibold text-gray-900 antialiased tracking-normal font-sans  leading-[1.3]"
              style={{ textAlign: "center" }}
            >
              <a href={item.href}>
                <span className="absolute inset-0" />
                {item.name}
              </a>
            </h1>
            <p
              className="block font-sans text-2xl antialiased font-normal text-gray-800 "
              style={{ textAlign: "center" }}
            >
              HOD
            </p>
            <p
              className="block font-sans text-lg antialiased font-normal text-gray-700"
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
