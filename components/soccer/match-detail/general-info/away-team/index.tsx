import React from "react";
import { Props } from "./type";
import { PeriodType } from "../../../../../common/enums/period-type";
import { MatchStatusType } from "../../../../../common/enums/match-status-type";

const AwayTeam: React.FC<Props> = props => {
  const { match } = props;

  const penaltyPeriod =
    match.MatchPeriods &&
    match.MatchPeriods.find(x => x.PeriodType.Value === PeriodType.Penalties);

  const isMatchClosed =
    match.EventStatus.Value === MatchStatusType.CLOSED.value;

  const awayTeamName = match.AwayTeamName,
    redCards = match.AwayRedCards + match.AwayYellowRedCards,
    yellowCards = match.AwayYellowCards,
    isAggregateWinner = match.AwayTeamId === match.AggregateWinnerId,
    isPenaltyWinner =
      penaltyPeriod && penaltyPeriod.HomeScore < penaltyPeriod.AwayScore;

  return (
    <div className="away-section">
      <div className="away-name">{awayTeamName}</div>
      <div className="reference-info">
        {yellowCards > 0 && <span className="yellow-card">{yellowCards}</span>}
        {redCards > 0 && <span className="red-card">{redCards}</span>}
        {isMatchClosed && isPenaltyWinner && <i className="icon-penalty" />}
        {isMatchClosed && isAggregateWinner && <i className="icon-arrow-right" />}
      </div>
    </div>
  );
};

export default AwayTeam;
