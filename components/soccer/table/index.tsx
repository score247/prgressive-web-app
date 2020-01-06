import "./style.scss";
import React, { Fragment } from "react";
import { MatchSummary } from "../../../models";
import { DisplayMode } from "../../../common/constants";
import DisplayOptions from "../../display-options";
import SoccerRow from "./row/row";
import Header from "./header/header";

type Props = {
  matches: MatchSummary[];
};

type State = {
  displayMatches: MatchSummary[];
};

class SoccerTable extends React.Component<Props, State> {
  selectedIds: string[];

  constructor(props: Props) {
    super(props);

    this.selectedIds = [];

    this.state = {
      displayMatches: this.props.matches
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    this.setState({ displayMatches: nextProps.matches });
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

  changeDisplayMode = (mode: DisplayMode) => {
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

  render() {
    return (
      <Fragment>
        <div className="search-filter">
          <DisplayOptions onClick={this.changeDisplayMode} />
        </div>
        <div className="table">
          <table>
            <Header />
            <tbody>{this.state.displayMatches.map(this.renderRow)}</tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default SoccerTable;
