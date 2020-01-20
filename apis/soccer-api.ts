import appSettings from "../app-settings";
import { MatchSummary, MatchInfo, League, MatchCommentary, MatchLineups } from "../models";
import { startOfDay, endOfDay } from "date-fns";
import { covertToUTC } from "../common/helpers/date-time-helper";
import API from "../common/helpers/api-helper";
import { MatchStatistic } from "../models/match-statistic";


export const SoccerAPI = {
  GetMatchesByDate: async (date: Date, language = "en-US"): Promise<MatchSummary[]> => {
    const fd = covertToUTC(startOfDay(date));
    const td = covertToUTC(endOfDay(date));

    const response = await API.get(
      `${appSettings.soccerAPIBaseUrl}/${language}/matches?fd=${fd}&td=${td}`
    );

    return response.data;
  },

  GetLiveMatches: async (language = "en-US"): Promise<MatchSummary[]> => {
    const response = await API.get(`${appSettings.soccerAPIBaseUrl}/${language}/matches/live`);

    return response.data;
  },

  GetMatch: async (matchId: string, language = "en-US"): Promise<MatchInfo> => {
    const response = await API.get(`${appSettings.soccerAPIBaseUrl}/${language}/matches/${matchId}`);

    return response.data;
  },

  GetMatchCommentaries: async (matchId: string, eventDate: Date, language = "en-US"): Promise<MatchCommentary[]> => {
    const response = await API.get(`${appSettings.soccerAPIBaseUrl}/${language}/matches/${matchId}/commentaries?eventDate=${eventDate}`);

    return response.data;
  },

  GetMatchStatistic: async (matchId: string, eventDate: Date, language = "en-US"): Promise<MatchStatistic> => {
    const response = await API.get(`${appSettings.soccerAPIBaseUrl}/${language}/matches/${matchId}/statistic?eventDate=${eventDate}`);

    return response.data;
  },

  GetMatchLineups: async (matchId: string, eventDate: Date, language = "en-US"): Promise<MatchLineups> => {
    const response = await API.get(`${appSettings.soccerAPIBaseUrl}/${language}/matches/${matchId}/lineups?eventDate=${eventDate}`);

    return response.data;
  },

  GetMajorLeagues: async (language = "en-US"): Promise<League[]> => {
    const response = await API.get(`${appSettings.soccerAPIBaseUrl}/soccer/${language}/leagues/major`);

    return response.data;
  }
};
