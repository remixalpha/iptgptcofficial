import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../../assets/images/logos/ipt.png";
import User from "../../../../assets/images/section/Departments/computer/Staff/Saani.jpg";

import { CiUser, CiLogout } from "react-icons/ci";

import { BsPersonAdd, BsPerson } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";
import { TbPhotoEdit } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegFileImage } from "react-icons/fa6";

import {
  MdOutlineAddPhotoAlternate,
  MdOutlinePhotoSizeSelectLarge,
} from "react-icons/md";

const user = {
  name: "",
  email: "",
  imageUrl: User,
};

const userNavigation = [
  {
    name: "Your Profile",
    href: "#",
    icon: CiUser,
  },
  {
    name: "Settings",
    href: "#",
    icon: IoSettingsOutline,
  },
  // {
  //   name: "Sign out",
  //   href: "#",
  //   icon: CiLogout,
  // },
];

const navigation = {
  categories: [
    {
      id: "home",
      name: "Home",
      icon: GoHome,
      href: "/admin",
      current: true,
    },
    {
      id: "departments",
      name: "Departments",
      icon: BsPersonAdd,
      href: "admindepartments",
      current: true,
    },
    {
      id: "principal",
      name: "Principal",
      icon: BsPersonAdd,
      href: "/adminprincipal",
      current: true,
    },
    {
      id: "hod",
      name: "HOD",
      icon: BsPersonAdd,
      href: "/adminhod",
      current: true,
    },
    {
      id: "co-curricular",
      name: "Co-Curricular",
      icon: BsPersonAdd,
      href: "/admincocurricular",
      current: true,
    },
    {
      id: "aicte certificate",
      name: "AICTE Certificate",
      icon: PiCertificate,
      href: "/adminaicte",
      current: true,
    },
    {
      id: "gallery",
      name: "Gallery",
      icon: MdOutlineAddPhotoAlternate,
      href: "/admingalery",
      current: true,
    },
    {
      id: "placed",
      name: "Hero Image",
      icon: MdOutlinePhotoSizeSelectLarge,
      href: "/adminplaced",
      current: true,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState();
  const navigate = useNavigate();

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
    window.location.reload();
  };

  return (
    <header className="bg-black ">
      <nav
        className="flex items-center justify-between p-8 mx-2 sm:mx-2 max-w-7xl"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div className=" rounded-xl p-6 h-[4rem] w-[15rem] flex items-start relative ">
            <a href="/adminhome" className="-m-5 p-1.5">
              <span className="sr-only">IPT & GPTC Shoranur</span>
              <img
                className="relative w-auto scale-150 h-9 left-7"
                src={Logo}
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden ml-24 lg:flex lg:flex-row ">
          {navigation.categories.map((categories) => (
            <div
              key={categories.name}
              className="relative group flex flex-row items-center p-2 w-[10rem] "
            >
              <div>
                <categories.icon
                  className={
                    activeItem === categories.id
                      ? "h-2 w-2 text-black"
                      : "h-6 w-6 text-white"
                  }
                  aria-hidden="true"
                />
              </div>
              <div className="">
                <a
                  href={categories.href}
                  onClick={() => handleItemClick(categories.name)}
                  className=" flex-grow w-[8rem] rounded-full text-white font-medium p-1 text-sm transition-all duration-300 ease-in-out"
                  aria-current={categories.current ? "page" : undefined}
                >
                  {categories.name}
                </a>
                <span
                  className={classNames(
                    "bottombar absolute bottom-0 top-8 left-9 h-1 bg-white rounded-xl transform w-0 transition-all duration-300",
                    "group-hover:w-10"
                  )}
                />
              </div>
            </div>
          ))}
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="hidden md:block">
            <div className="flex items-center ml-4 md:ml-6">
              {/* Profile dropdown */}

              <Popover className="relative">
                <Popover.Button className="inline-flex items-center text-sm font-semibold leading-6 text-gray-900">
                  <div>
                    <div className="relative flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {/* <img
                        className="w-12 h-12 rounded-full "
                        src={user.imageUrl}
                        alt=""
                      /> */}
                      <BsPerson
                        className="w-10 h-10 p-2 text-white rounded-full "
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -right-[14rem] z-10 mt-10  flex w-screen max-w-sm -translate-x-1/2 px-4">
                    <div className="flex-auto w-screen max-w-md overflow-hidden text-sm leading-6 bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {userNavigation.map((item) => (
                          <div
                            key={item.name}
                            className="relative flex p-4 rounded-lg group gap-x-6 hover:bg-gray-50"
                          >
                            <div className="flex items-center justify-center flex-none mt-1 h-11 w-11 ">
                              <item.icon
                                className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div>
                              <a
                                href={item.href}
                                className="relative font-semibold text-gray-900 top-3 "
                              >
                                {item.name}
                                <span className="absolute inset-0 " />
                              </a>
                            </div>
                          </div>
                        ))}
                        <button
                          className="relative flex p-4 rounded-lg group gap-x-6 w-80 hover:bg-gray-50"
                          onClick={handleLogout}
                        >
                          <div className="flex items-center justify-center flex-none mt-1 h-11 w-11 ">
                            <CiLogout
                              className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <a
                              href="#"
                              className="relative font-semibold text-gray-900 top-3 "
                            >
                              Sign Out
                              <span className="absolute inset-0 " />
                            </a>
                          </div>
                        </button>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile view */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">IPT & GPTC Shoranur</span>
              <img className="w-auto h-8" src={Logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <a
                  href="/adminhome"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg bg-LightWhite hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/admindepartment"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-LightWhite "
                >
                  Departments
                </a>
                <a
                  href="/adminprincipal"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  principal
                </a>
                <a
                  href="/adminhod"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  HOD
                </a>
                <a
                  href="/admincocurricular"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Co-Curricular
                </a>
                <a
                  href="/adminaicte"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  AICTE Certificate
                </a>
                <a
                  href="/admingallery"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Gallery
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
