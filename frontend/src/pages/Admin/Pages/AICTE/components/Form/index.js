import React, { useState } from "react";

import { PhotoIcon } from "@heroicons/react/24/solid";
import { IoImageOutline } from "react-icons/io5";
import { LuEdit2 } from "react-icons/lu";

export default function Form() {
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [fileInputKey, setFileInputKey] = useState(0);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      setIsImageUploaded(true);
    };
  };
  return (
    <form>
      <div className="space-y-12">
        <div className="mt-10 grid xl:grid-cols-2 grid-cols-1  sm:grid-cols-1 shadow-lg rounded-xl bg-white border border-gray-300 relative -top-[2rem] ">
          <div className="mt-10 grid xl:grid-cols-1 grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-1 py-8 px-2 mx-12">
            <div className="col-2 flex justify-center  ">
              <div className="relative inline-block  ">
                <input
                  id="fileInput"
                  type="file"
                  key={fileInputKey}
                  className="sr-only"
                  onChange={(e) => {
                    setFileInputKey((prev) => prev + 1);
                    handleFileChange(e);
                  }}
                />
                <label
                  htmlFor="fileInput"
                  className="relative w-60 h-60 rounded-xl border-dashed border-2 border-navy-300 flex justify-center items-center cursor-pointer"
                >
                  {isImageUploaded ? (
                    <img
                      className="w-full h-full object-cover rounded-xl"
                      alt="Uploaded"
                      src={image}
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <IoImageOutline
                        className="h-1/2 w-1/2 mb-2 text-gray-300 "
                        src=""
                        alt="Placeholder"
                      />
                      <span className="text-gray-500">Upload an image</span>
                    </div>
                  )}
                </label>
                <label
                  htmlFor="fileInput"
                  className="absolute top-44 -right-8 bg-white p-2 rounded-xl shadow-lg cursor-pointer"
                >
                  <div className="flex flex-col justify-end ">
                    <LuEdit2
                      className="h-8 w-8 p-1 text-navy-900 "
                      aria-hidden="true"
                    />
                  </div>
                </label>
              </div>
            </div>

            <div className="mt-10 grid xl:grid-cols-1 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
              <div className="sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6 relative -right-6 ">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid xl:grid-cols-1 grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-1 py-8 px-10 mx-12">
            <div className="mt-10 grid xl:grid-cols-1 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
              <div className="sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className=" grid xl:grid-cols-2 grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-1 ">
              <div>
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Profile Photo
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
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a Photo</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
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
              <div className="">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
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
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a PDF</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
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
              <div className="mt-6 flex items-center justify-end gap-x-6 relative -right-[18rem] ">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
