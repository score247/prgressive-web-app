import "./style.scss";
import React from "react";
import lscache from "lscache";
import DisplayOptions from "../../display-options";
import SearchBar from "../../search-bar";
import SoccerTable from "../table";
import { DisplayMode } from "../../../common/constants";
import { DeviceContextConsumer } from "../../../contexts/device-context";
import { MatchEventSignalRMessage, MatchEvent } from "../../../models/soccer/signalr-messages";
import { MatchSummary } from "../../../models/match-summary";
import { SoccerAPI } from "../../../apis/soccer-api";
import { EventTypes } from "../../../common/enums/event-type";
import { TimelineEvent } from "../../../models";
import { MatchResult } from "../../../models/soccer/match-result";
import { sortArray } from "../../../common/utils/sort";
import { SoccerSortOptions } from '../../../common/enums/soccer-sort-option';
import { union } from "lodash";

type State = {
  filterText: string;
  displayMode: DisplayMode;
  matches: MatchSummary[];
  selectedDate: Date;
  sortByValue: number;
};

class FilterSoccerTable extends React.Component<{}, State> {
  private readonly cacheExpiryTimeInMinutes = 120;
  private readonly defaultSortProperty = "EventDate";
  displayMatches: MatchSummary[];
  soccerTableRef: React.RefObject<SoccerTable>;
  displayLeagues: string[];

  constructor(props: {}) {
    super(props);

    this.displayMatches = [];
    this.soccerTableRef = React.createRef<SoccerTable>();
    this.displayLeagues = [];

    this.state = {
      filterText: "",
      displayMode: DisplayMode.ShowAll,
      matches: [],
      selectedDate: new Date(),
      sortByValue: SoccerSortOptions.KICKOFFTIME
    };
  }

  async componentDidMount() {
    await this.handleDateChange(new Date());
  }

  onlyUnique = (value: string, index: number, self: string[]) => {
    return self.indexOf(value) === index;
  }

  handleDateChange = async (date: Date) => {
    const matches = await SoccerAPI.GetMatchesByDate(date);

    this.displayMatches = this.parseData(matches);
    this.displayLeagues = union(matches.map(match => match.LeagueName).sort());

    this.setState({
      matches: matches,
      displayMode: DisplayMode.ShowAll,
      selectedDate: date,
      filterText: ""
    });
  };

  handleLiveButtonClick = async () => {
    const matches = await SoccerAPI.GetLiveMatches();

    this.displayMatches = this.parseData(matches);
    this.displayLeagues = union(matches.map(match => match.LeagueName).sort());

    this.setState({
      matches: matches,
      displayMode: DisplayMode.ShowAll,
      filterText: ""
    });
  };

  parseData(data: MatchSummary[]) {
    if (data && data.length && this.state.sortByValue === SoccerSortOptions.KICKOFFTIME) {
      return sortArray(data, this.defaultSortProperty);
    }

    return data;
  }

  matchEventHandler = (message: MatchEventSignalRMessage) => {
    const matchEvent = message?.MatchEvent;
    const matchResult = message?.MatchEvent?.MatchResult;
    const timeline = message?.MatchEvent?.Timeline;

    if (matchEvent == null || timeline == null) {
      return;
    }

    const processedTimelineIds: string[] = lscache.get(matchEvent.MatchId) ?? [];
    if (processedTimelineIds.includes(timeline.Id)) {
      return;
    }

    processedTimelineIds.push(timeline.Id);
    lscache.set(matchEvent.MatchId, processedTimelineIds, this.cacheExpiryTimeInMinutes);

    let isChanged = false;
    const matches = this.state.matches.map(match => {
      const updatedMatch = this.updateMatch(match, timeline, matchEvent, matchResult);

      if (updatedMatch != null) {
        isChanged = true;
        const index = this.displayMatches.findIndex(displayMatch => displayMatch.Id === matchEvent.MatchId);
        this.displayMatches[index] = updatedMatch;

        return updatedMatch;
      }

      return match;
    });

    if (isChanged) {
      this.setState({ matches: matches });
    }
  };

  private updateCards(timeline: TimelineEvent, match: MatchSummary) {
    if (timeline != null) {
      switch (timeline.Type.Value) {
        case EventTypes.YELLOW_CARD.value:
          if (timeline.IsHome) {
            match.HomeYellowCards++;
          } else {
            match.AwayYellowCards++;
          }
          break;
        case EventTypes.RED_CARD.value:
        case EventTypes.YELLOW_RED_CARD.value:
          if (timeline.IsHome) {
            match.HomeRedCards++;
          } else {
            match.AwayRedCards++;
          }
          break;
      }
    }

    return match;
  }

  updateMatch = (match: MatchSummary, timeline: TimelineEvent, matchEvent: MatchEvent, matchResult: MatchResult) => {
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

      if (timeline.Type.Value === EventTypes.PERIOD_START.value) {
        match.CurrentPeriodStartTime[0] = timeline.Time;
        match.InjuryTimeAnnounced = 0;
      }

      match = this.updateCards(timeline, match);
      match = this.updateInjuryTimeShown(timeline, match);

      return match;
    }

    return null;
  };

  private updateInjuryTimeShown(timeline: TimelineEvent, match: MatchSummary) {
    if (timeline.Type.Value === EventTypes.INJURY_TIME_SHOWN.value && timeline.InjuryTimeAnnounced > 0) {
      match.InjuryTimeAnnounced = timeline.InjuryTimeAnnounced;
    }

    return match;
  }

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

      return this.displayMatches.filter(match =>
        (mode === DisplayMode.ShowOnly && selectedIds.indexOf(match.Id) >= 0) ||
        (mode === DisplayMode.Hide && selectedIds.indexOf(match.Id) < 0));
    }
  };

  handleFilterTextChange = (filterText: string) => {
    this.setState({ filterText: filterText });
  };

  handleSortChange = (sortValue: number) => {
    const { matches } = this.state;

    if (sortValue === SoccerSortOptions.LEAGUE) {
      this.displayMatches = matches;
    } else {
      this.displayMatches = sortArray(matches, this.defaultSortProperty);
    }

    this.setState({ sortByValue: sortValue });
  }

  renderFilterBar() {
    return (
      <div className="search-filter">
        <DisplayOptions onDisplayModeChange={this.handleDisplayModeChange} />
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
          sortByValue={this.state.sortByValue}
          onSortChange={this.handleSortChange}
          leagues={this.displayLeagues}
        />
      </div>
    );
  }

  render() {
    const { filterText } = this.state;

    const filteredMatches = this.displayMatches.filter(match =>
      match.HomeTeamName?.toLowerCase().search(filterText.toLowerCase()) !== -1 ||
      match.AwayTeamName?.toLowerCase().search(filterText.toLowerCase()) !== -1);

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
