import "./style.scss";
import React from "react";
import { MatchSummary, MatchPeriod } from "../../../../models";
import { DeviceContext } from "../../../../contexts/device-context";
import StatusCell from "../status-cell";
import FirstHalfScoreCell from "./first-half-score-cell";
import FinalScoreCell from "./final-score-cell";

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

    const firstHalfPeriod = match.MatchPeriods
      ? match.MatchPeriods.find(x => x.Number === 1)
      : undefined;

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
        <StatusCell match={match} />
        <td>
          {this.renderRedCards(match.HomeRedCards + match.HomeYellowRedCards)}
          {this.renderYellowCards(match.HomeYellowCards)}
          {match.HomeTeamName}
        </td>
        <FinalScoreCell
          homeScore={match.HomeScore}
          awayScore={match.AwayScore}
          firstHalfPeriod={firstHalfPeriod}
        />
        <td>
          {match.AwayTeamName}
          {this.renderYellowCards(match.AwayYellowCards)}
          {this.renderRedCards(match.AwayRedCards + match.AwayYellowRedCards)}
        </td>
        <FirstHalfScoreCell firstHalfPeriod={firstHalfPeriod} />
        <td>
          <i className="icon-menu-favorites"></i>
        </td>
      </tr>
    );
  }
}

export default SoccerRow;
