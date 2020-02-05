import React from "react";
import { DeviceContext } from "../../../../contexts/device-context";
import { Props } from "./type";
import { MatchStatusType, PreMatchStatuses } from "../../../../common/enums/match-status-type";
import { MatchPeriod } from "../../../../models";

function isPreMatch(matchStatusId?: number): boolean {
  return (
    matchStatusId === undefined ||
    PreMatchStatuses.some(x => x === matchStatusId)
  );
}

function renderFirstHalfScore(
  isMobile: boolean,
  firstHalfPeriod?: MatchPeriod,
  matchStatusId?: number
) {
  const matchStatusesToNotShow = [
    ...PreMatchStatuses,
    MatchStatusType.FIRST_HALF.value
  ];

  if (isMobile && firstHalfPeriod !== undefined && !matchStatusesToNotShow.some(x => x === matchStatusId)) {
    return (
      <div className="text-1H">
        ({firstHalfPeriod.HomeScore} - {firstHalfPeriod.AwayScore})
      </div>
    );
  }

  return null;
}

export default function FinalScoreCell(props: Props) {
  const { firstHalfPeriod, homeScore, awayScore, matchStatusId } = props;
  const { isMobile } = React.useContext(DeviceContext);
  const displayScore = isPreMatch(matchStatusId)
    ? "-"
    : `${homeScore} - ${awayScore}`;

  return (
    <td className="text-score">
      {displayScore}
      {renderFirstHalfScore(isMobile, firstHalfPeriod, matchStatusId)}
    </td>
  );
}
