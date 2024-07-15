import React from "react";
import Header from "./components/header";
import HeroBanner from "./components/heroBanner";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <HeroBanner />
      {children}
    </div>
  );
};

export default Layout;
