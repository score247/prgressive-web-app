import React from "react";
import { Props } from "./type";

export default function HomeTeamCell(props: Props) {
  const {
    homeTeamName,
    redCards,
    yellowCards,
    isAggregateWinner,
    isPenaltyWinner
  } = props;

  return (
    <td className="text-right">
      {isAggregateWinner && <i className="icon-arrow-right" />}
      {isPenaltyWinner && <i className="icon-penalty" />}
      {redCards > 0 && <span className="red-card">{redCards}</span>}
      {yellowCards > 0 && <span className="yellow-card">{yellowCards}</span>}
      {homeTeamName}
    </td>
  );
}
