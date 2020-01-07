import "./style.scss";
import React from "react";
import { MatchSummary } from "../../../../models";

type Props = {
  match: MatchSummary;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

type State = {
  isSelected: boolean;
};

class SoccerRow extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isSelected: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    this.setState({
      isSelected: nextProps.isSelected
    });
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSelect(event.target.value);
    this.setState({ isSelected: event.target.checked });
  };

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

    const firstHalfPeriod = match.MatchPeriods.find(x => x.Number === 1);

    return (
      <tr>
        <td>
          <input
            type="checkbox"
            value={match.Id}
            checked={this.state.isSelected}
            onChange={this.onChange}
          />
        </td>
        <td>{time}</td>
        <td>{match.HomeTeamName}</td>
        <td className="score">
          {match.HomeScore} - {match.AwayScore}
          {firstHalfPeriod && (
            <div className="first-half-score">
              ({firstHalfPeriod.HomeScore} - {firstHalfPeriod.AwayScore})
            </div>
          )}
        </td>
        <td>{match.AwayTeamName}</td>
      </tr>
    );
  }
}

export default SoccerRow;
