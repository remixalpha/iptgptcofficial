import React, { Fragment, useEffect, useState } from "react";

import { Menu, Dialog, Transition } from "@headlessui/react";
//icons
import { LuEdit2 } from "react-icons/lu";
import { BiImageAdd } from "react-icons/bi";
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

// Validation
const notificationSchema = Yup.object().shape({
  event: Yup.string().required("Event is required"),
});
const initialTabs = "Tabs";
export default function Form() {
  const [open, setOpen] = useState(true);
  const [isEdit, setIsEdit] = useState(true);
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [fileInputKey, setFileInputKey] = useState(0);
  // Sort option name change
  const [selectedSortOption, setSelectedSortOption] = useState(initialTabs);
  // Form submit for image is selected or not validation
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // Image upload and reset state
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [SelectedImage, setSelectedImage] = useState(null);
  //  Hover image
  const [hoveredProduct, setHoveredProduct] = useState(null);
  // view all are submitted
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [showTickMark, setShowTickMark] = useState(false);

  // const [items, setItems] = useState([]);
  // const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);

  //backend
  const [gallerys, setgallerys] = useState([]);
  const [Myfile, setMyfile] = useState([]);
  const [tabs, setTabs] = useState([]); // To store all tabs
  const [selectedTab, setSelectedTab] = useState(""); // To store the selected tab for the current image
  const [filteredImages, setFilteredImages] = useState([]); // Initialize as an empty array
  // const [selectedDepartment, setSelectedDepartment] = useState("");
  const [formDeptOption, setFormDeptOption] = useState("CAMPUS");
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

  // const handleDeleteItem = (productId) => {
  //   setgallerys((prevProduct) =>
  //     prevProduct.filter((product) => product.id !== productId)
  //   );
  // };

  let galleryTabs = [
    "CAMPUS",
    "NCC",
    "NSS",
    "IEDC",
    "HOSTEL",
    "AUDITORIUM",
    "WORKSHOP",
    "LIBRARY",
  ];

  // Backend

  // const handleDepartmentChange = (e) => {
  //   setSelectedDepartment(e.target.value);
  //   console.log({ selectedDepartment: selectedDepartment });
  // };

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

  // Define a function to handle tab clicks
  const handleTabClick = (tabs) => {
    setSelectedTab(tabs);
    const filtered = gallerys.filter((items) => items.tabs === tabs);
    setFilteredImages(filtered); // Call the function to filter images based on the tab
  };

  //featching Images data
  function fetchImage() {
    FetchRequest("/gallery/")
      .then((res) => {
        // console.log(res.data);
        if (res.statusText === "OK") {
          console.log(res.data.doc);
          setgallerys(res.data.doc);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }

  // Deleting Image data
  function DeleteImage(id) {
    postLogin(`/gallery/del/${id}`)
      .then((res) => {
        if (res.statusText === "OK") {
          console.log(res.data);
          window.location.reload();
        } else {
          console.log("No response found");
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.info("API CALL");
      });
  }
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Formik
      initialValues={{ event: "" }}
      validationSchema={notificationSchema}
      onSubmit={(values) => {
        // values.tabs = selectedTab;
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

        formData.append("tabs", formDeptOption);

        console.log({ formData: formData });
        postLogin("/gallery/create", formData)
          .then(async (res) => {
            console.log(res.data);
            if (res?.statusText === "Created") {
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
            setIsContentVisible(false);
            setShowTickMark(true);

            setTimeout(() => {
              window.location.reload();
            }, 5000);
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
              {isContentVisible ? (
                <div>
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
                          onChange={(event) => {
                            imgHandler(event);
                            setIsImageUploaded(true); // Set to true when a file is selected
                            setSelectedImage(event.target.files[0]); // Save the selected file
                          }}
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
                              <BiImageAdd
                                className="w-1/2 mb-2 text-gray-800 h-1/2 "
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
                          className="absolute p-2 border border-e-white bg-white shadow-lg cursor-pointer top-80 -right-8 rounded-xl"
                        >
                          <div className="flex flex-col justify-end ">
                            <LuEdit2
                              className="w-10 h-10 p-1 text-black"
                              aria-hidden="true"
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                    {!isImageUploaded && isFormSubmitted && (
                      <div className="fixed text-red-500 font-normal bottom-28 ">
                        Please upload an image.
                      </div>
                    )}
                    <div className="space-y-10">
                      {/* Events */}
                      <div className="m:col-span-1">
                        <label
                          htmlFor="event"
                          className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                        >
                          Events
                        </label>
                        <div className="mt-2 cursor-pointer ">
                          <input
                            type="text"
                            id="event"
                            name="event"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.event}
                            autoComplete="event"
                            className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          />
                          {errors.event && touched.event && (
                            <div className="error text-red-500 text-sm font-normal mt-1">
                              {errors.event}
                            </div>
                          )}
                        </div>
                      </div>
                      {/* Tabs */}
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="tabs"
                          className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                        >
                          Tabs
                        </label>
                        <div className="mt-2 ">
                          <select
                            id="tabs"
                            name="tabs"
                            autoComplete="tabs"
                            value={formDeptOption}
                            onChange={handleFormDept}
                            className="cursor-pointer block w-full px-5 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            {/* form departments */}
                            {galleryTabs.map((item, i) => (
                              <option value={item} key={i * 10}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* buttons */}
                  <div className="mt-6 flex items-center justify-end gap-x-6 mb-28 relative left-[2rem] ">
                    {/* Delete button */}
                    <button
                      type="button"
                      onClick={handleToggleDeleteDialog}
                      className=" group px-3 py-2 shadow-lg flex flex-row items-center justify-center space-x-2   text-white bg-black rounded-xl   transition-all duration-300 cursor-pointer  "
                    >
                      <PiTrashSimpleLight
                        className="w-6 h-6 p-1 text-white  transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1"
                        aria-hidden="true"
                      />
                      <span className="relative  antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
                        Edit
                      </span>
                    </button>
                    {/* cancel button */}
                    <button
                      type="button"
                      className="flex flex-row items-center justify-center px-3 py-2 space-x-2 text-white transition-all duration-300 bg-black shadow-lg cursor-pointer group rounded-xl"
                      onClick={() => {
                        resetForm(); // Call resetForm to clear the form fields
                        setIsImageUploaded(false);
                        setSelectedImage(null);
                        setIsFormSubmitted(false);
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
                      onClick={() => {
                        setIsFormSubmitted(true);
                      }}
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
              ) : showTickMark ? (
                <div className="relative inset-0 flex flex-col items-center justify-center text-green-500 font-semibold text-2xl">
                  <lord-icon
                    src="https://cdn.lordicon.com/yqzmiobz.json"
                    trigger="loop"
                    delay="1000"
                    colors="primary:#66ee78"
                    state="morph-check-in"
                    style={{ width: "100px", height: "100px" }}
                  ></lord-icon>
                  <span className="mt-2">Uploaded Successful </span>
                </div>
              ) : null}
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
                <div
                  className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                  style={{ backdropFilter: "blur(10px)" }}
                />
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
                        <div className="flex h-full flex-col overflow-hidden bg-gray-200  rounded-xl mt-2 mr-9 shadow-xl">
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
                                <div className="bg-gray-200 ">
                                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                    <h2 className="sr-only">Images</h2>

                                    <div>
                                      <Menu
                                        as="div"
                                        className="relative inline-block text-left"
                                      >
                                        <div>
                                          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500">
                                            {selectedSortOption}
                                            <ChevronDownIcon
                                              className="-mr-1 ml-2 h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </Menu.Button>
                                        </div>
                                        <Menu.Items className="absolute left-0 z-10 mt-2 w-80 origin-top-right rounded-xl bg-white shadow-lg border">
                                          <div className="py-1">
                                            {galleryTabs.map((item) => (
                                              <Menu.Item key={item.id}>
                                                {({ active }) => (
                                                  <a
                                                    className={classNames(
                                                      selectedTab === item
                                                        ? "font-medium text-navy-900"
                                                        : "text-navy-900 cursor-pointer",
                                                      active
                                                        ? "bg-gray-100 text-gray-600 rounded-xl mx-4 transition-all duration-300"
                                                        : "m-2",
                                                      "block px-4 py-2 text-sm"
                                                    )}
                                                    onClick={() => {
                                                      handleTabClick(item);
                                                      setSelectedSortOption(
                                                        item
                                                      );
                                                    }}
                                                  >
                                                    {item}
                                                  </a>
                                                )}
                                              </Menu.Item>
                                            ))}
                                          </div>
                                        </Menu.Items>
                                      </Menu>
                                    </div>

                                    <div className=" mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                      {filteredImages.map((item, index) => (
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
                                                key={item.id}
                                                src={`${
                                                  image_url + item.fileUrl
                                                }`}
                                                alt={`${item.event}_${index}`}
                                                className="w-full h-full object-cover cursor-pointer rounded-md "
                                              />
                                            </div>
                                          </a>
                                          {hoveredProduct === item && (
                                            <button
                                              onClick={() =>
                                                DeleteImage(item._id)
                                              }
                                              type="button"
                                              className="absolute inset-0 flex items-center justify-center rounded-lg cursor-pointer  text-white bg-gray-500 bg-opacity-80 transition-opacity duration-300 opacity-0 group-hover:opacity-100 "
                                            >
                                              <PiTrashSimpleLight
                                                className="w-6 h-6 "
                                                aria-hidden="true"
                                              />
                                            </button>
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
