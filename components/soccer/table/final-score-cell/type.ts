import { MatchPeriod } from "../../../../models";

export type Props = {
    homeScore: number;
    awayScore: number;
    firstHalfPeriod?: MatchPeriod
};