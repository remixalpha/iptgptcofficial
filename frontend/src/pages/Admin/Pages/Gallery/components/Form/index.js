import React, { Fragment, useEffect, useState } from "react";

import { Menu, Dialog, Transition } from "@headlessui/react";
//icons
import { LuEdit2 } from "react-icons/lu";
import { IoImageOutline } from "react-icons/io5";
import {
  PiUploadSimpleThin,
  PiXLight,
  PiTrashSimpleLight,
} from "react-icons/pi";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

//backend
import { Formik } from "formik";
import * as Yup from "yup";
import { image_url, postLogin } from "../../../../../../utils/agent";
import { getRequest } from "../../../../../../utils/agent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Form({ departments }) {
  const [open, setOpen] = useState(true);
  const [isEdit, setIsEdit] = useState(true);
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [fileInputKey, setFileInputKey] = useState(0);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [products, setProducts] = useState([]);
  // const [items, setItems] = useState([]);
  // const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);

  const [FilteredArray, setFilteredArray] = useState([]);
  //backend
  const [Myfile, setMyfile] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [formDeptOption, setFormDeptOption] = useState(
    "64bad26c578e4a044eb886a1"
  );
  //
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      setIsImageUploaded(true);
    };
  };

  function filterArrayById(deptId) {
    console.log(products);
    console.log({ id: deptId });
    const filtered = products.filter((item) => item.dept === deptId);
    setFilteredArray(filtered);
    console.log({ FilterArray: filtered });
  }

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
    setProducts((prevProduct) =>
      prevProduct.filter((product) => product.id !== productId)
    );
  };

  //backend
  // Backend
  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    console.log({ selectedDepartment: selectedDepartment });
  };

  const handleFormDept = (e) => {
    setFormDeptOption(e.target.value);
    console.log({ Selected: formDeptOption });
  };

  // Update the imgHandler function to handle image uploading
  const imgHandler = (event) => {
    setMyfile(event.target.files);
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedImage);

      reader.onload = () => {
        setImage(reader.result);
        setIsImageUploaded(true);
      };
    }
  };

  //featching Images
  function fetchImage() {
    getRequest("/gallery/")
      .then(async (res) => {
        if (res.statusText === "OK") {
          console.log(res.data.doNotTrack);
          setProducts(res.data.doNotTrack);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Formik
      initialValues={{ event: "" }}
      // validationSchema={notificationSchema}
      onSubmit={(values) => {
        console.log({ values: values });
        const formData = new FormData();
        // formData.append("admin", "64f86826ea168a20207d0110");
        for (let value in values) {
          formData.append(value, values[value]);
        }
        formData.append("dept", formDeptOption);
        Object.values(Myfile).forEach((file) => {
          formData.append("fileUrl", file);
        });

        console.log({ formData: formData });
        postLogin("/gallery/create", formData)
          .then(async (res) => {
            if (res?.statusText === "OK") {
              console.log(res.data);
              // window.location.reload();
            } else {
              console.log("not get response");
            }
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            console.info("API CALL");
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          {isEdit ? (
            <div className=" xl:w-[55rem] p-10 space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-3xl bg-white border border-gray-300 relative -top-[2rem] px-20 py-10  ">
              <div className="mt-10 grid grid-cols-1 gap-x-20 gap-y-8 xl:grid-cols-2 ">
                {/* imageUpload */}
                <div className="flex justify-center cursor-pointer col-2">
                  <div className="relative inline-block ">
                    <input
                      id="fileInput"
                      name="fileUrl"
                      type="file"
                      key={fileInputKey}
                      className="sr-only"
                      onChange={imgHandler}
                    />
                    <label
                      htmlFor="fileInput"
                      className="relative flex items-center justify-center border-2 border-dashed cursor-pointer w-96 h-96 rounded-xl border-navy-300"
                    >
                      {isImageUploaded ? (
                        <img
                          className="object-cover w-full h-full rounded-xl"
                          alt="Uploaded"
                          src={image}
                        />
                      ) : (
                        <div className="flex flex-col items-center">
                          <IoImageOutline
                            className="w-1/2 mb-2 text-gray-300 h-1/2 "
                            src=""
                            alt="Placeholder"
                          />
                          <span className="text-gray-500">Upload an image</span>
                        </div>
                      )}
                    </label>
                    <label
                      htmlFor="fileInput"
                      className="absolute p-2 bg-white shadow-lg cursor-pointer top-80 -right-8 rounded-xl"
                    >
                      <div className="flex flex-col justify-end ">
                        <LuEdit2
                          className="w-10 h-10 p-1 text-navy-900 "
                          aria-hidden="true"
                        />
                      </div>
                    </label>
                  </div>
                </div>
                {/* Departments */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="departments"
                    className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                  >
                    Departments
                  </label>
                  <div className="mt-2 ">
                    <select
                      id="departments"
                      name="departments"
                      autoComplete="country-name"
                      value={formDeptOption}
                      onChange={handleFormDept}
                      className="cursor-pointer block w-full px-5 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      {/* form departments */}
                      {departments.map((item, i) => (
                        <option value={item._id} key={i * 10}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* buttons */}
              <div className="mt-6 flex items-center justify-end gap-x-6 mb-28 relative left-[2rem] ">
                {/* Delete button */}
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleToggleDeleteDialog}
                  className=" group px-3 py-2 shadow-lg flex flex-row items-center justify-center space-x-2   text-white bg-black rounded-xl   transition-all duration-300 cursor-pointer  "
                >
                  <PiTrashSimpleLight
                    className="w-6 h-6 p-1 text-white  transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                  <span className="relative  antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
                    Delete
                  </span>
                </button>
                {/* cancel button */}
                <button
                  type="button"
                  disabled={isSubmitting}
                  className="flex flex-row items-center justify-center px-3 py-2 space-x-2 text-white transition-all duration-300 bg-black shadow-lg cursor-pointer group rounded-xl"
                  onClick={() => {
                    resetForm(); // Call resetForm to clear the form fields
                  }}
                >
                  <PiXLight
                    className="w-6 h-6 p-1 text-white transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                  <span className="relative antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3]">
                    Cancel
                  </span>
                </button>
                {/* Upload button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" group px-3 py-2 w-25 shadow-lg flex flex-row items-center justify-center space-x-2  text-white bg-black rounded-xl   transition-all duration-300 cursor-pointer  "
                >
                  <PiUploadSimpleThin
                    type="submit"
                    className="w-6 h-6 p-1 text-white transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1 "
                    aria-hidden="true"
                  />
                  <span className="relative  antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
                    Update
                  </span>
                </button>
              </div>
            </div>
          ) : null}
          {/* update Form */}
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
                              <Dialog.Title className=" ml-8 mt-2 text-xl text-gray-900 antialiased tracking-normal font-sans font-medium  leading-[1.3]">
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
                                              {departments.map(
                                                (option, index) => (
                                                  <Menu.Item key={option._id}>
                                                    {({ active }) => (
                                                      <a
                                                        // href={option.href}
                                                        className={classNames(
                                                          option.current
                                                            ? "font-medium  "
                                                            : " text-navy-900  cursor-pointer",
                                                          active
                                                            ? "bg-gray-100 text-gray-600  rounded-xl mx-4 transition-all duration-300 "
                                                            : "m-2",
                                                          "block px-4 py-2 text-sm"
                                                        )}
                                                        onClick={() =>
                                                          filterArrayById(
                                                            option._id
                                                          )
                                                        }
                                                      >
                                                        {option.name}
                                                      </a>
                                                    )}
                                                  </Menu.Item>
                                                )
                                              )}
                                            </div>
                                          </Menu.Items>
                                        </Transition>
                                      </Menu>
                                    </div>

                                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                      {FilteredArray.map((item) => (
                                        <div
                                          key={item.id}
                                          className="relative group"
                                          onMouseEnter={() =>
                                            handleMouseEnter(item)
                                          }
                                          onMouseLeave={handleMouseLeave}
                                        >
                                          <a href={item.href} className="group">
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                              <img
                                                className="object-cover w-12 h-12 rounded-full"
                                                src={`${
                                                  image_url + item.fileUrl
                                                }`}
                                                alt=""
                                              />
                                            </div>
                                          </a>
                                          {hoveredProduct === item && (
                                            <div className="absolute inset-0 flex items-center justify-center rounded-lg cursor-pointer  text-white bg-gray-500 bg-opacity-80 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ">
                                              <PiTrashSimpleLight
                                                className="w-6 h-6 "
                                                aria-hidden="true"
                                                onClick={() =>
                                                  handleDeleteItem(item.id)
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
      )}
    </Formik>
  );
}
