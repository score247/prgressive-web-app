import axios from "axios";
var msgPack = require("msgpack-lite");
const instance = axios.create({
  baseURL: "http://localhost/Soccer.API/api",
  headers: {
    accept: "application/x-msgpack"
  },
  responseType: "arraybuffer"
});

export const SoccerAPI = {
  GetMatchesByDate: async (date: string, language: string = "en-US") => {
    var response = await instance.get(
      `/soccer/${language}/matches?fd=${date}&td=${date}`
    );

    return msgPack.decode(new Uint8Array(await response.data));
  }
};
