import axios from "axios";
import appSettings from "../app-settings";
import { MatchSummary } from "../models/MatchSummary";
import { MatchInfo } from "../models/MatchInfo";
var msgPack = require("msgpack-lite");

const instance = axios.create({
  baseURL: appSettings.soccerAPIBaseUrl,
  headers: {
    accept: "application/x-msgpack"
  },
  responseType: "arraybuffer",
  transformResponse: [
    data => {
      return msgPack.decode(new Uint8Array(data));
    }
  ]
});

export const SoccerAPI = {
  GetMatchesByDate: async (
    date: string,
    language: string = "en-US"
  ): Promise<MatchSummary[]> => {
    var response = await instance.get(
      `/soccer/${language}/matches?fd=${date}&td=${date}`
    );

    return await response.data;
  },

  GetMatch: async (
    id: string,
    language: string = "en-US"
  ): Promise<MatchInfo> => {
    var response = await instance.get(`/soccer/${language}/matches/${id}`);

    return await response.data;
  }
};
