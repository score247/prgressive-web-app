import React from "react";
import { Props } from "./type";
import { PeriodType } from "../../../../../common/enums/period-type";
import {
  MatchStatusType,
  PreMatchStatuses
} from "../../../../../common/enums/match-status-type";
import { MatchSummary } from "../../../../../models";
import Status from "../status";

function isPreMatch(matchStatusId?: number): boolean {
  return !matchStatusId || PreMatchStatuses.some(x => x === matchStatusId);
}

function renderFirstHalfScore(match: MatchSummary) {
  const matchStatusesToNotShow = [
    ...PreMatchStatuses,
    MatchStatusType.FIRST_HALF.value
  ];

  const firstHalfPeriod = match.MatchPeriods && match.MatchPeriods.find(x => x.Number === 1 && x.PeriodType.Value === PeriodType.Regular);

  if (firstHalfPeriod && !matchStatusesToNotShow.some(x => x === match.MatchStatus?.Value)) {
    return (
      <div>
        ({firstHalfPeriod.HomeScore} - {firstHalfPeriod.AwayScore})
      </div>
    );
  }

  return null;
}


const Score: React.FC<Props> = props => {
  const { match } = props;
  const matchStatusId = match.MatchStatus?.Value;
  const displayScore = isPreMatch(matchStatusId)
    ? null
    : (<div className="full-score">
      <div className="home-score">{match.HomeScore}</div>
      <Status match={match} />
      <div className="away-score">{match.AwayScore}</div>
    </div>);

  return (
    <div className="score">
      {displayScore}
      <div className="half-score">{renderFirstHalfScore(match)}</div>
    </div>
  );
};

export default Score;
