import React from "react";
import { LocalizedPage } from "../common/helpers/Localizer";
import { NextPageContext } from "next";
import { HttpStatusCode } from "../common/constants";

type Props = {
  statusCode: number;
};

const Error: LocalizedPage<Props, Props> = ({ statusCode }: Props) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
};

Error.getInitialProps = async (context: NextPageContext) => {
  const statusCode = context.res
    ? context.res.statusCode
    : context.err
    ? context.err.statusCode
    : HttpStatusCode.NOTFOUND;

  return { namespacesRequired: ["common"], statusCode: statusCode || HttpStatusCode.INTERNAL_SERVER_ERROR };
};

export default Error;
