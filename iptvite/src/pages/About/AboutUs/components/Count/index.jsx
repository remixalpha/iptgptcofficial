import React, { useEffect, useState } from "react";
import Card from "./Card/index";
export default function Count() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [programsCount, setProgramsCount] = useState(0);

  useEffect(() => {
    const fetchCounts = () => {
      const fetchedStudentsCount = 100;
      const fetchedStaffCount = 50;
      const fetchedProgramsCount = 10;

      slowCountAnimation(fetchedStudentsCount, setStudentsCount);
      slowCountAnimation(fetchedStaffCount, setStaffCount);
      slowCountAnimation(fetchedProgramsCount, setProgramsCount);
    };

    fetchCounts();
  }, []);

  const slowCountAnimation = (finalValue, setCount) => {
    const maxAnimationDuration = 3000;

    const countDifference = Math.abs(finalValue - 0);

    const steps = Math.min(100, countDifference);

    const incrementValue = finalValue / steps;

    const animationDuration = Math.min(
      maxAnimationDuration,
      maxAnimationDuration * (countDifference / 10)
    );

    let currentCount = 0;
    const interval = setInterval(() => {
      if (currentCount < finalValue) {
        currentCount += incrementValue;
        setCount(Math.min(currentCount, finalValue));
      } else {
        clearInterval(interval);
      }
    }, animationDuration / steps);
  };

  return (
    <Card extra={`relative -top-[29rem] lg:-top-[15rem] `}>
      <div className=" mx-auto  flex flex-col   max-w-xl  items-center justify-center gap-36 gap-x-40 px-10 py-20   sm:px-6 sm:py-32  lg:max-w-7xl lg:grid lg:grid-cols-3 lg:px-8 lg:py-[10rem] lg:scale-150  ">
        <div className="flex flex-col items-center scale-150 lg:scale-125">
          <h2 className="text-3xl font-semibold text-gray-900 antialiased tracking-normal font-sans leading-[1.3]  mb-3">
            Students
          </h2>
          <p className=" relative top-2 scale-150 text-xl font-medium text-gray-600 antialiased tracking-normal font-sans leading-[1.3]  mb-3">
            {studentsCount}+
          </p>
        </div>
        <div className="flex flex-col items-center scale-150  lg:scale-125">
          <h2 className="text-3xl font-semibold text-gray-900 antialiased tracking-normal font-sans leading-[1.3]  mb-3">
            Staff
          </h2>
          <p className="  relative top-2 scale-150 text-xl font-medium text-gray-600 antialiased tracking-normal font-sans leading-[1.3]  mb-3">
            {staffCount}+
          </p>
        </div>
        <div className="flex flex-col items-center scale-150  lg:scale-125">
          <h2 className="text-3xl font-semibold text-gray-900 antialiased tracking-normal font-sans leading-[1.3]  mb-3">
            Programs
          </h2>
          <p className="  relative top-2 scale-150 text-xl font-medium text-gray-600 antialiased tracking-normal font-sans leading-[1.3]  mb-3">
            {programsCount}+
          </p>
        </div>
      </div>
    </Card>
  );
}
