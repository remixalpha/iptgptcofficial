import React, { useState, useEffect } from "react";
//icons
import { IoIosArrowUp } from "react-icons/io";
//components
import Header from "../../components/sidebar";
import Form from "./components/Form";

//backend
import { FetchRequest } from "../../../../utils/agent";

export default function CoCurricular() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  //backend
  const [clubName, setClubNames] = useState([]);

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
    fetchClubNames();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //backend
  function fetchClubNames() {
    FetchRequest("/cocu/")
      .then(async (res) => {
        if (res) {
          console.log(res.data.doNotTrack);
          const clubNamesArray = res.data.doNotTrack.map(
            (item) => item.clubName
          );
          setClubNames(clubNamesArray);
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

      <div className="flex flex-col justify-center items-center  relative top-[4rem] transition-all duration-300  bg-white ">
        {showScrollToTop && (
          <div
            className="fixed z-50 p-2 text-white scale-150 bg-blue-500 rounded-full cursor-pointer bottom-10 right-10 "
            onClick={handleScrollToTop}
          >
            <IoIosArrowUp />
          </div>
        )}

        <div className="scale-105 min-h-screen">
          <Form />
        </div>
      </div>
    </div>
  );
}
