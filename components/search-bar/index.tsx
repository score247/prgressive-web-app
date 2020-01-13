import React from "react";
import { SearchBarProps } from "./type";

const SearchBar: React.FC<SearchBarProps> = props => {
  const handleFilterTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.onFilterTextChange(event.target.value);
  };

  return (
    <div className="combo-search">
      <div className="filter-event">Filter by League/Event</div>
      <div className="search-section">
        <div className="search-box">
          <span className="icon-search"></span>
          <input
            type="text"
            placeholder="Search"
            value={props.filterText}
            onChange={handleFilterTextChange}
            className="txt-search"
          />
        </div>
        <ul className="search-history">
          <li className="history-item">Manchester United</li>
          <li className="history-item">Manchester City</li>
          <li className="history-item">Manchester City</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
