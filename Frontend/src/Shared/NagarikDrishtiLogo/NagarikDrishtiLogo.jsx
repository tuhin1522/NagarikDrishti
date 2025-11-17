import React from "react";
// import logo from "../../../assets/icon/handshakeMoneyIcon.png";
import { Link } from "react-router";

const NagarikDrishtiLogo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        {/* <img
          className="w-12 h-12 rounded-lg shadow-md border border-gray-200"
          src={logo}
          alt="KormoBazaar Logo"
        /> */}
        <div className="text-left ">
          <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500 hidden lg:flex">
            Nagarik
            <span className="text-indigo-800">Drishti</span>
          </p>
          <p className="text-sm text-gray-500 -mt-1 font-medium tracking-wide hidden lg:flex">
            SmartCity 360°
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NagarikDrishtiLogo;
