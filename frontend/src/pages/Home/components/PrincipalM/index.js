import React, { useState, useEffect } from "react";

import "./style.css";
import { image_url, FetchRequest } from "../../../../utils/agent";

export default function Principal() {
  const [principals, setPrincipals] = useState([]);
  // Backend
  // Fetching HOD data
  function fetchHod() {
    FetchRequest("/principal/")
      .then((res) => {
        // console.log(res.data);
        if (res.statusText === "OK") {
          console.log(res.data.doc);
          setPrincipals(res.data.doc);
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
    <div className="bg-white ">
      <h1 className=" relative flex items-center justify-center -top-10 text-gray-900 sm:text-4xl antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3 ">
        Principal's Message
      </h1>
      {principals.map((principal) => (
        <div className="grid items-center max-w-2xl grid-cols-1 px-4 mx-auto gap-x-20 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
          <div>
            <p className=" relative -top-[8rem] text-justify  block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800">
              <span className="font-bold ">"</span> {principal.quote}
              <span className="font-bold">"</span>
              <br></br>
              <span className="flex items-end justify-end font-bold ">
                - {principal.author}
              </span>
              <br></br>
              <br></br> {principal.message}
            </p>
          </div>
          <div
            className=" lg:grid lg:grid-cols-3 lg:gap-x-4 lg:space-y-0 bg-gray-100 rounded-primary relative -top-14 h-[40rem] "
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="pattern" />

            <div key={principal.name} className="relative group -top-20 ">
              <div className="relative h-[35rem] w-[30rem] overflow-hidden rounded-primary bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300  ">
                <img
                  src={`${image_url + principal.fileUrl}`}
                  alt={principal.imageAlt}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h1
                className="mt-5 text-4xl font-semibold text-gray-900 antialiased tracking-normal font-sans  leading-[1.3]"
                style={{ textAlign: "center" }}
              >
                <a href={principal.href}>
                  <span className="absolute inset-0" />
                  {principal.name}
                </a>
              </h1>
              <p
                className="block font-sans text-2xl antialiased font-normal text-gray-800 "
                style={{ textAlign: "center" }}
              >
                PRINCIPAL
              </p>
              <p
                className="block font-sans text-lg antialiased font-normal text-gray-700"
                style={{ textAlign: "center" }}
              >
                {principal.Qualification}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
