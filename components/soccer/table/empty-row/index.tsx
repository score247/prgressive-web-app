import React from "react";
import { WithTranslation } from "next-i18next";
import { CommonResourceKey, ResourceType } from "../../../../common/resources";
import { withTranslation } from "../../../../common/helpers/Localizer";
import { useDeviceContext } from "../../../../contexts/device-context";

const EmptyRow: React.FC<WithTranslation> = ({ t }) => {
    const mobileColSpan = 6, desktopColSpan = 9;
    const { isMobile } = useDeviceContext();
    const colSpan = isMobile ? mobileColSpan : desktopColSpan;
    return <tr><td colSpan={colSpan}>{t(CommonResourceKey.NO_MATCHES_FOUND)}</td></tr>;
};

export default withTranslation(ResourceType.COMMON)(EmptyRow);