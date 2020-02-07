import React from "react";
import DisplayOptions from "../../display-options";
import { DisplayMode } from "../../../common/constants";
import SoccerSortOption from "../sort-option";
import SearchBar from "../../search-bar";
import { DeviceContextConsumer } from "../../../contexts/device-context";
import "./style.scss";

type Props = {
    onDisplayModeChange: (mode: DisplayMode) => void;
    sortByValue: number;
    onSortChange: (sortValue: number) => void;
    filterText: string;
    onFilterTextChange: (filterText: string) => void;
};

const SoccerFilterBar: React.FC<Props> = props => {
    const filterBar = ({ isMobile }: { isMobile: boolean }) => (
        <div className="search-filter">
            {!isMobile && <DisplayOptions onDisplayModeChange={props.onDisplayModeChange} />}
            <div className="combo-search">
                {!isMobile && <div className="filter-event">Filter by League</div>}
                {!isMobile && <SoccerSortOption sortByValue={props.sortByValue} onSortChange={props.onSortChange} />}
                <SearchBar filterText={props.filterText} onFilterTextChange={props.onFilterTextChange} />
            </div>
        </div>
    );

    return <DeviceContextConsumer>{filterBar}</DeviceContextConsumer>;
};

export default SoccerFilterBar;