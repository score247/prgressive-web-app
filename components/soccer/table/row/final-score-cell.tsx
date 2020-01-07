import React from "react";
import { MatchPeriod } from "../../../../models";
import { DeviceContext } from "../../../../contexts/device-context";

type Props = {
  homeScore: number;
  awayScore: number;
  firstHalfPeriod?: MatchPeriod;
};

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
