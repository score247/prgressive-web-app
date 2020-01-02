import React from "react";
import { MatchSummary } from "../../../models";

type Props = {
  matches: MatchSummary[];
};

const SoccerTable: React.FunctionComponent<Props> = props => (
  <table>
    <thead>
      <th>Time</th>
      <th>Home</th>
      <th>Score</th>
      <th>Away</th>
    </thead>
    <tbody>
      {props.matches.map(match => {
        const time = new Date(
          match.EventDate[0]
        ).toLocaleString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        });
        return (
          <tr key={match.Id}>
            <td>{time}</td>
            <td>{match.HomeTeamName}</td>
            <td>
              {match.HomeScore} - {match.AwayScore}
            </td>
            <td>{match.AwayTeamName}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default SoccerTable;
