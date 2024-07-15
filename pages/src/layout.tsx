import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Downloadapp from "./components/downloadapp";
import FindBranch from "./components/findBranch";
import Head from "next/head";
import Movinghouse from "./components/movinghouse";

import HeroBanner from "./components/heroBanner";
import CovidBanner from "./components/covidBanner";
// import "../src/css/main.module.css";
import "../../styles/Home.module.css";
import Services from "./components/services";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Home | Saudi Post | SPL</title>
        <link href="/css/main.css" rel="stylesheet" />
        <link href="/css/en.css" rel="stylesheet" />
        <link href="/css/aos.css" rel="stylesheet" />
        <link href="/css/fonts.css" rel="stylesheet" />
        <link href="/css/jquery.fancybox.css" rel="stylesheet" />
      </Head>
      <Head>
        <link href="../" />
      </Head>
      <Header />
      <Movinghouse />
      <FindBranch />
      <Downloadapp />
      <Contact />
      <Footer />
      <HeroBanner />
      <CovidBanner />
      <Services />
      {children}
    </div>
  );
};

export default Layout;
