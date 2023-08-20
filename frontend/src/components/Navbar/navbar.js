import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/logos/ipt.png";
import AboutUS from "./components/Flyout/aboutUs/flyout";
import Department from "./components/Flyout/department/flyout";
import CoCurricular from "./components/Flyout/Co-curricular/flyout";
import AntiRagging from "./components/Flyout/Anti-ragging/flyout";
import DisClosure from "./components/Flyout/disClosure/flyout";
import Related from "./components/Flyout/Related/flyout";
import Downloads from "./components/Flyout/Downloadss/flyout";

import { Link } from "react-router-dom";

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

  const handleItemClick = (name) => {
    setActiveItem(name);
  };
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className=" flex items-center justify-center relative top-5  transition-all duration-300 ">
            <div className="h-[6rem] max-w-[125rem] mx-5 left-0 right-0 absolute bg-black opacity-30 rounded-xl z-20 transition-all duration-300" />

            <div className="flex h-[6rem]  items-center justify-between ml-10   z-40   ">
              <div className="absolute inset-y-0 left-12  flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 z-50"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-shrink-0 sm:ml-[35rem] md:ml-[25rem] lg:ml-[10rem]  xl:ml-1 -ml-10 ">
                <Link to="/" className="flex flex-shrink-0  cursor-pointer ">
                  <img className="h-[4rem] w-auto " src={Logo} alt="IPT LOGO" />
                </Link>
              </div>
              <div className=" sm:flex sm:justify-start sm:items-center sm:ml-10 sm:gap-2       xl:flex xl:justify-start xl:items-center xl:ml-10 xl:gap-2 hidden ">
                <div className="">
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

                <div className="">
                  <AboutUS />
                </div>
                <div className="">
                  <Department />
                </div>
                <div className=" ">
                  <CoCurricular />
                </div>
                <div className=" ">
                  <AntiRagging />
                </div>
                <div className=" ">
                  <DisClosure />
                </div>
                <div className=" ">
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
                <div className="">
                  <Related />
                </div>
                <div className=" ">
                  {mandatory.map((item) => (
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
                <div className="">
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

                <div className="">
                  <Downloads />
                </div>

                <div className=" ">
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

          <Disclosure.Panel className="sm:hidden absolute left-1/2  mt-10  max-w-fit -translate-x-1/2  z-50 ">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl   text-sm leading-6 shadow-lg  ring-gray-900/5">
              <div className="space-y-1 px-2 pb-3 pt-2">
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

              <div className="space-y-1 px-2 pb-3 pt-2 bg-white rounded-md mx-3 my-2 ">
                <AboutUS />
              </div>
              <div className="space-y-1 px-2 pb-3 pt-2 bg-white rounded-md mx-3 my-2 ">
                <Department />
              </div>
              <div className="space-y-1 px-2 pb-3 pt-2 bg-white rounded-md mx-3 my-2 ">
                <CoCurricular />
              </div>
              <div className="space-y-1 px-2 pb-3 pt-2 bg-white rounded-md mx-3 my-2 ">
                <AntiRagging />
              </div>
              <div className="space-y-1 px-2 pb-3 pt-2 bg-white rounded-md mx-3 my-2 ">
                <DisClosure />
              </div>
              <div className="space-y-1 px-2 pb-3 pt-2">
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
              <div className="space-y-1 px-2 pb-3 pt-2 bg-white rounded-md mx-3 my-2 ">
                <Related />
              </div>
              <div className="space-y-1 px-2 pb-3 pt-2">
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
              <div className="space-y-1 px-2 pb-3 pt-2">
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

              <div className="space-y-1 px-2 pb-3 pt-2 bg-white rounded-md mx-3 my-2 ">
                <Downloads />
              </div>

              <div className="space-y-1 px-2 pb-3 pt-2">
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
