import React, { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";

import Header from "../../components/sidebar";
import Form from "./components/Form";
import { FetchRequest } from "../../../../utils/agent";

export default function Aicte() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [Certificates, setCertificates] = useState([]);
  function fetchCertificate() {
    FetchRequest("/aicte/")
      .then(async (res) => {
        if (res.statusText === "OK") {
          // console.log(res.data.doNotTrack);
          setCertificates(res.data.doc);
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
    fetchCertificate();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black ">
      <div className="mx-auto">
        <Header />
      </div>

      <div className="flex flex-col justify-center items-center  relative top-[4rem] transition-all duration-300 bg-white ">
        {showScrollToTop && (
          <div
            className="fixed scale-150 bottom-10 right-10 cursor-pointer bg-blue-500 p-2 rounded-full text-white z-50 "
            onClick={handleScrollToTop}
          >
            <IoIosArrowUp />
          </div>
        )}

        <div className="mb-[15rem] scale-125 ">
          <Form Certificates={Certificates} />
        </div>
      </div>
    </div>
  );
}
