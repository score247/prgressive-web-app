import React from "react";
import Banner from "../banner";
import TopEvents from "./top-events";
import BottomAds from "../bottom-ads";

const LeftBar: React.FunctionComponent = () => (
  <div className="left-container hide-mobile">
    <Banner url="#" imgSrc="/static/images/ads-banner-2.jpg" />
    <TopEvents />
    <div className="block h-200">List of Leagues</div>
    <BottomAds />
  </div>
);

export default LeftBar;
