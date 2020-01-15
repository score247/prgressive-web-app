import React from "react";
import { DeviceContext } from "../../../../contexts/device-context";
import { Props } from "./type";
import { MatchStatusType } from "../../../../common/enums/match-status-type";
import { MatchPeriod } from "../../../../models";

const preMatchStatuses = [
  MatchStatusType.NOT_STARTED,
  MatchStatusType.POSTPONED,
  MatchStatusType.START_DELAYED,
  MatchStatusType.CANCELLED
];

function isPreMatch(matchStatusId?: number): boolean {
  return (
    matchStatusId === undefined ||
    preMatchStatuses.some(x => x.value === matchStatusId)
  );
}

function renderFirstHalfScore(
  isMobile: boolean,
  firstHalfPeriod?: MatchPeriod,
  matchStatusId?: number
) {
  const matchStatusesToNotShow = [
    ...preMatchStatuses,
    MatchStatusType.FIRST_HALF
  ];
  
  if (
    isMobile &&
    firstHalfPeriod !== undefined &&
    !matchStatusesToNotShow.some(x => x.value === matchStatusId)
  ) {
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
