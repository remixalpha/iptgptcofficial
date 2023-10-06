import React, { useEffect } from "react";
import Mission from "../../../../assets/images/section/Home/mission.jpg";
import About from "../../../../assets/images/section/Home/vision.jpg";
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

export default function MissionVision() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // Use the useInView hook to detect when the component comes into view
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
      className="relative -top-10 grid max-w-2xl grid-cols-1 items-center gap-x-40 gap-y-[5rem] px-12 py-40 mx-auto sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="sm:gap-6 lg:gap-8"
      >
        <img src={About} alt="" className="" />
      </motion.div>

      <div className="space-y-9 group">
        <motion.h2
          className="text-gray-900 sm:text-4xl antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] mb-3"
          variants={item}
        >
          Vision
        </motion.h2>
        <motion.span
          className={classNames(
            "absolute bottom-0 top-[20.5rem] left-[45.5rem] h-1 bg-red-400 rounded-full transform w-0 transition-all duration-300",
            "group-hover:w-20"
          )}
          variants={item}
        />
        <motion.p
          className="mt-4 text-justify block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800"
          variants={item}
        >
          Technical institution of the highest order with a transformative
          impact on society.
        </motion.p>
      </div>

      <div className="space-y-9 ">
        <motion.h2
          className="text-gray-900 sm:text-4xl antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] mb-3"
          variants={item}
        >
          Mission
        </motion.h2>
        <motion.p
          className="mt-4 text-justify block antialiased font-sans text-xl font-normal leading-relaxed text-gray-800"
          variants={item}
        >
          Endeavor to stretch the intellectual and creative capacity of the
          students so as to meet the market requirements of becoming employable
          and developing entrepreneurship.
          <br />
          <br />
          To impact society in a transformative way by engaging with partners
          outside the traditional borders of the college campus.
          <br />
          <br />
          To create an ambiance in which new ideas, research, and form leaders
          and innovators of tomorrow emerge.
        </motion.p>
      </div>

      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="sm:gap-6 lg:gap-8"
      >
        <img src={Mission} alt="" className="" />
      </motion.div>
    </motion.div>
  );
}
