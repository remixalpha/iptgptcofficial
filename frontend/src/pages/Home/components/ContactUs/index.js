import Card from "./Card/index";
import { TfiLocationPin } from "react-icons/tfi";
import { HiOutlineMail } from "react-icons/hi";
import { PiPhoneCallThin } from "react-icons/pi";

const Contact = [
  {
    Title: "Our Address",
    IconAlt: "Contact us",
    Address:
      "Institute of Printing Technology & Government Polytechnic College,Govt.Press P.O Pin 679122 Palakkad Dist.Kerala India",
  },
];
const Email = [
  {
    title: "Email",
    IconAlt: "Email",
    email: "polyshoranur@gmail.com",
  },
];
const Calls = [
  {
    title: "Call Us",
    IconAlt: "Calls",
    PhoneNO: "0466 222 0450",
  },
];
export default function ContactUs() {
  return (
    <div className="relative  bg-gray-100  sm:py-32  ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center  pb-10  text-gray-900  antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3">
          Contact Us
        </h1>

        <div className="grid grid-cols-2 mt-10 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {Contact.map((Contact) => (
            <Card extra="!flex-row flex-grow items-center w-[30rem] h-[20rem]  ml-20 shadow-md  ">
              <div
                key={Contact.id}
                className=" flex flex-col items-center justify-center  "
              >
                <div className="text-3xl -mb-4  ">
                  <TfiLocationPin />
                </div>

                <div className="p-8  ">
                  <h3 className=" text-center   text-gray-900  antialiased tracking-normal font-sans text-xl font-semibold leading-[1.3]  mb-3">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {Contact.Title}
                  </h3>
                  <p className="mt-1 text-center text-md  block antialiased font-sans font-normal leading-relaxed text-gray-700">
                    {Contact.Address}
                  </p>
                </div>
              </div>
            </Card>
          ))}
          <div className="flex flex-row gap-10 ">
            {Email.map((Email) => (
              <Card extra="!flex-row flex-grow items-center justify-center w-[17rem] h-[15rem] shadow-md ">
                <div
                  key={Email.id}
                  className=" flex flex-col items-center justify-center p-6  "
                >
                  <div className="text-3xl -mb-4  ">
                    <HiOutlineMail />
                  </div>

                  <div className="p-8  ">
                    <h3 className=" text-center   text-gray-900  antialiased tracking-normal font-sans text-xl font-semibold leading-[1.3]  mb-3">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {Email.title}
                    </h3>
                    <p className="mt-1 text-center text-md  block antialiased font-sans font-normal leading-relaxed text-gray-700">
                      {Email.email}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
            {Calls.map((Call) => (
              <Card extra=" !flex-row flex-grow items-center justify-center w-[15rem] h-[15rem] shadow-md">
                <div
                  key={Call.id}
                  className="  flex flex-col items-center justify-center p-6  "
                >
                  <div className="text-3xl -mb-4  ">
                    <PiPhoneCallThin />
                  </div>

                  <div className="p-8  ">
                    <h3 className="text-center   text-gray-900  antialiased tracking-normal font-sans text-xl font-semibold leading-[1.3]  mb-3">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {Call.title}
                    </h3>
                    <p className="mt-1 text-center text-md  block antialiased font-sans font-normal leading-relaxed text-gray-700">
                      {Call.PhoneNO}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card extra=" !flex-row flex-grow -mt-20 ml-12 items-center justify-center w-[35rem] h-[28rem] shadow-md overflow-hidden scale-90 hover:scale-100 ">
            <iframe
              title="IPT & GPTC LOCATION"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3371715272383!2d76.26295727579196!3d10.785467259025319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c4ca047e0f1d%3A0x528e44cfc6ee30c7!2sIPT%26GPTC%2CShoranur!5e0!3m2!1sen!2sin!4v1689920040081!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Card>
          <Card extra=" !flex-row flex-grow scale-90 -mt-[12rem] -ml-7 items-center justify-center w-[41rem] h-[36rem] shadow-md overflow-hidden hover:scale-100 ">
            <div className="relative w-full h-full -top-[5rem] overflow-hidden ">
              <form id="contact" className="bg-white py-[8rem] px-8  ">
                <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                  <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                    <div className="flex flex-col">
                      <label
                        htmlFor="full_name"
                        className=" block text-sm font-medium leading-6 text-gray-900 mb-2 "
                      >
                        Full Name
                      </label>
                      <input
                        required
                        id="first_name"
                        name="first_name"
                        type="text"
                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        placeholder
                      />
                    </div>
                  </div>
                  <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                    <div className="flex flex-col">
                      <label
                        htmlFor="Last Name"
                        className="block text-sm font-medium leading-6 text-gray-900 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        required
                        id="last_name"
                        name="last_name"
                        type="text"
                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        placeholder
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-wrap">
                  <div className="w-2/4 max-w-xs">
                    <div className="flex flex-col">
                      <label
                        htmlFor="Email"
                        className="block text-sm font-medium leading-6 text-gray-900 mb-2"
                      >
                        Email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        placeholder
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-6">
                  <div className="flex flex-col">
                    <label
                      className="block text-sm font-medium leading-6 text-gray-900 mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder
                      name="message"
                      className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                      rows={8}
                      id="message"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="focus:outline-none bg-red-400  transition duration-150 ease-in-out hover:bg-gray-800 rounded text-white px-8 py-3 text-sm leading-6"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
