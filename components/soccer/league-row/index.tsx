import React from "react";
import Checkbox from '../../checkbox';
import { League } from '../filter-table/type';

type Props = {
    isSelected: boolean;
    league: League;
    onSelect: (league: string) => void;
};

const LeagueRow: React.FunctionComponent<Props> = (props) => {
    const { league, isSelected } = props;
    return (
        <div className="league-row">
            <Checkbox id={league.id} checked={isSelected} value={league.id} onChange={() => props.onSelect(league.id)} />
            <span onClick={() => props.onSelect(league.id)}>{league.name}</span>
            <i className="icon-menu-favorites"></i>
        </div>
    );
};

export default LeagueRow;