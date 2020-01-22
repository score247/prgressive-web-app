import React, { useState } from "react";
import GeneralInfo from "../general-info";
import { MatchInfo } from "../../../../models/match-info";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import SwipeableViews from "react-swipeable-views";

type Props = {
  matchInfo: MatchInfo;
};

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff"
  },
  slide1: {
    backgroundColor: "#FEA900"
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  }
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
        <SwipeableViews index={selectedTabIndex} onChangeIndex={setTab} enableMouseEvents>
          <TabPanel style={Object.assign({}, styles.slide, styles.slide1)}>
            Info
          </TabPanel>
          <TabPanel style={Object.assign({}, styles.slide, styles.slide2)}>
            Tracker
          </TabPanel>
          <TabPanel style={Object.assign({}, styles.slide, styles.slide3)}>
            Stats
          </TabPanel>
          <TabPanel style={Object.assign({}, styles.slide, styles.slide1)}>
            Line-ups
          </TabPanel>
          <TabPanel style={Object.assign({}, styles.slide, styles.slide2)}>
            H2H
          </TabPanel>
          <TabPanel style={Object.assign({}, styles.slide, styles.slide3)}>
            Table
          </TabPanel>
        </SwipeableViews>
      </Tabs>
     
    </>
  );
};

export default Mobile;
