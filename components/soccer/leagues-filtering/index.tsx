import React from "react";
import FavoriteCell from '../table/favorite-cell';
import Checkbox from '../../checkbox';

interface Props {
    leagues: string[];
}

const renderLeagueRow = (league: string) => {
    return (
        <div className="league-row" key={league}>
            <Checkbox id={league} checked={true} value={league} onChange={() => { }} />
            <span>{league}</span>
            <FavoriteCell />
        </div>
    );
}

const LeaguesFilteringTable: React.FunctionComponent<Props> = props => {
    return (
        <div>
            {props.leagues.map(league => renderLeagueRow(league))}
        </div>
    );
};

export default LeaguesFilteringTable;