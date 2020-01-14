import React from "react";
import { Props } from "./type";
import { PeriodType } from "../../../../common/enums/period-type";
import { MatchPeriod } from "../../../../models";
import { MatchStatusType } from "../../../../common/enums/match-status-type";
import { useDeviceContext } from "../../../../contexts/device-context";
import "./style.scss";

const colSpanOnMobile = 6;
const colSpanOnDesktop = 9;

const renderRegularPeriodScore = (fullTimePeriod: MatchPeriod[]) => {
  const homeScore = fullTimePeriod.reduce(
    (total, period) => total + period.HomeScore,
    0
  );
  const awayScore = fullTimePeriod.reduce(
    (total, period) => total + period.AwayScore,
    0
  );

  return `90' [${homeScore} - ${awayScore}]`;
};

const renderOverTimePeriodScore = (overTimePeriod?: MatchPeriod) =>
  overTimePeriod &&
  `, 120' [${overTimePeriod.HomeScore} - ${overTimePeriod.AwayScore}]`;

const renderAggregateScore = (homeTeamScore: number, awayTeamScore: number) =>
  `, aggregate score [${homeTeamScore} - ${awayTeamScore}]`;

const renderPenaltyScore = (penaltyPeriod?: MatchPeriod) =>
  penaltyPeriod &&
  `, Pen [${penaltyPeriod.HomeScore} - ${penaltyPeriod.AwayScore}]`;

export default function ExtraMatchInfoRow(props: Props) {
  const {
    AggregateAwayScore,
    AggregateHomeScore,
    MatchPeriods,
    AggregateWinnerId,
    EventStatus
  } = props.match;

  const { isMobile } = useDeviceContext();
  const colSpan = isMobile ? colSpanOnMobile : colSpanOnDesktop;

  if (MatchPeriods) {
    const regularPeriods = MatchPeriods.filter(
      x => x.PeriodType.Value === PeriodType.Regular
    );

    const overTimePeriod = MatchPeriods.find(
      x => x.PeriodType.Value === PeriodType.Overtime
    );

    const penaltyPeriod = MatchPeriods.find(
      x => x.PeriodType.Value === PeriodType.Penalties
    );

    if (
      overTimePeriod ||
      penaltyPeriod ||
      (AggregateWinnerId && EventStatus.Value === MatchStatusType.CLOSED.value)
    ) {
      return (
        <tr>
          <td className="text-extra" colSpan={colSpan}>
            <span className="icon-link-match"></span>
            <span className="extra-match-info">
              {renderRegularPeriodScore(regularPeriods)}
              {renderOverTimePeriodScore(overTimePeriod)}
              {AggregateWinnerId &&
                EventStatus.Value === MatchStatusType.CLOSED.value &&
                renderAggregateScore(AggregateHomeScore, AggregateAwayScore)}
              {renderPenaltyScore(penaltyPeriod)}
            </span>
          </td>
        </tr>
      );
    }
  }

  return null;
}
