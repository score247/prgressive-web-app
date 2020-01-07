import "./style.scss";
import React, { Fragment } from "react";
import { MatchSummary } from "../../../models";
import { DisplayMode } from "../../../common/constants";
import DisplayOptions from "../../display-options";
import SoccerRow from "./row/row";
import Header from "./header/header";
import SearchBar from "../../search-bar";
import { DeviceContext } from "../../../contexts/device-context";

type Props = {
  matches: MatchSummary[];
};

type State = {
  displayMatches: MatchSummary[];
  filterText: string;
};

class SoccerTable extends React.Component<Props, State> {
  selectedIds: string[];

  constructor(props: Props) {
    super(props);

    this.selectedIds = [];

    this.state = {
      displayMatches: [],
      filterText: ""
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    this.setState({ displayMatches: nextProps.matches, filterText: "" });
  }

  handleSelectRow = (id: string) => {
    const index = this.selectedIds.indexOf(id);

    if (index >= 0) {
      this.selectedIds = [
        ...this.selectedIds.slice(0, index),
        ...this.selectedIds.slice(index + 1)
      ];
    } else {
      this.selectedIds.push(id);
    }
  };

  renderRow = (match: MatchSummary, index: number) => {
    return (
      <SoccerRow
        key={match.Id}
        match={match}
        isSelected={false}
        onSelect={this.handleSelectRow}
      />
    );
  };

  handleDisplayModeChange = (mode: DisplayMode) => {
    this.setState({ displayMatches: this.filterMatches(mode) });

    this.selectedIds = [];
  };

  filterMatches = (mode: DisplayMode) => {
    if (mode === DisplayMode.ShowAll) {
      return this.props.matches;
    } else {
      const { displayMatches } = this.state;

      if (this.selectedIds.length <= 0) {
        return displayMatches;
      }

      if (mode === DisplayMode.ShowOnly) {
        return displayMatches.filter(
          match => this.selectedIds.indexOf(match.Id) >= 0
        );
      } else {
        return displayMatches.filter(
          match => this.selectedIds.indexOf(match.Id) < 0
        );
      }
    }
  };

  handleFilterTextChange = (filterText: string) => {
    this.setState({ filterText: filterText });
  };

  render() {
    const { displayMatches, filterText } = this.state;

    const matches = displayMatches.filter(
      match =>
        match.HomeTeamName.toLowerCase().search(filterText.toLowerCase()) !==
          -1 ||
        match.AwayTeamName.toLowerCase().search(filterText.toLowerCase()) !== -1
    );
      debugger;
    return (
      <>
        <DeviceContext.Consumer>
          {({ isMobile }) => {
            if (!isMobile) {
              return (
                <div className="search-filter">
                  <DisplayOptions
                    onDisplayModeChange={this.handleDisplayModeChange}
                  />
                  <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                  />
                </div>
              );
            }
          }}
        </DeviceContext.Consumer>
        <div className="table">
          <table>
            <Header />
            <tbody>{matches.map(this.renderRow)}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default SoccerTable;
