import React, { Fragment, useState } from "react";
import { LuEdit2 } from "react-icons/lu";
import person from "../../../../../../assets/images/section/Departments/Electronics/Asharaf.jpg";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";

import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import {
  PiUploadSimpleThin,
  PiXLight,
  PiTrashSimpleLight,
} from "react-icons/pi";

const sortOptions = [
  { name: "Electronics Department", href: "#", current: true },
  { name: "Computer Department", href: "#", current: false },
  { name: "Printing Technology", href: "#", current: false },
  { name: "Mechanical Workshop", href: "#", current: false },
  { name: "General Department", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Form() {
  const [open, setOpen] = useState(true);

  const [isEdit, setIsEdit] = useState(true);

  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [fileInputKey, setFileInputKey] = useState(0);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const handleToggleDeleteDialog = () => {
    setOpen(!open);
  };

  const handleToggleEditDialog = () => {
    setOpen(!open);
  };

  return (
    <form>
      <div
        className={` xl:w-[110rem] p-10 space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-xl bg-white ${
          open ? " opacity-0 " : ""
        }`}
      >
        <div className="grid grid-cols-2  gap-x-[8rem] items-center  gap-y-8 ">
          {/* photo and name and department */}
          {isEdit ? (
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 xl:grid-cols-2  ">
              <div className="col-2 flex justify-center  ">
                <div className="relative inline-block  ">
                  <img
                    className="rounded-xl w-96 h-96 object-cover shadow-lg "
                    alt="Profile"
                    src={image}
                  />
                  <label
                    htmlFor="fileInput"
                    className="absolute top-80 -right-8 bg-white p-2 rounded-xl shadow-lg cursor-pointer"
                  >
                    <div className="flex flex-col justify-end ">
                      <LuEdit2
                        className="h-10 w-10 p-1 text-navy-900 "
                        aria-hidden="true"
                      />
                    </div>
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    key={fileInputKey}
                    className="sr-only"
                    onChange={(e) => {
                      setFileInputKey((prev) => prev + 1);
                      handleFileChange(e);
                    }}
                  />
                </div>
              </div>
              <div className="space-y-10">
                <div className="m:col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="m:col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Position
                  </label>
                  <div className="mt-2">
                    <input
                      id="position"
                      name="position"
                      type="text"
                      autoComplete="position"
                      className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="departments"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Departments
                  </label>
                  <div className="mt-2">
                    <select
                      id="departments"
                      name="departments"
                      autoComplete="country-name"
                      className="block w-full px-5 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div className=" flex items-center justify-end gap-x-6 relative top-[2rem] ">
                  <div className="group flex flex-col justify-end cursor-pointer">
                    <div className="relative">
                      <PiXLight
                        type="submit"
                        className="h-10 w-10 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                        aria-hidden="true"
                      />
                      <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                        Cancel
                      </a>
                    </div>
                  </div>
                  <div className="group flex flex-col justify-end cursor-pointer">
                    <div className="relative">
                      <PiUploadSimpleThin
                        type="submit"
                        className="h-10 w-10 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                        aria-hidden="true"
                      />
                      <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                        Upload
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* all ready uploaded */}
          <div>
            <Menu
              as="div"
              className="relative inline-block text-left -right-[37rem] "
            >
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-xl  bg-white shadow-lg ">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active
                                ? "bg-gray-100 rounded-xl m-1 transition-all duration-300 "
                                : "m-2",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className="max-h-[400px] overflow-y-auto overflow-x-hidden ml-[4rem] mt-5 max-w-2xl">
              <ul class=" space-y-6  ml-[4rem] mt-5 max-w-lg max-h-screen">
                <li className="flex py-6 px-4 bg-orange-50 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-300 pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={person}
                        alt="Neil image"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col-1">
                      <div className="flex-1  justify-between">
                        <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                          Neil Sims
                        </p>
                      </div>
                      <div className="flex flex-1 ml-[14rem] items-end justify-end text-sm">
                        <div className="group flex flex-col justify-end cursor-pointer">
                          <div className="relative">
                            <LuEdit2
                              type="submit"
                              className="h-6 w-6 p-1 text-gray-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                              onClick={handleToggleDeleteDialog}
                            />
                            <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px] font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              Edit
                            </a>
                          </div>
                        </div>
                        <div className="group flex flex-col justify-end ml-5 cursor-pointer">
                          <div className="relative">
                            <PiTrashSimpleLight
                              type="submit"
                              className="h-7 w-7 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                            />
                            <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px]  font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex py-6 px-4 bg-orange-50 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-300 pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={person}
                        alt="Neil image"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col-1">
                      <div className="flex-1  justify-between">
                        <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                          Neil Sims
                        </p>
                      </div>
                      <div className="flex flex-1 ml-[14rem] items-end justify-end text-sm">
                        <div className="group flex flex-col justify-end cursor-pointer">
                          <div className="relative">
                            <LuEdit2
                              type="submit"
                              className="h-6 w-6 p-1 text-gray-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                              onClick={handleToggleDeleteDialog}
                            />
                            <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px] font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              Edit
                            </a>
                          </div>
                        </div>
                        <div className="group flex flex-col justify-end ml-5 cursor-pointer">
                          <div className="relative">
                            <PiTrashSimpleLight
                              type="submit"
                              className="h-7 w-7 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                            />
                            <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px]  font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex py-6 px-4 bg-orange-50 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-300 pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={person}
                        alt="Neil image"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col-1">
                      <div className="flex-1  justify-between">
                        <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                          Neil Sims
                        </p>
                      </div>
                      <div className="flex flex-1 ml-[14rem] items-end justify-end text-sm">
                        <div className="group flex flex-col justify-end cursor-pointer">
                          <div className="relative">
                            <LuEdit2
                              type="submit"
                              className="h-6 w-6 p-1 text-gray-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                              onClick={handleToggleDeleteDialog}
                            />
                            <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px] font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              Edit
                            </a>
                          </div>
                        </div>
                        <div className="group flex flex-col justify-end ml-5 cursor-pointer">
                          <div className="relative">
                            <PiTrashSimpleLight
                              type="submit"
                              className="h-7 w-7 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                            />
                            <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px]  font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex py-6 px-4 bg-orange-50 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-300 pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={person}
                        alt="Neil image"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col-1">
                      <div className="flex-1  justify-between">
                        <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                          Neil Sims
                        </p>
                      </div>
                      <div className="flex flex-1 ml-[14rem] items-end justify-end text-sm">
                        <div className="group flex flex-col justify-end cursor-pointer">
                          <div className="relative">
                            <LuEdit2
                              type="submit"
                              className="h-6 w-6 p-1 text-gray-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                              onClick={handleToggleDeleteDialog}
                            />
                            <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px] font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              Edit
                            </a>
                          </div>
                        </div>
                        <div className="group flex flex-col justify-end ml-5 cursor-pointer">
                          <div className="relative">
                            <PiTrashSimpleLight
                              type="submit"
                              className="h-7 w-7 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                            />
                            <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px]  font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex py-6 px-4 bg-orange-50 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-300 pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={person}
                        alt="Neil image"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col-1">
                      <div className="flex-1  justify-between">
                        <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                          Neil Sims
                        </p>
                      </div>
                      <div className="flex flex-1 ml-[14rem] items-end justify-end text-sm">
                        <div className="group flex flex-col justify-end cursor-pointer">
                          <div className="relative">
                            <LuEdit2
                              type="submit"
                              className="h-6 w-6 p-1 text-gray-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                              onClick={handleToggleDeleteDialog}
                            />
                            <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px] font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              Edit
                            </a>
                          </div>
                        </div>
                        <div className="group flex flex-col justify-end ml-5 cursor-pointer">
                          <div className="relative">
                            <PiTrashSimpleLight
                              type="submit"
                              className="h-7 w-7 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                            />
                            <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px]  font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex py-6 px-4 bg-orange-50 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-300 pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={person}
                        alt="Neil image"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col-1">
                      <div className="flex-1  justify-between">
                        <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                          Neil Sims
                        </p>
                      </div>
                      <div className="flex flex-1 ml-[14rem] items-end justify-end text-sm">
                        <div className="group flex flex-col justify-end cursor-pointer">
                          <div className="relative">
                            <LuEdit2
                              type="submit"
                              className="h-6 w-6 p-1 text-gray-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                              onClick={handleToggleDeleteDialog}
                            />
                            <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px] font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              Edit
                            </a>
                          </div>
                        </div>
                        <div className="group flex flex-col justify-end ml-5 cursor-pointer">
                          <div className="relative">
                            <PiTrashSimpleLight
                              type="submit"
                              className="h-7 w-7 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                            />
                            <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px]  font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {open && (
        // Popup Edit Dialog
        <div className=" inset-0 flex items-center justify-center  z-50 fixed top-8 ">
          <div className="bg-white rounded-xl p-8 shadow-lg ">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 xl:grid-cols-2">
              <div className="col-2 flex justify-center  ">
                <div className="relative inline-block  ">
                  <img
                    className="rounded-xl w-96 h-96 object-cover shadow-lg "
                    alt="Profile"
                    src={image}
                  />
                  <label
                    htmlFor="fileInput"
                    className="absolute top-80 -right-8 bg-white p-2 rounded-xl shadow-lg cursor-pointer"
                  >
                    <div className="flex flex-col justify-end ">
                      <LuEdit2
                        className="h-10 w-10 p-1 text-navy-900 "
                        aria-hidden="true"
                      />
                    </div>
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    key={fileInputKey}
                    className="sr-only"
                    onChange={(e) => {
                      setFileInputKey((prev) => prev + 1);
                      handleFileChange(e);
                    }}
                  />
                </div>
              </div>
              <div className="space-y-10">
                <div className="m:col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="m:col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Position
                  </label>
                  <div className="mt-2">
                    <input
                      id="position"
                      name="position"
                      type="text"
                      autoComplete="position"
                      className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="departments"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Departments
                  </label>
                  <div className="mt-2">
                    <select
                      id="departments"
                      name="departments"
                      autoComplete="country-name"
                      className="block w-full px-5 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div className="group flex flex-col justify-end items-end relative top-[3rem] cursor-pointer">
                  <div className="relative">
                    <PiUploadSimpleThin
                      type="submit"
                      className="h-10 w-10 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                      aria-hidden="true"
                    />
                    <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                      Upload
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end relative xl:bottom-[27rem] ">
              <div className="relative cursor-pointer ">
                <PiXLight
                  type="submit"
                  className="h-10 w-10 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                  aria-hidden="true"
                  onClick={handleToggleEditDialog}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
