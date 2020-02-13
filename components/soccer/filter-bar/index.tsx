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
import { League } from '../filter-table/type';
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../common/helpers/Localizer";
import { ResourceType, CommonResourceKey } from "../../../common/resources";

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
    leagues: League[];
    selectedLeagues: string[];
    onSubmitFilterLeagues: (selectedLeagues: string[]) => void;
} & WithTranslation;

class SoccerFilterBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isLeaguesFilteringPopupOpen: false
        };
    }

    togglePopup = () => {
        const disableScrolling = this.state.isLeaguesFilteringPopupOpen ? "unset" : "hidden";
        document.body.style.overflow = disableScrolling;

        this.setState({
            isLeaguesFilteringPopupOpen: !this.state.isLeaguesFilteringPopupOpen
        });
    }

    handleSubmitFilterLeagues = (selectedLeagues: string[]) => {
        this.props.onSubmitFilterLeagues(selectedLeagues);
        this.togglePopup();
    }

    desktopFilterBar = () => {
        return (
            <div className="search-filter">
                <DisplayOptions onDisplayModeChange={this.props.onDisplayModeChange} />
                <div className="combo-search">
                    <div className="filter-event" onClick={this.togglePopup}>{this.props.t(CommonResourceKey.FILTER_BY_LEAGUE)}</div>
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
                    <SearchBar
                        filterText={this.props.filterText}
                        onFilterTextChange={this.props.onFilterTextChange}
                        onReset={this.props.onResetFilterText}
                        placeHolder={this.props.t(CommonResourceKey.SEARCH)} />
                </div>
            </div>
        );
    }

    render() {
        const filterBar = ({ isMobile }: { isMobile: boolean }) => (
            isMobile
                ? <MobileFilterBar
                    filterText={this.props.filterText}
                    onFilterTextChange={this.props.onFilterTextChange}
                    onReset={this.props.onResetFilterText}
                    placeHolder={this.props.t(CommonResourceKey.SEARCH)}
                    onSortChange={this.props.onSortChange}
                    sortByValue={this.props.sortByValue}
                    leagues={this.props.leagues}
                    selectedLeagues={this.props.selectedLeagues}
                    onSubmitFilterLeagues={this.handleSubmitFilterLeagues}
                    onTogglePopup={this.togglePopup}
                    isLeaguesFilteringPopupOpen={this.state.isLeaguesFilteringPopupOpen} />
                : this.desktopFilterBar()
        );

        return <DeviceContextConsumer>{filterBar}</DeviceContextConsumer>;
    }
}

export default withTranslation(ResourceType.COMMON)(SoccerFilterBar);