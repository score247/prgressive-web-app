import React from "react";

type Props = {
  filterText: string;
  onFilterTextChange: (filterText: string) => void;
};

const SearchBar: React.FC<Props> = props => {
  const handleFilterTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.onFilterTextChange(event.target.value);
  };

  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Search"
          value={props.filterText}
          onChange={handleFilterTextChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
