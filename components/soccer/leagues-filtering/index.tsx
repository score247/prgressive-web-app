import React, { Fragment } from "react";
import LeagueRow from '../league-row';
import Checkbox from '../../checkbox';
import { cloneDeep } from "lodash";

interface League {
    id: string;
    name: string;
}

interface Props {
    leagues: string[];
    selectedLeagues: string[];
    onSelectLeague: (selectedLeagues: string[]) => void;
    onSubmitFilterLeagues: () => void;
}

const LeaguesFilteringTable: React.FC<Props> = (props) => {

    const handleSelectLeague = (id: string) => {
        const index = props.selectedLeagues.indexOf(id);
        let result: string[] = [];

        if (index >= 0) {
            result = [
                ...props.selectedLeagues.slice(0, index),
                ...props.selectedLeagues.slice(index + 1)
            ];
        } else {
            result = cloneDeep(props.selectedLeagues);
            result.push(id);
        }

        props.onSelectLeague(result);
    };

    const handleSelectAll = () => {
        let selectedLeagues: string[];

        if (props.selectedLeagues.length === props.leagues.length) {
            selectedLeagues = [];

        } else {
            selectedLeagues = props.leagues;
        }

        props.onSelectLeague(selectedLeagues);
    };

    const onClickSubmitFilter = () => {
        props.onSubmitFilterLeagues();
    };

    const onClickCancelFilter = () => {

    };

    return (
        <Fragment>
            <div>
                <span>Check all</span>
                <Checkbox id="all" checked={props.selectedLeagues.length === props.leagues.length} value="all" onChange={handleSelectAll} />
            </div>
            <div>
                {props.leagues.map(league => <LeagueRow
                    key={league}
                    isSelected={props.selectedLeagues.indexOf(league) >= 0}
                    league={league}
                    onSelect={handleSelectLeague} />)}
            </div >
            <div>
                <button onClick={props.onSubmitFilterLeagues}>OK</button>
                <button onClick={onClickCancelFilter}>Cancel</button>
            </div>
        </Fragment>

    );

};

export default LeaguesFilteringTable;