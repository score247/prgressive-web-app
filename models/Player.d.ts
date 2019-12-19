import { Enumeration } from "./Enumeration";

export interface Player {
  Id: string;
  Name: string;
  PlayerType: Enumeration;
  JerseyNumber: number;
  Position: Enumeration;
  Order: number;
  EventStatistic: { [key: Enumeration]: number };
}
