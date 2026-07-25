import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";

const Layout = () => {

  useEffect(() => {

  }, []);

  return (
    <div className="relative flex flex-col">
      <Outlet />
    </div>
  )
};

export default Layout;