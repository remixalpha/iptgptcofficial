import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

//icons
import { BsFileEarmarkPdf } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import {
  PiUploadSimpleThin,
  PiXLight,
  PiTrashSimpleLight,
} from "react-icons/pi";
import { XMarkIcon } from "@heroicons/react/24/outline";

//backend
import { Formik } from "formik";
import * as Yup from "yup";

import { image_url, postLogin } from "../../../../../../utils/agent";

// Validation
const notificationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  year: Yup.string().required("Year is required"),
});

export default function Form({ Certificates }) {
  const [open, setOpen] = useState(true);
  const [fileSelected, setFileSelected] = useState(false); // selecteed success or error
  const [selectedFile, setSelectedFile] = useState(null); // Click cancel button to go default file selection
  // view all are submitted
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [showTickMark, setShowTickMark] = useState(false);
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

  function getFileName(fullFileName) {
    // Remove date-time information and "Blank" from the file name
    const fileNameMatch = fullFileName.match(/([^/]+)$/);
    let fileName = fileNameMatch ? fileNameMatch[0] : fullFileName;

    // Remove date-time information
    fileName = fileName.replace(/^(.*?--)/, "");

    // Remove "Blank" (if present)
    fileName = fileName.replace("Blank", "");

    return fileName;
  }

  // Deleting Certificate data
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
      validationSchema={notificationSchema}
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
          .then((res) => {
            if (res.statusText === "Created") {
              console.log("created");
              // window.location.reload();
            } else {
              // window.location.reload();
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
            }, 3000);
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
          <div className="mt-10  shadow-lg rounded-3xl bg-white border border-gray-300 relative  mx-[20rem] px-20 py-28   ">
            {isContentVisible ? (
              <div className="grid grid-cols-1 xl:grid-cols-2 sm:grid-cols-1 gap-x-20">
                <label
                  htmlFor="file-upload"
                  className="relative font-semibold text-black bg-white rounded-md cursor-pointer"
                >
                  <div className="flex justify-center px-6 py-20 mt-2 border border-dashed rounded-lg border-gray-900/25">
                    <div className="text-center">
                      {fileSelected ? (
                        <lord-icon
                          src="https://cdn.lordicon.com/yqzmiobz.json"
                          trigger="loop"
                          delay="1000"
                          colors="primary:#66ee78"
                          state="morph-check-in"
                          style={{ width: "60px", height: "60px" }}
                        ></lord-icon>
                      ) : (
                        <BsFileEarmarkPdf
                          className="w-12 h-12 mx-auto text-gray-800"
                          aria-hidden="true"
                        />
                      )}
                      <div className="flex mt-4 text-sm font-medium leading-6 text-gray-600">
                        {fileSelected ? (
                          <span>File selected</span>
                        ) : (
                          <span>Upload a file</span>
                        )}
                        <input
                          id="file-upload"
                          name="fileUrl"
                          type="file"
                          className="sr-only"
                          onChange={(event) => {
                            imgHandler(event);
                            setFileSelected(true); // Set to true when a file is selected
                            setSelectedFile(event.target.files[0]); // Save the selected file
                          }}
                        />
                      </div>
                      {fileSelected ? (
                        <p className="text-xs leading-5 text-gray-600"></p>
                      ) : (
                        <p className="text-xs leading-5 text-gray-600">
                          PDF up to 900MB
                        </p>
                      )}
                    </div>
                  </div>
                </label>

                <div className="grid grid-cols-1 mt-10 xl:grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-1 ">
                  {/* name */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
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
                        // autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      />
                      {errors.name && touched.name && (
                        <div className="mt-1 text-sm font-normal text-red-500 error">
                          {errors.name}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* year */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="year"
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
                        // autoComplete="given-year"
                        className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      />
                      {errors.year && touched.year && (
                        <div className="mt-1 text-sm font-normal text-red-500 error">
                          {errors.year}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* buttons */}
                  <div className=" flex items-center justify-end gap-x-6 relative top-[2rem] left-[7rem] ">
                    {/* Delete button */}
                    <button
                      type="button"
                      // disabled={isSubmitting}
                      onClick={handleToggleDeleteDialog}
                      className="flex flex-row items-center justify-center px-3 py-2 space-x-2 text-white transition-all duration-300 bg-black shadow-lg cursor-pointer group rounded-xl"
                    >
                      <PiTrashSimpleLight
                        type="submit"
                        className="w-6 h-6 p-1 text-white transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1"
                        aria-hidden="true"
                      />
                      <span className="relative  antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
                        Edit
                      </span>
                    </button>

                    {/* cancel button */}

                    <button
                      type="button"
                      disabled={isSubmitting}
                      className="flex flex-row items-center justify-center px-3 py-2 space-x-2 text-white transition-all duration-300 bg-black shadow-lg cursor-pointer group rounded-xl"
                      onClick={() => {
                        resetForm(); // Call resetForm to clear the form fields
                        setFileSelected(false); // Reset the file selection state
                        setSelectedFile(null); // Reset the selected file
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
                      className="flex flex-row items-center justify-center px-3 py-2 space-x-2 text-white transition-all duration-300 bg-black shadow-lg cursor-pointer group w-25 rounded-xl"
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
            ) : showTickMark ? (
              <div className="relative inset-0 flex flex-col items-center justify-center text-2xl font-semibold text-green-500">
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
                <div
                  className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                  style={{ backdropFilter: "blur(10px)" }}
                />
              </Transition.Child>

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                        <div className="flex flex-col max-h-screen pb-10 mt-2 mr-4 overflow-hidden bg-gray-200 shadow-xl rounded-xl">
                          <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="text-lg antialiased tracking-normal font-sans font-medium leading-[1.3] text-gray-900">
                                Certificates
                              </Dialog.Title>
                              <div className="flex items-center ml-3 h-7">
                                <button
                                  type="button"
                                  className="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="absolute -inset-0.5" />
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>

                            <div className="mt-8">
                              <div className="flow-root">
                                <ul role="list" className="-my-6 space-y-4 ">
                                  {Certificates &&
                                    Certificates.map((item) => (
                                      <li
                                        key={item._id}
                                        className="flex p-8 mt-5 transition-all duration-300 bg-gray-50 rounded-xl hover:shadow-lg"
                                      >
                                        <div className="flex-shrink-0 w-6 h-6 overflow-hidden rounded-md">
                                          {item.fileUrl ? (
                                            <BsFileEarmarkPdf className="object-cover object-center w-full h-full text-black" />
                                          ) : (
                                            <AiOutlineLink className="object-cover object-center w-full h-full" />
                                          )}
                                        </div>

                                        <div className="flex flex-col flex-1 ml-4">
                                          <div className="flex justify-between text-md text-gray-900 antialiased tracking-normal font-sans font-bold leading-[1.3] text-transform: capitalize mb-2 ">
                                            <h3 className="max-w-[200px] overflow-hidden overflow-ellipsis">
                                              <>
                                                <div className="mb-2">
                                                  <a
                                                    href={`${
                                                      image_url + item.fileUrl
                                                    }`}
                                                    target="_blank"
                                                  >
                                                    {item.name} - {item.year}
                                                  </a>
                                                </div>
                                                <div className="flex justify-between text-sm text-gray-700 antialiased tracking-normal font-sans font-normal leading-[1.3]">
                                                  {getFileName(item.fileUrl)}
                                                </div>
                                              </>
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
          </Transition.Root>
        </form>
      )}
    </Formik>
  );
}
