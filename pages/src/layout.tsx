import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Footer/>
      {children}
    </div>
  );
};

export default Layout;
