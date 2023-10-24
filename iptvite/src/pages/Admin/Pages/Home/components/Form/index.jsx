import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
//icons
import {
  PiUploadSimpleThin,
  PiXLight,
  PiTrashSimpleLight,
} from "react-icons/pi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { AiOutlineLink, AiOutlineFileImage } from "react-icons/ai";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { LuPencil } from "react-icons/lu";
import { BiImageAdd } from "react-icons/bi";

// backend
import { Formik } from "formik";
import * as Yup from "yup";
import { image_url, postLogin } from "../../../../../../utils/agent";

// validation
const notificationSchema = Yup.object().shape({
  message: Yup.string().required("Message is Required"),
});

export default function Form({ Notifications }) {
  // Uploaded data
  const [open, setOpen] = useState(true);
  // Selection option
  const [selectedOption, setSelectedOption] = useState("file"); // For selection box
  const [values, setFieldValue] = useState([]);

  // File Handling and reset
  const [fileSelected, setFileSelected] = useState(false); // selecteed success or error
  const [selectedFile, setSelectedFile] = useState(null); // Click cancel button to go default file selection

  // // Image upload handling  and reset state
  // const [isImageUploaded, setIsImageUploaded] = useState(false);
  // const [SelectedImage, setSelectedImage] = useState(
  //   "https://via.placeholder.com/150"
  // );
  // const [fileInputKey, setFileInputKey] = useState(0);

  // view all are submitted
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [showTickMark, setShowTickMark] = useState(false);
  //backend
  // For File
  const [Myfile, setMyfile] = useState([]);
  const [MyImage, setMyImage] = useState([]);
  // console.log({ NOT: Notifications });

  // Handle the sideFrame open
  const handleToggleDeleteDialog = () => {
    setOpen(!open);
  };
  //For file handling
  const fileHandler = (event) => {
    setMyfile(event.target.files);
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);

      reader.onload = () => {
        setSelectedFile(reader.result);
        setFileSelected(true);
      };
    }
  };
  // // Image handling
  // const imgHandler = (event) => {
  //   setMyImage(event.target.files);
  //   const selectedImage = event.target.files[0];

  //   if (selectedImage) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(selectedImage);

  //     reader.onload = () => {
  //       setSelectedImage(reader.result);
  //       setIsImageUploaded(true);
  //     };
  //   }
  // };
  // Get file name
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

  // Delete the  notification
  function DeleteNotification(id) {
    postLogin(`/notification/del/${id}`)
      .then((res) => {
        // console.log({ MSG: res.statusText });
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

  return (
    <Formik
      initialValues={{ message: "", link: "", selectedType: "file" }}
      validationSchema={notificationSchema}
      onSubmit={(values) => {
        // console.log({ values: values });
        const formData = new FormData();
        formData.append("admin", "64f86826ea168a20207d0110");
        for (let value in values) {
          formData.append(value, values[value]);
        }
        Object.values(Myfile).forEach((file) => {
          formData.append("fileUrl", file);
        });
        Object.values(MyImage).forEach((file) => {
          formData.append("fileUrl", file);
        });

        console.log({ formData: formData });
        postLogin("/notification/create", formData)
          .then((res) => {
            if (res.statusText === "Created") {
              // console.log("created");
              setShowTickMark(true);
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
            setTimeout(() => {
              window.location.reload();
            }, 2000);
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
          <div className="xl:w-[70rem] space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-3xl bg-white border border-gray-200 px-20 py-10 relative -top-6 ">
            {isContentVisible ? (
              <div className="flex flex-col space-y-10 ">
                {/* File or link */}
                <div className="block text-sm mb-2 text-gray-900 antialiased tracking-normal font-sans font-semibold leading-[1.3] ">
                  Choose option
                </div>
                <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-1 xl:grid-cols-1">
                  {/* Seletion box */}
                  <div className="flex flex-row space-x-2 max-w-[20rem]  relative -top-[2rem]  ">
                    {/* File */}
                    <label
                      htmlFor="file-option"
                      className={`relative font-semibold text-black ring-1 ring-black rounded-xl px-4 py-2 cursor-pointer transition-all duration-300 ${
                        selectedOption === "file"
                          ? " px-4 py-2  text-white bg-black"
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
                      <div className="flex space-x-2 flex-rows ">
                        <BsFileEarmarkPdf />
                        <h1
                          id="file-title"
                          className="text-xs antialiased font-medium tracking-tight "
                        >
                          Files
                        </h1>
                      </div>
                    </label>
                    {/* Link */}
                    <label
                      htmlFor="link-option"
                      className={`relative font-semibold text-black ring-1 ring-black rounded-xl  px-4 py-2 cursor-pointer transition-all duration-300 ${
                        selectedOption === "link"
                          ? "  px-4 py-2 text-white bg-black"
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
                      <div className="flex space-x-2 flex-rows ">
                        <AiOutlineLink />
                        <h1
                          id="link-title"
                          className="text-xs antialiased font-medium tracking-tight "
                        >
                          Link
                        </h1>
                      </div>
                    </label>
                    {/* Placed */}
                    {/* <label
                      htmlFor="placed-option"
                      className={`relative font-semibold text-black ring-1 ring-black rounded-xl  px-4 py-2 cursor-pointer transition-all duration-300 ${
                        selectedOption === "placed"
                          ? "  px-4 py-2 text-white bg-black"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        id="placed-option"
                        name="option"
                        value="placed"
                        checked={selectedOption === "placed"}
                        onChange={() => {
                          setSelectedOption("placed");
                        }}
                        className="sr-only"
                      />
                      <div className="flex space-x-2 flex-rows ">
                        <AiOutlineFileImage />
                        <h1
                          id="placed-title"
                          className="text-xs antialiased font-medium tracking-tight "
                        >
                          Placed Students
                        </h1>
                      </div>
                    </label> */}
                  </div>
                  {/* data insert fields */}
                  <div className="flex flex-col gap-y-4 ">
                    <div className="">
                      <input
                        type="hidden"
                        id="selectedType"
                        name="selectedType"
                        value={values.selectedType}
                      />
                      {/* File */}
                      {selectedOption === "file" && (
                        <label
                          htmlFor="file-upload"
                          className="relative font-semibold text-black bg-white rounded-md cursor-pointer"
                        >
                          <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
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
                                    fileHandler(event);
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
                      )}
                      {/* Link */}
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

                    {/* Notification */}
                    {selectedOption !== "placed" && (
                      // Notification section
                      <div className="col-span-full">
                        <label
                          htmlFor="message"
                          className="block mb-4 text-sm text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                        >
                          Notification
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="message"
                            name="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            placeholder="Enter the notification message here"
                            rows={3}
                            className="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          />
                          {errors.message && touched.message && (
                            <div className="mt-1 text-sm font-normal text-red-500 error">
                              {errors.message}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* buttons */}
                <div className="flex items-center justify-end mt-6 gap-x-6 mb-28 ">
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
                    // disabled={isSubmitting}
                    className="flex flex-row items-center justify-center px-3 py-2 space-x-2 text-white transition-all duration-300 bg-black shadow-lg cursor-pointer group rounded-xl"
                    onClick={() => {
                      resetForm(); // Call resetForm to clear the form fields
                      setFileSelected(false); // Reset the file selection state
                      setSelectedFile(null); // Reset the selected file
                      // setSelectedImage(null); // Reset the selected file
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
                    <span className="relative antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
                      Upload
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
                                Notifications
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
                                  {Notifications.map((item) => (
                                    <li
                                      key={item._id}
                                      className="flex p-8 mt-5 transition-all duration-300 bg-white rounded-xl hover:shadow-lg "
                                    >
                                      <div className="flex-shrink-0 w-6 h-6 overflow-hidden rounded-md">
                                        {item.fileUrl ? (
                                          <BsFileEarmarkPdf className="object-cover object-center w-full h-full text-black" />
                                        ) : item.isImage ? (
                                          <AiOutlineFileImage className="object-cover object-center w-full h-full" />
                                        ) : (
                                          <AiOutlineLink className="object-cover object-center w-full h-full" />
                                        )}
                                      </div>

                                      <div className="flex flex-col flex-1 ml-4">
                                        <div className="flex justify-between text-md text-gray-900 antialiased tracking-normal font-sans font-bold leading-[1.3] text-transform: capitalize mb-2 ">
                                          <h3 className="max-w-[200px] overflow-hidden overflow-ellipsis">
                                            {item.fileUrl ? (
                                              <>
                                                <div className="mb-2">
                                                  <a
                                                    href={`${
                                                      image_url + item.fileUrl
                                                    }`}
                                                    target="_blank"
                                                  >
                                                    {item.message}
                                                  </a>
                                                </div>
                                                <div className="flex justify-between text-sm text-gray-700 antialiased tracking-normal font-sans font-normal leading-[1.3]">
                                                  {getFileName(item.fileUrl)}
                                                </div>
                                              </>
                                            ) : (
                                              <h3>
                                                <a href={item.href}>
                                                  {item.message}
                                                </a>
                                              </h3>
                                            )}
                                          </h3>
                                        </div>
                                        {item.fileUrl ? null : (
                                          <div className="flex justify-between text-sm text-gray-700 antialiased tracking-normal font-sans font-normal leading-[1.3] max-w-[200px] overflow-hidden overflow-ellipsis">
                                            <a href={item.link}>{item.link}</a>
                                          </div>
                                        )}
                                        <div className="flex items-end justify-end flex-1 text-sm">
                                          <button
                                            onClick={() =>
                                              DeleteNotification(item._id)
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
