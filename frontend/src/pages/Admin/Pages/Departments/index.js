import React, { useState, useEffect } from "react";
//icons
import { IoIosArrowUp } from "react-icons/io";
//components
import Header from "../../components/sidebar";
import Form from "./components/Form";

//backend
import { getRequest } from "../../../../utils/agent";

export default function Departments() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  //backend
  const [departments, setDepartments] = useState([]);
  //
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
    fetchApi();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //backend
  function fetchApi() {
    getRequest("/admin/getdept")
      .then(async (res) => {
        if (res) {
          console.log(res.data.doNotTrack);
          setDepartments(res.data.doNotTrack);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="mx-auto">
        <Header />
      </div>

      <div className="flex flex-col justify-center items-center  relative top-[4rem] transition-all duration-300 bg-white">
        {showScrollToTop && (
          <div
            className="fixed z-50 p-2 text-white scale-150 bg-blue-500 rounded-full cursor-pointer bottom-10 right-10 "
            onClick={handleScrollToTop}
          >
            <IoIosArrowUp />
          </div>
        )}
        {/* Circles with opacity */}

        <div className=" mb-[15rem] scale-105 ">
          <Form departments={departments} />
        </div>
      </div>
    </div>
  );
}
