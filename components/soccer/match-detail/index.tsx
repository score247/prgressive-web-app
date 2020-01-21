import React from "react";
import { MatchInfo } from "../../../models";
import GeneralInfo from "./general-info";
import OtherInfo from "./other-info";

type Props = {
    matchInfo: MatchInfo;
};

const SoccerMatchDetail: React.FC<Props> = (props) => {
    const { matchInfo } = props;
    return (
        <>
            <GeneralInfo match={matchInfo.Match} />
            <OtherInfo matchInfo={matchInfo} />
        </>
    );
};

export default SoccerMatchDetail;