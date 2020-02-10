import React, { Fragment } from "react";
import LeagueRow from '../league-row';
import Checkbox from '../../checkbox';
import { cloneDeep } from "lodash";
import SearchBar from '../../search-bar';
import { isThisQuarter } from 'date-fns';

interface League {
    id: string;
    name: string;
}

type State = {
    selectedLeagues: string[];
    filterText: string;
};

interface Props {
    leagues: string[];
    selectedLeagues: string[];
    onSubmitFilterLeagues: (selectedLeagues: string[]) => void;
    onCancel: () => void;
    leaguesFilterText: string;
    onLeaguesFilterTextChange: (text: string) => void;
    onResetLeaguesFilterText: () => void;
}

class LeaguesFilteringTable extends React.Component<Props, State> {
    displayLeagues: string[] = [];

    constructor(props: Props) {
        super(props);

        this.displayLeagues = [];
        this.state = {
            selectedLeagues: props.selectedLeagues,
            filterText: ""
        };
    }

    handleSelectLeague = (id: string) => {
        const { selectedLeagues } = this.state;

        const index = selectedLeagues.indexOf(id);
        let result: string[] = [];

        if (index >= 0) {
            result = [
                ...selectedLeagues.slice(0, index),
                ...selectedLeagues.slice(index + 1)
            ];
        } else {
            result = cloneDeep(selectedLeagues);
            result.push(id);
        }

        this.setState({
            selectedLeagues: result
        });
    };

    handleSelectAll = () => {
        let selectedLeagues: string[];

        if (this.state.selectedLeagues.length === this.displayLeagues.length) {
            selectedLeagues = [];

        } else {
            selectedLeagues = this.displayLeagues;
        }

        this.setState({
            selectedLeagues: selectedLeagues
        });
    };

    clearAllSelectedLeagues = () => {
        this.setState({
            selectedLeagues: []
        });
    }

    handleFilterLeaguesChange = (text: string) => {
        if (this.state.selectedLeagues.length !== 0 && this.state.selectedLeagues.length === this.props.leagues.length) {
            this.clearAllSelectedLeagues();
        }
        this.props.onLeaguesFilterTextChange(text);
    };

    handleSubmitFilterLeagues = () => {
        this.props.onSubmitFilterLeagues(this.state.selectedLeagues);
    }

    render() {
        this.displayLeagues = this.props.leaguesFilterText !== "" ?
            this.props.leagues.filter(league => league.toLowerCase().includes(this.props.leaguesFilterText.toLowerCase())) :
            this.props.leagues;
        return (
            <Fragment>
                <div>
                    <span>Check all</span>
                    <Checkbox id="all"
                        checked={this.state.selectedLeagues.length > 0 && this.state.selectedLeagues.length === this.displayLeagues.length}
                        value="all"
                        onChange={this.handleSelectAll} />
                    <SearchBar filterText={this.props.leaguesFilterText} onFilterTextChange={this.handleFilterLeaguesChange} onReset={this.props.onResetLeaguesFilterText} />
                </div>
                <div>
                    {this.displayLeagues.map(league => <LeagueRow
                        key={league}
                        isSelected={this.state.selectedLeagues.indexOf(league) >= 0}
                        league={league}
                        onSelect={this.handleSelectLeague} />)}
                </div >
                <div>
                    <button onClick={this.handleSubmitFilterLeagues}>OK</button>
                    <button onClick={this.props.onCancel}>Cancel</button>
                </div>
            </Fragment>

        );
    }
}

export default LeaguesFilteringTable;