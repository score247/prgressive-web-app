import { MatchSummary } from "./MatchSummary";
import { Venue } from "./Venue";
import { TimelineEvent } from "./TimelineEvent";

export interface MatchInfo {
  Match: MatchSummary;
  TimelineEvents: TimelineEvent[];
  Venue: Venue;
  Referee: string;
  Attendance: number;
}
