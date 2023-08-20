import React, { Fragment, useState } from "react";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { LuEdit2 } from "react-icons/lu";
import person from "../../../../../../assets/images/section/Departments/Electronics/Asharaf.jpg";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  PiUploadSimpleThin,
  PiXLight,
  PiTrashSimpleLight,
} from "react-icons/pi";
import { IoImageOutline } from "react-icons/io5";

const sortOptions = [
  { name: "Electronics Department", href: "#", current: true },
  { name: "Computer Department", href: "#", current: false },
  { name: "Printing Technology", href: "#", current: false },
  { name: "Mechanical Workshop", href: "#", current: false },
  { name: "General Department", href: "#", current: false },
];

const initialItems = [
  { id: 1, name: "Ashiraf", department: "Electronics Department" },
  { id: 2, name: "Ashiraf", department: "Electronics Department" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Form() {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [fileInputKey, setFileInputKey] = useState(0);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [items, setItems] = useState(initialItems);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      setIsImageUploaded(true);
    };
  };

  const handleToggleDeleteDialog = () => {
    setOpen(!open);
  };

  const handleToggleEditDialog = () => {
    setOpen(true);
  };

  const handleDeleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <form>
      <div className="xl:w-[110rem] p-10 space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-xl bg-white">
        <div className="grid grid-cols-2  gap-x-[8rem] items-center  gap-y-8 ">
          {/* photo and name and department */}
          {isEdit ? (
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 xl:grid-cols-2  ">
              <div className="col-2 flex justify-center  ">
                <div className="relative inline-block  ">
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
                  <label
                    htmlFor="fileInput"
                    className="relative w-96 h-96 rounded-xl border-dashed border-2 border-gray-400 flex justify-center items-center cursor-pointer"
                  >
                    {isImageUploaded ? (
                      <img
                        className="w-full h-full object-fill rounded-xl"
                        alt="Uploaded"
                        src={image}
                      />
                    ) : (
                      <div className="flex flex-col items-center">
                        <IoImageOutline
                          className="h-1/2 w-1/2 mb-2 text-gray-300 "
                          src=""
                          alt="Placeholder"
                        />
                        <span className="text-gray-500">Upload an image</span>
                      </div>
                    )}
                  </label>
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
                      <option>Electronics Department</option>
                      <option>Computer Department</option>
                      <option>Printing Department</option>
                      <option>General Department</option>
                      <option>Mechanical Department</option>
                      <option>Office</option>
                    </select>
                  </div>
                </div>
                <div className=" flex items-center justify-end gap-x-6 relative top-[9rem] ">
                  <div className="group flex flex-cols-1 justify-end cursor-pointer">
                    <div className="relative  ">
                      <PiXLight
                        type="submit"
                        className="h-10 w-10 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                        aria-hidden="true"
                      />
                      <a
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                        href="#"
                      >
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
                <Menu.Button className="group  inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
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
            <div className="max-h-[400px] overflow-hidden ml-[4rem] mt-5 max-w-2xl p-4  ">
              <ul class=" space-y-6  ml-[4rem]  max-w-lg max-h-screen  ">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className=" scale-100 py-5 px-4 border border-gray-400 rounded-xl  hover:shadow-md transition-all duration-300 pb-3 sm:pb-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-12 h-12 rounded-full object-fill "
                          src={person}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-1 flex-col-1 space-x-[18rem] ">
                        <div className="flex-1  justify-between">
                          <p className="text-[20px] font-bold text-gray-900 truncate dark:text-white">
                            {item.name}
                          </p>
                          <p className="text-sm font-medium text-gray-700 truncate dark:text-white">
                            {item.department}
                          </p>
                        </div>
                        <div className="flex flex-1  items-end justify-end text-sm  space-x-[3rem] relative right-[7rem] mb-2">
                          <div className="group flex flex-col justify-end cursor-pointer">
                            <div
                              type="button"
                              className="fixed"
                              onClick={handleToggleEditDialog}
                            >
                              <LuEdit2
                                type="button"
                                className="h-6 w-6 p-1 text-gray-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                                aria-hidden="true"
                              />
                              <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px] font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                Edit
                              </a>
                            </div>
                          </div>
                          <div className="group flex flex-col justify-end  cursor-pointer">
                            <div
                              className="fixed"
                              onClick={() => handleDeleteItem(item.id)}
                            >
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
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden  px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <div className=" inset-0 flex items-center justify-center  z-50 fixed top-8 ">
                      <div className="bg-white rounded-xl p-8 shadow-lg ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 xl:grid-cols-2">
                          <div className="col-2 flex justify-center  ">
                            <div className="relative inline-block  ">
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
                              <label
                                htmlFor="fileInput"
                                className="relative w-96 h-96 rounded-xl border-dashed border-2 border-gray-400  flex justify-center items-center cursor-pointer"
                              >
                                {isImageUploaded ? (
                                  <img
                                    className="w-full h-full object-fill rounded-xl"
                                    alt="Uploaded"
                                    src={image}
                                  />
                                ) : (
                                  <div className="flex flex-col items-center">
                                    <IoImageOutline
                                      className="h-1/2 w-1/2 mb-2 text-gray-300 "
                                      src=""
                                      alt="Placeholder"
                                    />
                                    <span className="text-gray-500">
                                      Upload an image
                                    </span>
                                  </div>
                                )}
                              </label>
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
                                  <option>Electronics Department</option>
                                  <option>Computer Department</option>
                                  <option>Printing Department</option>
                                  <option>General Department</option>
                                  <option>Mechanical Department</option>
                                  <option>Office</option>
                                </select>
                              </div>
                            </div>
                            <div className="group flex flex-col justify-end items-end relative top-[9rem] cursor-pointer">
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
                              type="button"
                              className="h-10 w-10 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                              aria-hidden="true"
                              onClick={() => setOpen(false)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </form>
  );
}
