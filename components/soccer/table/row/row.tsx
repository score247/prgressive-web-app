import "./style.scss";
import React from "react";
import { MatchSummary, MatchPeriod } from "../../../../models";
import StatusCell from "../status-cell";
import FirstHalfScoreCell from "../first-half-score-cell";
import FinalScoreCell from "../final-score-cell";
import Checkbox from "../../../checkbox";
import HomeTeamCell from "../home-team-cell";
import AwayTeamCell from "../away-team-cell";
import ExtraMatchInfoRow from "../extra-match-info-row";

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

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      isSelected: nextProps.isSelected
    });
  }

  handleSelectedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    const firstHalfPeriod = match.MatchPeriods
      ? match.MatchPeriods.find(x => x.Number === 1)
      : undefined;

    return (
      <>
        <tr>
          <td>
            <Checkbox
              id={match.Id}
              value={match.Id}
              checked={this.state.isSelected}
              onChange={this.handleSelectedChange}
            />
          </td>
          <td>{time}</td>
          <StatusCell match={match} />
          <HomeTeamCell
            homeTeamName={match.HomeTeamName}
            redCards={match.HomeRedCards + match.HomeYellowRedCards}
            yellowCards={match.HomeYellowCards}
          />
          <FinalScoreCell
            homeScore={match.HomeScore}
            awayScore={match.AwayScore}
            firstHalfPeriod={firstHalfPeriod}
          />
          <AwayTeamCell
            awayTeamName={match.AwayTeamName}
            redCards={match.AwayRedCards + match.AwayYellowRedCards}
            yellowCards={match.AwayYellowCards}
          />
          <FirstHalfScoreCell firstHalfPeriod={firstHalfPeriod} />
          <td>
            <i className="icon-menu-favorites"></i>
          </td>
        </tr>
        {match.MatchPeriods && <ExtraMatchInfoRow match={match} />}
      </>
    );
  }
}

export default SoccerRow;
