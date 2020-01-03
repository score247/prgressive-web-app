import React from "react";
import { DisplayMode } from "../common/constants";

export const DisplayContext = React.createContext({
  changeDisplayMode: (mode: DisplayMode) => {}
});
