import React from "react";
import { Props } from "./type";

export default function HomeTeamCell(props: Props) {
  const { homeTeamName, redCards, yellowCards } = props;

  return (
    <td>
      {redCards > 0 && <span className="red-card">{redCards}</span>}
      {yellowCards > 0 && <span className="yellow-card">{yellowCards}</span>}
      {homeTeamName}
    </td>
  );
}
