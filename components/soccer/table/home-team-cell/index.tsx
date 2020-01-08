import React from "react";
import { Props } from "./type";

export default function HomeTeamCell(props: Props) {
  const {
    homeTeamName,
    redCards,
    yellowCards,
    isAggegrateWinner,
    isPenaltyWinner
  } = props;

  return (
    <td>
      {isPenaltyWinner && "penalty-winner"}
      {isAggegrateWinner && "winner"}
      {redCards > 0 && <span className="red-card">{redCards}</span>}
      {yellowCards > 0 && <span className="yellow-card">{yellowCards}</span>}
      {homeTeamName}
    </td>
  );
}
