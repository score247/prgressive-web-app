import React from "react";
import { SearchBarProps } from "./type";
import Select, { ValueType } from "react-select";
import { filter } from "lodash";
import LeaguesFilteringTable from '../soccer/leagues-filtering';

interface SortOption {
  value: number,
  label: string
}

const sortOptions = [
  {
    value: 1,
    label: "Kick off time"
  },
  {
    value: 2,
    label: "League"
  }
];

const SearchBar: React.FC<SearchBarProps> = props => {
  const handleFilterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onFilterTextChange(event.target.value);
  };

  const onSortChange = (selectedOption: ValueType<SortOption>) => {
    const option = selectedOption as SortOption;
    props.onSortChange(option.value);
  };

  return (
    <div className="combo-search">
      <div className="filter-event">Filter by League</div>
      <Select
        className="sort-dropdown"
        classNamePrefix="select"
        options={sortOptions}
        isSearchable={false}
        value={filter(sortOptions, { value: props.sortByValue })}
        onChange={onSortChange}
        placeholder="Sort by"
      />
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
      <LeaguesFilteringTable leagues={props.leagues} />
    </div>
  );
};

export default SearchBar;
