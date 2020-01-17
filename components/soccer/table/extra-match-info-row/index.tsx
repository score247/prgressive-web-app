import React from "react";
import { Props } from "./type";
import { PeriodType } from "../../../../common/enums/period-type";
import { MatchPeriod, Enumeration } from "../../../../models";
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

  return `FT [${homeScore} - ${awayScore}]`;
};

const renderOverTimePeriodScore = (
  overTimePeriod?: MatchPeriod,
  matchStatus?: Enumeration
) => {
  if (
    overTimePeriod &&
    matchStatus &&
    matchStatus.Value !== MatchStatusType.AWAITING_EXTRA_TIME.value
  ) {
    return `, ET [${overTimePeriod.HomeScore} - ${overTimePeriod.AwayScore}]`;
  }

  return null;
};

const renderAggregateScore = (homeTeamScore: number, awayTeamScore: number) =>
  `, AGGR [${homeTeamScore} - ${awayTeamScore}]`;

const renderPenaltyScore = (penaltyPeriod?: MatchPeriod, matchStatus?: Enumeration) =>{
  if (
    penaltyPeriod &&
    matchStatus &&
    matchStatus.Value !== MatchStatusType.AWAITING_PENALTIES.value
  ) {
    return `, Pen [${penaltyPeriod.HomeScore} - ${penaltyPeriod.AwayScore}]`;
  }

  return null;
}
  

export default function ExtraMatchInfoRow(props: Props) {
  const {
    AggregateAwayScore,
    AggregateHomeScore,
    MatchPeriods,
    AggregateWinnerId,
    EventStatus,
    MatchStatus
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

    const showAggregateScore =
      AggregateWinnerId && EventStatus.Value === MatchStatusType.CLOSED.value;

    if (overTimePeriod || penaltyPeriod || showAggregateScore) {
      return (
        <tr>
          <td className="text-extra" colSpan={colSpan}>
            <span className="icon-link-match"></span>
            <span className="extra-match-info">
              {renderRegularPeriodScore(regularPeriods)}
              {renderOverTimePeriodScore(overTimePeriod, MatchStatus)}
              {showAggregateScore &&
                renderAggregateScore(AggregateHomeScore, AggregateAwayScore)}
              {renderPenaltyScore(penaltyPeriod, MatchStatus)}
            </span>
          </td>
        </tr>
      );
    }
  }

  return null;
}
