import "./style.scss";
import React, { PureComponent } from "react";
import { State, Props } from "./type";
import { format } from "date-fns";
import { DateTimeFormat } from "../../../common/constants";

class Breadcrumbs extends PureComponent<Props, State> {
  intervalId?: number;
  intervalNumber = 2000;

  constructor(props: Props) {
    super(props);

    this.state = {
      currentDate: new Date()
    };
  }

  componentDidMount() {
    this.intervalId = window.setInterval(() => this.setState({ currentDate: new Date() }), this.intervalNumber);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  renderBreadcrumbItem = (item: string, index: number) => {
    return <span key={item} className="selected-sport">{item}{index < this.props.breadcrumbs.length - 1 && " / "}</span>;
  }

  render() {
    const { breadcrumbs } = this.props;
    return (
      <div className="site-info">
        <div className="breadcrumbs">{breadcrumbs.map(this.renderBreadcrumbItem)}</div>
        <div className="GMT-time">{format(this.state.currentDate, DateTimeFormat.TIME_AND_ZONE)}</div>
      </div>
    );
  }
}

export default Breadcrumbs;
