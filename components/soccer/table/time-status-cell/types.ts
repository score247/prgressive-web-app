import { MatchSummary } from "../../../../apis/soccer/models";

export type TimeStatusCellProps = {
    match: MatchSummary;
    rowSpan?: number;
};

export type TimeStatusCellState = {
    matchStatusText: string;
};
