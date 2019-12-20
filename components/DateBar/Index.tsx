import "./style.scss";
import React, { Component } from "react";
import DatePicker from "../DatePicker";
import { format, addDays, isSameDay, addYears } from "date-fns";
import { withTranslation } from "../../common/helpers/Localizer";
import { WithTranslation } from "next-i18next";
import { State, Props } from "./type";

const CustomDateInput = (props: any) => {
  return (
    <span onClick={props.onClick}>
      <i className="icon-calendar" />
      123
    </span>
  );
};

class DateBar extends Component<Props & WithTranslation, State> {
  today: Date;
  minDate: Date;
  maxDate: Date;

  constructor(props: Props & WithTranslation) {
    super(props);

    this.today = new Date();
    this.minDate = addYears(this.today, -1);
    this.maxDate = addYears(this.today, 1);

    this.state = {
      dateList: [
        addDays(this.today, -2),
        addDays(this.today, -1),
        this.today,
        addDays(this.today, 1),
        addDays(this.today, 2)
      ]
    };
  }

  handleChange = (date: Date) => this.props.onDateChange(date);

  handleLiveMatchChange = () => {
    this.props.onDateChange(this.today);
    this.props.onLiveMatchChange(!this.props.onlyLiveMatch);
  };

  renderDate = (date: Date) => {
    if (isSameDay(date, this.today)) {
      return (
        <span
          className={`today ${
            isSameDay(date, this.props.selectedDate) ? "active" : ""
          }`}
          onClick={() => this.handleChange(date)}
        >
          Today
        </span>
      );
    }

    return (
      <span
        onClick={() => this.handleChange(date)}
        className={isSameDay(this.props.selectedDate, date) ? "active" : ""}
      >
        {format(date, "dd MMM")}
      </span>
    );
  };

  render() {
    return (
      <div className="nav-date">
        <button
          className="btn live-match hide-mobile"
          onClick={this.handleLiveMatchChange}
        >
          <span className="badge-label">2</span>
          <span>Live Match</span>
        </button>
        <div className="date-bar">
          <span className="show-mobile">Live</span>
          {this.state.dateList.map(this.renderDate)}
          <DatePicker
            selected={this.props.selectedDate}
            onChange={this.handleChange}
            customInput={<CustomDateInput />}
            dateFormat="dd MMM yyyy"
            minDate={this.minDate}
            maxDate={this.maxDate}
          />
        </div>
      </div>
    );
  }
}

export default withTranslation()(DateBar);
