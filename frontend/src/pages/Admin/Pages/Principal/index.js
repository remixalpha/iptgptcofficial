import React, { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";

import Header from "../../components/sidebar";
import Form from "./components/Form";
import { FetchRequest, getRequest } from "../../../../utils/agent";

export default function Principal() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [Principals, setPrincipals] = useState([]);
  //fetch principal
  function fetchPrincipal() {
    FetchRequest("/notification/")
      .then(async (res) => {
        if (res.statusText === "OK") {
          // console.log(res.data.doNotTrack);
          setPrincipals(res.data.doNotTrack);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowScrollToTop(position > 100);
    };

    window.scrollTo({ top: 0, behavior: "smooth" });
    window.addEventListener("scroll", handleScroll);
    fetchPrincipal();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden  bg-black">
      <div className="mx-auto">
        <Header />
      </div>

      <div className="flex flex-col justify-center items-center  relative top-[4rem] transition-all duration-300 bg-white">
        {showScrollToTop && (
          <div
            className="fixed scale-150 bottom-10 right-10 cursor-pointer bg-blue-500 p-2 rounded-full text-white z-50 "
            onClick={handleScrollToTop}
          >
            <IoIosArrowUp />
          </div>
        )}
        {/* Circles with opacity */}

        <div className=" mb-[10rem] scale-105 ">
          <Form Principals={Principals} />
        </div>
      </div>
    </div>
  );
}
