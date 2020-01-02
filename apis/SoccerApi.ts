import axios from "axios";
import appSettings from "../app-settings";
import { decode } from "@msgpack/msgpack";
import MatchSummary, { MatchSummaryDto } from "../models/MatchSummary";
import { MatchInfo } from "../models/MatchInfo";
import { League } from "../models/League";
import { startOfDay, endOfDay } from "date-fns";

const instance = axios.create({
  baseURL: appSettings.soccerAPIBaseUrl,
  headers: {
    accept: "application/x-msgpack"
  },
  responseType: "arraybuffer",
  transformResponse: [
    data => {
      return decode(new Uint8Array(data));
    }
  ]
});

export const SoccerAPI = {
  GetMatchesByDate: async (
    date: Date,
    language = "en-US"
  ): Promise<MatchSummary[]> => {
    const fd = startOfDay(date).toISOString();
    const td = endOfDay(date).toISOString();
    const response = await instance.get<MatchSummaryDto[]>(
      `/soccer/${language}/matches?fd=${fd}&td=${td}`
    );

    return response.data.map(dto => new MatchSummary(dto));
  },

  GetLiveMatches: async (language = "en-US"): Promise<MatchSummary[]> => {
    const response = await instance.get(`/soccer/${language}/matches/live`);

    return response.data;
  },

  GetMatch: async (id: string, language = "en-US"): Promise<MatchInfo> => {
    const response = await instance.get(`/soccer/${language}/matches/${id}`);

    return response.data;
  },

  GetMajorLeagues: async (language = "en-US"): Promise<League[]> => {
    const response = await instance.get(`/soccer/${language}/leagues/major`);

    return response.data;
  }
};
