import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/logos/ipt.png";
import AboutUS from "./components/Flyout/aboutUs/Flyout";
import Department from "./components/Flyout/department/Flyout";
import CoCurricular from "./components/Flyout/Co-curricular/Flyout";
import AntiRagging from "./components/Flyout/Anti-ragging/Flyout";
import DisClosure from "./components/Flyout/disClosure/Flyout";
import Related from "./components/Flyout/Related/Flyout";
import Downloads from "./components/Flyout/Downloadss/Flyout";

import { Link } from "react-router-dom";
import { FetchRequest, image_url } from "../../utils/agent";
import { useEffect } from "react";

//data
const home = [{ name: "Home", href: "#", current: true }];
const feedback = [
  {
    name: "AICTE Feedback",
    href: "https://www.aicte-india.org/feedback/",
    current: true,
  },
];
const mandatory = [
  {
    name: "Mandatory Disclosure",
    href: "https://drive.google.com/file/d/1XSQvp_Idau69ZHNyexZQmjDr20z2RVWF/view",
    current: true,
  },
];
const grievance = [
  {
    name: "Grievance",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdSft6jqTm1giTrSzWPf8-IN6Jld-U-UAEYJW0VlBE3HQ8iVQ/viewform?embedded=true",
    current: true,
  },
];
const contactus = [{ name: "Contact Us", href: "/contactus", current: true }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [disc, setDisc] = useState({});
  const handleItemClick = (name) => {
    setActiveItem(name);
  };
  function fetchApi() {
    FetchRequest("/aicte/one")
      .then(async (res) => {
        if (res.statusText === "OK") {
          setDisc(res.data.doc);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="relative flex items-center justify-center transition-all duration-300 top-5 ">
            <div className=" h-[6rem] max-w-[125rem] mx-10 left-0 right-0 absolute bg-gray-800 opacity-30 rounded-xl z-20 transition-all duration-300" />

            <div
              className="flex h-[6rem] w-[125rem] items-center justify-between mx-5 z-40 rounded-xl"
              style={{ backdropFilter: "blur(10px)" }}
            >
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 flex items-center mx-4 lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white bg-gray-500 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon
                      className="z-50 block w-6 h-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-shrink-0 ml-[8rem] sm:ml-[14rem] md:ml-[20rem]  lg:ml-20  ">
                <Link to="/" className="flex flex-shrink-0 cursor-pointer ">
                  <img
                    className="h-[2rem] sm:h-[3rem] md:h-[4rem] w-auto transition-all duration-300  "
                    src={Logo}
                    alt="IPT LOGO"
                  />
                </Link>
              </div>

              {/* Main Navbar */}
              <div className="hidden  mx-[2rem] p-4 space-y-2 scale-90 xl:scale-100 lg:justify-items-stretch lg:items-center lg:flex lg:flex-wrap lg:ml-10 lg:gap-2">
                {/* Home */}
                <div className="w-full sm:w-auto">
                  {home.map((item) => (
                    <Link
                      key={item.name}
                      to="/"
                      onClick={() => handleItemClick(item.name)}
                      className={classNames(
                        activeItem === item.name
                          ? "text-Primary bg-white  text-md  font-bold   transition-all duration-300 ease-in-out "
                          : "text-white text-md  font-bold hover:text-Primary hover:bg-white  hover:text-md  hover:font-bold ",
                        "rounded-xl font-bold   px-3 py-2 text-sm  transition-all duration-300 ease-in-out "
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {/* AboutUs */}
                <div className="w-full sm:w-auto">
                  <AboutUS />
                </div>
                {/* Department */}
                <div className="w-full sm:w-auto">
                  <Department />
                </div>
                {/* CoCurricular */}
                <div className="w-full sm:w-auto ">
                  <CoCurricular />
                </div>
                {/* AntiRagging */}
                <div className="w-full sm:w-auto">
                  <AntiRagging />
                </div>
                {/* DisClosure*/}
                <div className="w-full sm:w-auto ">
                  <DisClosure />
                </div>
                {/*Feedback*/}
                <div className="w-full sm:w-auto ">
                  {feedback.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleItemClick(item.name)}
                      className={classNames(
                        activeItem === item.name
                          ? "text-Primary bg-white  text-md  font-bold   transition-all duration-300 ease-in-out "
                          : "text-white text-md  font-bold hover:text-Primary hover:bg-white  hover:text-md  hover:font-bold ",
                        "rounded-xl font-bold   px-3 py-2 text-sm  transition-all duration-300 ease-in-out "
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/*Related*/}
                <div className="w-full sm:w-auto">
                  <Related />
                </div>
                {/*Mandatory*/}
                <div className="w-full sm:w-auto">
                  <a
                    href={image_url + disc.fileUrl}
                    onClick={() => handleItemClick(mandatory.name)}
                    className={classNames(
                      activeItem === mandatory.name
                        ? "text-Primary bg-white  text-md  font-bold   transition-all duration-300 ease-in-out "
                        : "text-white text-md  font-bold hover:text-Primary hover:bg-white  hover:text-md  hover:font-bold ",
                      "rounded-xl font-bold   px-3 py-2 text-sm  transition-all duration-300 ease-in-out "
                    )}
                    aria-current={mandatory.current ? "page" : undefined}
                  >
                    Mandatory Disclosure
                  </a>
                </div>
                {/*Grievance*/}
                <div className="w-full sm:w-auto">
                  {grievance.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleItemClick(item.name)}
                      className={classNames(
                        activeItem === item.name
                          ? "text-Primary bg-white  text-md  font-bold   transition-all duration-300 ease-in-out "
                          : "text-white text-md  font-bold hover:text-Primary hover:bg-white  hover:text-md  hover:font-bold ",
                        "rounded-xl font-bold   px-3 py-2 text-sm  transition-all duration-300 ease-in-out "
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/*Downloads*/}
                <div className="w-full sm:w-auto">
                  <Downloads />
                </div>
                {/*Contactus*/}
                <div className="w-full sm:w-auto ">
                  {contactus.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleItemClick(item.name)}
                      className={classNames(
                        activeItem === item.name
                          ? "text-Primary bg-white  text-md  font-bold   transition-all duration-300 ease-in-out "
                          : "text-white text-md  font-bold hover:text-Primary hover:bg-white  hover:text-md  hover:font-bold ",
                        "rounded-xl font-bold   px-3 py-2 text-sm  transition-all duration-300 ease-in-out "
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile view */}

          <Disclosure.Panel className="absolute z-50 mt-8 -translate-x-1/2 lg:hidden left-1/2 bg-opacity-10 max-w-fit ">
            <div
              className="flex-auto w-screen max-w-lg overflow-hidden text-sm leading-6 shadow-lg rounded-xl ring-gray-900/5"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {home.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-Primary text-white"
                        : "text-gray-300 hover:bg-white hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>

              <div className="px-2 pt-2 pb-3 mx-3 my-2 space-y-1 bg-white rounded-md ">
                <AboutUS />
              </div>
              <div className="px-2 pt-2 pb-3 mx-3 my-2 space-y-1 bg-white rounded-md ">
                <Department />
              </div>
              <div className="px-2 pt-2 pb-3 mx-3 my-2 space-y-1 bg-white rounded-md ">
                <CoCurricular />
              </div>
              <div className="px-2 pt-2 pb-3 mx-3 my-2 space-y-1 bg-white rounded-md ">
                <AntiRagging />
              </div>
              <div className="px-2 pt-2 pb-3 mx-3 my-2 space-y-1 bg-white rounded-md ">
                <DisClosure />
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {feedback.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleItemClick(item.name)}
                    className={classNames(
                      activeItem === item.name
                        ? "text-white bg-Primary  text-md  font-bold   transition-all duration-300 ease-in-out "
                        : "text-Primary bg-white text-md  font-bold hover:text-white hover:bg-Primary   hover:text-md  hover:font-bold ",
                      "block rounded-md px-3 py-2  transition-all duration-300 ease-in-out "
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="px-2 pt-2 pb-3 mx-3 my-2 space-y-1 bg-white rounded-md ">
                <Related />
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {mandatory.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleItemClick(item.name)}
                    className={classNames(
                      activeItem === item.name
                        ? "text-white bg-Primary  text-md  font-bold   transition-all duration-300 ease-in-out "
                        : "text-Primary bg-white text-md  font-bold hover:text-white hover:bg-Primary   hover:text-md  hover:font-bold ",
                      "block rounded-md px-3 py-2  transition-all duration-300 ease-in-out "
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {grievance.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleItemClick(item.name)}
                    className={classNames(
                      activeItem === item.name
                        ? "text-white bg-Primary  text-md  font-bold   transition-all duration-300 ease-in-out "
                        : "text-Primary bg-white text-md  font-bold hover:text-white hover:bg-Primary   hover:text-md  hover:font-bold ",
                      "block rounded-md px-3 py-2  transition-all duration-300 ease-in-out "
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="px-2 pt-2 pb-3 mx-3 my-2 space-y-1 bg-white rounded-md ">
                <Downloads />
              </div>

              <div className="px-2 pt-2 pb-3 space-y-1">
                {contactus.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleItemClick(item.name)}
                    className={classNames(
                      activeItem === item.name
                        ? "text-white bg-Primary  text-md  font-bold   transition-all duration-300 ease-in-out "
                        : "text-Primary bg-white text-md  font-bold hover:text-white hover:bg-Primary   hover:text-md  hover:font-bold ",
                      "block rounded-md px-3 py-2  transition-all duration-300 ease-in-out "
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
