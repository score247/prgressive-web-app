import React, { Fragment } from "react";
import LeagueRow from '../league-row';
import Checkbox from '../../checkbox';

interface League {
    id: string;
    name: string;
}

interface Props {
    leagues: string[];
}

interface State {
    selectedLeagueIds: string[];
}

class LeaguesFilteringTable extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            selectedLeagueIds: props.leagues
        };
    }

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.leagues !== this.props.leagues) {
            this.setState({ selectedLeagueIds: nextProps.leagues });
        }
    }

    handleSelectLeague = (id: string) => {
        let { selectedLeagueIds } = this.state;
        const index = selectedLeagueIds.indexOf(id);

        if (index >= 0) {
            selectedLeagueIds = [
                ...selectedLeagueIds.slice(0, index),
                ...selectedLeagueIds.slice(index + 1)
            ];
        } else {
            selectedLeagueIds.push(id);
        }

        this.setState({
            selectedLeagueIds
        });
    }

    handleSelectAll = () => {
        let selectedLeagueIds: string[];

        if (this.state.selectedLeagueIds.length === this.props.leagues.length) {
            selectedLeagueIds = [];

        } else {
            selectedLeagueIds = this.props.leagues;
        }

        this.setState({
            selectedLeagueIds
        });
    }

    onClickSubmitFilter = () => {

    }

    onClickCancelFilter = () => {

    }

    render() {
        return (
            <Fragment>
                <div>
                    <span>Check all</span>
                    <Checkbox id="all" checked={this.state.selectedLeagueIds.length === this.props.leagues.length} value="all" onChange={() => this.handleSelectAll()} />
                </div>
                <div>
                    {this.props.leagues.map(league => <LeagueRow
                        key={league}
                        isSelected={this.state.selectedLeagueIds.indexOf(league) >= 0}
                        league={league}
                        onSelect={this.handleSelectLeague} />)}
                </div >
                <div>
                    <button onClick={() => this.onClickSubmitFilter()}>OK</button>
                    <button onClick={() => this.onClickCancelFilter()}>Cancel</button>
                </div>
            </Fragment>

        );
    }

};

export default LeaguesFilteringTable;