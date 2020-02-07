import React from "react";
import { SearchBarProps } from "./type";
import "./style.scss";
import { DeviceContextConsumer } from "../../contexts/device-context";

type State = {
  openSearch: boolean;
};

class MobileSearchBox extends React.Component<SearchBarProps, State> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      openSearch: false
    };
  }

  render() {
    return (
      <div className="search-section">
        {this.state.openSearch
          ? (<>
            <div className="search-box">
              <span className="icon-search"></span>
              <input
                type="text"
                placeholder="Search"
                value={this.props.filterText}
                onChange={(event) => { this.props.onFilterTextChange(event.target.value); }}
                className="txt-search"
              />
            </div>
            <span className="btn-cancel" onClick={() => { this.setState({ openSearch: false }); }}>Cancel</span>
          </>)
          : (<span className="icon-search" onClick={() => { this.setState({ openSearch: true }); }}></span>)
        }
      </div>
    );
  }
}

const SearchBar: React.FC<SearchBarProps> = props => {
  const handleFilterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onFilterTextChange(event.target.value);
  };

  const DesktopSearchBox = () => {
    return (
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
      </div>
    );
  };

  return (
    <DeviceContextConsumer>
      {({ isMobile }) => (!isMobile ? DesktopSearchBox : <MobileSearchBox {...props} />)}
    </DeviceContextConsumer>

  );
};

export default SearchBar;
