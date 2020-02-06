import React from "react";
import { Props } from "./type";
import { buildMatchStatus } from "../../../../../common/helpers/match-status-helper";

const Status: React.FC<Props> = props => {
  const { match } = props;

  return <div>{buildMatchStatus(match)}</div>;
};

export default Status;
