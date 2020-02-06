import React from "react";
import { MatchSummary } from "../../../../models";
import { MatchStatusHelper } from "../../../../common/enums/match-status-type";
import { TimeStatusCellProps, TimeStatusCellState } from "./types";
import { DeviceContext } from "../../../../contexts/device-context";
import "./style.scss";
import { buildMatchStatus } from "../../../../common/helpers/match-status-helper";

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
    this.state = { matchStatusText: buildMatchStatus(this.props.match) };
  }

  UNSAFE_componentWillReceiveProps(nextProps: TimeStatusCellProps) {
    this.setState({ matchStatusText: buildMatchStatus(nextProps.match) });
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
        this.setState({ matchStatusText: buildMatchStatus(this.match) });
      }, this.countMinuteInterval);
    }
  }

  componentWillUnmount() {
    if (this.timerId !== 0) {
      window.clearInterval(this.timerId);
    }
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
        <td rowSpan={this.props.rowSpan}>
          {time}
          <span className="match-status">{matchStatus}</span>
        </td>
      ) : (
        <>
          <td rowSpan={this.props.rowSpan}>{time}</td>
          <td rowSpan={this.props.rowSpan} className={matchStatusClass}>
            {matchStatus}
          </td>
        </>
      );
    };

    return <DeviceContext.Consumer>{statusCell}</DeviceContext.Consumer>;
  }
}

TimeAndStatusCell.contextType = DeviceContext;

export default TimeAndStatusCell;
