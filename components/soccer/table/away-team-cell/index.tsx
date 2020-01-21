import React from "react";
import { Props } from "./type";
import { MatchStatusType } from "../../../../common/enums/match-status-type";

export default function AwayTeamCell(props: Props) {
  const {
    awayTeamName,
    redCards,
    yellowCards,
    isAggregateWinner,
    isPenaltyWinner,
    eventStatusId
  } = props;

  const isMatchClosed = eventStatusId === MatchStatusType.CLOSED.value;

  return (
    <td className="text-left col-away">
      {awayTeamName}
      {yellowCards > 0 && <span className="yellow-card">{yellowCards}</span>}
      {redCards > 0 && <span className="red-card">{redCards}</span>}
      {isMatchClosed && isPenaltyWinner && <i className="icon-penalty" />}
      {isMatchClosed && isAggregateWinner && <i className="icon-arrow-right" />}
    </td>
  );
}
