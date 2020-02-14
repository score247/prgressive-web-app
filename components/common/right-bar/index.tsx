import React from "react";
import Banner from "../banner";
import BottomAds from "../bottom-ads";
import LeagueTable from "./league-table";

const RightBar: React.FunctionComponent = () => (
  <div className="right-container hide-mobile">
    <Banner url="#" imgSrc="/static/images/ads-banner-3.jpg" />
    <LeagueTable />
    <BottomAds />
  </div>
);

export default RightBar;
