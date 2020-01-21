import React from "react";
import { DeviceContext } from "../../../../contexts/device-context";
import { FirstHalfScoreCellProps } from "./type";

export default function FirstHalfScoreCell(props: FirstHalfScoreCellProps) {
  const { firstHalfPeriod, rowSpan } = props;
  const { isMobile } = React.useContext(DeviceContext);

  if (!isMobile) {
    const displayScore = firstHalfPeriod ? `${firstHalfPeriod.HomeScore} - ${firstHalfPeriod.AwayScore}` : "-";
    return <td rowSpan={rowSpan} className="text-1H">{displayScore}</td>;
  }

  return null;
}
