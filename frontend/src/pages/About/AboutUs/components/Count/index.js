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
    <Card extra="relative -top-[15rem] ">
      <div className=" ml-[38rem] scale-150 mx-auto grid max-w-2xl grid-cols-1 items-center justify-center rounded-xl gap-x-40 px-4  bg-white sm:px-6 sm:py-32  lg:max-w-7xl lg:grid-cols-3 lg:px-8  ">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-gray-900">Students</h2>
          <p className=" relative top-4 scale-150 text-xl font-medium text-gray-600">
            {studentsCount}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-gray-900">Staff</h2>
          <p className=" relative top-4 scale-150 text-xl font-medium text-gray-600">
            {staffCount}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-gray-900">Programs</h2>
          <p className=" relative top-4 scale-150 text-xl font-medium text-gray-600">
            {programsCount}
          </p>
        </div>
      </div>
    </Card>
  );
}
