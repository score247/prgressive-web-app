import React from "react";
import DisplayOptions from "../../display-options";
import { DisplayMode } from "../../../common/constants";
import SoccerSortOption from "../sort-option";
import SearchBar from "../../search-bar";
import { DeviceContextConsumer } from "../../../contexts/device-context";
import "./style.scss";
import Modal from 'react-modal';
import LeaguesFilteringTable from '../leagues-filtering';
import MobileFilterBar from "./mobile-filter-bar";

type State = {
    isLeaguesFilteringPopupOpen: boolean;
};

type Props = {
    onDisplayModeChange: (mode: DisplayMode) => void;
    sortByValue: number;
    onSortChange: (sortValue: number) => void;
    filterText: string;
    onResetFilterText: () => void;
    onFilterTextChange: (filterText: string) => void;
    leagues: string[];
    selectedLeagues: string[];
    onSubmitFilterLeagues: (selectedLeagues: string[]) => void;
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

    handleSubmitFilterLeagues = (selectedLeagues: string[]) => {
        this.props.onSubmitFilterLeagues(selectedLeagues);
        this.setState({
            isLeaguesFilteringPopupOpen: !this.state.isLeaguesFilteringPopupOpen
        });
    }

    desktopFilterBar = () => {
        return (
            <div className="search-filter">
                <DisplayOptions onDisplayModeChange={this.props.onDisplayModeChange} />
                <div className="combo-search">
                    <div className="filter-event" onClick={this.togglePopup}>Filter by League</div>
                    <SoccerSortOption sortByValue={this.props.sortByValue} onSortChange={this.props.onSortChange} />
                    <Modal
                        isOpen={this.state.isLeaguesFilteringPopupOpen}
                        ariaHideApp={false}
                    >
                        <LeaguesFilteringTable
                            leagues={this.props.leagues}
                            selectedLeagues={this.props.selectedLeagues}
                            onSubmitFilterLeagues={this.handleSubmitFilterLeagues}
                            onCancel={this.togglePopup} />
                    </Modal>
                    <SearchBar filterText={this.props.filterText} onFilterTextChange={this.props.onFilterTextChange} onReset={this.props.onResetFilterText} />
                </div>
            </div>
        );
    }

    render() {
        const filterBar = ({ isMobile }: { isMobile: boolean }) => (
            isMobile
                ? <MobileFilterBar filterText={this.props.filterText} onFilterTextChange={this.props.onFilterTextChange} onReset={this.props.onResetFilterText} />
                : this.desktopFilterBar()
        );

        return <DeviceContextConsumer>{filterBar}</DeviceContextConsumer>;
    }
}

export default SoccerFilterBar;