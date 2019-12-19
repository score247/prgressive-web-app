

import React, { Component } from "react";
import DatePicker from '../DatePicker';
import { format, addDays, isSameDay } from "date-fns";
import { withTranslation } from "../../common/helpers/Localizer";
import { WithTranslation } from "next-i18next";
import State from "./type";

const CustomInput = (props: any) => {
  return <button onClick={props.onClick}>{props.value}</button>;
};

class DateBar extends Component<WithTranslation, State> {
  today: Date;

  constructor(props: any) {
    super(props);

    this.today = new Date();

    this.state = {
      selectedDate: this.today,
      dateList: [
        addDays(this.today, -2),
        addDays(this.today, -1),
        this.today,
        addDays(this.today, 1),
        addDays(this.today, 2)
      ]
    };
  }

  handleChange = (date: Date) => this.setState({ selectedDate: date });

  renderDate = (date: Date) => {
    if (isSameDay(date, this.today)) {
      return <span className="today">{this.props.t("today")}</span>;
    }

    return <span className={isSameDay(this.state.selectedDate, date) ? "selected" : ""}>{format(date, "dd MMM")}</span>;
  };

  render() {
    return (
      <>
        <div>{format(this.state.selectedDate, "dd MMM yyyy")}</div>
        <div>{this.state.dateList.map(this.renderDate)}</div>
        <DatePicker
          selected={this.state.selectedDate}
          onChange={this.handleChange}
          customInput={<CustomInput />}
          dateFormat="dd MMM yyyy"
        />
      </>
    );
  }
}

export default withTranslation()(DateBar);
