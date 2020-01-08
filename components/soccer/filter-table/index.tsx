import "./style.scss";
import React from "react";
import { DisplayMode } from "../../../common/constants";
import DisplayOptions from "../../display-options";
import SearchBar from "../../search-bar";
import { DeviceContext } from "../../../contexts/device-context";
import { MatchEventSignalRMessage } from "../../../models/soccer/signalr-messages";
import { MatchSummary } from "../../../models/match-summary";
import { SoccerAPI } from "../../../apis/soccer-api";
import SoccerTable from "../table";

type State = {
  filterText: string;
  displayMode: DisplayMode;
  matches: MatchSummary[];
};

class FilterSoccerTable extends React.Component<{}, State> {
  private selectedIds: string[];
  private displayMatches: MatchSummary[];

  constructor(props: {}) {
    super(props);

    this.selectedIds = [];
    this.displayMatches = [];
    this.state = {
      filterText: "",
      displayMode: DisplayMode.ShowAll,
      matches: []
    };
  }

  async componentDidMount() {
    await this.handleDateChange(new Date());
  }

  handleDateChange = async (date: Date) => {
    const matches = await SoccerAPI.GetMatchesByDate(date);

    this.setState({ matches: matches, displayMode: DisplayMode.ShowAll });
  };

  handleLiveButtonClick = async () => {
    const matches = await SoccerAPI.GetLiveMatches();

    this.setState({ matches: matches, displayMode: DisplayMode.ShowAll });
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
  };

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

  handleDisplayModeChange = (mode: DisplayMode) => {
    this.displayMatches = this.filterMatches(mode);

    this.setState({
      displayMode: mode,
      filterText: mode === DisplayMode.ShowAll ? "" : this.state.filterText
    });
  };

  filterMatches = (mode: DisplayMode) => {
    if (mode === DisplayMode.ShowAll) {
      return this.state.matches;
    } else {
      if (this.selectedIds.length <= 0) {
        return this.displayMatches;
      }

      if (mode === DisplayMode.ShowOnly) {
        return this.displayMatches.filter(
          match => this.selectedIds.indexOf(match.Id) >= 0
        );
      } else {
        return this.displayMatches.filter(
          match => this.selectedIds.indexOf(match.Id) < 0
        );
      }
    }
  };

  handleFilterTextChange = (filterText: string) => {
    this.setState({ filterText: filterText });
  };

  render() {
    const { displayMode, filterText } = this.state;

    this.displayMatches = this.filterMatches(displayMode);
    const filteredMatches = this.displayMatches.filter(
      match =>
        match.HomeTeamName.toLowerCase().search(filterText.toLowerCase()) !==
          -1 ||
        match.AwayTeamName.toLowerCase().search(filterText.toLowerCase()) !== -1
    );

    this.selectedIds = [];

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
        <SoccerTable
          matches={filteredMatches}
          handleSelectRow={this.handleSelectRow}
        />
      </>
    );
  }
}

export default FilterSoccerTable;
