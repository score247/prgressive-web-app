import * as React from "react";
import { MatchSummary } from "../../../../models";
import {
  MatchStatusTypeDic,
  CancelStatus,
  EventNeedBeShownMinute
} from "../../../../common/enums/match-status-type";
import { differenceInMinutes } from "date-fns";
import { EventTypes } from "../../../../common/enums/event-type";
import { Props, periodTimes, PeriodTime } from "./types";
import { DeviceContext } from "../../../../contexts/device-context";

class TimeAndStatusCell extends React.Component<Props> {
  readonly match: MatchSummary;

  constructor(props: Props) {
    super(props);

    this.match = props.match;
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

  buildMatchMinute(match: MatchSummary): string {
    const periodTime = periodTimes[match.MatchStatus.Value];
    const today = new Date();
    const periodStartTime = match.CurrentPeriodStartTime[0] as Date;
    const matchMinute =
      periodTime.startTime + differenceInMinutes(today, periodStartTime);

    if (
      match.LastTimelineType?.Value === EventTypes.INJURY_TIME_SHOWN.value &&
      match.InjuryTimeAnnounced > 0
    ) {
      // // const cachedInjuryTime = localStorage.getItem(`InjuryTimeAnnouncement_${match.Id}_${match.MatchStatus.DisplayName}`);
      // // const injuryTime = Number(cachedInjuryTime);

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

    if (
      EventNeedBeShownMinute.find(
        status => match?.MatchStatus?.Value === status
      )
    ) {
      return this.buildMatchMinute(match);
    }

    return MatchStatusTypeDic[match.MatchStatus.Value]?.displayName;
  }

  buildMatchStatusClass(match: MatchSummary) {
    if (CancelStatus.find(status => match?.MatchStatus?.Value === status)) {
      return "match-cancel";
    }

    return "";
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
      const matchStatus = this.buildMatchStatus(this.props.match);
      const matchStatusClass = this.buildMatchStatusClass(this.props.match);

      return isMobile ? (
        <td>
          {time}
          <br />
          {matchStatus}
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
