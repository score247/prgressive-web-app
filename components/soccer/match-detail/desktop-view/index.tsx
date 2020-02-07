import React, { useState } from "react";
import { MatchInfo } from "../../../../models/match-info";
import GeneralInfo from "../general-info";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import MatchInfoTab from "../tabs/match-info-tab";
import "../../../../assets/styles/pages/match-detail.scss";

type Props = {
  matchInfo: MatchInfo;
};

const Desktop: React.FC<Props> = props => {
  const [selectedTabIndex, setTab] = useState(0);

  return (
    <>
      <div className="banner-top">
        <div className="banner-left">
        <picture>
          <source srcSet="/static/images/ads-banner-detail-2.webp"  type="image/webp" />
          <source srcSet="/static/images/ads-banner-detail-2.jpg" type="image/jpeg" />
          <img className="" src="/static/images/ads-banner-detail-2.png" alt="left banner" />
        </picture>
        </div>
        <div className="banner-center">
          <picture>
            <source srcSet="/static/images/ads-banner-1.webp"  type="image/webp" />
            <source srcSet="/static/images/ads-banner-1.jpg" type="image/jpeg" />
            <img className="" src="/static/images/ads-banner-1.png" alt="center banner" />
          </picture>
        </div>
        <div className="banner-right">
          <picture>
            <source srcSet="/static/images/ads-banner-detail-3.webp"  type="image/webp" />
            <source srcSet="/static/images/ads-banner-detail-3.jpg" type="image/jpeg" />
            <img className="" src="/static/images/ads-banner-detail-3.png" alt="right banner" />
          </picture>
        </div>
      </div>
      <GeneralInfo match={props.matchInfo.Match} />

      <Tabs selectedIndex={selectedTabIndex} onSelect={setTab}>
        <div>
          <TabList>
            <Tab>Info</Tab>
            <Tab>Commentary</Tab>
            <Tab>Statistics</Tab>
            <Tab>H2H</Tab>
            <Tab>Table</Tab>
          </TabList>
        </div>
        <TabPanel forceRender={true}>
          <MatchInfoTab matchId={props.matchInfo.Match.Id} />
        </TabPanel>
        <TabPanel>Commentary</TabPanel>
        <TabPanel>Statistics</TabPanel>
        <TabPanel>H2H</TabPanel>
        <TabPanel>Table</TabPanel>
      </Tabs>
    </>
  );
};

export default Desktop;
