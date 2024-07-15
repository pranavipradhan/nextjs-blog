import React from "react";
import Header from "./components/header";
import HeroBanner from "./components/heroBanner";
import CovidBanner from "./components/covidBanner";
// import "../src/css/main.module.css";
import "../../styles/Home.module.css";
import Head from "next/head";
import Services from "./components/services";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link href="../" />
      </Head>
      <Header />
      <HeroBanner />
      <CovidBanner />
      <Services />
      {children}
    </div>
  );
};

export default Layout;
