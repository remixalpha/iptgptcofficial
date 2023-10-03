import React, { useEffect, useState } from "react";
import Librarys from "../../../../../assets/images/language-removebg-preview.png";
// import InstructorImage from "../../../../../assets/images/section/Departments/Electronics/Sharafudheen.jpg";
import { FiChevronRight } from "react-icons/fi";
// Backend
import { image_url, FetchRequest } from "../../../../../utils/agent";

const Intro = [
  {
    Title: "Introduction",
    Des: "NCC - IPT & GPT COLLEGE SHORANUR NCC is an Organization engaged in conducting constructive activities for all the cadets under its fold. Students who have undergone training at the NCC have self discipline, hardwork, leadership qualities and good value system. NCC also helps in shaping them in to dynamic and responsible citizens of India. NCC IPT & GPT College would continue to be a platform for grooming tomorrow's citizens and leaders, and help in  Nation Building. National Cadet Corps (NCC) provides a platform for individual upliftment through the process of channelizing the energy of the youth in constructive pursuits. Besides giving thrill and excitement, NCC promotes camaraderie and resilience and hones cultural skills to preserve the cultural traditions and values of the society. It helps the youth to realise the intimate relationship between man and the community, between community and nature and their inter-dependability No.5 Coy Senior Division Army wing of IPT & GPT College is a Company of 160 cadets including SD and SW cadets, under 28 Kerala Battalion NCC Ottapalam, headed by the Commanding Officer, Col. U B Gurung. Associate NCC Officer is Captain Sharafudheen Muhammad M. A vibrant team among cadets comprised of a Senior Under Officer and three Under officers,CSM, CQMS and five Sergeants are leading the NCC",
    Image: Librarys,
  },
];

const Organization = [
  {
    Title: "NCC Organization",
    Des: "NCC PARADE: Institutional Training Parade starts at 0900 hrs and ends at 1300 hrs on Saturdays. During this parade, physical training, drill, lecture classes on various subjects as per syllabus, map reading, training to improve life skills are given to the cadets. Attending these parades are mandatory for the successful completion of NCC training. ANNUAL TRAINING CAMPS: Cadets have to attend Annual training camps each year. Annual training camps are conducted at various locations of the state for 10 days. Centrally Organized Camps: Army Attachment Camp: Enthusiastic SD cadets get a chance to attend the Army attachment camp of 15 days duration. EBSB : NATIONAL INTEGRATION CAMP: These Camps are conducted on an all India basis and help bridge the cultural gap among various states of India. In addition, the NCC conducts NICs at remote and forward areas to promote national integration. Special NICs are conducted regularly at Leh, Srinagar, North Eastern Region, Lakshadeep and Port Blair. Adventure Training and Sports: These include mountaineering, trekking, rock climbing, desert safari, shooting and para-jumping activities",
    Image: Librarys,
  },
];
// const OFFICER = [
//   {
//     name: "Sharafudheen",
//     Post: "PROGRAMME OFFICER",
//     imageSrc: InstructorImage,
//     imageAlt: "NCC",
//     href: "#",
//   },
// ];

export default function Introduction() {
  const [staffs, setStaffs] = useState([]);

  function fetchStaff() {
    FetchRequest("/cocu/", { clubName: "ncc" })
      .then((res) => {
        // console.log(res.data);
        if (res.statusText === "OK") {
          console.log(res.data.doc);
          const nssStaffs = res.data.doc.filter(
            (item) => item.clubName === "ncc"
          );
          setStaffs(nssStaffs);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }

  useEffect(() => {
    fetchStaff();
  }, []);
  return (
    <div
      className={
        "mx-auto grid max-w-3xl grid-cols-1 items-center    lg:max-w-[110rem] lg:grid-cols-1"
      }
    >
      {Intro.map((item) => (
        <div
          key={item.Title}
          className="bg-lime-50 shadow-lg rounded-[4rem] p-20 -mx-20 scale-75 space-y-10 "
        >
          <div className="flex justify-center items-center scale-125  ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {item.Title}
            </h1>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-1 items-center  lg:max-w-[110rem] lg:grid-cols-2  ">
            <div className=" relative -left-10 ">
              <img src={item.Image} alt="" className="h-full w-full" />
            </div>
            <div className="space-y-10 ">
              <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
                {item.Des}
              </p>
              <div className="flex flex-row ">
                <button
                  type="submit"
                  className=" flex w-[10rem] items-center justify-center rounded-md  bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
      <div
        className={
          " scale-90 justify-center items-center relative -top-[10rem] lg:flex lg:flex-col  xl:flex xl:flex-row "
        }
      >
        {Organization.map((item) => (
          <div
            key={item.Title}
            className="bg-lime-50 shadow-lg rounded-[4rem] p-20 -mx-20 scale-75 space-y-10 "
          >
            <div className="flex justify-center items-center scale-125  ">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {item.Title}
              </h1>
            </div>

            <div className="mx-auto grid max-w-3xl grid-cols-1 items-center  xl:max-w-[110rem]  ">
              <div className=" ">
                <img src={item.Image} alt="" className="h-full w-full" />
              </div>

              <p className="mt-4 text-justify text-gray-900 leading-8 text-xl ">
                {item.Des}
              </p>
            </div>
          </div>
        ))}

        <div>
          {staffs.map((item) => (
            <div
              key={item.name}
              className="group relative ml-[15rem] justify-center items-center top-8 -left-[12rem]  lg:scale-90 scale-95 "
            >
              <div className="relative h-[35rem] w-[30rem] overflow-hidden rounded-lg bg-white sm:aspect-h-1  group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                {" "}
                <img
                  src={`${image_url + item.fileUrl}`}
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
                PROGRAMME OFFICER
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
