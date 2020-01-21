import React from "react";
import Banner from "../banner/Banner";
import BottomAds from "../bottom-ads/BottomAds";
import LeagueTable from "../league-table/LeagueTable";

const RightBar: React.FunctionComponent = () => (
  <div className="right-container hide-mobile">
    <Banner url="#" imgSrc="/static/images/ads-banner-3.jpg" />
    <LeagueTable />
    <BottomAds />
  </div>
);

export default RightBar;
