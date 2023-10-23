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
    <div className="relative top-[10rem] xl:top-0 bg-gray-50 py-[10rem] sm:py-32 lg:rounded-t-[10rem] ">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <h1 className="text-center  pb-10  text-gray-900  antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] mb-3">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-4 mt-10 sm:gap-6 lg:gap-8">
          {Contact.map((Contact) => (
            <Card extra="!flex-row flex-grow items-center xl:w-[30rem] xl:h-[20rem]  xl:ml-20 shadow-md  ">
              <div
                key={Contact.id}
                className="flex flex-col items-center justify-center "
              >
                <div className="-mb-4 text-3xl ">
                  <TfiLocationPin />
                </div>

                <div className="p-8 ">
                  <h3 className=" text-center   text-gray-900  antialiased tracking-normal font-sans text-xl font-semibold leading-[1.3] mb-3">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {Contact.Title}
                  </h3>
                  <p className="block mt-1 font-sans antialiased font-normal leading-relaxed text-center text-gray-700 text-md">
                    {Contact.Address}
                  </p>
                </div>
              </div>
            </Card>
          ))}
          <div className="flex flex-row md:gap-10 ">
            {Email.map((Email, i) => (
              <Card extra="!flex-row flex-grow items-center justify-center w-[14rem] xl:w-[17rem] xl:h-[15rem] scale-75 md:scale-100 shadow-md ">
                <div
                  key={i * 2}
                  className="flex flex-col items-center justify-center p-6 "
                >
                  <div className="-mb-4 text-3xl ">
                    <HiOutlineMail />
                  </div>

                  <div className="p-8 ">
                    <h3 className=" text-center text-gray-900  antialiased tracking-normal font-sans text-xl font-semibold leading-[1.3] mb-3">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {Email.title}
                    </h3>
                    <p className="block mt-1 font-sans antialiased font-normal leading-relaxed text-center text-gray-700 text-md">
                      {Email.email}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
            {Calls.map((Call, i) => (
              <Card extra=" !flex-row flex-grow items-center justify-center xl:w-[15rem] xl:h-[15rem] scale-75 md:scale-100 shadow-md">
                <div
                  key={i * 2}
                  className="flex flex-col items-center justify-center p-6 "
                >
                  <div className="-mb-4 text-3xl ">
                    <PiPhoneCallThin />
                  </div>

                  <div className="p-8 ">
                    <h3 className="text-center   text-gray-900  antialiased tracking-normal font-sans text-xl font-semibold leading-[1.3]  mb-3">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {Call.title}
                    </h3>
                    <p className="block mt-1 font-sans antialiased font-normal leading-relaxed text-center text-gray-700 text-md">
                      {Call.PhoneNO}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card extra=" !flex-row flex-grow xl:-mt-20 xl:ml-12 items-center justify-center xl::w-[35rem] xl:h-[28rem] shadow-md md:overflow-hidden xl::scale-90 hover:scale-100 ">
            <iframe
              title="IPT & GPTC LOCATION"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3371715272383!2d76.26295727579196!3d10.785467259025319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c4ca047e0f1d%3A0x528e44cfc6ee30c7!2sIPT%26GPTC%2CShoranur!5e0!3m2!1sen!2sin!4v1689920040081!5m2!1sen!2sin"
              width="1200"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Card>
          <Card extra=" !flex-row flex-grow items-center justify-center scale-90 xl:-mt-[12rem] xl:-ml-7 xl:w-[41rem] xl:h-[36rem] shadow-md overflow-hidden hover:scale-100 mb-10 xl:mb-0 ">
            <div className="relative w-full h-full overflow-hidden ">
              <form id="contact" className="mt-4 p-8 ">
                <div className="block sm:flex flex-wrap justify-between w-full mb-6">
                  <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                    <div className="flex flex-col">
                      <label
                        htmlFor="full_name"
                        className="block mb-2 text-sm font-medium leading-6 text-gray-900 "
                      >
                        Full Name
                      </label>
                      <input
                        required
                        id="first_name"
                        name="first_name"
                        type="text"
                        className="flex items-center w-72 sm:w-56 lg:w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                        placeholder
                      />
                    </div>
                  </div>
                  <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                    <div className="flex flex-col">
                      <label
                        htmlFor="Last Name"
                        className="block mb-2 text-sm font-medium leading-6 text-gray-900"
                      >
                        Last Name
                      </label>
                      <input
                        required
                        id="last_name"
                        name="last_name"
                        type="text"
                        className="flex items-center w-72 sm:w-56 lg:w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                        placeholder
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap w-full">
                  <div className="w-2/4 max-w-xs">
                    <div className="flex flex-col">
                      <label
                        htmlFor="Email"
                        className="block mb-2 text-sm font-medium leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        className="flex items-center  w-72 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                        placeholder
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-6">
                  <div className="flex flex-col">
                    <label
                      className="block mb-2 text-sm font-medium leading-6 text-gray-900"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder
                      name="message"
                      className="px-3 py-2 mb-4 text-sm border border-gray-300 rounded outline-none resize-none focus:border focus:border-indigo-700"
                      rows={8}
                      id="message"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center px-8 py-2 text-sm leading-6 text-center text-white transition duration-150 ease-in-out bg-red-400 rounded focus:outline-none hover:bg-gray-800"
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
