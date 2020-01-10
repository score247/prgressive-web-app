import { Enumeration } from "./enumeration";
import { MatchPeriod } from "./match-period";

export interface MatchSummary {
  Id: string;
  EventDate: any[];
  CurrentPeriodStartTime: any[];
  LeagueId: string;
  LeagueName: string;
  HomeTeamId: string;
  HomeTeamName: string;
  AwayTeamId: string;
  AwayTeamName: string;
  MatchStatus: Enumeration;
  EventStatus: Enumeration;
  HomeScore: number;
  AwayScore: number;
  WinnerId: string;
  AggregateWinnerId: string;
  AggregateHomeScore: number;
  AggregateAwayScore: number;
  HomeRedCards: number;
  HomeYellowRedCards: number;
  HomeYellowCards: number;
  AwayRedCards: number;
  AwayYellowRedCards: number;
  AwayYellowCards: number;
  MatchTime: number;
  StoppageTime: string;
  InjuryTimeAnnounced: number;
  LastTimelineType: Enumeration;
  MatchPeriods: MatchPeriod[];
  CountryCode: string;
  CountryName: string;
  ModifiedTime: any[];
  IsInternationalLeague: boolean;
  LeagueOrder: number;
  LeagueSeasonId: string;
  LeagueRoundType: Enumeration;
  LeagueRoundName: string;
  LeagueRoundNumber: number;
  LeagueRoundGroup: string;
  EventDateServerTime: Date;
  LeagueAbbreviation: string;
}
