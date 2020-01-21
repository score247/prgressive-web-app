import React from "react";
import { MatchInfo } from "../../../../models";

type Props = {
    matchInfo: MatchInfo;
};

const OtherInfo: React.FC<Props> = (props) => {
    const { Referee, Venue } = props.matchInfo;
    return (
        <div>
            <div>Other Info</div>
            <div><span>Referee:</span> {Referee}</div>
            <div><span>Venue:</span> {Venue.Name}</div>
            <div><span>Spectators:</span> {Venue.Capacity}</div>
        </div>
    );
};

export default OtherInfo;