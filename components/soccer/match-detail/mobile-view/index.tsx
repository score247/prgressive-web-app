import React, { useState } from "react";
import GeneralInfo from "../general-info";
import { MatchInfo } from "../../../../apis/soccer/models/match-info";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import SwipeableViews from "react-swipeable-views";
import MatchInfoTab from "../tabs/match-info-tab";

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
        <SwipeableViews
          index={selectedTabIndex}
          onChangeIndex={setTab}
          enableMouseEvents
        >
          <TabPanel>This is Info Page</TabPanel>
          <TabPanel forceRender={true}>
            <MatchInfoTab matchId={props.matchInfo.Match.Id} />
          </TabPanel>
          <TabPanel>This is Stats page</TabPanel>
          <TabPanel>This is Line-ups page</TabPanel>
          <TabPanel>This is H2H page</TabPanel>
          <TabPanel>This is Table page</TabPanel>
        </SwipeableViews>
      </Tabs>
    </>
  );
};

export default Mobile;
