import "./style.scss";
import React, { useState } from "react";
import Head from "next/head";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Breadcrumbs from "../bread-crumbs";
import LeftBar from "./left-bar/LeftBar";
import RightBar from "./right-bar/RightBar";
import { DeviceContextConsumer } from "../../contexts/device-context";

type Props = {
  title?: string;
  breadcrumbs?: string[];
};

const Layout: React.FunctionComponent<Props> = ({ children, title = "Home", breadcrumbs = [""] }) => {
  const className = (isMobile: boolean) => {
    return isMobile ? "wrap-page mobile" : "wrap-page";
  };

  return (
    <DeviceContextConsumer>
      {({ isMobile }) => (
        <div className={className(isMobile)}>
          <Head>
            <title>{title} | Score247</title>
            {!isMobile && <meta name="viewport" content="width=device-width, initial-scale=0" />}
          </Head>
          <Header />
          <div className="container">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="wrap-content">
              <LeftBar />
              <div className="main-container">{children}</div>
              <RightBar />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </DeviceContextConsumer>

  );
};

export default Layout;
