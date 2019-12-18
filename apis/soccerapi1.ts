import axios from "axios";
import appSettings from "../app-settings";
import { MatchSummary } from "../models/MatchSummary";
var msgPack = require("msgpack-lite");

const instance = axios.create({
  baseURL: appSettings.soccerAPIBaseUrl,
  headers: {
    accept: "application/x-msgpack"
  },
  responseType: "arraybuffer"
});

export const SoccerAPI = {
  GetMatchesByDate: async (
    date: string,
    language: string = "en-US"
  ): Promise<MatchSummary[]> => {
    var response = await instance.get(
      `/soccer/${language}/matches?fd=${date}&td=${date}`
    );

    return msgPack.decode(new Uint8Array(await response.data));
  }
};
