import "./style.scss";
import React from "react";
import { DisplayMode } from "../../common/constants";
import { DisplayOptionsProps } from "./type";

const DisplayOptions: React.FC<DisplayOptionsProps> = props => {
  return (
    <div className="show-hide">
      <span className="show-all" onClick={() => props.onDisplayModeChange(DisplayMode.SHOW_ALL)}>
        Show All
      </span>
      <span className="hide" onClick={() => props.onDisplayModeChange(DisplayMode.HIDE)}>
        Hide
      </span>
      <span className="show-only" onClick={() => props.onDisplayModeChange(DisplayMode.SHOW_ONLY)}>
        Show Only
      </span>
    </div>
  );
};

export default DisplayOptions;
