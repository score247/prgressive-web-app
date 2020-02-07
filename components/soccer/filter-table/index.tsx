import React from "react";
import lscache from "lscache";
import SoccerTable from "../table";
import { DisplayMode } from "../../../common/constants";
import { MatchEventSignalRMessage, MatchEvent } from "../../../models/soccer/signalr-messages";
import { MatchSummary } from "../../../models/match-summary";
import { SoccerAPI } from "../../../apis/soccer-api";
import { EventTypes } from "../../../common/enums/event-type";
import { TimelineEvent } from "../../../models";
import { MatchResult } from "../../../models/soccer/match-result";
import { sortArray } from "../../../common/utils/sort";
import { SoccerSortOptions } from '../../../common/enums/soccer-sort-option';
import { union } from "lodash";
import SoccerFilterBar from "../filter-bar";

type State = {
  filterText: string;
  displayMode: DisplayMode;
  matches: MatchSummary[];
  selectedDate: Date;
  sortByValue: number;
  selectedLeagues: string[];
  filteredMatchByLeagues: MatchSummary[];
};

class FilterSoccerTable extends React.Component<{}, State> {
  private readonly cacheExpiryTimeInMinutes = 120;
  private readonly defaultSortProperty = "EventDate";
  displayMatches: MatchSummary[];
  soccerTableRef: React.RefObject<SoccerTable>;
  displayLeagues: string[];
  filteredAndSortedMatchByLeague: MatchSummary[];

  constructor(props: {}) {
    super(props);

    this.displayMatches = [];
    this.soccerTableRef = React.createRef<SoccerTable>();
    this.displayLeagues = [];
    this.filteredAndSortedMatchByLeague = [];

    this.state = {
      filterText: "",
      displayMode: DisplayMode.SHOW_ALL,
      matches: [],
      selectedDate: new Date(),
      sortByValue: SoccerSortOptions.KICKOFFTIME,
      selectedLeagues: [],
      filteredMatchByLeagues: []
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
      displayMode: DisplayMode.SHOW_ALL,
      selectedDate: date,
      filterText: "",
      selectedLeagues: this.displayLeagues
    });
  };

  handleLiveButtonClick = async () => {
    const matches = await SoccerAPI.GetLiveMatches();

    this.displayMatches = this.parseData(matches);
    this.displayLeagues = union(matches.map(match => match.LeagueName).sort());

    this.setState({
      matches: matches,
      displayMode: DisplayMode.SHOW_ALL,
      filterText: "",
      selectedLeagues: this.displayLeagues
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
      filterText: mode === DisplayMode.SHOW_ALL ? "" : this.state.filterText
    });
  };

  filterMatches = (mode: DisplayMode) => {
    if (mode === DisplayMode.SHOW_ALL) {
      return this.state.matches;
    } else {
      const selectedIds = this.soccerTableRef.current?.getSelectedIds();
      if (!selectedIds || selectedIds.length <= 0) {
        return this.displayMatches;
      }

      return this.displayMatches.filter(match =>
        (mode === DisplayMode.SHOW_ONLY && selectedIds.indexOf(match.Id) >= 0) ||
        (mode === DisplayMode.HIDE && selectedIds.indexOf(match.Id) < 0));
    }
  };

  handleFilterTextChange = (filterText: string) => {
    this.setState({ filterText: filterText });
  };

  handleSortChange = (sortValue: number) => {
    this.setState({ sortByValue: sortValue });
  }

  handleSelectLeague = (selectedLeagues: string[]) => {
    this.setState({ selectedLeagues: selectedLeagues });
  }

  handleSubmitFilterLeagues = () => {
    this.displayMatches = this.state.matches.filter(match => this.state.selectedLeagues.indexOf(match.LeagueName) >= 0);
    this.setState({ filteredMatchByLeagues: this.displayMatches });
  }

  render() {
    const { filterText, sortByValue } = this.state;
    let filteredMatches: MatchSummary[] = [];

    if (sortByValue === SoccerSortOptions.LEAGUE) {
      filteredMatches = this.state.filteredMatchByLeagues;
    } else {
      filteredMatches = sortArray(this.displayMatches, this.defaultSortProperty);
    }

    filteredMatches = filteredMatches.filter(match =>
      match.HomeTeamName?.toLowerCase().search(filterText.toLowerCase()) !== -1 ||
      match.AwayTeamName?.toLowerCase().search(filterText.toLowerCase()) !== -1);

    return (
      <>
        <SoccerFilterBar
          onDisplayModeChange={this.handleDisplayModeChange}
          sortByValue={this.state.sortByValue}
          onSortChange={this.handleSortChange}
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
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
