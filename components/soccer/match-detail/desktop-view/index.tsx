import React, { useState } from "react";
import { MatchInfo } from "../../../../models/match-info";
import GeneralInfo from "../general-info";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import MatchInfoTab from "../tabs/match-info-tab";
type Props = {
  matchInfo: MatchInfo;
};

const Desktop: React.FC<Props> = props => {
  const [selectedTabIndex, setTab] = useState(0);

  return (
    <>
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
        <TabPanel>
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
