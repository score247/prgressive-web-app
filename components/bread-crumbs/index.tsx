import "./style.scss";
import React, { PureComponent } from "react";
import { State, Props } from "./type";
import { format, isSameDay } from "date-fns";
import { ResourceType } from "../../common/constants"; 
import { withTranslation } from "../../common/helpers/Localizer";

class Breadcrumbs extends PureComponent<Props , State> {
  intervalId?: number;
  intervalNumber = 1000;

  constructor(props: Props) {
    super(props);

    this.state={
      currentDate: new Date()
    };
  }

  componentDidMount(){
    this.intervalId =  window.setInterval(() => this.setState({currentDate: new Date()}), this.intervalNumber);
  }

  componentWillUnmount(){
    window.clearInterval(this.intervalId);
  }

  render() {
    const { selectedDate, onlyLiveMatch, t, breadcrumbs } = this.props;
    return (
      <div className="site-info">
        <div className="breadcrumbs">
          <span className="selected-sport">{breadcrumbs[0]} / </span>
          {breadcrumbs[1] && <span className="selected-sub">{breadcrumbs[1]} / </span>}
          <span className="selected-date">
            {onlyLiveMatch
              ? t("livematch")
              : isSameDay(selectedDate, this.state.currentDate)
              ? t("today").toUpperCase()
              : format(selectedDate, "dd MMM yyyy")}
          </span>
        </div>
        <div className="GMT-time">{format(this.state.currentDate, "H:mm OOO")}</div>
      </div>
    );
  }
}

export default withTranslation(ResourceType.COMMON)(Breadcrumbs);
