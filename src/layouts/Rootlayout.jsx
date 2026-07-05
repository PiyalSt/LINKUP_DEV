import React from "react";
import { Outlet } from "react-router-dom";
import Sideber from "../components/Sideber";

const Rootlayout = () => {
  return (
    <div className="w-full flex bg-primary/90">
      <div className="w-2/12">
          <Sideber/>
      </div>
      <div className="w-10/12 flex-1 overflow-hidden">
          <Outlet/>
      </div>
    </div>
  );
};

export default Rootlayout;
