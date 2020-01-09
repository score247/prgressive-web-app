import React from "react";
import SoccerRow from "./row/row";
import Header from "./header/header";
import { MatchSummary } from "../../../models/match-summary";

type Props = {
  matches: MatchSummary[];
};

class SoccerTable extends React.Component<Props> {
  private selectedIds: string[];

  constructor(props: Props) {
    super(props);

    this.selectedIds = [];
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

  getSelectedIds = () => {
    return this.selectedIds;
  };

  resetSelectedIds = () => {
    this.selectedIds = [];
  };

  renderRow = (match: MatchSummary, index: number) => {
    return (
      <SoccerRow
        key={match.Id}
        match={match}
        isSelected={this.selectedIds.indexOf(match.Id) >= 0}
        onSelect={this.handleSelectRow}
      />
    );
  };

  handleFilterTextChange = (filterText: string) => {
    this.setState({ filterText: filterText });
  };

  render() {
    return (
      <>
        <table className="table">
          <Header />
          <tbody>{this.props.matches.map(this.renderRow)}</tbody>
        </table>
      </>
    );
  }
}

export default SoccerTable;
