import "./style.scss";
import React from "react";
import SearchBox from "./search-box";
import MobileSearchBox from "./mobile-search-box";
import { SearchBarProps } from "./type";
import { DeviceContextConsumer } from "../../contexts/device-context";

const SearchBar: React.FC<SearchBarProps> = props => {
  const searchBox = ({ isMobile }: { isMobile: boolean }) => {
    return (isMobile ? <MobileSearchBox {...props} /> : <SearchBox {...props} />);
  };

  return (
    <div className="search-section">
      <DeviceContextConsumer>{searchBox}</DeviceContextConsumer>
    </div>
  );
};

export default SearchBar;
