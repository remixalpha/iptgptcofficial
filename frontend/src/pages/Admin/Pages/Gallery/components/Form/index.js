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
import { FetchRequest } from "../../../../../../utils/agent";

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
  const [products, setProducts] = useState([]);
  // const [items, setItems] = useState([]);
  // const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);

  //backend
  const [Myfile, setMyfile] = useState([]);
  const [tabs, setTabs] = useState([]); // To store all tabs
  const [selectedTab, setSelectedTab] = useState(""); // To store the selected tab for the current image
  const [filterArray, setFilterArray] = useState([]); // Initialize as an empty array
  //

  const addTab = (tab) => {
    setTabs((prevTabs) => [...prevTabs, tab]);
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
    setProducts((prevProduct) =>
      prevProduct.filter((product) => product.id !== productId)
    );
  };

  // Backend

  //  filter the department and show it in the uploaded part
  function filterArrayByTabs(tab) {
    console.log(products);
    console.log({ tab });
    const filtered = products.filter((item) => item.tabs === tab);
    setFilterArray(filtered); // Set the state to the filtered array
    console.log({ FilterArray: filtered });
  }

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

  // Define a function to handle tab clicks
  const handleTabClick = (tab) => {
    setSelectedTab(tab); // Set the selected tab
    filterArrayByTabs(tab); // Call the function to filter images based on the tab
  };

  //featching Images
  function fetchImage() {
    FetchRequest("/gallery/")
      .then(async (res) => {
        if (res.statusText === "OK") {
          const imageData = res.data.doNotTrack;
          setProducts(imageData);

          // Extract unique tabs from the fetched data
          const uniqueTabs = [...new Set(imageData.map((item) => item.tabs))];
          setTabs(uniqueTabs);
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
      initialValues={{ tabs: "" }}
      // validationSchema={notificationSchema}

      onSubmit={(values) => {
        values.tabs = selectedTab;
        console.log({ values: values });
        const formData = new FormData();
        // formData.append("admin", "64f86826ea168a20207d0110");
        for (let value in values) {
          formData.append(value, values[value]);
        }
        // formData.append("dept", formDeptOption);
        Object.values(Myfile).forEach((file) => {
          formData.append("fileUrl", file);
        });

        console.log({ formData: formData });
        postLogin("/gallery/create", formData)
          .then(async (res) => {
            if (res?.statusText === "OK") {
              console.log(res.data);

              // Add the new tab to the tabs state if it doesn't exist
              if (!tabs.includes(selectedTab)) {
                addTab(selectedTab);
              }

              // // Clear the form and reset selectedTab
              // resetForm();
              setSelectedTab("");
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
                {/* Name */}
                <div className="m:col-span-1">
                  <label
                    htmlFor="tabs"
                    className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                  >
                    Tabs
                  </label>
                  <div className="mt-2 cursor-pointer ">
                    <input
                      id="tabs"
                      name="tabs"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tabs}
                      autoComplete="name"
                      className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
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
                                        className="relative inline-block text-left"
                                      >
                                        <div>
                                          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500">
                                            {selectedTab}{" "}
                                            <ChevronDownIcon
                                              className="-mr-1 ml-2 h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </Menu.Button>
                                        </div>
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-xl bg-white shadow-lg border">
                                          <div className="py-1">
                                            {tabs.map((tab) => (
                                              <Menu.Item key={tab}>
                                                {({ active }) => (
                                                  <a
                                                    className={classNames(
                                                      selectedTab === tab
                                                        ? "font-medium text-navy-900"
                                                        : "text-navy-900 cursor-pointer",
                                                      active
                                                        ? "bg-gray-100 text-gray-600 rounded-xl mx-4 transition-all duration-300"
                                                        : "m-2",
                                                      "block px-4 py-2 text-sm"
                                                    )}
                                                    onClick={() =>
                                                      handleTabClick(tab)
                                                    }
                                                  >
                                                    {tab}
                                                  </a>
                                                )}
                                              </Menu.Item>
                                            ))}
                                          </div>
                                        </Menu.Items>
                                      </Menu>
                                    </div>

                                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                      {filterArray.map((item) => (
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
