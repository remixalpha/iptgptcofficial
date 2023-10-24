import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { BounceLoader } from "react-spinners";

import Home from "./pages/Home/Home";
import Login from "./components/Signup";

import AboutUs from "./pages/About/AboutUs/aboutus";
import Facility from "./pages/About/Facitities/facilities";
import Gallery from "./pages/About/Gallery/index";

import Electronics from "./pages/Departments/Electronics/index";
import Computer from "./pages/Departments/Computer/index";
import Printing from "./pages/Departments/Printing/index";
import General from "./pages/Departments/General/index";
import Mechanical from "./pages/Departments/Mechanical/index";
import Office from "./pages/Departments/Office/index";

import NCC from "./pages/CoCurricular/NCC";
import NSS from "./pages/CoCurricular/NSS";
import IEDC from "./pages/CoCurricular/IEDC";
import ASAP from "./pages/CoCurricular/ASAP";

import SCST from "./pages/Disclosure/SCST";
import Approvel from "./pages/AICTE Related/Approvel";
import BOG from "./pages/AICTE Related/Bog";
import { token } from "./utils/agent";
import ContactUs from "./pages/ContactUs";

import AdminHome from "./pages/Admin/Pages/Home";
import AdminDepartments from "./pages/Admin/Pages/Departments";
import AdminPrincipal from "./pages/Admin/Pages/Principal";
import AdminHOD from "./pages/Admin/Pages/Hod";
import AdminCocurricular from "./pages/Admin/Pages/Cocurricular";
import AdminAICTE from "./pages/Admin/Pages/AICTE";
import AdminGallery from "./pages/Admin/Pages/Gallery";
import AdminPlaced from "./pages/Admin/Pages/Placed";
import NotFound from "./pages/NotFound";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }, 2000);
  }, []);

  if (isLoggedIn === null) {
    return (
      <div className="loading-container flex flex-row items-center justify-center relative top-[25rem] ">
        <BounceLoader color={"#f87171"} loading={true} size={100} />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <>
            <Route path="/admin" exact index element={<AdminHome />} />
            <Route path="/admindepartments" element={<AdminDepartments />} />
            <Route path="/adminprincipal" element={<AdminPrincipal />} />
            <Route path="/adminhod" element={<AdminHOD />} />
            <Route path="/admincocurricular" element={<AdminCocurricular />} />
            <Route path="/adminaicte" element={<AdminAICTE />} />
            <Route path="/admingalery" element={<AdminGallery />} />
            <Route path="/adminplaced" element={<AdminPlaced />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route exact path="/" index element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/facility" element={<Facility />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/computer" element={<Computer />} />
            <Route path="/printing" element={<Printing />} />
            <Route path="/general" element={<General />} />
            <Route path="/mechanical" element={<Mechanical />} />
            <Route path="/office" element={<Office />} />
            <Route path="/ncc" element={<NCC />} />
            <Route path="/nss" element={<NSS />} />
            <Route path="/iedc" element={<IEDC />} />
            <Route path="/asap" element={<ASAP />} />
            <Route path="/scst" element={<SCST />} />
            <Route path="/approvel" element={<Approvel />} />
            <Route path="/bog" element={<BOG />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
