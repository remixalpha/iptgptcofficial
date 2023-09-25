import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

//icons
import { PhotoIcon } from "@heroicons/react/24/solid";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { LuEdit2 } from "react-icons/lu";
import {
  PiUploadSimpleThin,
  PiXLight,
  PiTrashSimpleLight,
} from "react-icons/pi";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../../../../assets/images/logos/iptlogomin.png";

//backend
import { Formik } from "formik";
import * as Yup from "yup";

import { image_url, postLogin } from "../../../../../../utils/agent";

export default function Form({ Certificate }) {
  const [open, setOpen] = useState(true);

  //backend
  const [Myfile, setMyfile] = useState([]);
  //For file handling
  const imgHandler = (event) => {
    setMyfile(event.target.files);
    console.log(event.target.files);
  };
  //

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setImage(reader.result);
  //     setIsImageUploaded(true);
  //   };
  // };

  // Handle the sideFrame open
  const handleToggleDeleteDialog = () => {
    setOpen(!open);
  };

  function DeleteCertificate(id) {
    postLogin(`/aicte/del/${id}`)
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

  return (
    <Formik
      initialValues={{ name: "", year: "" }}
      // validationSchema={notificationSchema}
      onSubmit={(values) => {
        console.log({ values: values });
        const formData = new FormData();
        // formData.append("admin", "64f86826ea168a20207d0110");
        for (let value in values) {
          formData.append(value, values[value]);
        }
        // formData.append("dept", sortOption);
        Object.values(Myfile).forEach((file) => {
          formData.append("fileUrl", file);
        });

        console.log({ formData: formData });
        postLogin("/aicte/create", formData)
          .then(async (res) => {
            if (res?.statusText === "OK") {
              console.log(res.data);
              window.location.reload();
            } else {
              window.location.reload();
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
          <div className="space-y-12">
            <div className="mt-10 grid xl:grid-cols-2 grid-cols-1  sm:grid-cols-1 shadow-lg rounded-3xl bg-white border border-gray-300 relative -top-[2rem] mx-[20rem] px-20 py-28 gap-x-20  ">
              <div className="">
                <label
                  htmlFor="cover-photo"
                  className="block mb-4 text-sm antialiased tracking-normal font-sans font-normal leading-[1.3] text-gray-900"
                >
                  Upload PDF
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a PDF</span>
                        <input
                          id="file-upload"
                          name="file-upload"
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

              <div className="mt-10 grid xl:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1  ">
                {/* name */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block mb-4 text-sm antialiased tracking-normal font-sans font-normal leading-[1.3] text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* year */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block mb-4 text-sm antialiased tracking-normal font-sans font-normal leading-[1.3] text-gray-900"
                  >
                    Year
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="year"
                      id="year"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.year}
                      autoComplete="given-year"
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* buttons */}
                <div className=" flex items-center justify-end gap-x-6 relative top-[2rem] left-[7rem] ">
                  {/* Delete button */}
                  <button
                    type="button"
                    // disabled={isSubmitting}
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
                    <span className=" relative  antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
                      Upload
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* sideForm */}

          {/* <Transition.Root show={open} as={Fragment}>
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
                                Uploaded
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
                                  {Certificate.map((item) => (
                                    <li
                                      key={item.id}
                                      className="flex mt-5 py-4 px-4 bg-gray-50  rounded-xl hover:shadow-lg transition-all duration-300"
                                    >
                                      <div className="h-6 w-6 flex-shrink-0 overflow-hidden rounded-md ">
                                        <BsFileEarmarkPdf className="h-full w-full object-cover object-center" />
                                      </div>

                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div className="flex justify-between text-md  text-gray-900 antialiased tracking-normal font-sans font-bold  leading-[1.3]">
                                          <h3>
                                            <a href={item.href}>{item.name}</a>
                                          </h3>
                                        </div>
                                        <div className="flex justify-between text-sm  text-gray-700 antialiased tracking-normal font-sans font-normal leading-[1.3]">
                                          <h3>
                                            <a href={item.href}>{item.year}</a>
                                          </h3>
                                        </div>

                                        <div className="flex items-end justify-end flex-1 text-sm">
                                          <button
                                            onClick={() =>
                                              DeleteCertificate(item._id)
                                            }
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            <PiTrashSimpleLight
                                              className="p-1 text-black transition-transform duration-300 ease-in-out transform w-7 h-7 group-hover:-translate-y-1"
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
          </Transition.Root> */}
        </form>
      )}
    </Formik>
  );
}
