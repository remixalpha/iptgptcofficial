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
      <p className="relative scale-95  text-justify text-gray-900  min-h-[200px] flex-grow  block antialiased font-sans text-xl font-normal leading-relaxed  ">
        The General Department began to function as a fully fledged unit with
        the incorporation of the department of Electronics Engineering and
        Computer Engineering to the already existing Department of Printing
        Technology in the College. Geared towards a comprehensive development of
        our learners, the department handles varied disciplines such as Physics,
        Chemistry, Mathematics, English and Physical Education. The department
        is committed to providing a learning environment that accelerates the
        assimilation of the fundamental principles of science that lays the
        foundation for a Diploma in Engineering. A well- stocked science lab
        aids this endeavour. A fully functional language lab is an asset to the
        learner's overall growth including their communication skills and their
        individual development as technicians and professionals in the global
        scenario. The Physical Education wing of the General Department ensures
        the physical well being and consequently the competence of the learners
        to navigate the challenges of life and their profession. A team of
        highly qualified and dedicated faculty proves to be the backbone of the
        department as it attempts to inculcate a sense of moral responsibility
        in our learners towards their societies and is actively involved in
        fine-tuning them for their future roles as technicians and professionals
        of the highest international standard.
      </p>
    </div>
  );
}
