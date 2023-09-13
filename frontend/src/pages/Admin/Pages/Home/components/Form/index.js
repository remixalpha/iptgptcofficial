import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import {
  PiUploadSimpleThin,
  PiXLight,
  PiTrashSimpleLight,
} from "react-icons/pi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../../../../assets/images/logos/iptlogomin.png";
// backend
import { Formik } from "formik";
import * as Yup from "yup";

import { postLogin } from "../../../../../../utils/agent";

const notificationSchema = Yup.object().shape({
  notification: Yup.string().required("Required"),
});

// data

const uploadedNotifications = [
  {
    id: 1,
    content: "uploaded content",
  },
  {
    id: 2,
    content: "uploaded content",
  },
];

export default function Form() {
  const [open, setOpen] = useState(true);
  const [Myfile, setMyfile] = useState([]);
  const [selectedOption, setSelectedOption] = useState("file");

  const imgHandler = (event) => {
    setMyfile(event.target.files);
    console.log(event.target.files);
  };

  // Handle the sideFrame open
  const handleToggleDeleteDialog = () => {
    setOpen(!open);
  };

  return (
    <Formik
      initialValues={{ notification: "", link: "" }}
      validationSchema={notificationSchema}
      onSubmit={(values) => {
        console.log({ values: values });
        const formData = new FormData();
        formData.append("admin", "64f86826ea168a20207d0110");
        for (let value in values) {
          formData.append(value, values[value]);
        }
        Object.values(Myfile).forEach((file) => {
          formData.append("fileUrl", file);
        });

        console.log({ formData: formData });
        postLogin("/notification/create", formData)
          .then(async (res) => {
            if (res.statusText === "OK") {
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
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="xl:w-[70rem] space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-xl bg-white border border-gray-200 p-10 relative -top-6 ">
            <div className="">
              <div className="block text-sm  text-gray-900 antialiased tracking-normal font-sans font-semibold leading-[1.3] ">
                Choose option
              </div>
              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 xl:grid-cols-1">
                <div className="col-1">
                  <div className="flex space-x-2 mt-2 relative -top-[2rem] ">
                    <label
                      htmlFor="file-option"
                      className={`relative font-semibold text-black rounded-lg p-4 cursor-pointer ${
                        selectedOption === "file"
                          ? "text-black ring-2 ring-black ring-offset-2"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        id="file-option"
                        name="option"
                        value="file"
                        checked={selectedOption === "file"}
                        onChange={() => setSelectedOption("file")}
                        className="sr-only"
                      />
                      <BsFileEarmarkPdf />
                    </label>
                    <label
                      htmlFor="link-option"
                      className={`relative font-semibold text-black rounded-lg p-4 cursor-pointer  ${
                        selectedOption === "link"
                          ? "text-black ring-2 ring-black ring-offset-2"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        id="link-option"
                        name="option"
                        value="link"
                        checked={selectedOption === "link"}
                        onChange={() => setSelectedOption("link")}
                        className="sr-only"
                      />
                      <AiOutlineLink />
                    </label>
                  </div>

                  {selectedOption === "file" && (
                    <div>
                      <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                        <div className="text-center">
                          <PhotoIcon
                            className="w-12 h-12 mx-auto text-gray-300"
                            aria-hidden="true"
                          />
                          <div className="flex mt-4 text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="fileUrl"
                                type="file"
                                className="sr-only"
                                onChange={imgHandler}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {selectedOption === "link" && (
                  <div className="">
                    <label
                      htmlFor="link"
                      className="block text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3] "
                    >
                      Paste the Link
                    </label>
                    <div className="mt-2">
                      <input
                        id="link"
                        name="link"
                        type="link"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.link}
                        autoComplete="link"
                        className="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="">
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3] "
                >
                  Notification
                </label>
                <div className="mt-2">
                  <textarea
                    id="notification"
                    name="notification"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.notification}
                    placeholder="Enter the notification message here"
                    rows={3}
                    className="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            {/* buttons */}
            <div className="flex items-center justify-end mt-6 gap-x-6 mb-28 transition-all duration-300 ">
              {/* Delete button */}
              <button className="group flex flex-col justify-end cursor-pointer">
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
              </button>
              {/* cancel button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className=" group px-3 py-2 shadow-lg flex flex-row items-center justify-center space-x-2   text-white bg-black rounded-xl   transition-all duration-300 "
              >
                <PiXLight
                  type="submit"
                  className="w-6 h-6 p-1 text-white  "
                  aria-hidden="true"
                />
                <span className="absolute invisible group-hover:relative group-hover:visible  antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
                  Cancel
                </span>
              </button>
              {/* Upload button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className=" group px-3 py-2 w-25 shadow-lg flex flex-row items-center justify-center space-x-2  text-white bg-black rounded-xl   transition-all duration-300 "
              >
                <PiUploadSimpleThin
                  type="submit"
                  className="w-6 h-6 p-1 text-white  "
                  aria-hidden="true"
                />
                <span className="absolute invisible group-hover:relative group-hover:visible antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
                  Update
                </span>
              </button>
            </div>
          </div>

          {/* sideForm */}

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
                                  {uploadedNotifications.map((item) => (
                                    <li
                                      key={item.id}
                                      className="flex py-6 px-4 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
                                    >
                                      <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md ">
                                        <img
                                          src={Logo}
                                          alt="IPT&GPTC LOGO"
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>

                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                              <a href={item.href}>
                                                {item.name}
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
      )}
    </Formik>
  );
}
