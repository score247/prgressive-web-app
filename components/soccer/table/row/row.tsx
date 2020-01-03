import React from "react";
import { MatchSummary } from "../../../../models";

type Props = {
  match: MatchSummary;
  onSelect: (id: string) => void;
};

class SoccerRow extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    const time = new Date(match.EventDate[0]).toLocaleString(
      navigator.language,
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }
    );

    return (
      <tr>
        <td>
          <input
            type="checkbox"
            onChange={() => this.props.onSelect(match.Id)}
          />
        </td>
        <td>{time}</td>
        <td>{match.HomeTeamName}</td>
        <td>
          {match.HomeScore} - {match.AwayScore}
        </td>
        <td>{match.AwayTeamName}</td>
      </tr>
    );
  }
}

export default SoccerRow;
