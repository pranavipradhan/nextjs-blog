import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Downloadapp from "./components/downloadapp";
import FindBranch from "./components/findBranch";
// import '../src/css/main.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <FindBranch/>
      <Downloadapp/>
      <Contact/>
      <Footer/>
      {children}
    </div>
  );
};

export default Layout;
