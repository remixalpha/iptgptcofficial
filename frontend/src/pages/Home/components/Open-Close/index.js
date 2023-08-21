import React, { useState, useEffect } from "react";

export default function Opening() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isOpeningTime = () => {
      const currentTime = new Date();
      const openingTime = new Date();
      const closingTime = new Date();

      openingTime.setHours(8, 30, 0);
      closingTime.setHours(17, 0, 0);

      return currentTime >= openingTime && currentTime <= closingTime;
    };

    setTimeout(() => {
      setIsOpen(isOpeningTime());
      setIsLoading(false);
    }, 2000);

    const interval = setInterval(() => {
      setIsOpen(isOpeningTime());
    }, 1000 * 60);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        className={`relative inset-0 flex items-center justify-center -top-16 h-50 w-50 text-lg text-black font-bold tracking-wider rounded-xl px-4 py-2 animate-bounce transition-all duration-500  ${
          isLoading
            ? " h-10 w-10 rounded-full bg-gray-300 animate-bounce "
            : isOpen
            ? "bg-green-300"
            : "bg-red-300"
        }`}
      >
        {isLoading ? (
          <div className="w-full h-full rounded-full bg-gray-300 animate-bounce transition-all duration-300 "></div>
        ) : (
          <div className={`opening-status ${isOpen ? "open" : "closed"}`}>
            {isOpen ? "Open" : "Closed"}
          </div>
        )}
      </div>
    </>
  );
}
