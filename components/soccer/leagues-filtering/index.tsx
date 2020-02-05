import React from "react";
import LeagueRow from '../league-row';

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

    render() {

        return (
            <div>
                {this.props.leagues.map(league => <LeagueRow isSelected={this.state.selectedLeagueIds.indexOf(league) >= 0} league={league} onSelect={this.handleSelectLeague} />)}
            </div >
        );
    }

};

export default LeaguesFilteringTable;