import React from "react";
import MobileSearchBar from "../../search-bar/mobile";
import { SoccerSortOptions } from '../../../common/enums/soccer-sort-option';
import Modal from 'react-modal';
import LeaguesFilteringTable from '../leagues-filtering';

type State = {
    openSearch: boolean;
    openSortMenu: boolean;
    openLeaguesFiltering: boolean;
};

type Props = {
    filterText: string;
    onFilterTextChange: (filterText: string) => void;
    onReset: () => void;
    placeHolder: string;
    sortByValue: number;
    onSortChange: (sortValue: number) => void;
};

export default class MobileFilterBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            openSearch: false,
            openSortMenu: false,
            openLeaguesFiltering: false
        };
    }

    handleSearchClick = () => {
        const { openSearch } = this.state;
        this.setState({ openSearch: !openSearch });
        if (openSearch) {
            this.props.onReset();
        }
    }

    handleCancelClick = () => {
        this.setState({ openSearch: false });
        this.props.onReset();
    }

    handleSortMenuClick = () => {
        this.setState({ openSortMenu: !this.state.openSortMenu });
    }

    renderSortOption = (sortByValue: number) => {
        if (sortByValue === SoccerSortOptions.KICK_OFF_TIME) {
            return (<div onClick={() => this.props.onSortChange(SoccerSortOptions.LEAGUE)} className="action-item">Sort by Leagues</div>);
        }

        return (<span onClick={() => this.props.onSortChange(SoccerSortOptions.KICK_OFF_TIME)}>Sort by Kick off time</span>);
    };

    handleLeaguesFilteringClick = () => {
        this.setState({
            openLeaguesFiltering: !this.state.openLeaguesFiltering
        });
    };

    render() {
        return (
            <>
                <div className="search-filter">
                    <span className="icon-search" onClick={this.handleSearchClick}></span>
                    <span className="icon-more" onClick={this.handleSortMenuClick}></span>
                </div>
                {this.state.openSearch && <MobileSearchBar {...this.props} onCancel={this.handleCancelClick} />}
                {this.state.openSortMenu && (
                    <div className="mobile-sort-menu">
                        {this.renderSortOption(this.props.sortByValue)}
                        <div className="action-item" onClick={this.handleLeaguesFilteringClick}>Filter Leagues</div>
                    </div>
                )}
                <Modal
                    isOpen={this.state.openLeaguesFiltering}
                    ariaHideApp={false}
                >
                    <LeaguesFilteringTable
                        leagues={[]}
                        selectedLeagues={[]}
                        onSubmitFilterLeagues={() => { }}
                        onCancel={() => { }} />
                </Modal>
            </>
        );
    }
}