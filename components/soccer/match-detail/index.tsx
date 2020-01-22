import React from "react";
import dynamic from 'next/dynamic';
import { MatchInfo } from "../../../models";
import GeneralInfo from "./general-info";
import OtherInfo from "./other-info";
import { useDeviceContext } from "../../../contexts/device-context";

const MobileView = dynamic(() => import("./mobile-view"));
const DesktopView = dynamic(() => import("./desktop-view"));


type Props = {
  matchInfo: MatchInfo;
};


const SoccerMatchDetail: React.FC<Props> =  (props) => {
  const { matchInfo } = props;
  const { isMobile } = useDeviceContext();

  return (
    <>
      {isMobile ?  <MobileView  matchInfo={matchInfo}  /> : <DesktopView matchInfo={matchInfo} />}
    </>
  );
};

export default SoccerMatchDetail;
