import "./style.scss";
import React from "react";
import dynamic from "next/dynamic";
import { MatchInfo, MatchSummary, TimelineEvent } from "../../../models";
import { SoccerAPI } from "../../../apis/soccer-api";
import { SoccerSignalRClient } from "../../../apis/soccer-signalr-client";
import appSettings from "../../../app-settings";
import { MatchEventSignalRMessage } from "../../../models/soccer/signalr-messages";
import { MatchResult } from "../../../models/soccer/match-result";
import { EventTypes } from "../../../common/enums/event-type";
import { PeriodType } from "../../../common/enums/period-type";
import { DeviceContextConsumer } from "../../../contexts/device-context";
import { DeviceContextType } from "../../../contexts/device-context-type";

const MobileView = dynamic(() => import("./mobile-view"));
const DesktopView = dynamic(() => import("./desktop-view"));

type Props = {
  matchId: string | string[];
};

type State = {
  matchInfo: MatchInfo | null;
  soccerSignalRClient?: SoccerSignalRClient;
};

class SoccerMatchDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      matchInfo: null
    };
  }

  async componentDidMount() {
    const matchInfo = await SoccerAPI.GetMatch(this.props.matchId);
    this.setState({ matchInfo });
  }

  setupSignalClient() {
    const eventHandlers = {
      MatchEvent: this.matchEventHandler
    };

    const client = new SoccerSignalRClient(
      appSettings.soccerPublisherUrl,
      eventHandlers
    );

    this.setState(
      {
        soccerSignalRClient: client
      },
      () => client.start()
    );
  }

  matchEventHandler = (message: MatchEventSignalRMessage) => {
    const { matchInfo } = this.state;

    const matchEvent = message?.MatchEvent;
    if (matchInfo?.Match.Id === matchEvent.MatchId) {
      const matchResult = message?.MatchEvent?.MatchResult;
      const timeline = message?.MatchEvent?.Timeline;

      if (
        matchEvent == null ||
        timeline == null ||
        matchInfo.TimelineEvents.some(x => x.Id === timeline.Id)
      ) {
        return;
      }

      matchInfo.TimelineEvents.push(timeline);

      this.updateMatch(matchInfo.Match, timeline, matchResult);

      this.setState({ matchInfo });
    }
  };

  updateMatch(
    match: MatchSummary,
    timeline: TimelineEvent,
    matchResult: MatchResult
  ) {
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

    this.updateCards(timeline, match);
    this.updateInjuryTime(timeline, match);
  }

  updateCards = (timeline: TimelineEvent, match: MatchSummary) => {
    if (timeline != null) {
      switch (timeline.Type.Value) {
        case EventTypes.YELLOW_CARD.value:
          if (timeline.IsHome) {
            match.HomeYellowCards++;
          } else {
            match.AwayYellowCards++;
          }
          break;
        case EventTypes.YELLOW_RED_CARD.value:
          if (timeline.IsHome) {
            match.HomeYellowRedCards++;
          } else {
            match.AwayYellowRedCards++;
          }
          break;
        case EventTypes.RED_CARD.value:
          if (timeline.IsHome) {
            match.HomeRedCards++;
          } else {
            match.AwayRedCards++;
          }
          break;
      }
    }
  };

  updateInjuryTime = (timeline: TimelineEvent, match: MatchSummary) => {
    if (
      timeline.Type.Value === EventTypes.INJURY_TIME_SHOWN.value &&
      timeline.InjuryTimeAnnounced > 0
    ) {
      match.InjuryTimeAnnounced = timeline.InjuryTimeAnnounced;
    }
  };

  renderMatchDetail = (value: DeviceContextType) => {
    if (this.state.matchInfo) {
      if (value.isMobile) {
        return <MobileView matchInfo={this.state.matchInfo} />;
      }
      return <DesktopView matchInfo={this.state.matchInfo} />;
    }

    return null;
  };

  render() {
    return (
      <div className="content">
        <DeviceContextConsumer>{this.renderMatchDetail}</DeviceContextConsumer>
      </div>
    );
  }
}

export default SoccerMatchDetail;
