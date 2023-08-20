import React, { useState, Fragment } from "react";
import { LuEdit2 } from "react-icons/lu";
import { IoImageOutline } from "react-icons/io5";

import {
  PiUploadSimpleThin,
  PiXLight,
  PiTrashSimpleLight,
} from "react-icons/pi";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Principal1 from "../../../../../../assets/images/section/asamis.jpeg";

const products = [
  {
    id: 1,
    name: "Asamis",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
  },
  {
    id: 2,
    name: "Asamis",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
  },
];

export default function Form() {
  const [open, setOpen] = useState(true);

  const [isEdit, setIsEdit] = useState(true);

  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [fileInputKey, setFileInputKey] = useState(0);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

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

  return (
    <form>
      {isEdit ? (
        <div className=" xl:w-[110rem] p-10 space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-xl bg-white">
          <div className="grid grid-cols-2  gap-x-[8rem] gap-y-8 ">
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
                    className="relative w-96 h-96 rounded-xl border-dashed border-2 border-navy-300 flex justify-center items-center cursor-pointer"
                  >
                    {isImageUploaded ? (
                      <img
                        className="w-full h-full object-cover rounded-xl"
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

                <div className="m:col-span-1">
                  <label
                    htmlFor="qualification"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Qualification
                  </label>
                  <div className="mt-2">
                    <input
                      id="qualification"
                      name="qualification"
                      type="text"
                      autoComplete="qualification"
                      className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="">
                <div className="col-span-full">
                  <label
                    htmlFor="quote"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Quote
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="quote"
                      name="quote"
                      placeholder="Enter the Quote here"
                      rows={3}
                      className="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="col-span-full">
                  <label
                    htmlFor="writer"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Writer
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="writer"
                      name="writer"
                      placeholder="Enter the Write here"
                      rows={3}
                      className="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="col-span-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter the message here"
                      rows={3}
                      className="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 mb-28 ">
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
            <div className="group flex flex-col justify-end cursor-pointer">
              <div className="relative">
                <PiTrashSimpleLight
                  type="submit"
                  className="h-10 w-10 p-1 text-navy-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                  aria-hidden="true"
                  onClick={handleToggleDeleteDialog}
                />
                <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-hidden bg-white rounded-xl mt-2 mr-4 shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Principals
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 space-y-4 ">
                              {products.map((product) => (
                                <li
                                  key={product.id}
                                  className="flex py-6 px-4 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
                                >
                                  <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md ">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>
                                            {product.name}
                                          </a>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-end text-sm">
                                      <div className="">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
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
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </form>
  );
}
