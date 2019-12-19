import React from "react";
import { LocalizedPage } from "../common/helpers/Localizer";
import { NextPageContext } from "next";

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
    : 404;

  return { namespacesRequired: ["common"], statusCode: statusCode || 500 };
};

export default Error;
