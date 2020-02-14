import "./style.scss";
import React from "react";
import { DisplayMode } from "../../../common/constants";
import { DisplayOptionsProps } from "./type";
import { useTranslation } from "react-i18next";
import { ResourceType, CommonResourceKey } from "../../../common/resources";

const DisplayOptions: React.FC<DisplayOptionsProps> = props => {
  const { t } = useTranslation(ResourceType.COMMON);

  return (
    <div className="show-hide">
      <span className="show-all" onClick={() => props.onDisplayModeChange(DisplayMode.SHOW_ALL)}>
        {t(CommonResourceKey.SHOW_ALL)}
      </span>
      <span className="hide" onClick={() => props.onDisplayModeChange(DisplayMode.HIDE)}>
        {t(CommonResourceKey.HIDE)}
      </span>
      <span className="show-only" onClick={() => props.onDisplayModeChange(DisplayMode.SHOW_ONLY)}>
        {t(CommonResourceKey.SHOW_ONLY)}
      </span>
    </div>
  );
};

export default DisplayOptions;
