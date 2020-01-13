import "./style.scss";
import React from "react";
import { DisplayMode } from "../../common/constants";
import { DisplayOptionsProps } from "./type";

const DisplayOptions: React.FC<DisplayOptionsProps> = props => {
  return (
    <div className="show-hide">
      <span onClick={() => props.onDisplayModeChange(DisplayMode.ShowAll)}>
        Show All
      </span>
      <span onClick={() => props.onDisplayModeChange(DisplayMode.Hide)}>
        Hide
      </span>
      <span onClick={() => props.onDisplayModeChange(DisplayMode.ShowOnly)}>
        Show Only
      </span>
    </div>
  );
};

export default DisplayOptions;
