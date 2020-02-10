import React, { useState, useEffect } from "react";
import { Props } from "./type";
import { buildMatchStatus } from "../../../../../common/helpers/match-status-helper";

const Status: React.FC<Props> = props => {
  const { match } = props;
  const [status, setStatus] = useState<string>(buildMatchStatus(match));
  const intervalId = window.setInterval(
    () => setStatus(buildMatchStatus(match)),
    60000 //NOSONAR
  );

  useEffect(() => {
    return () => window.clearInterval(intervalId);
  });

  return <div className="status">{status}</div>;
};

export default Status;
