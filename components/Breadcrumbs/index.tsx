import "./style.scss";
import React, { PureComponent } from "react";
import { State, Props } from "./type";
import { format, isSameDay } from "date-fns";

export default class Breadcrumbs extends PureComponent<Props, State> {
  today: Date = new Date();

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { selectedDate, onlyLiveMatch } = this.props;
    return (
      <div className="site-info">
        <div className="breadcrumbs">
          SOCCER / 
          {onlyLiveMatch
            ? "Live Match"
            : isSameDay(selectedDate, this.today)
            ? "Today"
            : format(selectedDate, "dd MMM yyyy")}
        </div>
          <div className="GMT-time">{format(this.today, "H:mm OOO")}</div>
      </div>
    );
  }
}
