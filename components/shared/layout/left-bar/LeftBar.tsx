import React from "react";
import Banner from "../banner/Banner";

const LeftBar: React.FunctionComponent = () => (
  <div className="left-container hide-mobile">
    <Banner url="#" imgSrc="/static/images/ads-banner-2.png" />
    <div className="search block">Search</div>
    <div className="block h-200">Top Events</div>
    <div className="block h-200">List of Leagues</div>
    <div className="banner-small block">Advertising Banner</div>
    <div className="banner-big block">Advertising Banner</div>
  </div>
);

export default LeftBar;
