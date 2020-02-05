import { MatchSummary } from "../../../../models";
import { MatchStatus, MatchStatusType } from "../../../../common/enums/match-status-type";

export type TimeStatusCellProps = {
    match: MatchSummary;
    rowSpan?: number;
};

export type TimeStatusCellState = {
    matchStatusText: string;
};
