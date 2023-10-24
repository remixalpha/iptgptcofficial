import React, { Fragment, useEffect, useState } from "react";
import Image from "../../../../assets/images/Banner/ipt banner 2.jpeg";

// Backend
import { Formik } from "formik";
import * as Yup from "yup";
import { image_url, postLogin } from "../../../../utils/agent";
import { getRequest } from "../../../../utils/agent";

export default function Form() {
  return (
    <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-20 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-5">
      <div className="-mx-[10rem] -mt-12 p-12 lg:sticky lg:top-4 lg:mx-0  lg:overflow-hidden">
        <img
          className="w-[40rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem]"
          src={Image}
          alt=""
        />
      </div>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
        // validationSchema={notificationSchema}
        onSubmit={(values) => {
          console.log({ values: values });
          const formData = new FormData();
          // formData.append("admin", "64f86826ea168a20207d0110");
          for (let value in values) {
            formData.append(value, values[value]);
          }
          // formData.append("dept", formDeptOption);
          // Object.values(Myfile).forEach((file) => {
          //   formData.append("fileUrl", file);
          // });

          console.log({ formData: formData });
          postLogin("", formData)
            .then(async (res) => {
              console.log({ res: res });
              if (res?.statusText === "OK") {
                // console.log(res.data);
                // handleUploadSuccess();
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
            <div className="mx-20 space-y-12">
              <div className="pb-12 border-b border-gray-900/10">
                <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        // autoComplete="given-name"
                        className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        // autoComplete="family-name"
                        className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        // autoComplete="email"
                        className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Your Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        rows={3}
                        placeholder=" Write Your Message Here."
                        className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end mt-6 gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => {
                  resetForm(); // Call resetForm to clear the form fields
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-3 py-2 text-sm font-semibold text-white bg-red-400 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
