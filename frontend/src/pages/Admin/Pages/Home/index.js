import React, { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";

import Header from "../../components/sidebar";
import Form from "./components/Form";
import { FetchRequest, getRequest } from "../../../../utils/agent";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [Notifications, setNotifications] = useState([]);
  function fetchNotification() {
    FetchRequest("/notification/")
      .then(async (res) => {
        if (res.statusText === "OK") {
          // console.log(res.data.doNotTrack);
          setNotifications(res.data.doNotTrack);
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
    fetchNotification();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white ">
      <div className="mx-auto">
        <Header />
      </div>

      <div className="flex flex-col justify-center items-center  relative top-[4rem] transition-all duration-300  ">
        {showScrollToTop && (
          <div
            className="fixed z-50 p-2 text-white scale-150 bg-black rounded-full cursor-pointer bottom-10 right-10 "
            onClick={handleScrollToTop}
          >
            <IoIosArrowUp />
          </div>
        )}

        <div className="mb-[5rem] mt-5 scale-125 ">
          <Form Notifications={Notifications} />
        </div>
      </div>
    </div>
  );
}
