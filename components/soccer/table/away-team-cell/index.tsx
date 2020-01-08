import React from "react";
import { Props } from "./type";

export default function AwayTeamCell(props: Props) {
  const {
    awayTeamName,
    redCards,
    yellowCards,
    isAggegrateWinner,
    isPenaltyWinner
  } = props;
  return (
    <td className="text-left">
      {awayTeamName}
      {yellowCards > 0 && <span className="yellow-card">{yellowCards}</span>}
      {redCards > 0 && <span className="red-card">{redCards}</span>}
      {isPenaltyWinner && <i className="icon-penalty" />}
      {isAggegrateWinner && <i className="icon-arrow-right" />}
    </td>
  );
}
