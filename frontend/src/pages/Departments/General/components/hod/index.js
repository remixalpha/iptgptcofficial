import React, { useState, useEffect } from "react";
// import General from "../../../../../assets/images/section/Departments/General.jpg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { image_url, FetchRequest } from "../../../../../utils/agent";

const Content = [
  {
    id: 1,
    Des: "The General Department began to function as a fully fledged unit with         the incorporation of the department of Electronics Engineering and         Computer Engineering to the already existing Department of Printing         Technology in the College. Geared towards a comprehensive development of         our learners, the department handles varied disciplines such as Physics,         Chemistry, Mathematics, English and Physical Education. The department         is committed to providing a learning environment that accelerates the         assimilation of the fundamental principles of science that lays the         foundation for a Diploma in Engineering. A well- stocked science lab         aids this endeavour. A fully functional language lab is an asset to the         learner's overall growth including their communication skills and their         individual development as technicians and professionals in the global         scenario. The Physical Education wing of the General Department ensures         the physical well being and consequently the competence of the learners         to navigate the challenges of life and their profession. A team of         highly qualified and dedicated faculty proves to be the backbone of the         department as it attempts to inculcate a sense of moral responsibility         in our learners towards their societies and is actively involved in         fine-tuning them for their future roles as technicians and professionals         of the highest international standard.",
  },
];

export default function Contents() {
  const [expandedSubjects, setExpandedSubjects] = useState([]);
  const [hods, setHods] = useState([]);
  const [deptId, setDeptId] = useState("650fdb2e7658ed7a4b67b48d");

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
        if (res.statusText === "OK") {
          // console.log(res.data.doc);
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
      {/* <div className="relative h-[35rem] w-[30rem] overflow-hidden rounded-[3rem] bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
        <img
          src={General}
          alt="General"
          className="object-cover object-center w-full h-full"
        />
      </div> */}
      {Content.map((items) => (
        <div key={items.id}>
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
