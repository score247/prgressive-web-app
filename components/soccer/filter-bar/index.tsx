import React from "react";
import DisplayOptions from "../../display-options";
import { DisplayMode } from "../../../common/constants";
import SoccerSortOption from "../sort-option";
import SearchBar from "../../search-bar";
import { DeviceContextConsumer } from "../../../contexts/device-context";
import "./style.scss";
import Modal from 'react-modal';
import LeaguesFilteringTable from '../leagues-filtering';

type State = {
    isLeaguesFilteringPopupOpen: boolean;
};

type Props = {
    onDisplayModeChange: (mode: DisplayMode) => void;
    sortByValue: number;
    onSortChange: (sortValue: number) => void;
    filterText: string;
    onFilterTextChange: (filterText: string) => void;
    leagues: string[];
    selectedLeagues: string[];
    onSelectLeague: (selectedLeagues: string[]) => void;
    onSubmitFilterLeagues: () => void;
};

class SoccerFilterBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isLeaguesFilteringPopupOpen: false
        };
    }

    togglePopup = () => {
        this.setState({
            isLeaguesFilteringPopupOpen: !this.state.isLeaguesFilteringPopupOpen
        });
    }

    handleSubmitFilterLeagues = () => {
        this.props.onSubmitFilterLeagues();
        this.setState({
            isLeaguesFilteringPopupOpen: !this.state.isLeaguesFilteringPopupOpen
        });
    }

    render() {
        const filterBar = ({ isMobile }: { isMobile: boolean }) => (
            <div className="search-filter">
                {!isMobile && <DisplayOptions onDisplayModeChange={this.props.onDisplayModeChange} />}
                <div className="combo-search">
                    {!isMobile && <div className="filter-event" onClick={this.togglePopup}>Filter by League</div>}
                    {!isMobile && <SoccerSortOption sortByValue={this.props.sortByValue} onSortChange={this.props.onSortChange} />}
                    <Modal
                        isOpen={this.state.isLeaguesFilteringPopupOpen}
                        ariaHideApp={false}
                    >
                        <LeaguesFilteringTable
                            leagues={this.props.leagues}
                            selectedLeagues={this.props.selectedLeagues}
                            onSelectLeague={this.props.onSelectLeague}
                            onSubmitFilterLeagues={this.handleSubmitFilterLeagues}
                            onCancel={this.togglePopup} />
                    </Modal>
                    <SearchBar filterText={this.props.filterText} onFilterTextChange={this.props.onFilterTextChange} />
                </div>
            </div>
        );
        return <DeviceContextConsumer>{filterBar}</DeviceContextConsumer>;
    }
}

export default SoccerFilterBar;