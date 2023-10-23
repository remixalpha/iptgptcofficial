import React, { useState, useEffect } from "react";

import "./style.css";
import { image_url, FetchRequest } from "../../../../utils/agent";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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
      <motion.h1
        variants={item}
        className=" relative flex items-center justify-center -top-40 lg:-top-10 text-gray-900 sm:text-4xl antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3 "
      >
        Principal's Message
      </motion.h1>
      {principals.map((principal) => (
        <motion.div
          key={principal.id}
          className="grid items-center max-w-2xl grid-cols-1 px-4 mx-auto gap-x-20 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 "
        >
          <div>
            <motion.p
              variants={item}
              className=" relative -top-[8rem] text-justify  block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800"
            >
              <motion.span variants={item} className="font-bold ">
                "
              </motion.span>
              {principal.quote}
              <motion.span variants={item} className="font-bold">
                "
              </motion.span>
              <br />
              <motion.span
                variants={item}
                className="flex items-end justify-end font-bold "
              >
                - {principal.author}
              </motion.span>
              <br />
              <br /> {principal.message}
            </motion.p>
          </div>
          <motion.div
            className="relative xl:-top-14 xl:h-[40rem] lg:grid lg:grid-cols-3 lg:gap-x-4 lg:space-y-0 bg-gray-100 rounded-primary"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <motion.div className="pattern" />

            <motion.div
              key={principal.name}
              className="relative group -top-20 "
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative h-[25rem] w-[20rem] xl:h-[35rem] xl:w-[30rem] overflow-hidden rounded-primary bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  group-hover:scale-105  group-hover:shadow-lg transition-all duration-300  "
              >
                <img
                  src={`${image_url + principal.fileUrl}`}
                  alt={principal.imageAlt}
                  className="object-cover object-center w-full h-full"
                />
              </motion.div>
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
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
