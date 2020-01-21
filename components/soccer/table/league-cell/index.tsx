import "./league-cell.scss";
import * as React from "react";
import { MatchSummary } from "../../../../models";

const LeagueCell: React.FC<{ match: MatchSummary, rowSpan: number }> = ({ match, rowSpan }) => {
    const league = match.IsInternationalLeague ? match.LeagueAbbreviation : `${match.CountryCode} ${match.LeagueAbbreviation}`;
    const leagueTitle = match.IsInternationalLeague ? match.LeagueName : `${match.CountryName} ${match.LeagueName}`;

    return <td rowSpan={rowSpan} className={`league ${match.LeagueRegion}`} title={leagueTitle}>{league}</td>;
};

export default LeagueCell;