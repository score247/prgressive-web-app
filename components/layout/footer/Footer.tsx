import * as React from "react";
import "./Footer.scss";
import { withTranslation } from "../../../common/helpers/Localizer";
import { WithTranslation } from "next-i18next";
import { ResourceType, ResourceKey } from "../../../common/constants";

const Footer: React.FunctionComponent<WithTranslation> = ({ t }) => {
  return (
    <footer>
      <div className="container">
        <p>{t(ResourceKey.COPYRIGHT)}</p>
      </div>
    </footer>
  );
};

export default withTranslation(ResourceType.COMMON)(Footer);
