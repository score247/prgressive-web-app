import React from "react";
import SoccerRow from "./row/row";
import Header from "./header/header";
import { MatchSummary } from "../../../models/match-summary";

type Props = {
  matches: MatchSummary[];
  handleSelectRow: (id: string) => void;
};

class SoccerTable extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  handleSelectRow = (id: string) => {
    this.props.handleSelectRow(id);
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
