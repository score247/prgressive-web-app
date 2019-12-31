import "./style.scss";
import React, { Component } from "react";
import DatePicker from "../date-picker";
import { format, addDays, isSameDay, addYears } from "date-fns";
import { withTranslation } from "../../common/helpers/Localizer";
import { State, Props } from "./type";
import { ResourceType, ResourceKey } from "../../common/constants";
import CustomDateInput from "./custom-date-input";

class DateBar extends Component<Props, State> {
  today: Date;
  minDate: Date;
  maxDate: Date;
  afterTomorrow = 2;
  beforeYesterday = -2;

  constructor(props: Props) {
    super(props);

    this.today = new Date();
    this.minDate = addYears(this.today, -1);
    this.maxDate = addYears(this.today, 1);

    this.state = {
      isLive: false,
      selectedDate: new Date(),
      dateList: [
        addDays(this.today, this.beforeYesterday),
        addDays(this.today, -1),
        this.today,
        addDays(this.today, 1),
        addDays(this.today, this.afterTomorrow)
      ]
    };
  }

  handleChange = (date: Date) => {
    this.setState({ isLive: false, selectedDate: date });
    this.props.onDateChange(date);
  };

  handleLiveMatchChange = () => {
    this.setState({ isLive: true });
    this.props.onLiveMatchChange();
  };

  renderDate = (date: Date) => {
    const className =
      !this.state.isLive && isSameDay(date, this.state.selectedDate)
        ? "date-item active"
        : "date-item";

    return (
      <div
        key={date.getDay()}
        className={className}
        onClick={() => this.handleChange(date)}
      >
        <div className="days">
          {isSameDay(date, this.today)
            ? this.props.t(ResourceKey.TODAY)
            : format(date, "iii")}
        </div>
        <div>{format(date, "dd MMM")}</div>
      </div>
    );
  };

  getDatePickerClassName = () => {
    if (this.state.dateList.some(d => isSameDay(d, this.state.selectedDate))) {
      return "";
    }

    return "active";
  };

  render() {
    return (
      <div className="nav-date">
        <button
          type="button"
          className="btn live-match hide-mobile"
          onClick={this.handleLiveMatchChange}
        >
          <span className="badge-label">2 </span>
          <span>{this.props.t(ResourceKey.LIVE_MATCH)}</span>
        </button>
        <div className="date-bar">
          <span
            className={`date-item live-score ${this.state.isLive && "active"}`}
            onClick={this.handleLiveMatchChange}
          >
            <i className="icon-live" />
            <span className="has-live" />
          </span>
          {this.state.dateList.map(this.renderDate)}
          <DatePicker
            selected={this.state.selectedDate}
            onChange={this.handleChange}
            customInput={<CustomDateInput />}
            dateFormat="dd MMM yyyy"
            minDate={this.minDate}
            maxDate={this.maxDate}
            locale={this.props.i18n.language}
            showPopperArrow={false}
            className={this.getDatePickerClassName()}
            popperPlacement="end-right"
          />
        </div>
      </div>
    );
  }
}

export default withTranslation(ResourceType.COMMON)(DateBar);
