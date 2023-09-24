import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

//icons
import { LuEdit2 } from "react-icons/lu";
import { IoImageOutline } from "react-icons/io5";

import {
  PiUploadSimpleThin,
  PiXLight,
  PiTrashSimpleLight,
} from "react-icons/pi";

import { XMarkIcon } from "@heroicons/react/24/outline";

// Backend
import { Formik } from "formik";
import * as Yup from "yup";
import { image_url, postLogin } from "../../../../../../utils/agent";

export default function Form({ Principals }) {
  const [open, setOpen] = useState(true);
  const [isEdit, setIsEdit] = useState(true);
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [fileInputKey, setFileInputKey] = useState(0);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  // Success and error messages
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  // backend
  const [Myfile, setMyfile] = useState([]);

  const handleToggleDeleteDialog = () => {
    setOpen(!open);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      setIsImageUploaded(true);
    };
  };

  //backend
  //delete function
  // function DeletePrincipal(id) {
  //   postLogin(`/principal/del/${id}`)
  //     .then((res) => {
  //       if (res.statusText === "OK") {
  //         console.log(res.data);
  //         window.location.reload();
  //       } else {
  //         console.log("No response found");
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  //     .finally(() => {
  //       console.info("API CALL");
  //     });
  // }

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

  return (
    <Formik
      initialValues={{
        name: "",
        Qualification: "",
        quote: "",
        writer: "",
        message: "",
      }}
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
        postLogin("/pricipal/create", formData)
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
            <div className=" xl:w-[110rem] p-20 space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-3xl bg-white border border-gray-300 relative -top-[2rem] ">
              <div className="grid grid-cols-2  gap-x-[8rem] gap-y-8 ">
                <div className="mt-10 grid grid-cols-1 gap-x-20 gap-y-8 xl:grid-cols-2">
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
                        className="relative flex items-center justify-center border-2 border-gray-400 border-dashed cursor-pointer w-96 h-96 rounded-xl"
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
                            <span className="text-gray-500">
                              Upload an image
                            </span>
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
                  <div className="space-y-10">
                    {/* Name */}
                    <div className="m:col-span-1">
                      <label
                        htmlFor="name"
                        className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          autoComplete="name"
                          className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    {/* Qualification */}
                    <div className="m:col-span-1">
                      <label
                        htmlFor="name"
                        className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                      >
                        Qualification
                      </label>
                      <div className="mt-2 cursor-pointer">
                        <input
                          id="Qualification"
                          name="Qualification"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.Qualification}
                          autoComplete="name"
                          className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-10 ">
                  {/* Quote */}
                  <div className=" ">
                    <div className="col-span-full">
                      <label
                        htmlFor="quote"
                        className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                      >
                        Quote
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="quote"
                          name="quote"
                          placeholder="Enter the Quote here"
                          rows={3}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.quote}
                          className="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Writer */}
                  <div className="">
                    <div className="col-span-full">
                      <label
                        htmlFor="writer"
                        className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                      >
                        Writer
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="writer"
                          name="writer"
                          placeholder="Enter the Write here"
                          rows={3}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.writer}
                          className="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="">
                    <div className="col-span-full">
                      <label
                        htmlFor="message"
                        className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                      >
                        Message
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Enter the message here"
                          rows={3}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                          className="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
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
                  className=" group px-3 py-2 shadow-lg flex flex-row items-center justify-center space-x-2   text-white bg-black rounded-xl   transition-all duration-300 cursor-pointer "
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
                  <span className="relative antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
                    Update
                  </span>
                </button>
              </div>
            </div>
          ) : null}

          {/* Uploaded Details*/}
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
                                  {Principals.map((item) => (
                                    <li
                                      key={item.id}
                                      className="flex mt-5 py-8 px-4 bg-lightPrimary rounded-xl hover:shadow-lg transition-all duration-300"
                                    >
                                      <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md ">
                                        <img
                                          src={`${image_url + item.fileUrl}`}
                                          alt={item.imageAlt}
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>

                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900 antialiased tracking-normal font-sans leading-[1.3] ">
                                            <h2 className="text-[20px] font-bold text-gray-900 truncate dark:text-white">
                                              {item.name}
                                            </h2>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 items-end justify-end text-sm">
                                          <button
                                            // onClick={DeletePrincipal(item._id)}
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            <PiTrashSimpleLight
                                              className="w-7 h-7 p-1 text-black  transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1"
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
