import React from "react";
import { DeviceContext } from "../../../../contexts/device-context";
import { Props } from "./type";

export default function FinalScoreCell(props: Props) {
  const { firstHalfPeriod, homeScore, awayScore } = props;
  const { isMobile } = React.useContext(DeviceContext);

  return (
    <td className="text-score">
      {homeScore} - {awayScore}
      {isMobile && firstHalfPeriod && (
        <div className="text-1H">
          ({firstHalfPeriod.HomeScore} - {firstHalfPeriod.AwayScore})
        </div>
      )}
    </td>
  );
}
