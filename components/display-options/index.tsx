import "./style.scss";
import React from "react";
import { DisplayMode } from "../../common/constants";
type Props = {
  onClick: (mode: DisplayMode) => void;
};

const DisplayOptions: React.FunctionComponent<Props> = props => {
  return (
    <div className="show-hide">
      <span onClick={() => props.onClick(DisplayMode.ShowAll)}>Show All</span>
      <span onClick={() => props.onClick(DisplayMode.Hide)}>Hide</span>
      <span onClick={() => props.onClick(DisplayMode.ShowOnly)}>Show Only</span>
    </div>
  );
};

export default DisplayOptions;
