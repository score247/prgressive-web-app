
import { MatchResult } from "./match-result";
import { TimelineEvent } from "../timeline-event";

export interface MatchEvent {
    LeagueId: string,
    MatchId: string,
    IsLatest: boolean,
    EventDate: any[],
    Timeline: TimelineEvent,
    MatchResult: MatchResult
}

export interface MatchEventSignalRMessage {
    SportId: number,
    MatchEvent: MatchEvent
}

