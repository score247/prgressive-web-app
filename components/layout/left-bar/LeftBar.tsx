import React from "react";
import Banner from "../banner/Banner";
import SearchBar from "../search-bar/SearchBar";
import TopEvents from "../top-events/TopEvents";
import BottomAds from "../bottom-ads/BottomAds";

const LeftBar: React.FunctionComponent = () => (
  <div className="left-container hide-mobile">
    <Banner url="#" imgSrc="/static/images/ads-banner-2.jpg" />
    <SearchBar />
    <TopEvents />
    <div className="block h-200">List of Leagues</div>
    <BottomAds />
  </div>
);

export default LeftBar;
