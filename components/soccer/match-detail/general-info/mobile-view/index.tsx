import React from "react";
import { DateTimeFormat } from "../../../../../common/constants";
import { formatDate } from "../../../../../common/helpers/date-time-helper";
import { Props } from "./type";
import HomeTeam from "../home-team";
import AwayTeam from "../away-team";
import Score from "../score";
import Status from "../status";


const MobileView: React.FC<Props> = props => {
  const { match } = props;
  return (
    <div className="general-info">
      <div className="extra-info">
        <div className="league-name"><span className={match.CountryCode}></span>{match?.LeagueName}</div>
        <div className="kick-off-time">
          {formatDate(new Date(match.EventDate[0]), DateTimeFormat.DAY_MONTH_ONLY)}
        </div>
      </div>
      <div className="main-info">
        <Status match={match} />
        <div className="match-section">
          <HomeTeam match={match} />
          <Score match={match} />
          <AwayTeam match={match} />
        </div>
        <span className="icon-menu-favorites"></span>
      </div>
    </div>
  );
};

export default MobileView;
