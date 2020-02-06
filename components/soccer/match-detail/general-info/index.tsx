import React from "react";
import { DateTimeFormat } from "../../../../common/constants";
import { format } from "date-fns";
import { Props } from "./type";
import HomeTeam from "./home-team";
import AwayTeam from "./away-team";
import Score from "./score";
import Status from "./status";

const GeneralInfo: React.FC<Props> = props => {
  const { match } = props;
  return (
    <div>
      <div>{match?.LeagueName}</div>
      <div>
        Kick-off time:{" "}
        {format(new Date(match.EventDate[0]), DateTimeFormat.DATE_TIME)}
      </div>

      <div>
        <HomeTeam match={match} />
        <Score match={match} />
        <AwayTeam match={match} />
      </div>
      <Status match={match} />
    </div>
  );
};

export default GeneralInfo;
