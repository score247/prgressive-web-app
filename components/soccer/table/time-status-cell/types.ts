import { MatchSummary } from "../../../../models";

export type TimeStatusCellProps = {
    match: MatchSummary;
    rowSpan?: number;
};

export type TimeStatusCellState = {
    matchStatusText: string;
};
