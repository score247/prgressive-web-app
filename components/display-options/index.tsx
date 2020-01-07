import "./style.scss";
import React from "react";
import { DisplayMode } from "../../common/constants";
type Props = {
  onDisplayModeChange: (mode: DisplayMode) => void;
};

const DisplayOptions: React.FC<Props> = props => {
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
