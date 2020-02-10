import "./style.scss";
import React from "react";
import { SearchBarProps } from "./type";
import SearchBox from "./search-box";

const SearchBar: React.FC<SearchBarProps> = props => {
  return (
    <div className="search-section">
      <SearchBox {...props} />
    </div>
  );
};

export default SearchBar;
