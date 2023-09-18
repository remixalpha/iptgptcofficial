import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
//icons
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
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";

import { postLogin } from "../../../../../../utils/agent";

const notificationSchema = Yup.object().shape({
  notification: Yup.string().required("Required"),
});

// data

const uploadedNotifications = [
  {
    id: 1,
    selectedType: "file",
    file: "hello.pdf",
    message: "uploaded content",
  },
  {
    id: 2,
    selectedType: "link",
    link: "https://example.com",
    message: "uploaded content",
  },
];

export default function Form() {
  const [open, setOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("file");

  //backend
  const [Myfile, setMyfile] = useState([]);

  const imgHandler = (event) => {
    setMyfile(event.target.files);
    console.log(event.target.files);
  };

  // Handle the sideFrame open
  const handleToggleDeleteDialog = () => {
    setOpen(!open);
  };
  const { values, setFieldValue } = useState([]);

  return (
    <Formik
      initialValues={{ notification: "", link: "", selectedType: "file" }}
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
          <div className="xl:w-[70rem] space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-3xl bg-white border border-gray-200 px-20 py-10 relative -top-6 ">
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
                        onChange={() => {
                          setSelectedOption("file");
                          setFieldValue("selectedType", "file");
                        }}
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
                        onChange={() => {
                          setSelectedOption("link");
                          setFieldValue("selectedType", "link");
                        }}
                        className="sr-only"
                      />
                      <AiOutlineLink />
                    </label>
                  </div>

                  <input
                    type="hidden"
                    id="selectedType"
                    name="selectedType"
                    value={values.selectedType}
                  />

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
                              className="relative font-semibold text-black bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
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
                            PDF up to 700MB
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
                        className="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
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
                  className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3] "
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
                    className="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            {/* buttons */}
            <div className="mt-6 flex items-center justify-end gap-x-6 mb-28 ">
              {/* Delete button */}
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleToggleDeleteDialog}
                className=" group px-3 py-2 shadow-lg flex flex-row items-center justify-center space-x-2   text-white bg-black rounded-xl   transition-all duration-300 cursor-pointer  "
              >
                <PiTrashSimpleLight
                  type="submit"
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
                className=" group px-3 py-2 shadow-lg flex flex-row items-center justify-center space-x-2   text-white bg-black rounded-xl   transition-all duration-300 cursor-pointer  "
              >
                <PiXLight
                  type="submit"
                  className="w-6 h-6 p-1 text-white transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1 "
                  aria-hidden="true"
                />
                <span className="relative  antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
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
                <span className="relative antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
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
                              <Dialog.Title className="text-lg antialiased tracking-normal font-sans font-medium leading-[1.3] text-gray-900">
                                Notifications
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
                                      className="flex mt-5 py-8 px-4 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
                                    >
                                      <div className="h-6 w-6 flex-shrink-0 overflow-hidden rounded-md">
                                        {item.selectedType === "file" ? (
                                          <BsFileEarmarkPdf className="h-full w-full object-cover object-center" />
                                        ) : (
                                          <AiOutlineLink className="h-full w-full object-cover object-center" />
                                        )}
                                      </div>

                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div className="flex justify-between text-md text-gray-900 antialiased tracking-normal font-sans font-bold leading-[1.3]">
                                          <h3>
                                            {item.type === "file" ? (
                                              <a href={item.file}>
                                                {item.file}
                                              </a>
                                            ) : (
                                              <a href={item.link}>
                                                {item.link}
                                              </a>
                                            )}
                                          </h3>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700 antialiased tracking-normal font-sans font-normal leading-[1.3]">
                                          <h3>
                                            <a href={item.href}>
                                              {item.message}
                                            </a>
                                          </h3>
                                        </div>
                                        <div className="flex flex-1 items-end justify-end text-sm">
                                          <button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            <PiTrashSimpleLight
                                              className="w-7 h-7 p-1 text-black transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1"
                                              aria-hidden="true"
                                            />
                                          </button>
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
