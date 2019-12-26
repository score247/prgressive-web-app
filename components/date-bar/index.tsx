import "./style.scss";
import React, { Component } from "react";
import DatePicker from "../date-picker";
import { format, addDays, isSameDay, addYears } from "date-fns";
import { withTranslation } from "../../common/helpers/Localizer";
import { State, Props } from "./type";
import { ResourceType } from "../../common/constants";

const CustomDateInput = (props: { onClick?: () => void }) => {
  return (
    <span onClick={props.onClick}>
      <i className="icon-calendar" />
    </span>
  );
};

class DateBar extends Component<Props, State> {
  today: Date;
  minDate: Date;
  maxDate: Date;

  constructor(props: Props) {
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

  handleChange = (date: Date) => {
    this.props.onDateChange(date);
    this.props.onLiveMatchChange(false);
  };

  handleLiveMatchChange = () => {
    this.props.onDateChange(this.today);
    this.props.onLiveMatchChange(true);
  };

  renderDate = (date: Date) => {
    if (isSameDay(date, this.today)) {
      return (
        <span
          key={date.getDay()}
          className={`today ${
            isSameDay(date, this.props.selectedDate) &&
            !this.props.onlyLiveMatch
              ? "active"
              : ""
          }`}
          onClick={() => this.handleChange(date)}
        >
          {this.props.t("today")}
        </span>
      );
    }

    return (
      <span
        key={date.getDay()}
        onClick={() => this.handleChange(date)}
        className={isSameDay(this.props.selectedDate, date) ? "active" : ""}
      >
        {format(date, "dd MMM")}
      </span>
    );
  };

  getDatePickerClassName = () => {
    if (this.state.dateList.some(d => isSameDay(d, this.props.selectedDate))) {
      return "";
    }

    return "active";
  };

  render() {
    return (
      <div className="nav-date">
        <button type="button"
          className="btn live-match hide-mobile"
          onClick={this.handleLiveMatchChange}
        >
          <span className="badge-label">2 </span>
          <span>{this.props.t("livematch")}</span>
        </button>
        <div className="date-bar">
          <span
            className="show-mobile live"
            onClick={this.handleLiveMatchChange}
          >
            <i className="icon-live" />
            <span className="has-live" />
          </span>
          {this.state.dateList.map(this.renderDate)}
          <DatePicker
            selected={this.props.selectedDate}
            onChange={this.handleChange}
            customInput={<CustomDateInput />}
            dateFormat="dd MMM yyyy"
            minDate={this.minDate}
            maxDate={this.maxDate}
            locale={this.props.i18n.language}
            showPopperArrow={false}
            className={this.getDatePickerClassName()}
          />
        </div>
      </div>
    );
  }
}

export default withTranslation(ResourceType.COMMON)(DateBar);
