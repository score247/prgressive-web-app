import * as React from "react";
import Link from "next/link";
import "./Footer.scss";
import { withTranslation } from "../../../../common/helpers/Localizer";
import { WithTranslation } from "next-i18next";
import { ResourceType } from "../../../../common/constants";

const Footer: React.FunctionComponent<WithTranslation> = ({ t }) => {
  return (
    <footer>
      <div className="container">
        {/* <Link href="/">
          <a className="link-footer">{props.t("terms")}</a>
        </Link>
        <Link href="/soccer">
        <a style={linkStyle}>{props.t("aboutUs")}</a>
        </Link> */}
        <p>© 2019 Score247, Inc. All right reserved</p>
      </div>      
    </footer>
  );
};

export default withTranslation(ResourceType.FOOTER)(Footer);
