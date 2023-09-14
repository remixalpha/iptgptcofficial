import React, { Fragment, useEffect, useState } from "react";
import { Menu, Dialog, Transition } from "@headlessui/react";

//icons
import { LuEdit2 } from "react-icons/lu";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  PiUploadSimpleThin,
  PiXLight,
  PiTrashSimpleLight,
} from "react-icons/pi";
import { IoImageOutline } from "react-icons/io5";

//Image
import person from "../../../../../../assets/images/section/Departments/Electronics/Asharaf.jpg";

// import { departments } from "../../../../../../utils/constants";

//backend
import { Formik } from "formik";
import * as Yup from "yup";
import { postLogin } from "../../../../../../utils/agent";
import { getRequest } from "../../../../../../utils/agent";

//sortData
const sortOptions = [
  { name: "Electronics Department", href: "#", current: true },
  { name: "Computer Department", href: "#", current: false },
  { name: "Printing Technology", href: "#", current: false },
  { name: "Mechanical Workshop", href: "#", current: false },
  { name: "General Department", href: "#", current: false },
];

//data
const initialItems = [
  { id: 1, name: "Ashiraf", department: "Electronics Department" },
  { id: 2, name: "Ashiraf", department: "Electronics Department" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Form({ departments }) {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [fileInputKey, setFileInputKey] = useState(0);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);

  //backend
  const [Myfile, setMyfile] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [sortOption, setSortOption] = useState("64bad26c578e4a044eb886a1");

  //
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      setIsImageUploaded(true);
    };
  };
  const filteredItems = items.filter(
    (item) => item.department === selectedSortOption.name
  );

  const handleToggleDeleteDialog = () => {
    setOpen(!open);
  };

  const handleToggleEditDialog = () => {
    setOpen(true);
  };

  const handleDeleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  //backend

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    console.log({ selectedDepartment: selectedDepartment });
  };
  const handleSortOption = (e) => {
    setSortOption(e.target.value);
    console.log(sortOption);
    console.log({ sortOption: sortOption });
  };

  const imgHandler = (event) => {
    setMyfile(event.target.files);
    console.log(event.target.files);
  };

  //featching HOD data
  function fetchHod() {
    getRequest("/staff/")
      .then(async (res) => {
        if (res.statusText === "OK") {
          console.log(res.data.doNotTrack);
          setItems(res.data.doNotTrack);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }

  useEffect(() => {
    fetchHod();
  }, []);

  return (
    <Formik
      initialValues={{ name: "", position: "" }}
      // validationSchema={notificationSchema}
      onSubmit={(values) => {
        console.log({ values: values });
        const formData = new FormData();
        // formData.append("admin", "64f86826ea168a20207d0110");
        for (let value in values) {
          formData.append(value, values[value]);
        }
        formData.append("dept", sortOption);
        Object.values(Myfile).forEach((file) => {
          formData.append("fileUrl", file);
        });

        console.log({ formData: formData });
        postLogin("/staff/create", formData)
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
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="xl:w-[110rem] p-10 space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-xl  bg-white border border-gray-200 relative -top-[2rem] ">
            <div className="grid grid-cols-2  gap-x-[8rem] items-center  gap-y-8 ">
              {/* photo and name and department */}
              {isEdit ? (
                <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 xl:grid-cols-2 ">
                  {/* imageUpload */}
                  <div className="flex justify-center col-2 cursor-pointer">
                    <div className="relative inline-block ">
                      <input
                        id="fileInput"
                        name="fileUrl"
                        type="file"
                        key={fileInputKey}
                        className="sr-only"
                        // onChange={(e) => {
                        //   setFileInputKey((prev) => prev + 1);
                        //   handleFileChange(e);
                        // }}
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
                        className="block text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                      >
                        Name
                      </label>
                      <div className="mt-2 cursor-pointer">
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
                    {/* Position */}
                    <div className="m:col-span-1">
                      <label
                        htmlFor="name"
                        className="block text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                      >
                        Position
                      </label>
                      <div className="mt-2 cursor-pointer">
                        <input
                          id="position"
                          name="position"
                          type="text"
                          autoComplete
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.position}
                          className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    {/* Departments */}
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="departments"
                        className="block text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                      >
                        Departments
                      </label>
                      <div className="mt-2 ">
                        <select
                          id="departments"
                          name="departments"
                          autoComplete="country-name"
                          value={setSortOption}
                          onChange={handleSortOption}
                          className="cursor-pointer block w-full px-5 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          {/* <option>Electronics Department</option>
                      <option>Computer Department</option>
                      <option>Printing Department</option>
                      <option>General Department</option>
                      <option>Mechanical Department</option>
                      <option>Office</option> */}
                          {departments.map((item, i) => (
                            <option value={item._id} key={i * 10}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* buttons */}
                    <div className=" flex items-center justify-end gap-x-6 relative top-[2rem] ">
                      {/* cancel button */}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className=" group px-3 py-2 shadow-lg flex flex-row items-center justify-center space-x-2   text-white bg-black rounded-xl   transition-all duration-300 cursor-pointer  "
                      >
                        <PiXLight
                          type="submit"
                          className="w-6 h-6 p-1 text-white transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1 "
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
                        className=" group px-3 py-2 w-25 shadow-lg flex flex-row items-center justify-center space-x-2  text-white bg-black rounded-xl   transition-all duration-300 cursor-pointer  "
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
                </div>
              ) : null}

              {/* all ready uploaded */}
              <div>
                <Menu
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white shadow-lg w-80 rounded-lg border cursor-pointer ">
                      <div className="py-1">
                        {departments.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium  "
                                    : " text-navy-900  cursor-pointer",
                                  active
                                    ? "bg-gray-100 text-gray-600  rounded-xl mx-4 transition-all duration-300 "
                                    : "m-2",
                                  "block px-4 py-2 text-sm"
                                )}
                                onClick={() => setSelectedSortOption(option)}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div className="max-h-[400px] overflow-hidden ml-[4rem] mt-5 max-w-2xl p-4  ">
                  <ul className=" space-y-6  ml-[4rem]  max-w-lg max-h-screen  ">
                    {filteredItems.map((item) => (
                      <li
                        key={item.id}
                        className="px-4 py-5 pb-3 transition-all duration-300 scale-100 border border-gray-400 rounded-xl hover:shadow-md sm:pb-4"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="object-fill w-12 h-12 rounded-full "
                              src={person}
                              alt=""
                            />
                          </div>
                          <div className="flex flex-1 flex-col-1 space-x-[18rem] ">
                            <div className="justify-between flex-1">
                              <p className="text-[20px] font-bold text-gray-900 truncate dark:text-white">
                                {item.name}
                              </p>
                              <p className="text-sm font-medium text-gray-700 truncate dark:text-white">
                                {item.position}
                              </p>
                              <p className="text-sm font-medium text-gray-700 truncate dark:text-white">
                                {item.department}
                              </p>
                            </div>
                            <div className="flex flex-1  items-end justify-end text-sm  space-x-[3rem] relative right-[7rem] mb-2">
                              <div className="flex flex-col justify-end cursor-pointer group">
                                <div
                                  type="button"
                                  className="fixed"
                                  onClick={handleToggleEditDialog}
                                >
                                  <LuEdit2
                                    type="button"
                                    className="w-6 h-6 p-1 text-gray-900 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4"
                                    aria-hidden="true"
                                  />
                                  <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px] font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                    Edit
                                  </a>
                                </div>
                              </div>
                              <div className="flex flex-col justify-end cursor-pointer group">
                                <div
                                  className="fixed"
                                  onClick={() => handleDeleteItem(item.id)}
                                >
                                  <PiTrashSimpleLight
                                    type="submit"
                                    className="p-1 transition-transform duration-300 ease-in-out transform h-7 w-7 text-navy-900 group-hover:-translate-y-4"
                                    aria-hidden="true"
                                  />
                                  <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12px]  font-bold text-orange-300 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                    Delete
                                  </a>
                                </div>
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
          </div>

          {/* update Form */}
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
                                {/* Update name */}
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
                                {/* Update Position */}
                                <div className="m:col-span-1">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Position
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      id="position"
                                      name="position"
                                      type="text"
                                      autoComplete="position"
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
                                      autoComplete="country-name"
                                      value={selectedDepartment}
                                      onChange={handleDepartmentChange}
                                      className="block w-full px-5 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                      {/* <option>Electronics Department</option> */}
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
                                  className=" group px-3 py-2 w-25 shadow-lg flex flex-row items-center justify-center space-x-2  text-white bg-black rounded-xl   transition-all duration-300 cursor-pointer  "
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
