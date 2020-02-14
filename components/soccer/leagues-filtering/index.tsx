import React, { Fragment } from "react";
import LeagueRow from '../league-row';
import Checkbox from '../../basic/checkbox';
import { cloneDeep } from "lodash";
import { League } from '../filter-table/type';
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../common/helpers/Localizer";
import { ResourceType, CommonResourceKey } from "../../../common/resources";

type State = {
    selectedLeagues: string[];
    filterText: string;
};

type Props = {
    leagues: League[];
    selectedLeagues: string[];
    onSubmitFilterLeagues: (selectedLeagues: string[]) => void;
    onCancel: () => void;
} & WithTranslation;

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
        let selectedLeagues: string[] = [];

        if (this.isCheckAllSelected(this.displayLeagues)) {
            selectedLeagues = this.state.selectedLeagues.filter((elem) => this.displayLeagues.map(x => x.id).indexOf(elem) < 0);
        } else {
            selectedLeagues = this.state.selectedLeagues.concat(this.displayLeagues.map(x => x.id));
        }

        this.setState({
            selectedLeagues: selectedLeagues
        });
    };

    handleFilterLeaguesChange = (text: string) => {
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

    isCheckAllSelected = (displayLeagues: League[]) => {
        return (this.state.selectedLeagues.length > 0 &&
            this.displayLeagues.length > 0 &&
            displayLeagues.map(x => x.id).every(leagueId => this.state.selectedLeagues.indexOf(leagueId) > -1));
    }

    render() {
        const { filterText } = this.state;
        const { t, leagues } = this.props;
        this.displayLeagues = filterText !== "" ?
            leagues.filter(league =>
                league.name?.toLowerCase().includes(filterText.toLowerCase())
                || league.abbreviation?.toLowerCase().includes(filterText.toLowerCase()))
            : leagues;

        return (
            <Fragment>
                <div className="header-filter">
                    <div className="text-header">{t(CommonResourceKey.LEAGUE_FILTERING)}</div>
                    <span className="icon-close" onClick={this.props.onCancel}></span>
                </div>
                <div className="content-league">
                    <div className="league-search-section">
                        <div className="check-all">
                            <Checkbox id="all"
                                checked={this.isCheckAllSelected(this.displayLeagues)}
                                value="all"
                                onChange={this.handleSelectAll} />
                            <span onClick={this.handleSelectAll}>{t(CommonResourceKey.CHECK_ALL)}</span>
                        </div>
                        {/* <SearchBar
                            filterText={this.state.filterText}
                            onFilterTextChange={this.handleFilterLeaguesChange}
                            onReset={this.onResetLeaguesFilterText}
                            placeHolder="Find leagues" /> */}
                    </div>
                    <div className="list-league">
                        {this.displayLeagues.length === 0 ?
                            <span className="no-leagues">There are no leagues available.</span> :
                            this.displayLeagues.map(league => <LeagueRow
                                key={league.id}
                                isSelected={this.state.selectedLeagues.indexOf(league.id) >= 0}
                                league={league}
                                onSelect={this.handleSelectLeague} />)}
                    </div>
                </div >
                <div className="footer-league">
                    <button onClick={this.handleSubmitFilterLeagues} className="btn btn-primary-solid">{t(CommonResourceKey.OK)}</button>
                    <button onClick={this.props.onCancel} className="btn btn-primary-outline">{t(CommonResourceKey.CANCEL)}</button>
                </div>
            </Fragment>
        );
    }
}

export default withTranslation(ResourceType.COMMON)(LeaguesFilteringTable);