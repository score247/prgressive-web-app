import "./style.scss";
import React, { useState } from "react";
import Head from "next/head";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Breadcrumbs from "../bread-crumbs";
import LeftBar from "./left-bar/LeftBar";
import RightBar from "./right-bar/RightBar";

const Layout: React.FunctionComponent<{
  title?: string;
  breadcrumbs?: string[];
}> = ({ children, title = "Home", breadcrumbs = [""] }) => {
  return (
    <div className="wrap-page">
      <Head>
        <title>{title} | Score247</title>
      </Head>
      <Header />
      <div className="container">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
        />
        <div className="wrap-content">
          <LeftBar />
          <div className="main-container">{children}</div>
          <RightBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
