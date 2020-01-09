import React from "react";
import SoccerRow from "./row/row";
import Header from "./header/header";
import TitleRow from "./title-row/title-row";
import { MatchSummary } from "../../../models/match-summary";
import Ad from "../../Ad";
import { MatchStatusType } from "../../../common/enums/match-status-type";
import { format, isSameDay } from "date-fns";
import { DateTimeFormat } from "../../../common/constants";

type Props = {
  matches: MatchSummary[];
  selectedDate: Date;
};

class SoccerTable extends React.Component<Props> {
  private readonly today: Date;
  private readonly cancelStatus = [
    MatchStatusType.CANCELLED.value,
    MatchStatusType.POSTPONED.value,
    MatchStatusType.ABANDONED.value,
    MatchStatusType.START_DELAYED.value,
    MatchStatusType.DELAYED.value,
    MatchStatusType.INTERRUPTED.value
  ];

  private readonly endStatus = [
    MatchStatusType.ENDED.value,
    MatchStatusType.CLOSED.value,
    MatchStatusType.FULLTIME.value,
    MatchStatusType.ENDED.value,
    MatchStatusType.ENDED_EXTRA_TIME.value,
    MatchStatusType.ENDED_AFTER_PENALTIES.value
  ];
  private selectedIds: string[];

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
    const renderAds = (index + 1) % 5 === 0;

    return (
      <>
        <SoccerRow
          key={match.Id}
          match={match}
          isSelected={this.selectedIds.indexOf(match.Id) >= 0}
          onSelect={this.handleSelectRow}
        />
        {renderAds && (
          <tr>
            <td className="ads-text" colSpan={9}>
              <Ad />
            </td>
          </tr>
        )}
      </>
    );
  };

  handleFilterTextChange = (filterText: string) => {
    this.setState({ filterText: filterText });
  };

  isCancelMatch(match: MatchSummary) {
    return this.cancelStatus.includes(match.MatchStatus?.Value);
  }

  isEndMatch(match: MatchSummary) {
    return this.endStatus.includes(match.MatchStatus?.Value);
  }

  classifyMatchRowsByStatus(matches: MatchSummary[]) {
    const cancelMatchRows: JSX.Element[] = [];
    const endMatchRows: JSX.Element[] = [];
    const preMatchRows: JSX.Element[] = [];

    this.props.matches.forEach((match, index: number) => {
      if (this.isCancelMatch(match)) {
        cancelMatchRows.push(this.renderRow(match, index));
      } else if (this.isEndMatch(match)) {
        endMatchRows.push(this.renderRow(match, index));
      } else {
        preMatchRows.push(this.renderRow(match, index));
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

    return (
      <>
        {classifiedRows.preMatchRows}
        {isSameDay(selectedDate, this.today) &&
          classifiedRows.endMatchRows.length > 0 && (
            <TitleRow
              title={`Last Results (${format(
                this.props.selectedDate,
                DateTimeFormat.LONG_DATE
              )})`}
            />
          )}
        {classifiedRows.endMatchRows}
        {classifiedRows.cancelMatchRows.length > 0 && (
          <TitleRow title="This present cancelled/postponed/abandoned/deplayed/interruped matches" />
        )}
        {classifiedRows.cancelMatchRows}
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
