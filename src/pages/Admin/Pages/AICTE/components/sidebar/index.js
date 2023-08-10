import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../../../../assets/images/logos/ipt.png";
import User from "../../../../../../assets/images/section/Departments/computer/Saani.jpg";

import { CiUser, CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
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
  {
    name: "Sign out",
    href: "#",
    icon: CiLogout,
  },
];

const navigation = {
  categories: [
    {
      id: "home",
      name: "Home",
      icon: CiUser,
      href: "/adminhome",
      current: true,
    },
    {
      id: "departments",
      name: "Departments",
      icon: CiUser,
      href: "admindepartments",
      current: true,
    },
    {
      id: "principal",
      name: "Principal",
      icon: CiUser,
      href: "/adminprincipal",
      current: true,
    },
    {
      id: "hod",
      name: "HOD",
      icon: CiUser,
      href: "/adminhod",
      current: true,
    },
    {
      id: "co-curricular",
      name: "Co-Curricular",
      icon: CiUser,
      href: "/admincocurricular",
      current: true,
    },
    {
      id: "aicte certificate",
      name: "AICTE Certificate",
      icon: CiUser,
      href: "/adminaicte",
      current: true,
    },
    {
      id: "gallery",
      name: "Gallery",
      icon: CiUser,
      href: "/admingalery",
      current: true,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("AICTE Certificate");

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <header className=" bg-indigo-400 ">
      <nav
        className="xl:mx-auto sm:mx-2 mx-2 flex max-w-7xl items-center justify-between p-8 lg:px-8 bg-indigo-400 rounded-primary "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/adminhome" className="-m-5 p-1.5">
            <span className="sr-only">IPT & GPTC Shoranur</span>
            <img
              className="h-9 w-auto scale-150 relative right-[10rem] "
              src={Logo}
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-10  ">
          {navigation.categories.map((categories) => (
            <a
              key={categories.name}
              href={categories.href}
              onClick={() => handleItemClick(categories.name)}
              className={classNames(
                activeItem === categories.name
                  ? "text-Primary bg-white  text-md  font-bold   transition-all duration-300 ease-in-out "
                  : "text-white text-md  font-bold hover:text-Primary hover:bg-white  hover:text-md  hover:font-bold ",
                "rounded-full font-bold   px-3 py-2 text-sm  transition-all duration-300 ease-in-out "
              )}
              aria-current={categories.current ? "page" : undefined}
            >
              {categories.name}
            </a>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Profile dropdown */}

              <Popover className="relative">
                <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  <div>
                    <div
                      className="relative flex max-w-xs items-center rounded-full
                    bg-gray-800 text-sm focus:outline-none focus:ring-2
                    focus:ring-white focus:ring-offset-2
                    focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
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
                  <Popover.Panel className="absolute left-1/2 z-10 mt-10  flex w-screen max-w-sm -translate-x-1/2 px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {userNavigation.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                          >
                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center ">
                              <item.icon
                                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div>
                              <a
                                href={item.href}
                                className="font-semibold text-gray-900 relative top-3 "
                              >
                                {item.name}
                                <span className="absolute inset-0 " />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">IPT & GPTC Shoranur</span>
              <img className="h-8 w-auto" src={Logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/adminhome"
                  className="-mx-3 block rounded-lg bg-LightWhite px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/admindepartment"
                  className="-mx-3 block rounded-lg hover:bg-LightWhite px-3 py-2 text-base font-semibold leading-7 text-gray-900 "
                >
                  Departments
                </a>
                <a
                  href="/adminprincipal"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  principal
                </a>
                <a
                  href="/adminhod"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  HOD
                </a>
                <a
                  href="/admincocurricular"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Co-Curricular
                </a>
                <a
                  href="/adminaicte"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  AICTE Certificate
                </a>
                <a
                  href="/admingallery"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
