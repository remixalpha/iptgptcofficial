import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

//icons
import { LuPencil } from "react-icons/lu";

import {
  PiUploadSimpleThin,
  PiXLight,
  PiTrashSimpleLight,
} from "react-icons/pi";
import { BiImageAdd } from "react-icons/bi";

//backend
import { Formik } from "formik";
import * as Yup from "yup";
import {
  FetchRequest,
  image_url,
  postLogin,
} from "../../../../../../utils/agent";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// Validation
const notificationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  Qualification: Yup.string().required("Qualification is required"),
  departments: Yup.string().required("Department is required"),
});

export default function Form({ departments }) {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [fileInputKey, setFileInputKey] = useState(0);
  // Form submit for image is selected or not validation
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // Image upload and reset state
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [SelectedImage, setSelectedImage] = useState(null);
  // view all are submitted
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [showTickMark, setShowTickMark] = useState(false);

  // Backend
  const [hods, setHods] = useState([]);
  const [Myfile, setMyfile] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [formDeptOption, setFormDeptOption] = useState(
    "64bad26c578e4a044eb886a1"
  );

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
  //filter the department and show it in the uploaded part
  // function filterArrayById(deptId) {
  //   console.log(hods);
  //   console.log({ id: deptId });
  //   const filtered = hods.filter((item) => item.dept === deptId);
  //   setFilteredArray(filtered);
  //   console.log({ FilterArray: filtered });
  // }

  // Open edit option
  const handleToggleEditDialog = () => {
    setOpen(true);
  };

  // Backend
  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    // console.log({ selectedDepartment: selectedDepartment });
  };

  const handleFormDept = (e) => {
    setFormDeptOption(e.target.value);
    // console.log({ Selected: formDeptOption });
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

  //featching HOD data
  function fetchHod() {
    FetchRequest("/hod/")
      .then((res) => {
        // console.log(res.data);
        if (res.statusText === "OK") {
          // console.log(res.data.doc);
          setHods(res.data.doc);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }

  // Deleting HOD data
  function DeleteHod(id) {
    postLogin(`/hod/del/${id}`)
      .then((res) => {
        window.location.reload();
        // console.log(res.data);
        if (res.statusText === "OK") {
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
    fetchHod();
  }, []);

  return (
    <Formik
      initialValues={{
        name: "",
        Qualification: "",
        departments: formDeptOption,
      }}
      validationSchema={notificationSchema}
      onSubmit={(values) => {
        // console.log({ values: values });
        const formData = new FormData();
        // formData.append("admin", "64f86826ea168a20207d0110");
        for (let value in values) {
          formData.append(value, values[value]);
        }
        formData.append("dept", formDeptOption);
        Object.values(Myfile).forEach((file) => {
          formData.append("fileUrl", file);
        });

        // console.log({ formData: formData });
        postLogin("/hod/create", formData)
          .then(async (res) => {
            if (res.statusText === "Created") {
              // console.log({ res: res });
              console.log("created");
              setShowTickMark(true);

              // console.log(res.data);
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
          <div className="xl:w-[110rem] px-20 py-20 space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-3xl  bg-white border border-gray-200 relative -top-[2rem] ">
            {isContentVisible ? (
              <div className="grid items-center grid-cols-2 gap-y-8 ">
                {/* photo and name and Qualification, department */}
                {isEdit ? (
                  <div className="grid grid-cols-1 mt-10 gap-x-20 gap-y-8 xl:grid-cols-2 ">
                    {/* imageUpload */}
                    <div className="flex justify-center cursor-pointer col-2 ">
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
                          // htmlFor="fileInput"
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
                          // htmlFor="fileInput"
                          className="absolute p-2 bg-white border shadow-lg cursor-pointer border-e-white top-80 -right-8 rounded-xl"
                        >
                          <div className="flex flex-col justify-end ">
                            <LuPencil
                              className="w-10 h-10 p-1 text-black "
                              aria-hidden="true"
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                    {!isImageUploaded && isFormSubmitted && (
                      <div className="fixed font-normal text-red-500 bottom-28 ">
                        Please upload an image.
                      </div>
                    )}
                    <div className="space-y-10">
                      {/* Name */}
                      <div className="m:col-span-1">
                        <label
                          htmlFor="name"
                          className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                        >
                          Name
                        </label>
                        <div className="mt-2 cursor-pointer ">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            autoComplete="name"
                            className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          />
                          {errors.name && touched.name && (
                            <div className="mt-1 font-normal text-red-500 error">
                              {errors.name}
                            </div>
                          )}
                        </div>
                      </div>
                      {/* Qualification */}
                      <div className="m:col-span-1">
                        <label
                          htmlFor="Qualification"
                          className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                        >
                          Qualification
                        </label>
                        <div className="mt-2 cursor-pointer">
                          <input
                            type="text"
                            id="Qualification"
                            name="Qualification"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Qualification}
                            autoComplete="Qualification"
                            className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          />
                          {errors.Qualification && touched.Qualification && (
                            <div className="mt-1 font-normal text-red-500 error">
                              {errors.Qualification}
                            </div>
                          )}
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
                            autoComplete="departments"
                            value={values.departments}
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
                          {errors.departments && touched.departments && (
                            <div className="mt-1 font-normal text-red-500 error">
                              {errors.departments}
                            </div>
                          )}
                        </div>
                      </div>
                      {/* buttons */}
                      <div className=" flex items-center justify-end gap-x-6 relative top-[2rem] ">
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
                          className="flex flex-row items-center justify-center px-3 py-2 space-x-2 text-white transition-all duration-300 bg-black shadow-lg cursor-pointer group rounded-xl"
                        >
                          <PiUploadSimpleThin
                            className="w-6 h-6 p-1 text-white transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1 "
                            aria-hidden="true"
                          />
                          <span className="relative  antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
                            Update
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* all ready uploaded */}
                <div>
                  {/* <Menu
                  as="div"
                  className="relative inline-block text-left -right-[37rem] "
                >
                  <div>
                    <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white shadow-lg cursor-pointer w-80 rounded-xl ">
                      <div className="py-1">
                        {departments.map((option, index) => (
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
                                onClick={() => filterArrayById(option._id)}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
                  <div className="max-h-[400px] overflow-hidden  hover:overflow-scroll hover:overflow-x-hidden ml-[4rem] mt-5 max-w-2xl p-4  ">
                    <ul className=" space-y-6  ml-[4rem]  max-w-lg max-h-screen  ">
                      {hods.map((item) => (
                        <li
                          key={item.id}
                          className="px-4 py-5 pb-3 transition-all duration-300 scale-100 border border-gray-400 rounded-xl hover:shadow-md sm:pb-4"
                        >
                          <div className="flex items-center space-x-4">
                            {/* Dp */}
                            <div className="flex-shrink-0">
                              {item.fileUrl ? (
                                <img
                                  className="object-cover w-12 h-12 rounded-full"
                                  src={`${image_url + item.fileUrl}`}
                                  alt=""
                                />
                              ) : (
                                <div className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 4a4 4 0 100 8 4 4 0 000-8z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M20 10v2a8 8 0 01-8 8h0a8 8 0 01-8-8v-2"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <div className="flex flex-1 flex-col-1 ">
                              <div className="justify-between flex-1">
                                <p className="text-[20px] font-bold text-gray-900 capitalize  mx-auto ">
                                  {item.name}
                                </p>
                                <p className="text-sm font-medium text-gray-700 capitalize truncate">
                                  {item.Qualification}
                                </p>
                                {/* <p className="text-sm font-medium text-gray-700 truncate ">
                                  {item.dept}
                                </p> */}
                              </div>
                              <div className="flex flex-1  items-end justify-end text-sm  space-x-[3rem] mx-10 mb-2 ">
                                <div className="flex flex-col justify-end cursor-pointer group">
                                  <button
                                    type="button"
                                    className="fixed"
                                    onClick={handleToggleEditDialog}
                                  >
                                    <LuPencil
                                      type="button"
                                      className="w-6 h-6 p-1 text-gray-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                                      aria-hidden="true"
                                    />
                                    <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px] font-bold text-gray-700 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                      Edit
                                    </a>
                                  </button>
                                </div>
                                <div className="flex flex-col justify-end cursor-pointer group">
                                  <button
                                    type="button"
                                    className="fixed"
                                    onClick={() => DeleteHod(item._id)}
                                  >
                                    <PiTrashSimpleLight
                                      type="submit"
                                      className="p-1 transition-transform duration-300 ease-in-out transform h-7 w-7 text-navy-900 group-hover:-translate-y-4"
                                      aria-hidden="true"
                                    />
                                    <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px]  font-bold text-gray-700 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                      Delete
                                    </a>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
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

          {/* Update Form */}
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 hidden transition-opacity bg-gray-500 bg-opacity-75 md:block" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-stretch justify-center min-h-full text-center md:items-center md:px-2 lg:px-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                    enterTo="opacity-100 translate-y-0 md:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 md:scale-100"
                    leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                  >
                    <Dialog.Panel className="flex w-full text-base text-left transition transform md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                      <div className="relative flex items-center w-full px-4 pb-8 overflow-hidden shadow-2xl pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <div className="fixed inset-0 z-50 flex items-center justify-center top-8">
                          <div className="p-8 bg-white shadow-lg rounded-xl ">
                            <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 xl:grid-cols-2">
                              {/* Update Image */}
                              <div className="flex justify-center col-2 ">
                                <div className="relative inline-block ">
                                  <input
                                    id="fileInput"
                                    type="file"
                                    key={fileInputKey}
                                    className="sr-only"
                                    // onChange={(e) => {
                                    //   setFileInputKey((prev) => prev + 1);
                                    //   handleFileChange(e);
                                    // }}
                                    onChange={(event) => {
                                      imgHandler(event);
                                      setIsImageUploaded(true); // Set to true when a file is selected
                                      setSelectedImage(event.target.files[0]); // Save the selected file
                                    }}
                                  />
                                  <label
                                    // htmlFor="fileInput"
                                    className="relative flex items-center justify-center border-2 border-gray-400 border-dashed cursor-pointer w-96 h-96 rounded-xl"
                                  >
                                    {isImageUploaded ? (
                                      <img
                                        className="object-fill w-full h-full rounded-xl"
                                        alt="Uploaded"
                                        src={image}
                                      />
                                    ) : (
                                      <div className="flex flex-col items-center">
                                        <BiImageAdd
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
                              <div className="space-y-10">
                                {/* Update Name */}
                                <div className="m:col-span-1">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Name
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      id="name"
                                      name="name"
                                      type="text"
                                      autoComplete="name"
                                      className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                {/* Update Qualification  */}
                                <div className="m:col-span-1">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Qualification
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      id="name"
                                      name="name"
                                      type="text"
                                      autoComplete="name"
                                      className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                {/* Update Departments */}
                                <div className="sm:col-span-1">
                                  <label
                                    htmlFor="departments"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Departments
                                  </label>
                                  <div className="mt-2">
                                    <select
                                      id="departments"
                                      name="departments"
                                      // autoComplete="country-name"
                                      value={selectedDepartment}
                                      onChange={handleDepartmentChange}
                                      className="block w-full px-5 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                      {/* <option>Electronics Department</option>
                                      <option>Computer Department</option>
                                      <option>Printing Department</option>
                                      <option>General Department</option>
                                      <option>Mechanical Department</option>
                                      <option>Office</option> */}
                                      {departments.map((item, i) => (
                                        <option value={item.id} key={i * 10}>
                                          {item.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                {/* Upload button for update */}
                                <button
                                  type="submit"
                                  disabled={isSubmitting}
                                  className="flex flex-row items-center justify-center px-3 py-2 space-x-2 text-white transition-all duration-300 bg-black shadow-lg group w-25 rounded-xl"
                                >
                                  <PiUploadSimpleThin
                                    type="submit"
                                    className="w-6 h-6 p-1 text-white transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1 "
                                    aria-hidden="true"
                                  />
                                  <span className="absolute invisible group-hover:relative group-hover:visible antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
                                    Update
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="flex flex-1 items-center justify-end relative xl:bottom-[27rem] ">
                              <div className="relative cursor-pointer ">
                                <PiXLight
                                  type="button"
                                  className="w-10 h-10 p-1 transition-transform duration-300 ease-in-out transform text-navy-900 group-hover:-translate-y-4"
                                  aria-hidden="true"
                                  onClick={() => setOpen(false)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </form>
      )}
    </Formik>
  );
}
