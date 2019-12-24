import "./style.scss";
import React, { PureComponent } from "react";
import { State, Props } from "./type";
import { format, isSameDay } from "date-fns";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../common/helpers/Localizer";

class Breadcrumbs extends PureComponent<Props & WithTranslation, State> {
  intervalId?: number;
  intervalNumber = 1000;

  constructor(props: Props & WithTranslation) {
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

export default withTranslation("common")(Breadcrumbs);
