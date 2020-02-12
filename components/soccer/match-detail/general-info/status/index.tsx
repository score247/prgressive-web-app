import React, { useState, useEffect } from "react";
import { Props } from "./type";
import { buildMatchStatus } from "../../../../../common/helpers/match-status-helper";
import { useDeviceContext } from "../../../../../contexts/device-context";
import { formatDate } from "../../../../../common/helpers/date-time-helper";
import { DateTimeFormat } from "../../../../../common/constants";

const Status: React.FC<Props> = props => {
  const { match } = props;
  const { isMobile } = useDeviceContext();
  const [status, setStatus] = useState<string>(buildMatchStatus(match));
  const intervalId = window.setInterval(
    () => setStatus(buildMatchStatus(match)),
    60000 //NOSONAR
  );

  useEffect(() => {
    return () => window.clearInterval(intervalId);
  });

  return (
    <div className="status-section">
      {isMobile && (
        <div >
          {formatDate(new Date(match.EventDate[0]), DateTimeFormat.TIME)}
        </div>
      )}
      <div className="status">{status}</div>
    </div>
  );
};

export default Status;
