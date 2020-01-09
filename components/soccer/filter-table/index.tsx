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
  displayMatches: MatchSummary[];
  soccerTableRef: React.RefObject<SoccerTable>;

  constructor(props: {}) {
    super(props);

    this.displayMatches = [];
    this.soccerTableRef = React.createRef<SoccerTable>();
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
    this.displayMatches = await SoccerAPI.GetMatchesByDate(date);

    this.setState({
      matches: this.displayMatches,
      displayMode: DisplayMode.ShowAll
    });
  };

  handleLiveButtonClick = async () => {
    this.displayMatches = await SoccerAPI.GetLiveMatches();

    this.setState({
      matches: this.displayMatches,
      displayMode: DisplayMode.ShowAll
    });
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

    this.displayMatches = this.filterMatches(this.state.displayMode);

    this.setState({ matches: matches });
  };

  handleDisplayModeChange = (mode: DisplayMode) => {
    this.displayMatches = this.filterMatches(mode);
    this.soccerTableRef.current?.resetSelectedIds();

    this.setState({
      displayMode: mode,
      filterText: mode === DisplayMode.ShowAll ? "" : this.state.filterText
    });
  };

  filterMatches = (mode: DisplayMode) => {
    if (mode === DisplayMode.ShowAll) {
      return this.state.matches;
    } else {
      const selectedIds = this.soccerTableRef.current?.getSelectedIds();

      if (!selectedIds || selectedIds.length <= 0) {
        return this.displayMatches;
      }

      if (mode === DisplayMode.ShowOnly) {
        return this.displayMatches.filter(
          match => selectedIds.indexOf(match.Id) >= 0
        );
      } else {
        return this.displayMatches.filter(
          match => selectedIds.indexOf(match.Id) < 0
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
        match.HomeTeamName?.toLowerCase().search(filterText.toLowerCase()) !==
          -1 ||
        match.AwayTeamName?.toLowerCase().search(filterText.toLowerCase()) !==
          -1
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
        <SoccerTable matches={filteredMatches} ref={this.soccerTableRef} />
      </>
    );
  }
}

export default FilterSoccerTable;
