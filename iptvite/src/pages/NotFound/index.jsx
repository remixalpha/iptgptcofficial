import React from "react";
import { IoRefresh } from "react-icons/io5";
export default function Error() {
  function clearLocalStorage() {
    window.localStorage.clear();
    window.location.reload();
  }
  

  return (
    <>
      <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 ">
        <div className="text-center">
          <p className=" text-9xl font-semibold text-red-400">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <div className=" h-52 w-96 ">
            <img
              src="https://cdn.dribbble.com/userupload/4890826/file/original-20162e4cf63decdeed9528dfb244db05.gif"
              alt=""
              className="h-full w-full object-cover "
            />
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => clearLocalStorage()}
              className="flex items-center justify-center space-x-2 px-3.5 py-2.5 text-lg font-semibold text-gray-800 shadow-sm "
            >
              <div>
                <IoRefresh />
              </div>
              <a>Refresh</a>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
