import React from "react";
import Navber from "../Pages/Home/Navber/Navber";
import { Outlet } from "react-router";
import Footer from "../Pages/Home/Footer/Footer";

const Rootlayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Rootlayout;
