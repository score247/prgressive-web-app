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

  renderYellowCards = (yellowCards: number) => {
    if (yellowCards > 0) {
      return <span className="yellow-card">{yellowCards}</span>;
    }

    return null;
  };

  renderRedCards = (redCards: number) => {
    if (redCards > 0) {
      return <span className="red-card">{redCards}</span>;
    }

    return null;
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
        <td>
          {this.renderRedCards(match.HomeRedCards + match.HomeYellowRedCards)}
          {this.renderYellowCards(match.HomeYellowCards)}
          {match.HomeTeamName}
        </td>
        <td className="text-score">
          {match.HomeScore} - {match.AwayScore}
          {firstHalfPeriod && (
            <div className="text-1H">
              ({firstHalfPeriod.HomeScore} - {firstHalfPeriod.AwayScore})
            </div>
          )}
        </td>
        <td>
          {match.AwayTeamName}
          {this.renderYellowCards(match.AwayYellowCards)}
          {this.renderRedCards(match.AwayRedCards + match.AwayYellowRedCards)}
        </td>
        <td className="text-1H">
          {firstHalfPeriod && `${firstHalfPeriod.HomeScore} - ${firstHalfPeriod.AwayScore}`}  
        </td>
        <td><i className="icon-menu-favorites"></i></td>
      </tr>
    );
  }
}

export default SoccerRow;
