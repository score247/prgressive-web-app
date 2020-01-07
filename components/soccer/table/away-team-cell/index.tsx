import React from "react";
import { Props } from "./type";

export default function AwayTeamCell(props: Props) {
  const { awayTeamName, redCards, yellowCards } = props;
  return (
    <td>
      {awayTeamName}
      {yellowCards > 0 && <span className="yellow-card">{yellowCards}</span>}
      {redCards > 0 && <span className="red-card">{redCards}</span>}
    </td>
  );
}
