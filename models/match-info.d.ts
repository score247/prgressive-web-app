import { MatchSummary } from "./match-summary";
import { Venue } from "./venue";
import { TimelineEvent } from "./timeline-event";

export interface MatchInfo {
  Match: MatchSummary;
  TimelineEvents: TimelineEvent[];
  Venue: Venue;
  Referee: string;
  Attendance: number;
}
