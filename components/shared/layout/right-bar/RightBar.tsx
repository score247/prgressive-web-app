import React from "react";
import Banner from "../banner/Banner";

const RightBar: React.FunctionComponent = () => (
  <div className="right-container hide-mobile">
    <Banner url="#" imgSrc="/static/images/ads-banner-3.png" />
    <div className="block h-400">League Table</div>
    <div className="banner-small block">Advertising Banner</div>
    <div className="banner-big block">Advertising Banner</div>
  </div>
);

export default RightBar;
