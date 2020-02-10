import React from "react";
import Router from 'next/router';
import cookie from 'js-cookie';
import { LocalizedPage, withTranslation } from "../common/helpers/Localizer";
import { ViewMode, ResourceType, CookieName, MobileAppUrl } from "../common/constants";
import Button from "../components/basic/button";
import "../assets/styles/pages/loading.scss";

const LoadingPage: LocalizedPage = () => {
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
            <div className="title">Score247 Official Website</div>
            <div className="note">You are using a smart device. Please select one of the following browsing mode that's compatible with your device.</div>
            <div className="content">
                <Button className="btn btn-mobile" onClick={handleMobileViewClick}>Mobile website</Button>
                <Button className="btn btn-primary-outline btn-desktop" onClick={handleDesktopViewClick}>Desktop website</Button>
                <div className="divide">or mobile application</div>
                <Button className="btn btn-download" onClick={handleAppStoreClick}>Download from app store</Button>
                <div className="logo"> <img src="/static/images/score247.svg" alt="Logo" /></div>
            </div>
            <div className="footer">
                <span className="icon-copy-right"></span>2019 Score247, Inc. All right reserved
            </div>
        </div>
    );
};

LoadingPage.getInitialProps = () => ({
    namespacesRequired: [ResourceType.SOCCER]
});

export default withTranslation()(LoadingPage);