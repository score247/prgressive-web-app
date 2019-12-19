import * as React from "react";
import Link from "next/link";
import { withTranslation } from "../../../../common/helpers/Localizer";
import { WithTranslation } from "next-i18next";

const linkStyle = {
  marginRight: 15
};

const Footer: React.FunctionComponent<WithTranslation> = props => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>{props.t("terms")}</a>
      </Link>
      <Link href="/soccer">
        <a style={linkStyle}>{props.t("aboutUs")}</a>
      </Link>
    </div>
  );
};

export default withTranslation("footer")(Footer);
