import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import About from "../../../../assets/images/section/Home/aboutus.jpg";
import { FiChevronRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
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

export default function AboutUS() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this threshold as needed
  });

  useEffect(() => {
    if (inView) {
      // Start the animation when the component comes into view
      // You can also add any additional logic here
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col-reverse items-center max-w-2xl px-10 mx-auto mb-10 bg-white gap-x-20 md:max-w-7xl lg:grid lg:grid-cols-2 lg:max-w-7xl xl:grid xl:grid-cols-2 xl:max-w-7xl"
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="p-8 space-y-10 border group rounded-primary">
        <motion.h1
          className="text-gray-900 sm:text-4xl antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] mb-3"
          variants={item}
        >
          About Us
        </motion.h1>
        <motion.span
          className={classNames(
            "absolute bottom-0 top-10 left-[24.5rem]  h-1 bg-red-400 rounded-full transform w-0 transition-all duration-300",
            "group-hover:w-20"
          )}
          variants={item}
        />
        <motion.p
          className="block mt-4 font-sans text-xl antialiased font-normal leading-relaxed text-justify text-gray-800"
          variants={item}
        >
          Nestled within a luscious green forest cover stretching over
          kilometres, Institute of Printing Technology and Government
          Polytechnic College was established in 1967 by the Govt. of Kerala
          under the department of Technical Education and is approved by AICTE
          (Permanent ID: 1-474656361) and affiliated to SBTE (Affiliation No.
          SBTE101901). What started as an Institute of Printing Technology,
          developed and evolved to be one of the major centres of excellence in
          Technical Education with the incorporation of the Department of
          Electronics Engineering in 1987 and the Department of Computer
          Engineering in 1989. It has the privilege of being the only Institute
          in the entire state which offers a three-year Diploma Programme in
          Printing Technology.
        </motion.p>
        <Link to="/about" className="flex flex-row">
          <motion.button
            type="submit"
            className="group flex w-[10rem] items-center justify-center rounded-md  bg-red-400 px-8 py-3 text-base font-medium text-white hover:bg-gray-800  transition delay-150 duration-300 ease-in-out"
            variants={item}
          >
            Read More
          </motion.button>
          <motion.div
            className="relative w-5 h-5 text-white transition-all duration-300 cursor-pointer top-4 right-8 group-hover:right-1"
            variants={item}
          >
            <FiChevronRight />
          </motion.div>
        </Link>
      </div>
      <motion.div
        className="relative xl:left-10 sm:gap-6 lg:gap-8"
        variants={item}
      >
        <img src={About} alt="" className="" />
      </motion.div>
    </motion.div>
  );
}
