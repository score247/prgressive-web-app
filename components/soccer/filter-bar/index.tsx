import React from "react";
import DisplayOptions from "../../display-options";
import { DisplayMode } from "../../../common/constants";
import SoccerSortOption from "../sort-option";
import SearchBar from "../../search-bar";

type Props = {
    onDisplayModeChange: (mode: DisplayMode) => void;
    sortByValue: number;
    onSortChange: (sortValue: number) => void;
    filterText: string;
    onFilterTextChange: (filterText: string) => void;
}

const SoccerFilterBar: React.FC<Props> = props => {
    return (
        <div className="search-filter">
            <DisplayOptions onDisplayModeChange={props.onDisplayModeChange} />
            <div className="combo-search">
                <div className="filter-event">Filter by League</div>
                <SoccerSortOption sortByValue={props.sortByValue} onSortChange={props.onSortChange} />
                <SearchBar filterText={props.filterText} onFilterTextChange={props.onFilterTextChange} />
            </div>
        </div>
    );
};

export default SoccerFilterBar;