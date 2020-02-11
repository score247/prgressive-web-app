import React from "react";
import Router from 'next/router';
import cookie from 'js-cookie';
import { LocalizedPage, withTranslation } from "../common/helpers/Localizer";
import { ViewMode, ResourceType, CookieName, MobileAppUrl, ResourceKey } from "../common/constants";
import Button from "../components/basic/button";
import "../assets/styles/pages/loading.scss";

const LoadingPage: LocalizedPage = props => {
    const { t } = props;

    const handleDesktopViewClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        cookie.set(CookieName.VIEW_MODE, ViewMode.DESKTOP);
        Router.push("/");
    };

    const handleMobileViewClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        cookie.set(CookieName.VIEW_MODE, ViewMode.MOBILE);
        Router.push("/");
    };

    const handleAppStoreClick = () => {
        window.open(MobileAppUrl.APP_STORE, "_blank");
    };

    return (
        <div className="loading-page">
            <div className="title">{t(ResourceKey.SITE_TITLE)}</div>
            <div className="note">{t(ResourceKey.LOADING_PAGE_NOTE)}</div>
            <div className="content">
                <Button className="btn btn-mobile" onClick={handleMobileViewClick}>{t(ResourceKey.MOBILE_WEBSITE)}</Button>
                <Button className="btn btn-primary-outline btn-desktop" onClick={handleDesktopViewClick}>{t(ResourceKey.DESKTOP_WEBSITE)}</Button>
                <div className="divide">{t(ResourceKey.OR_MOBILE_APPLICATION)}</div>
                <Button className="btn btn-download" onClick={handleAppStoreClick}>{t(ResourceKey.DOWNLOAD_FROM_APP_STORE)}</Button>
                <div className="logo"> <img src="/static/images/score247.svg" alt="Logo" /></div>
            </div>
            <div className="footer">
                <span className="icon-copy-right"></span>{t(ResourceKey.COPYRIGHT)}
            </div>
        </div>
    );
};

LoadingPage.getInitialProps = () => ({
    namespacesRequired: [ResourceType.COMMON]
});

export default withTranslation()(LoadingPage);