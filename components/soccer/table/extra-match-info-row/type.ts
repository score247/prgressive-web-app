import { MatchSummary } from "../../../../apis/soccer/models";

export type Props = {
    match: MatchSummary,
    onClick?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
};