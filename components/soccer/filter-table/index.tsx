import "./style.scss";
import React from "react";
import { DisplayMode } from "../../../common/constants";
import DisplayOptions from "../../display-options";
import SearchBar from "../../search-bar";
import { DeviceContextConsumer } from "../../../contexts/device-context";
import {
  MatchEventSignalRMessage,
  MatchEvent
} from "../../../models/soccer/signalr-messages";
import { MatchSummary } from "../../../models/match-summary";
import { SoccerAPI } from "../../../apis/soccer-api";
import SoccerTable from "../table";
import { EventTypes } from "../../../common/enums/event-type";
import { TimelineEvent } from "../../../models";
import { MatchResult } from "../../../models/soccer/match-result";
import { createSorter } from "../../../common/utils/sort";

type State = {
  filterText: string;
  displayMode: DisplayMode;
  matches: MatchSummary[];
  selectedDate: Date;
};

class FilterSoccerTable extends React.Component<{}, State> {
  displayMatches: MatchSummary[];
  soccerTableRef: React.RefObject<SoccerTable>;
  processedTimelineIds: string[];

  constructor(props: {}) {
    super(props);

    this.displayMatches = [];
    this.processedTimelineIds = [];
    this.soccerTableRef = React.createRef<SoccerTable>();
    this.state = {
      filterText: "",
      displayMode: DisplayMode.ShowAll,
      matches: [],
      selectedDate: new Date()
    };
  }

  async componentDidMount() {
    await this.handleDateChange(new Date());
  }

  handleDateChange = async (date: Date) => {
    this.displayMatches = this.parseData(
      await SoccerAPI.GetMatchesByDate(date)
    );

    this.setState({
      matches: this.displayMatches,
      displayMode: DisplayMode.ShowAll,
      selectedDate: date,
      filterText: ""
    });
  };

  handleLiveButtonClick = async () => {
    this.displayMatches = this.parseData(await SoccerAPI.GetLiveMatches());

    this.setState({
      matches: this.displayMatches,
      displayMode: DisplayMode.ShowAll,
      filterText: ""
    });
  };

  parseData(data: MatchSummary[]) {
    const sorters = [{ property: "EventDate" }];

    if (data && data.length) {
      data.sort(createSorter(...sorters));
    }

    return data;
  }

  matchEventHandler = (message: MatchEventSignalRMessage) => {
    const matchEvent = message?.MatchEvent;
    const matchResult = message?.MatchEvent?.MatchResult;
    const timeline = message?.MatchEvent?.Timeline;
    let isChanged = false;
    const matches = this.state.matches.map(match => {
      const updatedMatch = this.updateMatch(
        match,
        timeline,
        matchEvent,
        matchResult
      );

      if (updatedMatch != null) {
        isChanged = true;
        return updatedMatch;
      }

      return match;
    });

    if (isChanged) {
      this.displayMatches = this.filterMatches(this.state.displayMode);

      this.setState({ matches: matches });
    }
  };

  private updateCards(timeline: TimelineEvent, match: MatchSummary) {
    if (timeline != null && !this.processedTimelineIds.includes(timeline.Id)) {
      switch (timeline.Type.Value) {
        case EventTypes.YELLOW_CARD.value:
          if (timeline.IsHome) {
            match.HomeYellowCards++;
          } else {
            match.AwayYellowCards++;
          }
          this.processedTimelineIds.push(timeline.Id);
          break;
        case EventTypes.RED_CARD.value:
        case EventTypes.YELLOW_RED_CARD.value:
          if (timeline.IsHome) {
            match.HomeRedCards++;
          } else {
            match.AwayRedCards++;
          }
          this.processedTimelineIds.push(timeline.Id);
          break;
      }
    }

    return match;
  }

  updateMatch = (
    match: MatchSummary,
    timeline: TimelineEvent,
    matchEvent: MatchEvent,
    matchResult: MatchResult
  ) => {
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

      match = this.updateCards(timeline, match);

      return match;
    }

    return null;
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

  renderFilterBar() {
    return (
      <div className="search-filter">
        <DisplayOptions onDisplayModeChange={this.handleDisplayModeChange} />
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
      </div>
    );
  }

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
        <DeviceContextConsumer>
          {({ isMobile }) => !isMobile && this.renderFilterBar()}
        </DeviceContextConsumer>
        <SoccerTable
          matches={filteredMatches}
          ref={this.soccerTableRef}
          selectedDate={this.state.selectedDate}
        />
      </>
    );
  }
}

export default FilterSoccerTable;
