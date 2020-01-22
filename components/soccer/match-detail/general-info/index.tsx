import React from "react";
import { MatchSummary } from "../../../../models";
type Props = {
    match: MatchSummary;
};

const GeneralInfo: React.FC<Props> = (props) => {
    const { match } = props;
    return (
        <div>
            <h3>General Info</h3>
            <span>{match.HomeTeamName}</span>
            <span>{match.HomeScore}</span>
            <span>-</span>
            <span>{match.AwayScore}</span>
            <span>{match.AwayTeamName}</span>
        </div>
    );
};

export default GeneralInfo;