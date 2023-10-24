import React, { useState, useEffect } from "react";
// Icons
import { LuEdit2 } from "react-icons/lu";
import { BiImageAdd } from "react-icons/bi";
import { PiUploadSimpleThin, PiXLight } from "react-icons/pi";
// backend
import { Formik } from "formik";
import * as Yup from "yup";
import { image_url, postLogin } from "../../../../../../utils/agent";

// Validation
const notificationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  Qualification: Yup.string().required("Qualification is required"),
  quote: Yup.string().required("quote is required"),
  author: Yup.string().required("author is required"),
  message: Yup.string().required("message is required"),
});

export default function Form({ Principals }) {
  const [image, setImage] = useState("");
  const [fileInputKey, setFileInputKey] = useState(0);
  // Image upload and reset state
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [SelectedImage, setSelectedImage] = useState(null);
  // Form submit for image is selected or not validation
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // view all are submitted
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [showTickMark, setShowTickMark] = useState(false);
  // Backend
  const [Myfile, setMyfile] = useState([]);

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

  useEffect(() => {
    if (Principals.length > 0) {
      const imageUrl = Principals[0].fileUrl;
      if (imageUrl) {
        setImage(image_url + Principals[0].fileUrl);
      } else {
        setImage("https://via.placeholder.com/150");
      }
    }
  }, [Principals]);

  return (
    <Formik
      initialValues={{
        name: Principals.length > 0 ? Principals[0].name : "",
        Qualification: Principals.length > 0 ? Principals[0].Qualification : "",
        quote: Principals.length > 0 ? Principals[0].quote : "",
        author: Principals.length > 0 ? Principals[0].author : "",
        message: Principals.length > 0 ? Principals[0].message : "",
      }}
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
        postLogin("/principal/put", formData)
          .then(async (res) => {
            console.log({ MSG: res.statusText });
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
          <div className=" relative -top-[2rem] xl:w-[110rem] p-20 space-y-12 w-[15rem] sm:w-[35rem] shadow-lg rounded-3xl bg-white border border-gray-300  ">
            {isContentVisible ? (
              <div>
                {/* Content */}
                <div className="grid grid-cols-2  gap-x-[8rem] gap-y-8 ">
                  <div className="grid grid-cols-1 mt-10 gap-x-20 gap-y-8 xl:grid-cols-2">
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
                          htmlFor="fileInput"
                          className="absolute p-2 bg-white border shadow-lg cursor-pointer border-e-white top-80 -right-8 rounded-xl"
                        >
                          <div className="flex flex-col justify-end ">
                            <LuEdit2
                              className="w-10 h-10 p-1 text-black "
                              aria-hidden="true"
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                    {!isImageUploaded && isFormSubmitted && (
                      <div className="fixed font-normal text-red-500 bottom-44 ">
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
                        <div className="mt-2">
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
                            autoComplete="name"
                            className="block w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          />
                          {errors.Qualification && touched.Qualification && (
                            <div className="mt-1 font-normal text-red-500 error">
                              {errors.Qualification}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-10 ">
                    {/* Quote */}
                    <div className="">
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
                          {errors.quote && touched.quote && (
                            <div className="mt-1 font-normal text-red-500 error">
                              {errors.quote}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* author */}
                    <div className="">
                      <div className="col-span-full">
                        <label
                          htmlFor="author"
                          className="block mb-4 text-sm  text-gray-900 antialiased tracking-normal font-sans font-normal leading-[1.3]"
                        >
                          Author
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="author"
                            name="author"
                            placeholder="Enter the Author name here...."
                            rows={3}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.author}
                            className="block w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
                          {errors.author && touched.author && (
                            <div className="mt-1 font-normal text-red-500 error">
                              {errors.author}
                            </div>
                          )}
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
                          {errors.message && touched.message && (
                            <div className="mt-1 font-normal text-red-500 error">
                              {errors.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* buttons */}
                <div className="flex items-center justify-end mt-6 gap-x-6 mb-28 ">
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
                    <span className="relative antialiased tracking-normal font-sans text-sm font-semibold leading-[1.3] ">
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
        </form>
      )}
    </Formik>
  );
}
