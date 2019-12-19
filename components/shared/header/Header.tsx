import React from "react";
import {
  Link,
  withTranslation,
  useTranslation
} from "../../../common/helpers/Localizer";
import { WithTranslation } from "next-i18next";

const linkStyle = {
  marginRight: 15
};

const Header: React.FunctionComponent<WithTranslation>= (props) => {
  const { t, i18n } = props;
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>{t("home", { ns: "header" })}</a>
      </Link>
      <Link href="/soccer">
        <a style={linkStyle}>{t("soccer")}</a>
      </Link>
      <Link href="/basketball">
        <a style={linkStyle}>{t("basketball")}</a>
      </Link>
      <Link href="/esports">
        <a style={linkStyle}>{t("esports")}</a>
      </Link>
      <button
        style={linkStyle}
        onClick={() => i18n.changeLanguage(i18n.language === "en" ? "vi" : "en")}
      >
        Change Language
      </button>
    </div>
  );
};

export default withTranslation(["common", "header"])(Header);
