import React from "react";
import { SearchBarProps } from "./type";

const SearchBox: React.FC<SearchBarProps> = props => {
    const handleFilterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onFilterTextChange(event.target.value);
    };

    return (
        <div className="search-box">
            <span className="icon-search"></span>
            <input
                type="text"
                placeholder="Search"
                value={props.filterText}
                onChange={handleFilterTextChange}
                className="txt-search"
            />
            <span className="icon-close" onClick={props.onReset}></span>
        </div>
    );
};

export default SearchBox;