import React from "react";
import { LocalizedPage, withTranslation } from "../common/helpers/Localizer";
import cookie from 'js-cookie';
import Router from 'next/router';
import { ViewMode, ResourceType } from "../common/constants";
import Button from "../components/basic/button";
import "../assets/styles/pages/loading.scss";

const LoadingPage: LocalizedPage = () => {

    const handleClick = (viewMode: string) => {
        cookie.set("ViewMode", viewMode);
        Router.push("/");
    };
    return (
        <div className="loading-page">
            <div className="title">Score247 Official Website</div>
            <div className="note">You are using a smart device. Please select one of the following browsing mode that's compatible with your device</div>
            <div className="content">
                <button className="btn btn-mobile">Mobile website</button>
                <button className="btn btn-primary-outline btn-desktop">Desktop website</button>
                <div className="divide">or mobile application</div>
                <button className="btn btn-download">Download from app store</button>
                <div className="icon-logo"></div>
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