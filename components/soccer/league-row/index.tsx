import React from "react";
import Checkbox from '../../checkbox';
import FavoriteCell from '../table/favorite-cell';

interface Props {
    key: string;
    isSelected: boolean;
    league: string;
    onSelect: (league: string) => void;
}

interface State {
    isSelected: boolean;
}

const LeagueRow: React.FunctionComponent<Props> = (props) => {
    const { league, isSelected } = props;
    return (

        <div className="league-row" key={league}>
            <Checkbox id={league} checked={isSelected} value={league} onChange={() => props.onSelect(league)} />
            <span>{league}</span>
            <i className="icon-menu-favorites"></i>
        </div>
    );
};

export default LeagueRow;