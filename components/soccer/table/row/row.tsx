import "./style.scss";
import React from "react";
import { MatchSummary } from "../../../../models";
import TimeAndStatusCell from "../time-status-cell";
import FirstHalfScoreCell from "../first-half-score-cell";
import FinalScoreCell from "../final-score-cell";
import Checkbox from "../../../checkbox";
import HomeTeamCell from "../home-team-cell";
import AwayTeamCell from "../away-team-cell";
import ExtraMatchInfoRow from "../extra-match-info-row";
import { PeriodType } from "../../../../common/enums/period-type";
import { DeviceContextConsumer } from "../../../../contexts/device-context";
import LeagueCell from "../league-cell";
import FavoriteCell from "../favorite-cell";
import { DeviceContextType } from "../../../../contexts/device-context-type";

type Props = {
  match: MatchSummary;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

type State = {
  isSelected: boolean;
};

class SoccerRow extends React.Component<Props, State> {
  private readonly rowSpan = 2;

  constructor(props: Props) {
    super(props);

    this.state = {
      isSelected: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    this.setState({ isSelected: nextProps.isSelected });
  }

  handleSelectedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSelect(event.target.value);
    this.setState({ isSelected: event.target.checked });
  };

  handleClick = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    event.preventDefault();
    window.open(`/soccer/${this.props.match.Id}`);
  };

  createTeamCellProps = () => {
    const { match } = this.props;
    const penaltyPeriod = match.MatchPeriods && match.MatchPeriods.find(x => x.PeriodType.Value === PeriodType.Penalties);

    const { EventStatus } = match;

    return {
      homeTeamCellProps: {
        homeTeamName: match.HomeTeamName,
        redCards: match.HomeRedCards + match.HomeYellowRedCards,
        yellowCards: match.HomeYellowCards,
        isAggregateWinner: match.HomeTeamId === match.AggregateWinnerId,
        isPenaltyWinner: penaltyPeriod && penaltyPeriod.HomeScore > penaltyPeriod.AwayScore,
        eventStatusId: EventStatus.Value
      },
      awayTeamCellProps: {
        awayTeamName: match.AwayTeamName,
        redCards: match.AwayRedCards + match.AwayYellowRedCards,
        yellowCards: match.AwayYellowCards,
        isAggregateWinner: match.AwayTeamId === match.AggregateWinnerId,
        isPenaltyWinner: penaltyPeriod && penaltyPeriod.HomeScore < penaltyPeriod.AwayScore,
        eventStatusId: EventStatus.Value
      }
    };
  };

  render() {
    const { match } = this.props;
    const firstHalfPeriod = match.MatchPeriods && match.MatchPeriods.find(x => x.Number === 1 && x.PeriodType.Value === PeriodType.Regular);
    const { homeTeamCellProps, awayTeamCellProps } = this.createTeamCellProps();

    const selectCell = ({ isMobile }: DeviceContextType) => {
      return isMobile ? null : (
        <td rowSpan={this.rowSpan}>
          <Checkbox id={match.Id} value={match.Id} checked={this.state.isSelected} onChange={this.handleSelectedChange} />
        </td>
      );
    };

    return (
      <>
        <tr className="match-row" onClick={this.handleClick}>
          <DeviceContextConsumer>{selectCell}</DeviceContextConsumer>
          <LeagueCell rowSpan={this.rowSpan} match={match} />
          <TimeAndStatusCell rowSpan={this.rowSpan} match={match} />
          <HomeTeamCell {...homeTeamCellProps} />
          <FinalScoreCell homeScore={match.HomeScore} awayScore={match.AwayScore} firstHalfPeriod={firstHalfPeriod} matchStatusId={match.MatchStatus?.Value} />
          <AwayTeamCell {...awayTeamCellProps} />
          <FirstHalfScoreCell rowSpan={this.rowSpan} firstHalfPeriod={firstHalfPeriod} />
          <FavoriteCell rowSpan={this.rowSpan} />
        </tr>
        <ExtraMatchInfoRow match={match} />
      </>
    );
  }
}

export default SoccerRow;
