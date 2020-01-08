import "./style.scss";
import React from "react";
import { DisplayMode } from "../../../common/constants";
import DisplayOptions from "../../display-options";
import SoccerRow from "./row/row";
import Header from "./header/header";
import SearchBar from "../../search-bar";
import { DeviceContext } from "../../../contexts/device-context";
import { MatchEventSignalRMessage } from "../../../models/soccer/signalr-messages";
import { MatchSummary } from "../../../models/match-summary";
import { SoccerAPI } from "../../../apis/soccer-api";

type State = {
  filterText: string;
  matches: MatchSummary[];
};

class SoccerTable extends React.Component<{}, State> {
  selectedIds: string[];

  constructor(props: {}) {
    super(props);

    this.selectedIds = [];
    this.state = {
      filterText: "",
      matches: [],
    };
  }

  async componentDidMount() {
    await this.handleDateChange(new Date());
  }

  handleDateChange = async (date: Date) => {
    const matches = await SoccerAPI.GetMatchesByDate(date);

    this.setState({ matches: matches });
  }

  handleLiveButtonClick = async () => {
    const matches = await SoccerAPI.GetLiveMatches();

    this.setState({ matches: matches });
  };

  matchEventHandler = (message: MatchEventSignalRMessage) => {
    const matchEvent = message?.MatchEvent;
    const matchResult = message?.MatchEvent?.MatchResult;
    const matches = this.state.matches.map(match => {
      if (match.Id === matchEvent.MatchId) {
        match.HomeScore = matchResult.HomeScore;
        match.AwayScore = matchResult.AwayScore;
        match.WinnerId = matchResult.WinnerId;
        match.AggregateHomeScore = matchResult.AggregateHomeScore;
        match.AggregateAwayScore = matchResult.AggregateAwayScore;
        match.AggregateWinnerId = matchResult.AggregateWinnerId;
        match.MatchPeriods = matchResult.MatchPeriods;
        match.EventStatus = matchResult.EventStatus;
        match.MatchStatus = matchResult.MatchStatus;
        match.MatchTime = matchResult.MatchTime;
      }

      return match;
    });

    this.setState({ matches: matches });
  }

  handleSelectRow = (id: string) => {
    const index = this.selectedIds.indexOf(id);

    if (index >= 0) {
      this.selectedIds = [
        ...this.selectedIds.slice(0, index),
        ...this.selectedIds.slice(index + 1)
      ];
    } else {
      this.selectedIds.push(id);
    }
  };

  renderRow = (match: MatchSummary, index: number) => {
    return (
      <SoccerRow
        key={match.Id}
        match={match}
        isSelected={false}
        onSelect={this.handleSelectRow}
      />
    );
  };

  handleDisplayModeChange = (mode: DisplayMode) => {
    this.setState({
      matches: this.filterMatches(mode),
      filterText: mode === DisplayMode.ShowAll ? "" : this.state.filterText
    });

    this.selectedIds = [];
  };

  filterMatches = (mode: DisplayMode) => {
    if (mode === DisplayMode.ShowAll) {
      return this.state.matches;
    } else {
      const { matches } = this.state;

      if (this.selectedIds.length <= 0) {
        return matches;
      }

      if (mode === DisplayMode.ShowOnly) {
        return matches.filter(
          match => this.selectedIds.indexOf(match.Id) >= 0
        );
      } else {
        return matches.filter(
          match => this.selectedIds.indexOf(match.Id) < 0
        );
      }
    }
  };

  handleFilterTextChange = (filterText: string) => {
    this.setState({ filterText: filterText });
  };

  render() {
    const { matches, filterText } = this.state;

    const filteredMatches = matches.filter(
      match =>
        match.HomeTeamName.toLowerCase().search(filterText.toLowerCase()) !==
        -1 ||
        match.AwayTeamName.toLowerCase().search(filterText.toLowerCase()) !== -1
    );

    return (
      <>
        <DeviceContext.Consumer>
          {({ isMobile }) => {
            if (!isMobile) {
              return (
                <div className="search-filter">
                  <DisplayOptions
                    onDisplayModeChange={this.handleDisplayModeChange}
                  />
                  <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                  />
                </div>
              );
            }
          }}
        </DeviceContext.Consumer>
        <table className="table">
          <Header />
            <tbody>{filteredMatches.map(this.renderRow)}</tbody>
        </table>
      </>
    );
  }
}

export default SoccerTable;
