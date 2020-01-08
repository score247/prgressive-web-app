import { TimelineEvent } from "../TimelineEvent";
import { MatchResult } from "./match-result";

export interface MatchEvent {
    LeagueId: string,
    MatchId: string,
    IsLatest: boolean,
    EventDate: any[],
    TimelineEvent: TimelineEvent,
    MatchResult: MatchResult
}

export interface MatchEventSignalRMessage {
    SportId: number,
    MatchEvent: MatchEvent
}

