import React from "react";
import { Props } from "./type";
import { buildMatchStatus } from "../../../match-status-builder";

const Status: React.FC<Props> = props => {
  const { match } = props;

  return <div>{buildMatchStatus(match)}</div>;
};

export default Status;
