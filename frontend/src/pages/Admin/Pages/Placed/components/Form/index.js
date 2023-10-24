import React, { Fragment, useEffect, useState } from "react";

import { Menu, Dialog, Transition } from "@headlessui/react";
//icons
import { LuPencil } from "react-icons/lu";
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

export default function Form() {
  const [open, setOpen] = useState(true);
  const [isEdit, setIsEdit] = useState(true);
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [fileInputKey, setFileInputKey] = useState(0);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // Image upload and reset state
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [SelectedImage, setSelectedImage] = useState(null);
  //  Hover image
  const [hoveredProduct, setHoveredProduct] = useState(null);
  // view all are submitted
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [showTickMark, setShowTickMark] = useState(false);

  //backend
  const [Gallerys, setGallerys] = useState([]);
  const [Myfile, setMyfile] = useState([]);

  const handleToggleDeleteDialog = () => {
    setOpen(!open);
  };
  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
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

  //featching Images data
  function fetchImage() {
    FetchRequest("/hero/")
      .then((res) => {
        // console.log(res.data);
        if (res.statusText === "OK") {
          // console.log(res.data.doc);
          setGallerys(res.data.doc);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }

  // Deleting Image data
  function DeleteImage(id) {
    postLogin(`/hero/del/${id}`)
      .then((res) => {
        if (res.statusText === "OK") {
          // console.log(res.data);
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
      initialValues={{}}
      // validationSchema={notificationSchema}
      onSubmit={(values) => {
        // values.tabs = selectedTab;
        // console.log({ values: values });
        const formData = new FormData();
        formData.append("admin", "64f86826ea168a20207d0110");
        for (let value in values) {
          formData.append(value, values[value]);
        }
        // formData.append("dept", formDeptOption);
        Object.values(Myfile).forEach((file) => {
          formData.append("fileUrl", file);
        });

        // formData.append("tabs", formDeptOption);

        // console.log({ formData: formData });
        postLogin("/hero/create", formData)
          .then(async (res) => {
            // console.log(res.data);
            if (res.statusText === "Created") {
              // console.log("created");
              setShowTickMark(true);
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
          {isEdit ? (
            <div className=" lg:w-[60rem] p-10 space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-3xl bg-white border border-gray-300 relative -top-[2rem] px-20 py-10  ">
              {isContentVisible ? (
                <div>
                  {/* imageUpload */}
                  <div className="flex justify-center mt-4 cursor-pointer ">
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
                      <label className="relative flex items-center justify-center border-2 border-dashed cursor-pointer lg:w-[55rem] lg:h-[25rem] rounded-xl border-navy-300">
                        {isImageUploaded ? (
                          <img
                            className="object-contain object-center w-full h-full rounded-xl"
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
                        className="absolute p-2 bg-white border shadow-lg cursor-pointer border-e-white top-80 -right-8 rounded-xl"
                      >
                        <div className="flex flex-col justify-end ">
                          <LuPencil
                            className="w-10 h-10 p-1 text-black"
                            aria-hidden="true"
                          />
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* buttons */}
                  <div className="relative flex items-center justify-end mt-8 gap-x-6">
                    {/* Delete button */}
                    <button
                      type="button"
                      onClick={handleToggleDeleteDialog}
                      className="flex flex-row items-center justify-center px-3 py-2 space-x-2 text-white transition-all duration-300 bg-black shadow-lg cursor-pointer group rounded-xl"
                    >
                      <PiTrashSimpleLight
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
                      className="flex flex-row items-center justify-center px-3 py-2 space-x-2 text-white transition-all duration-300 bg-black shadow-lg cursor-pointer group w-25 rounded-xl"
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
                      <Dialog.Panel className="w-screen max-w-xl pointer-events-auto">
                        <div className="flex flex-col h-full mt-2 overflow-hidden bg-gray-200 shadow-xl rounded-xl mr-9">
                          <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className=" ml-8 mt-2 text-xl text-gray-900 antialiased tracking-normal font-sans font-medium  leading-[1.3]">
                                Hero Image
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
                                <div className="bg-gray-200 ">
                                  <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                    <h2 className="sr-only">Placed Students</h2>

                                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 ">
                                      {Gallerys.map((item, index) => (
                                        <div
                                          key={item.id}
                                          className="relative group"
                                          onMouseEnter={() =>
                                            handleMouseEnter(item)
                                          }
                                          onMouseLeave={handleMouseLeave}
                                        >
                                          <a href={item.href} className="group">
                                            <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                                              <img
                                                key={item.id}
                                                src={`${
                                                  image_url + item.fileUrl
                                                }`}
                                                alt={`${item.event}_${index}`}
                                                className="object-cover w-full h-full rounded-md cursor-pointer "
                                              />
                                            </div>
                                          </a>
                                          {hoveredProduct === item && (
                                            <button
                                              onClick={() =>
                                                DeleteImage(item._id)
                                              }
                                              type="button"
                                              className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 bg-gray-500 rounded-lg opacity-0 cursor-pointer bg-opacity-80 group-hover:opacity-100 "
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
