import React, { useState, Fragment } from "react";

import { Menu, Dialog, Transition } from "@headlessui/react";

import { LuEdit2 } from "react-icons/lu";
import { IoImageOutline } from "react-icons/io5";
import {
  PiUploadSimpleThin,
  PiXLight,
  PiTrashSimpleLight,
} from "react-icons/pi";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import ipt1 from "../../../../../../assets/images/section/Gallery/iptimage1.jpg";
import ipt2 from "../../../../../../assets/images/section/Gallery/iptimage2.jpg";
import ipt3 from "../../../../../../assets/images/section/Gallery/iptimage3.jpg";
import ipt4 from "../../../../../../assets/images/section/Gallery/iptimage4.jpg";
import ipt5 from "../../../../../../assets/images/section/Gallery/iptimage5.jpg";

const products = [
  {
    id: 1,
    imageSrc: ipt1,
    imageAlt: "IPT",
  },
  {
    id: 2,

    imageSrc: ipt2,
    imageAlt: "IPT",
  },
  {
    id: 3,

    imageSrc: ipt3,
    imageAlt: "IPT",
  },
  {
    id: 4,

    imageSrc: ipt4,
    imageAlt: "IPT",
  },
  {
    id: 5,

    imageSrc: ipt5,
    imageAlt: "IPT",
  },
];

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
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const [hoveredProduct, setHoveredProduct] = useState(null);

  const [product, setProduct] = useState(products);

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
  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const handleDeleteItem = (productId) => {
    setProduct((prevProduct) =>
      prevProduct.filter((product) => product.id !== productId)
    );
  };
  return (
    <form>
      {isEdit ? (
        <div className=" xl:w-[55rem] p-10 space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-xl bg-white border border-gray-300 relative -top-[2rem] ">
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 xl:grid-cols-2 ">
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
            <div className="sm:col-span-1">
              <label
                htmlFor="departments"
                className="block text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
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
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-5xl">
                    <div className="flex h-full flex-col overflow-hidden bg-white rounded-xl mt-2 mr-9 shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-xl text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]">
                            Images
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
                            <div className="bg-white">
                              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                <h2 className="sr-only">Images</h2>

                                <div>
                                  <Menu
                                    as="div"
                                    className="relative inline-block text-left xl:-right-[49rem] xl:-top-[6rem] "
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
                                      <Menu.Items className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-xl  bg-white shadow-lg border ">
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
                                </div>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                  {product.map((product) => (
                                    <div
                                      key={product.id}
                                      className="relative group"
                                      onMouseEnter={() =>
                                        handleMouseEnter(product)
                                      }
                                      onMouseLeave={handleMouseLeave}
                                    >
                                      <a href={product.href} className="group">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                          <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className=" h-36 w-full object-cover object-center "
                                          />
                                        </div>
                                      </a>
                                      {hoveredProduct === product && (
                                        <div className="absolute inset-0 flex items-center justify-center rounded-lg cursor-pointer  text-white bg-gray-500 bg-opacity-80 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ">
                                          <PiTrashSimpleLight
                                            className="w-6 h-6 "
                                            aria-hidden="true"
                                            onClick={() =>
                                              handleDeleteItem(product.id)
                                            }
                                          />
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
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
