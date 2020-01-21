import { Enumeration } from "../Enumeration";
import { MatchPeriod } from "../MatchPeriod";

export interface MatchResult {
    EventStatus: Enumeration,
    MatchStatus: Enumeration,
    Period: number,
    MatchPeriods: Array<MatchPeriod>,
    MatchTime: number,
    WinnerId: string,
    HomeScore: number,
    AwayScore: number,
    AggregateHomeScore: number,
    AggregateAwayScore: number,
    AggregateWinnerId: string
}