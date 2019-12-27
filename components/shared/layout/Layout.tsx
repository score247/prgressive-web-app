import "./Layout.scss";
import "../icons/Icons.scss";

import React, { useState } from "react";
import Head from "next/head";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import DateBar from "../../date-bar";
import Breadcrumbs from "../../bread-crumbs";
import LeftBar from "./left-bar/LeftBar";
import RightBar from "./right-bar/RightBar";
import Banner from "./banner/Banner";

const Layout: React.FunctionComponent<{
  title?: string;
  breadcrumbs?: string[];
}> = ({ children, title = "Home", breadcrumbs = [""] }) => {
  const [date, setDate] = useState(new Date());
  const [onlyLiveMatch, setOnlyLiveMatch] = useState(false);

  return (
    <div className="wrap-page">
      <Head>
        <title>{title} | Score247</title>
      </Head>
      <Header />
      <div className="container">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          selectedDate={date}
          onlyLiveMatch={onlyLiveMatch}
        />
        <div className="wrap-content">
          <LeftBar />
          <div className="main-container">
            <DateBar
              onDateChange={setDate}
              selectedDate={date}
              onLiveMatchChange={setOnlyLiveMatch}
              onlyLiveMatch={onlyLiveMatch}
            />
            <Banner url="#" imgSrc="/static/images/ads-banner-1.png" />
            <div className="content">{children}</div>
          </div>
          <RightBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
