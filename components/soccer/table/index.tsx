import React, { Fragment } from "react";
import SoccerRow from "./row/row";
import Header from "./header/header";
import TitleRow from "./title-row/title-row";
import { MatchSummary } from "../../../models/match-summary";
import Ad from "../../Ad";
import {
  EndStatus,
  CancelStatus
} from "../../../common/enums/match-status-type";
import appSettings from "../../../app-settings";
import { format, isSameDay } from "date-fns";
import { DateTimeFormat } from "../../../common/constants";

type Props = {
  matches: MatchSummary[];
  selectedDate: Date;
};

class SoccerTable extends React.Component<Props> {
  private readonly today: Date;
  private selectedIds: string[];
  private renderedRow = 0;

  constructor(props: Props) {
    super(props);

    this.today = new Date();
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
    this.renderedRow++;
    const renderAds = this.renderedRow % appSettings.numberOfRowEveryAd === 0;

    return (
      <Fragment key={match.Id}>
        <SoccerRow
          match={match}
          isSelected={this.selectedIds.indexOf(match.Id) >= 0}
          onSelect={this.handleSelectRow}
        />
        {renderAds && (
          <tr>
            <td colSpan={9}>
              <Ad />
            </td>
          </tr>
        )}
      </Fragment>
    );
  };

  handleFilterTextChange = (filterText: string) => {
    this.setState({ filterText: filterText });
  };

  isCancelMatch(match: MatchSummary) {
    return CancelStatus.includes(match.MatchStatus?.Value);
  }

  isEndMatch(match: MatchSummary) {
    return EndStatus.includes(match.MatchStatus?.Value);
  }

  classifyMatchRowsByStatus(matches: MatchSummary[]) {
    const cancelMatchRows: MatchSummary[] = [];
    const endMatchRows: MatchSummary[] = [];
    const preMatchRows: MatchSummary[] = [];

    this.props.matches.forEach((match, index: number) => {
      if (this.isCancelMatch(match)) {
        cancelMatchRows.push(match);
      } else if (this.isEndMatch(match)) {
        endMatchRows.push(match);
      } else {
        preMatchRows.push(match);
      }
    });

    return {
      preMatchRows: preMatchRows,
      endMatchRows: endMatchRows,
      cancelMatchRows: cancelMatchRows
    };
  }

  renderBodyRows() {
    const { selectedDate, matches } = this.props;
    const classifiedRows = this.classifyMatchRowsByStatus(matches);
    this.renderedRow = 0;

    return (
      <>
        {classifiedRows.preMatchRows.map(this.renderRow)}
        {isSameDay(selectedDate, this.today) &&
          classifiedRows.endMatchRows.length > 0 && (
            <TitleRow
              title={`Last Results (${format(
                this.props.selectedDate,
                DateTimeFormat.LONG_DATE
              )})`}
            />
          )}
        {classifiedRows.endMatchRows.map(this.renderRow)}
        {classifiedRows.cancelMatchRows.length > 0 && (
          <TitleRow title="This present cancelled/postponed/abandoned/deplayed/interruped matches" />
        )}
        {classifiedRows.cancelMatchRows.map(this.renderRow)}
      </>
    );
  }

  render() {
    const bodyRows = this.renderBodyRows();

    return (
      <>
        <table className="table">
          <Header />
          <tbody>{bodyRows}</tbody>
        </table>
      </>
    );
  }
}

export default SoccerTable;
