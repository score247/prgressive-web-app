import React from "react";
import { DeviceContext } from "../../../../contexts/device-context";
import { Props } from "./type";
import { MatchStatusType } from "../../../../common/enums/match-status-type";

function isPreMatch(matchStatusId?: number ): boolean {
  const preMatchStatuses = [
    MatchStatusType.NOT_STARTED,
    MatchStatusType.POSTPONED,
    MatchStatusType.START_DELAYED,
    MatchStatusType.CANCELLED
  ];

  return matchStatusId === undefined || preMatchStatuses.some(x => x.value === matchStatusId);
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
      {isMobile && firstHalfPeriod && (
        <div className="text-1H">
          ({firstHalfPeriod.HomeScore} - {firstHalfPeriod.AwayScore})
        </div>
      )}
    </td>
  );
}
