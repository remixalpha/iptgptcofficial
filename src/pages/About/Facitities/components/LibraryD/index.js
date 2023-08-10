import { useState } from "react";
import Librarys from "../../../../../assets/images/section/Facilities/reading.jpg";
import Computings from "../../../../../assets/images/section/Facilities/computer.jpg";
import languages from "../../../../../assets/images/section/Facilities/language.jpg";
import Seminars from "../../../../../assets/images/section/Facilities/seminar.jpg";
import Auditoriums from "../../../../../assets/images/section/Facilities/Auditorium.jpg";
import Boyss from "../../../../../assets/images/section/Facilities/boys.jpg";
import Girlss from "../../../../../assets/images/section/Facilities/girls.jpg";
import Canteens from "../../../../../assets/images/section/Facilities/canteen.jpg";
import { FiChevronRight } from "react-icons/fi";

const Library = [
  {
    id: 1,
    Title: "Library",
    Des: "Our Library System consists of a Central Library and 6 departmental libraries which collectively support the teaching and research programmes of the Institute and provides facilities for general reading and disseminates information according to the requirement of the users. Central Library has been started functional since 1965. It is housed in a separate building with a plinth area of 4000 sq. mtrs. The Library has a Computerised Library Information System, Reprographic centre and Internet Browing Centre. It has around 62,846 books, reports, standards and back volumes of journalsbooks. The functioning of the Library is monitored by a committee comprising of the Principal, one faculty from each Engineering Department, one faculty from Non Engineering Department, Librarian and the Chief Accountant",
    Image: Librarys,
  },
];
const Computing = [
  {
    id: 2,
    Title: "Central Computing Facility",
    Des: "Central Computing Facility (CCF) is a centralized Computer Centre for the staff and students to fulfill the various computing needs. Our college is powered by a Fiber laid Gigabit Campus Area Networking and CCF is at the core providing Internet Enabled Computing Facility with a wide spread of WIFI access across the campus. The networking devices installed are Core Layer 3 10G Switch: 1No, 10GbE Single Mode Fiber Transceivers:2 Nos, Layer 2 + Distribution Switch:15 Nos with 802.11 AC Wireless Access Points (Virtual/Software Controller): 10 Nos etc. in a structured cabling Campus Area Network. The internet connection is provided under NMEICT scheme with a bandwidth of 40mbps download speed with a static IP Address.",
    Image: Computings,
  },
];
const language = [
  {
    id: 3,
    Title: "Language Lab",
    Des: "This LAB facilitates Digital Linguistic Mentor [DLM] – the revolutionary Java-based language learning laboratory that blends time-tested methodologies with interactive technology to deliver a superb teaching and learning experience! DLM is a spanking new, top-of-the-line and user-friendly language learning platform, painstakingly developed from the ground up, delivering world-class language learning solutions from pioneering analogue labs to futuristic software-driven wonders. The Lab is well equipped with 30 Client machines configured under a Server Computer with over ear headphones and built in Microphones.",
    Image: languages,
  },
];
const Seminar = [
  {
    id: 3,
    Title: "Seminar Hall",
    Des: "The college has 1 main Seminar Hall and 5 departmental seminar halls. All are aesthetically designed. The seminar hall is facilitated with the latest technology and is well – equipped with multimedia projectors. which provides a special ambience for every event. It makes possible an ideal setting for carrying out various conferences and delivering lectures. Each has a seating capacity of 100 people. Each seat is equipped with a pull-out writing ‘tablet’ to support note-taking.",
    Image: Seminars,
  },
];
const Auditorium = [
  {
    id: 4,
    Title: "Auditorium",
    Des: "College has a well furnished auditorium, located in the main block. It has a seating capacity of 800 audiences. The auditorium is used for activities such as seminars, guest lectures, cultural activities,important functions and meetings of students and faculties, department functions and other events. The auditoriums are equipped with latest public addressing,LCD projectors and comfortable seats.",
    Image: Auditoriums,
  },
];
const Boys = [
  {
    id: 5,
    Title: "Boys Hostel",
    Des: "The Hostels are under direct control of the Warden and each hostel is having one or two members of the staff of the college as Assistant Wardens and they shall be responsible to all matters connected with the Hostel. The Warden shall have the power to frame standing orders/ rules to regulate internal matters and other details not explicitly covered by these rules. The Principal is the Ex Officio Chief Warden and his decisions shall be final in the interpretation of rules and all matters connected with the Hostel. Application for admission to hostels should be submitted in the prescribed form to the Warden",
    Image: Boyss,
  },
];
const Girls = [
  {
    id: 6,
    Title: "Girls Hostel",
    Des: "Each Student admitted to the hostel will be provided with essential furniture for which he/she should give a receipt and for the safety of which they shall be responsible. Hostel furniture shall not be removed from one room to other under any circumstances. Students should provide their own bedding and trunks to lock things in. The articles of furniture shall be returned and a receipt may be obtained at the time of leaving the hostel. Students can bring in other articles only on the written permission of the Warden. Each hostel is provided with a television, water cooler and kit for indoor games.",
    Image: Girlss,
  },
];
const Canteen = [
  {
    id: 7,
    Title: "Canteen",
    Des: "College canteen is located at a easily accessible area to all departments. Variety of refreshments and meals available at the college canteen at affordable rates. Adequate seating facilities are provided to accomodate students and staff even during peak time. It tends to be the most popular place on campus, not only for physical refreshment but also for student bonding, discussions and even work on assignments and projects.",
    Image: Canteens,
  },
];

export default function Facilities() {
  return (
    <div className="space-y-20">
      {Library.map((item) => (
        <div key={item.id}>
          <div className="flex justify-center items-center scale-125">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {item.Title}
            </h1>
          </div>

          <div className="  mx-auto grid max-w-2xl grid-cols-1 -space-y-11 items-center gap-x-40 px-4  bg-white sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className=" relative left-10 sm:gap-6 lg:gap-8">
              <img src={item.Image} alt="" className="" />
            </div>

            <div className="space-y-10 ">
              <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
                {item.Des}{" "}
              </p>
              <div className="flex flex-row gap-2">
                <button
                  type="submit"
                  className=" flex w-[10rem] items-center justify-center rounded-md  bg-indigo-600  py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go To Gallery
                </button>{" "}
                <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer ">
                  <FiChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {Computing.map((item) => (
        <div key={item.id}>
          <div className="flex justify-center items-center scale-125 ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {item.Title}
            </h1>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 -space-y-11 items-center gap-x-40 px-4  bg-white sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="space-y-10 ">
              <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
                {item.Des}{" "}
              </p>
              <div className="flex flex-row gap-2">
                <button
                  type="submit"
                  className=" flex w-[10rem] items-center justify-center rounded-md  bg-indigo-600 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go To Gallery
                </button>{" "}
                <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer ">
                  <FiChevronRight />
                </div>
              </div>
            </div>
            <div className=" relative left-10 sm:gap-6 lg:gap-8">
              <img src={item.Image} alt="" className="" />
            </div>
          </div>
        </div>
      ))}
      {language.map((item) => (
        <div key={item.id}>
          <div className="flex justify-center items-center scale-125">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {item.Title}
            </h1>
          </div>

          <div className="  mx-auto grid max-w-2xl grid-cols-1 -space-y-11 items-center gap-x-40 px-4  bg-white sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className=" relative left-10 sm:gap-6 lg:gap-8">
              <img src={item.Image} alt="" className="" />
            </div>

            <div className="space-y-10 ">
              <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
                {item.Des}{" "}
              </p>
              <div className="flex flex-row gap-2">
                <button
                  type="submit"
                  className=" flex w-[10rem] items-center justify-center rounded-md  bg-indigo-600 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go To Gallery
                </button>{" "}
                <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer ">
                  <FiChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {Seminar.map((item) => (
        <div key={item.id}>
          <div className="flex justify-center items-center scale-125 ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {item.Title}
            </h1>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 space-y-10 items-center gap-x-40 px-4  bg-white sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="space-y-10 ">
              <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
                {item.Des}{" "}
              </p>
              <div className="flex flex-row gap-2">
                <button
                  type="submit"
                  className=" flex w-[10rem] items-center justify-center rounded-md  bg-indigo-600  py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go To Gallery
                </button>{" "}
                <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer ">
                  <FiChevronRight />
                </div>
              </div>
            </div>
            <div className=" relative left-10 sm:gap-6 lg:gap-8">
              <img src={item.Image} alt="" className="" />
            </div>
          </div>
        </div>
      ))}
      {Auditorium.map((item) => (
        <div key={item.id}>
          <div className="flex justify-center items-center scale-125">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {item.Title}
            </h1>
          </div>

          <div className="  mx-auto grid max-w-2xl grid-cols-1 -space-y-11 items-center gap-x-40 px-4  bg-white sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className=" relative left-10 sm:gap-6 lg:gap-8">
              <img src={item.Image} alt="" className="" />
            </div>

            <div className="space-y-10 ">
              <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
                {item.Des}{" "}
              </p>
              <div className="flex flex-row gap-2">
                <button
                  type="submit"
                  className=" flex w-[10rem] items-center justify-center rounded-md  bg-indigo-600  py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go To Gallery
                </button>{" "}
                <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer ">
                  <FiChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {Boys.map((item) => (
        <div key={item.id}>
          <div className="flex justify-center items-center scale-125 ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {item.Title}
            </h1>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 space-y-10 items-center gap-x-40 px-4  bg-white sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="space-y-10 ">
              <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
                {item.Des}{" "}
              </p>
              <div className="flex flex-row gap-2">
                <button
                  type="submit"
                  className=" flex w-[10rem] items-center justify-center rounded-md  bg-indigo-600 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go To Gallery
                </button>{" "}
                <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer ">
                  <FiChevronRight />
                </div>
              </div>
            </div>
            <div className=" relative left-10 sm:gap-6 lg:gap-8">
              <img src={item.Image} alt="" className="" />
            </div>
          </div>
        </div>
      ))}
      {Girls.map((item) => (
        <div key={item.id}>
          <div className="flex justify-center items-center scale-125">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {item.Title}
            </h1>
          </div>

          <div className="  mx-auto grid max-w-2xl grid-cols-1 -space-y-11 items-center gap-x-40 px-4  bg-white sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className=" relative left-10 sm:gap-6 lg:gap-8">
              <img src={item.Image} alt="" className="" />
            </div>

            <div className="space-y-10 ">
              <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
                {item.Des}{" "}
              </p>
              <div className="flex flex-row gap-2">
                <button
                  type="submit"
                  className=" flex w-[10rem] items-center justify-center rounded-md  bg-indigo-600  py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go To Gallery
                </button>{" "}
                <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer ">
                  <FiChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {Canteen.map((item) => (
        <div key={item.id}>
          <div className="flex justify-center items-center scale-125 ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {item.Title}
            </h1>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 space-y-10 items-center gap-x-40 px-4  bg-white sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="space-y-10 ">
              <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
                {item.Des}{" "}
              </p>
              <div className="flex flex-row gap-2">
                <button
                  type="submit"
                  className=" flex w-[10rem] items-center justify-center rounded-md  bg-indigo-600  py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go To Gallery
                </button>{" "}
                <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer ">
                  <FiChevronRight />
                </div>
              </div>
            </div>
            <div className=" relative left-10 sm:gap-6 lg:gap-8">
              <img src={item.Image} alt="" className="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
