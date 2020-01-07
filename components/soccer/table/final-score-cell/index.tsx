import React from "react";
import { DeviceContext } from "../../../../contexts/device-context";
import { Props } from "./type";

export default function FinalScoreCell(props: Props) {
  const { firstHalfPeriod, homeScore, awayScore } = props;
  return (
    <td className="text-score">
      {homeScore} - {awayScore}
      <DeviceContext.Consumer>
        {({ isMobile }) => (
          <>
            {isMobile && firstHalfPeriod && (
              <div className="text-1H">
                ({firstHalfPeriod.HomeScore} - {firstHalfPeriod.AwayScore})
              </div>
            )}
          </>
        )}
      </DeviceContext.Consumer>
    </td>
  );
}
