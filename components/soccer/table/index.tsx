import React, { Fragment } from "react";
import { MatchSummary } from "../../../models";
import { DisplayMode } from "../../../common/constants";
import DisplayOptions from "../../display-options";
import { DisplayContext } from "../../../contexts/display-context";
import SoccerRow from "./row/row";

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

  renderHeading = () => {
    return (
      <thead>
        <tr>
          <th></th>
          <th>Time</th>
          <th>Home</th>
          <th>Score</th>
          <th>Away</th>
        </tr>
      </thead>
    );
  };

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
      <SoccerRow key={match.Id} match={match} onSelect={this.handleSelectRow} />
    );
  };

  changeDisplayMode = (mode: DisplayMode) => {
    if (mode === DisplayMode.ShowAll) {
      this.selectedIds = [];
    }
    this.setState({
      displayMode: mode
    });
  };

  render() {
    const { matches } = this.props;
    const { displayMode } = this.state;
    const selectedIds = this.selectedIds;

    let filteredMathces = matches;

    if (displayMode === DisplayMode.Hide) {
      filteredMathces = matches.filter(
        match => selectedIds.indexOf(match.Id) < 0
      );
    }

    if (displayMode === DisplayMode.ShowOnly) {
      filteredMathces = matches.filter(
        match => selectedIds.indexOf(match.Id) >= 0
      );
    }

    return (
      <Fragment>
        <DisplayOptions onClick={this.changeDisplayMode} />
        <table>
          {this.renderHeading()}
          <tbody>{filteredMathces.map(this.renderRow)}</tbody>
        </table>
      </Fragment>
    );
  }
}

export default SoccerTable;
