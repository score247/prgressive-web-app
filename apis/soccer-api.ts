import appSettings from "../app-settings";
import { MatchSummary, MatchInfo, League } from "../models";
import { startOfDay, endOfDay } from "date-fns";
import { covertToUTC } from "../common/helpers/date-time-helper";
import API from "../common/helpers/api-helper";


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

  GetMatch: async (id: string, language = "en-US"): Promise<MatchInfo> => {
    const response = await API.get(`${appSettings.soccerAPIBaseUrl}/soccer/${language}/matches/${id}`);

    return response.data;
  },

  GetMajorLeagues: async (language = "en-US"): Promise<League[]> => {
    const response = await API.get(`${appSettings.soccerAPIBaseUrl}/soccer/${language}/leagues/major`);

    return response.data;
  }
};
