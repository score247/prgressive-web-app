import { MatchSummary } from "../../../../models";
import { MatchStatus, MatchStatusType } from "../../../../common/enums/match-status-type";

export type TimeStatusCellProps = {
    match: MatchSummary;
};

export type TimeStatusCellState = {
    matchStatusText: string;
};

export class PeriodTime {
    constructor(
        public startTime: number,
        public endTime: number,
        public matchStatus: MatchStatus) { }
}

export interface IPeriodTimes {
    [key: number]: PeriodTime
}

export const periodTimes: IPeriodTimes = {
    6: new PeriodTime(1, 45, MatchStatusType.FIRST_HALF),
    7: new PeriodTime(46, 90, MatchStatusType.SECOND_HALF),
    9: new PeriodTime(91, 105, MatchStatusType.FIRST_HALF_EXTRA),
    10: new PeriodTime(106, 120, MatchStatusType.SECOND_HALF_EXTRA)
};