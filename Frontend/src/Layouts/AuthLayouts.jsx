import React from "react";
import { Outlet } from "react-router";

const AuthLayouts = () => {
  return (
    <div className="p-12 bg-base-200 ">
      <div>
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
