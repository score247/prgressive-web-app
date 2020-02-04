import React from "react";
import { LocalizedPage, withTranslation } from "../common/helpers/Localizer";
import cookie from 'js-cookie';
import Router from 'next/router';
import { ViewMode, ResourceType } from "../common/constants";
import { Button } from "../components/basic/button";
import NavTest from "../components/layout/header/navbar/navtest";

const LoadingPage: LocalizedPage = () => {

    const handleClick = () => {
        cookie.set("ViewMode", ViewMode.Mobile);
        Router.push("/");
    };
    return (
        <NavTest onClick={handleClick} />
    );
};

LoadingPage.getInitialProps = () => ({
    namespacesRequired: [ResourceType.SOCCER]
});

export default withTranslation()(LoadingPage);