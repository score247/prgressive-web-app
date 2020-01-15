import React from "react";
import { Props } from "./type";
import { MatchStatusType } from "../../../../common/enums/match-status-type";

export default function HomeTeamCell(props: Props) {
  const {
    homeTeamName,
    redCards,
    yellowCards,
    isAggregateWinner,
    isPenaltyWinner,
    eventStatusId
  } = props;

  const isMatchClosed = eventStatusId === MatchStatusType.CLOSED.value;

  return (
    <td className="text-right col-home">
      {isMatchClosed && isAggregateWinner && <i className="icon-arrow-right" />}
      {isMatchClosed && isPenaltyWinner && <i className="icon-penalty" />}
      {redCards > 0 && <span className="red-card">{redCards}</span>}
      {yellowCards > 0 && <span className="yellow-card">{yellowCards}</span>}
      {homeTeamName}
    </td>
  );
}
