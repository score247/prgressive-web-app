import React from "react";
import { MatchInfo } from "../../../models";
type Props = {
    matchInfo: MatchInfo;
}

const SoccerMatchDetail: React.FC<Props> = (props) => {
    const { matchInfo } = props;
    return (
        <div>
            <span>{matchInfo.Match.HomeTeamName}</span>
            <span>{matchInfo.Match.HomeScore}</span>
            <span>-</span>
            <span>{matchInfo.Match.AwayScore}</span>
            <span>{matchInfo.Match.AwayTeamName}</span>
        </div>
    );
}

export default SoccerMatchDetail;