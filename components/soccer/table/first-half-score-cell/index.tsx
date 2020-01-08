import React from "react";
import { DeviceContext } from "../../../../contexts/device-context";
import { Props } from "./type";

export default function FirstHalfScoreCell(props: Props) {
  const { firstHalfPeriod } = props;
  const { isMobile } = React.useContext(DeviceContext);
  
  if(!isMobile){
    return (
      <td className="text-1H">
        {firstHalfPeriod &&
          `${firstHalfPeriod.HomeScore} - ${firstHalfPeriod.AwayScore}`}
      </td>
    );
  }
  return null;
}
