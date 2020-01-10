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
import { format } from "date-fns";
import { DateTimeFormat } from "../../../../common/constants";

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

  handleSelectedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSelect(event.target.value);
    this.setState({ isSelected: event.target.checked });
  };

  createHomeTeamCellProps = () => {
    const { match } = this.props;
    const penaltyPeriod =
      match.MatchPeriods &&
      match.MatchPeriods.find(x => x.PeriodType.Value === PeriodType.Penalties);

    return {
      homeTeamCellProps: {
        homeTeamName: match.HomeTeamName,
        redCards: match.HomeRedCards + match.HomeYellowRedCards,
        yellowCards: match.HomeYellowCards,
        isAggregateWinner: match.HomeTeamId === match.AggregateWinnerId,
        isPenaltyWinner:
          penaltyPeriod && penaltyPeriod.HomeScore > penaltyPeriod.AwayScore
      },
      awayTeamCellProps: {
        awayTeamName: match.AwayTeamName,
        redCards: match.AwayRedCards + match.AwayYellowRedCards,
        yellowCards: match.AwayYellowCards,
        isAggregateWinner: match.AwayTeamId === match.AggregateWinnerId,
        isPenaltyWinner:
          penaltyPeriod && penaltyPeriod.HomeScore < penaltyPeriod.AwayScore
    };
  };

  render() {
    const { match } = this.props;
    const time = format(new Date(match.EventDate[0]), DateTimeFormat.TIME);
    const firstHalfPeriod =
      match.MatchPeriods &&
      match.MatchPeriods.find(
        x => x.Number === 1 && x.PeriodType.Value === PeriodType.Regular
      );

    const {
      homeTeamCellProps,
      awayTeamCellProps
    } = this.createHomeTeamCellProps();

    return (
      <>
        <DeviceContextConsumer>
          {({ isMobile }) => (
            <tr>
              {!isMobile && (
                <td>
                  <Checkbox
                    id={match.Id}
                    value={match.Id}
                    checked={this.state.isSelected}
                    onChange={this.handleSelectedChange}
                  />
                </td>
              )}
              <LeagueCell match={match} />
              <TimeAndStatusCell match={match} />
              <HomeTeamCell {...homeTeamCellProps} />
              <FinalScoreCell
                homeScore={match.HomeScore}
                awayScore={match.AwayScore}
                firstHalfPeriod={firstHalfPeriod}
                matchStatusId={match.MatchStatus?.Value}
              />
              <AwayTeamCell {...awayTeamCellProps} />
              <FirstHalfScoreCell firstHalfPeriod={firstHalfPeriod} />
              <FavoriteCell />
            </tr>
          )}
        </DeviceContextConsumer>
        <ExtraMatchInfoRow match={match} />
      </>
    );
  }
}

export default SoccerRow;
