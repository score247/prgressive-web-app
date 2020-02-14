import React, { Component } from "react";

export default class CustomDateInput extends Component<{
  onClick?: () => void;
}> {
  render() {
    return (
      <span onClick={this.props.onClick}>
        <i className="icon-calendar" />
      </span>
    );
  }
}
