import React from "react";
import { DisplayMode } from "../../common/constants";
type Props = {
  onClick: (mode: DisplayMode) => void;
};

const DisplayOptions: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <button onClick={() => props.onClick(DisplayMode.ShowAll)}>
        Show All
      </button>
      <button onClick={() => props.onClick(DisplayMode.Hide)}>Hide</button>
      <button onClick={() => props.onClick(DisplayMode.ShowOnly)}>
        Show Only
      </button>
    </div>
  );
};

export default DisplayOptions;
