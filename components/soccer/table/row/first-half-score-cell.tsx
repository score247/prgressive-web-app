import React from "react";
import { MatchPeriod } from "../../../../models";
import { DeviceContext } from "../../../../contexts/device-context";

type Props = { firstHalfPeriod?: MatchPeriod };

export default function FirstHalfScoreCell(props: Props) {
  const { firstHalfPeriod } = props;
  return (
    <DeviceContext.Consumer>
      {({ isMobile }) => {
        if (!isMobile) {
          return (
            <td className="text-1H">
              {firstHalfPeriod &&
                `${firstHalfPeriod.HomeScore} - ${firstHalfPeriod.AwayScore}`}
            </td>
          );
        }

        return null;
      }}
    </DeviceContext.Consumer>
  );
}
