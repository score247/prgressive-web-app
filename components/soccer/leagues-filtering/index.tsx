import React, { Fragment } from "react";
import LeagueRow from '../league-row';
import Checkbox from '../../checkbox';
import { cloneDeep } from "lodash";
import SearchBar from '../../search-bar';
import { League } from '../filter-table/type';

type State = {
    selectedLeagues: string[];
    filterText: string;
};

type Props = {
    leagues: League[];
    selectedLeagues: string[];
    onSubmitFilterLeagues: (selectedLeagues: string[]) => void;
    onCancel: () => void;
};

class LeaguesFilteringTable extends React.Component<Props, State> {
    displayLeagues: League[] = [];

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
            selectedLeagues = this.displayLeagues.map(league => league.id);
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
        this.setState({
            filterText: text
        });
    };

    handleSubmitFilterLeagues = () => {
        this.props.onSubmitFilterLeagues(this.state.selectedLeagues);
    }

    onResetLeaguesFilterText = () => {
        this.setState({
            filterText: ""
        });
    }

    render() {
        this.displayLeagues = this.state.filterText !== "" ?
            this.props.leagues.filter(league => league.name.toLowerCase().includes(this.state.filterText.toLowerCase())) :
            this.props.leagues;
        return (
            <Fragment>
                <div className="header-filter">
                    <div className="text-header">League filtering</div>
                    <span className="icon-close"></span>
                </div>
                <div className="list-league">
                    <div className="league-search-section">
                        <Checkbox id="all" checked={this.state.selectedLeagues.length === this.displayLeagues.length} value="all" onChange={this.handleSelectAll} />
                        <span>Check all</span>
                        <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterLeaguesChange} onReset={this.onResetLeaguesFilterText} />
                    </div>
                    {this.displayLeagues.map(league => <LeagueRow
                        key={league.id}
                        isSelected={this.state.selectedLeagues.indexOf(league.id) >= 0}
                        league={league}
                        onSelect={this.handleSelectLeague} />)}
                </div >
                <div className="btn-group">
                    <button onClick={this.handleSubmitFilterLeagues}>OK</button>
                    <button onClick={this.props.onCancel}>Cancel</button>
                </div>
            </Fragment>

        );
    }
}

export default LeaguesFilteringTable;