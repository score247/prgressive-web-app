import axios from "axios";
import appSettings from "../app-settings";
import { MatchSummary } from "../models/MatchSummary";
import { MatchInfo } from "../models/MatchInfo";
import { League } from "../models/League";
import { decode } from "@msgpack/msgpack";

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
    date: string,
    language = "en-US"
  ): Promise<MatchSummary[]> => {
    const response = await instance.get(
      `/soccer/${language}/matches?fd=${date}&td=${date}`
    );

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
