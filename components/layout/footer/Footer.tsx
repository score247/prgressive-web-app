import * as React from "react";
import "./Footer.scss";
import { withTranslation } from "../../../common/helpers/Localizer";
import { WithTranslation } from "next-i18next";
import { ResourceType, CommonResourceKey } from "../../../common/resources";

const Footer: React.FunctionComponent<WithTranslation> = ({ t }) => {
  return (
    <footer>
      <div className="container">
        <p>{t(CommonResourceKey.COPYRIGHT)}</p>
      </div>
    </footer>
  );
};

export default withTranslation(ResourceType.COMMON)(Footer);
