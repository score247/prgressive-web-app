import React, { useState } from "react";
import GeneralInfo from "../general-info";
import { MatchInfo } from "../../../../models/match-info";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import SwipeableViews from "react-swipeable-views";

type Props = {
  matchInfo: MatchInfo;
};
const Mobile: React.FC<Props> = props => {
  const [selectedTabIndex, setTab] = useState(0);

  return (
    <>
      <GeneralInfo match={props.matchInfo.Match} />
      <Tabs selectedIndex={selectedTabIndex} onSelect={setTab}>
        <TabList>
          <Tab>Info</Tab>
          <Tab>Tracker</Tab>
          <Tab>Stats</Tab>
          <Tab>Line-ups</Tab>
          <Tab>H2H</Tab>
          <Tab>Table</Tab>
        </TabList>
        <TabPanel>Info</TabPanel>
        <TabPanel>Tracker</TabPanel>
        <TabPanel>Stats</TabPanel>
        <TabPanel>Line-ups</TabPanel>

        <TabPanel>H2H</TabPanel>

        <TabPanel>Table</TabPanel>
      </Tabs>
    </>
  );
};

export default Mobile;
