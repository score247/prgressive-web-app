import React from "react";
import { Link, withTranslation } from "../../../common/helpers/Localizer";
import { WithTranslation } from "next-i18next";

const linkStyle = {
  marginRight: 15
};

const Header: React.FunctionComponent<WithTranslation> = props => (
  <div>
    <Link href="/">
      <a style={linkStyle}>{props.t('home', {ns: 'header'})}</a>
    </Link>
    <Link href="/soccer">
      <a style={linkStyle}>{props.t('soccer')}</a>
    </Link>
    <Link href="/basketball">
      <a style={linkStyle}>{props.t('basketball')}</a>
    </Link>
    <Link href="/esports">
      <a style={linkStyle}>{props.t('esports')}</a>
    </Link>
    <button style={linkStyle} onClick={() => props.i18n.changeLanguage(props.i18n.language === 'en' ? 'vi' : 'en')}>Change Language</button>
  </div>
);

export default withTranslation(['common','header'])(Header);
