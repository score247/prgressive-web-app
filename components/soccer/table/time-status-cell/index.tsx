import * as React from "react";
import { MatchSummary, Enumeration } from "../../../../models";
import {
  MatchStatusTypeDic,
  MatchStatusHelper
} from "../../../../common/enums/match-status-type";
import { differenceInMinutes } from "date-fns";
import { EventTypes } from "../../../../common/enums/event-type";
import {
  TimeStatusCellProps,
  periodTimes,
  PeriodTime,
  TimeStatusCellState
} from "./types";
import { DeviceContext } from "../../../../contexts/device-context";
import "./style.scss";

class TimeAndStatusCell extends React.Component<
  TimeStatusCellProps,
  TimeStatusCellState
  > {
  readonly countMinuteInterval: number = 15000;
  readonly match: MatchSummary;
  private timerId = 0;

  constructor(props: TimeStatusCellProps) {
    super(props);

    this.match = props.match;
    this.state = {
      matchStatusText: this.buildMatchStatus(this.props.match)
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: TimeStatusCellProps) {
    this.setState({
      matchStatusText: this.buildMatchStatus(nextProps.match)
    });
  }

  private buildMatchMinuteWithInjuryTime(
    match: MatchSummary,
    matchMinute: number,
    periodTime: PeriodTime
  ) {
    const announcementInjuryTime = match.InjuryTimeAnnounced;
    const currentInjuryTime = matchMinute - periodTime.endTime;
    let displayInjuryTime = currentInjuryTime <= 0 ? 1 : currentInjuryTime;
    if (currentInjuryTime > announcementInjuryTime) {
      displayInjuryTime = announcementInjuryTime;
    }

    return `${periodTime.endTime}+${displayInjuryTime}'`;
  }

  componentDidMount() {
    if (
      this.match != null &&
      MatchStatusHelper.isMatchNotEndOrCancel(this.match?.MatchStatus)
    ) {
      if (this.timerId !== 0) {
        window.clearInterval(this.timerId);
      }

      this.timerId = window.setInterval(() => {
        this.setState({
          matchStatusText: this.buildMatchStatus(this.match)
        });
      }, this.countMinuteInterval);
    }
  }

  componentWillUnmount() {
    if (this.timerId !== 0) {
      window.clearInterval(this.timerId);
    }
  }

  buildMatchMinute(match: MatchSummary): string {
    const periodTime = periodTimes[match.MatchStatus.Value];

    if (periodTime == null) {
      return "";
    }

    const today = new Date();
    const periodStartTime = new Date(match.CurrentPeriodStartTime[0]);
    const matchMinute =
      periodTime.startTime + differenceInMinutes(today, periodStartTime);

    if (match.InjuryTimeAnnounced > 0) {
      return this.buildMatchMinuteWithInjuryTime(
        match,
        matchMinute,
        periodTime
      );
    }

    return this.buildMatchMinuteText(matchMinute, periodTime);
  }

  private buildMatchMinuteText(matchMinute: number, periodTime: PeriodTime) {
    if (matchMinute >= periodTime.endTime) {
      matchMinute = periodTime.endTime;
    }

    if (matchMinute < periodTime.startTime) {
      matchMinute = periodTime.startTime;
    }

    return `${matchMinute}'`;
  }

  buildMatchStatus(match: MatchSummary): string {
    if (match?.MatchStatus == null) {
      return "";
    }

    if (MatchStatusHelper.isEventNeedBeShownMinute(match.MatchStatus)) {
      return this.buildMatchMinute(match);
    }

    return MatchStatusTypeDic[match.MatchStatus.Value]?.displayName;
  }

  buildMatchStatusClass(match: MatchSummary) {
    return MatchStatusHelper.isCancelStatus(match?.MatchStatus)
      ? "match-cancel"
      : "";
  }

  render() {
    const time = new Date(this.match.EventDate[0]).toLocaleString(
      navigator.language,
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }
    );

    const statusCell = ({ isMobile }: { isMobile: boolean }) => {
      const matchStatusClass = this.buildMatchStatusClass(this.props.match);
      const matchStatus =
        isMobile && this.state.matchStatusText === "-"
          ? ""
          : this.state.matchStatusText;

      return isMobile ? (
        <td>
          {time}
          <span className="match-status">{matchStatus}</span>
        </td>
      ) : (
          <>
            <td>{time}</td>
            <td className={matchStatusClass}>{matchStatus}</td>
          </>
        );
    };

    return <DeviceContext.Consumer>{statusCell}</DeviceContext.Consumer>;
  }
}

TimeAndStatusCell.contextType = DeviceContext;

export default TimeAndStatusCell;
