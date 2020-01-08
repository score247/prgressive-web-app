import React from "react";
import { Props } from "./type";
import { PeriodType } from "../../../../common/enums/period-type";
import { MatchEventStatus } from "../../../../common/enums/event-status";
import { MatchPeriod } from "../../../../models";

const renderRegularPeriodScore = (fullTimePeriod: MatchPeriod[]) => {
  const homeScore = fullTimePeriod.reduce(
    (total, period) => total + period.HomeScore,
    0
  );
  const awayScore = fullTimePeriod.reduce(
    (total, period) => total + period.AwayScore,
    0
  );

  return `90 minutes [${homeScore} - ${awayScore}]`;
};

const renderOverTimePeriodScore = (overTimePeriod?: MatchPeriod) =>
  overTimePeriod &&
  `, 120 minutes [${overTimePeriod.HomeScore} - ${overTimePeriod.AwayScore}]`;

const renderAggregateScore = (homeTeamScore: number, awayTeamScore: number) =>
  `, aggregate score [${homeTeamScore} - ${awayTeamScore}]`;

const renderPenaltyScore = (penaltyPeriod?: MatchPeriod) =>
  penaltyPeriod &&
  `, penalty shoot-out [${penaltyPeriod.HomeScore} - ${penaltyPeriod.AwayScore}]`;

export default function ExtraMatchInfoRow(props: Props) {
  const {
    AggregateAwayScore,
    AggregateHomeScore,
    MatchPeriods,
    AggregateWinnerId,
    EventStatus
  } = props.match;

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
      (AggregateWinnerId && EventStatus.Value === MatchEventStatus.Closed)
    ) {
      return (
        <tr>
          <td className="text-extra" colSpan={9}>
            {renderRegularPeriodScore(regularPeriods)}
            {renderOverTimePeriodScore(overTimePeriod)}
            {AggregateWinnerId &&
              EventStatus.Value === MatchEventStatus.Closed &&
              renderAggregateScore(AggregateHomeScore, AggregateAwayScore)}
            {renderPenaltyScore(penaltyPeriod)}
          </td>
        </tr>
      );
    }
  }

  return null;
}
