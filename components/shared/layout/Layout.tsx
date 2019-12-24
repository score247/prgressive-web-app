import "./Layout.scss";
import "../icons/Icons.scss";

import React, { useState } from "react";
import Head from "next/head";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import DateBar from "../../date-bar";
import Breadcrumbs from "../../bread-crumbs";

const Layout: React.FunctionComponent<{ title?: string, breadcrumbs?: string[]}> = ({
  children,
  title = "Home",
  breadcrumbs =  [""]
}) => {
  const [date, setDate] = useState(new Date());
  const [onlyLiveMatch, setOnlyLiveMatch] = useState(false);
  
  return (
    <div>
      <Head>
        <title>{title} | Score247</title>
      </Head>
      <Header />
      <div className="container">
        <Breadcrumbs breadcrumbs={breadcrumbs} selectedDate={date} onlyLiveMatch={onlyLiveMatch} />
        <div className="wrap-content">
          <div className="left-container hide-mobile">
            <div className="banner">
              <img src="/static/images/ads-banner-2.png" alt="Logo" className="ads-img" />
            </div>
            <div className="search block">Search</div>
            <div className="block h-200">Top Events</div>
            <div className="block h-200">List of Leagues</div>
            <div className="banner-small block">Advertising Banner</div>
            <div className="banner-big block">Advertising Banner</div>
          </div>

          <div className="main-container">
            <DateBar
              onDateChange={setDate}
              selectedDate={date}
              onLiveMatchChange={setOnlyLiveMatch}
              onlyLiveMatch={onlyLiveMatch}
            />
            <div className="banner">
              <img src="/static/images/ads-banner-1.png" alt="Logo" className="ads-img" />
            </div>
            <div className="content">{children}</div>
          </div>

          <div className="right-container hide-mobile">
            <div className="banner">
              <img src="/static/images/ads-banner-3.png" alt="Logo" className="ads-img" />
            </div>
            <div className="block h-400">League Table</div>
            <div className="banner-small block">Advertising Banner</div>
            <div className="banner-big block">Advertising Banner</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
