import React from "react";
import { Props } from "./type";
import { PeriodType } from "../../../../common/enums/period-type";
import { MatchEventStatus } from "../../../../common/enums/event-status";
import { MatchPeriod } from "../../../../models";

const renderRegularTimeScore = (fullTimePeriod: MatchPeriod[]) => {
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

const renderOverTimeScore = (overTimeTimePeriod?: MatchPeriod) =>
  overTimeTimePeriod &&
  `, 120 minutes [${overTimeTimePeriod.HomeScore} - ${overTimeTimePeriod.AwayScore}]`;

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

  //render if the match has more than 2 regular periods or has aggerate score
  if (MatchPeriods && ( MatchPeriods.length > 2 || (AggregateWinnerId && EventStatus.Value === MatchEventStatus.Closed))) { //NOSONAR
    const regularPeriods = MatchPeriods.filter(
      x => x.PeriodType.Value === PeriodType.Regular
    );

    const overTimePeriod = MatchPeriods.find(
      x => x.PeriodType.Value === PeriodType.Overtime
    );

    const penaltyPeriod = MatchPeriods.find(
      x => x.PeriodType.Value === PeriodType.Penalties
    );

    return (
      <tr>
        <td className="text-extra" colSpan={9}>
          {renderRegularTimeScore(regularPeriods)}
          {renderOverTimeScore(overTimePeriod)}
          {AggregateWinnerId && EventStatus.Value === MatchEventStatus.Closed &&
            renderAggregateScore(AggregateHomeScore, AggregateAwayScore)}
          {renderPenaltyScore(penaltyPeriod)}
        </td>
      </tr>
    );
  }

  return null;
}
