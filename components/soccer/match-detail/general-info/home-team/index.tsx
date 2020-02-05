import React from "react";
import { Props } from "./type";
import { PeriodType } from "../../../../../common/enums/period-type";
import { MatchStatusType } from "../../../../../common/enums/match-status-type";

const HomeTeam: React.FC<Props> = props => {
  const { match } = props;

  const penaltyPeriod =
    match.MatchPeriods &&
    match.MatchPeriods.find(x => x.PeriodType.Value === PeriodType.Penalties);

  const isMatchClosed =
    match.EventStatus.Value === MatchStatusType.CLOSED.value;

  const homeTeamName = match.HomeTeamName,
    redCards = match.HomeRedCards + match.HomeYellowRedCards,
    yellowCards = match.HomeYellowCards,
    isAggregateWinner = match.HomeTeamId === match.AggregateWinnerId,
    isPenaltyWinner =
      penaltyPeriod && penaltyPeriod.HomeScore > penaltyPeriod.AwayScore;
      
  return (
    <div>
      {isMatchClosed && isAggregateWinner && <i className="icon-arrow-right" />}
      {isMatchClosed && isPenaltyWinner && <i className="icon-penalty" />}
      {redCards > 0 && <span className="red-card">{redCards}</span>}
      {yellowCards > 0 && <span className="yellow-card">{yellowCards}</span>}
      {homeTeamName}
    </div>
  );
};

export default HomeTeam;
