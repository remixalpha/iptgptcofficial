import React, { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { Formik } from "formik";
import * as Yup from "yup";
import { postLogin } from "../../../../../../utils/agent";
const notificationSchema = Yup.object().shape({
  notification: Yup.string().required("Required"),
});
export default function Form() {
  const [Myfile, setMyfile] = useState([]);
  const imgHandler = (event) => {
    setMyfile(event.target.files);
    console.log(event.target.files);
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

        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className=" xl:w-[50rem] space-y-12 w-[15rem]  sm:w-[35rem] ">
            <div className="pb-12 border-b border-gray-900/10">
              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 xl:grid-cols-2">
                <div className="col-1">
                  <label
                    htmlFor="file-upload"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Choose file
                  </label>
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

                <div className="">
                  <label
                    htmlFor="link"
                    className="block text-sm font-medium leading-6 text-gray-900"
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
                      className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
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

            <div className="flex items-center justify-end mt-6 gap-x-6 mb-28 ">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}
