import * as React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./Layout.scss";

const Layout: React.FunctionComponent = ({ children }) => (
  <div>
    <Header />
    <div className="container">
      <div className="site-info">
        <div className="breadcrumbs">SOCCER / TODAY (12 Dec 2019)</div>
        <div className="GMT-time">10:19 GMT +7</div>
      </div>
      <div className="wrap-content">
        <div className="left-container hide-mobile">
          <div className="banner-big block">Advertising Banner</div>
          <div className="search block">Search</div>
          <div className="block h-200">Top Events</div>
          <div className="block h-200">List of Leagues</div>
          <div className="banner-small block">Advertising Banner</div>
          <div className="banner-big block">Advertising Banner</div>
        </div>

        <div className="main-container">
          <div className="nav-date">
            <button className="btn live-match hide-mobile">
              <span className="badge-label">2</span>
              <span>Live Match</span>
            </button>
            <div className="date-bar">
              <span className="show-mobile">Live</span>
              <span>04 Dec</span>
              <span>05 Dec</span>
              <span className="active">Today</span>
              <span>07 Dec</span>
              <span>08 Dec</span>
              <span>
                <i className="icon-calendar" />
              </span>
            </div>
          </div>
          <div className="banner-big block">Advertising Banner</div>
          <div className="content">{children}</div>
        </div>

        <div className="right-container hide-mobile">
          <div className="banner-big block">Advertising Banner</div>
          <div className="block h-400">League Table</div>
          <div className="banner-small block">Advertising Banner</div>
          <div className="banner-big block">Advertising Banner</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Layout;
