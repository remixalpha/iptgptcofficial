import React, { useState } from "react";
import Logo from "../../assets/images/logos/ipt.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { postLogin } from "../../utils/agent";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required").min(3, "Too Short!"),
});
export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center flex-1 min-h-screen px-6 py-12 bg-black lg:px-8 isolate  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm relative -top-10 space-y-20 mb-5 ">
          <img
            className="w-auto h-10 mx-auto scale-150 "
            src={Logo}
            alt="IPT & GPTC"
          />
          {/* <h2 className=" text-white text-4xl font-bold leading-9 text-center ">
            Login
          </h2> */}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              postLogin("/admin/login", values)
                .then(async (res) => {
                  if (res.statusText === "OK") {
                    localStorage.setItem("token", res.data.token);
                    console.log(res.data);
                    navigate("/admin");
                    window.location.reload();
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
              <form
                className="space-y-6 bg-lightPrimary rounded-primary p-10 scale-125 bg-opacity-25  "
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="example@gmail.com"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="block w-full rounded-md border-0 pl-4 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.email && touched.email && errors.email}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-orange-600 hover:text-orange-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                    />
                    <div className="absolute inset-y-0 right-0 pt-16 pr-12 flex items-center cursor-pointer ">
                      {showPassword ? (
                        <AiOutlineEyeInvisible
                          onClick={togglePasswordVisibility}
                        >
                          visibility_off
                        </AiOutlineEyeInvisible>
                      ) : (
                        <AiOutlineEye onClick={togglePasswordVisibility}>
                          visibility
                        </AiOutlineEye>
                      )}
                    </div>
                  </div>
                  {errors.password && touched.password && errors.password}
                </div>

                <div>
                  <button
                    // type="submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center rounded-primary bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-xl hover:bg-orange-400 "
                  >
                    Login
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
