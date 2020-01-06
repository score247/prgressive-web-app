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
  displayMode: DisplayMode;
};

class SoccerTable extends React.Component<Props, State> {
  selectedIds: string[];

  constructor(props: Props) {
    super(props);

    this.selectedIds = [];

    this.state = {
      displayMode: DisplayMode.ShowAll
    };
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
    if (mode === DisplayMode.ShowAll || this.selectedIds.length > 0) {
      this.setState({
        displayMode: mode
      });
    }
  };

  render() {
    const { matches } = this.props;
    const { displayMode } = this.state;

    let filteredMathces = matches;

    if (displayMode === DisplayMode.Hide) {
      filteredMathces = matches.filter(
        match => this.selectedIds.indexOf(match.Id) < 0
      );
    }

    if (displayMode === DisplayMode.ShowOnly) {
      filteredMathces = matches.filter(
        match => this.selectedIds.indexOf(match.Id) >= 0
      );
    }

    this.selectedIds = [];

    return (
      <Fragment>
        <DisplayOptions onClick={this.changeDisplayMode} />
        <div className="table">
          <table>
            <Header />
            <tbody>{filteredMathces.map(this.renderRow)}</tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default SoccerTable;
