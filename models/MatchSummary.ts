import { Enumeration } from "./Enumeration";
import { MatchPeriod } from "./MatchPeriod";

export class MatchSummaryDto {
  Id = "";
  EventDate = [];
  CurrentPeriodStartTime = [];
  LeagueId = "";
  LeagueName = "";
  HomeTeamId = "";
  HomeTeamName = "";
  AwayTeamId = "";
  AwayTeamName = "";
  MatchStatus?: Enumeration;
  EventStatus?: Enumeration;
  HomeScore = 0;
  AwayScore = 0;
  WinnerId = 0;
  AggregateWinnerId?: string;
  AggregateHomeScore?: number;
  AggregateAwayScore?: number;
  HomeRedCards = 0;
  HomeYellowRedCards = 0;
  AwayRedCards = 0;
  AwayYellowRedCards = 0;
  MatchTime?: number;
  StoppageTime?: string;
  InjuryTimeAnnounced?: number;
  LastTimelineType?: Enumeration;
  MatchPeriods?: MatchPeriod[];
  CountryCode?: string;
  CountryName?: string;
  ModifiedTime?: [];
  IsInternationalLeague?: boolean;
  LeagueOrder?: number;
  LeagueSeasonId?: string;
  LeagueRoundType?: Enumeration;
  LeagueRoundName?: string;
  LeagueRoundNumber?: number;
  LeagueRoundGroup?: string;
  EventDateServerTime?: Date;
}

export default class MatchSummary extends MatchSummaryDto {
  constructor(dto: MatchSummaryDto) {
    super();
    Object.assign(this, dto);
  }

  get Time(): string {
    const date = new Date(this.EventDate[0]);
    return `${date.getHours()} : ${date.getMinutes()}`;
  }
}
