import React from "react";
import { LocalizedPage, withTranslation } from "../common/helpers/Localizer";
import cookie from 'js-cookie';
import Router from 'next/router';
import { ViewMode, ResourceType } from "../common/constants";
import Button from "../components/basic/button";

const LoadingPage: LocalizedPage = () => {

    const handleClick = (viewMode: string) => {
        cookie.set("ViewMode", viewMode);
        Router.push("/");
    };
    return (
        <div>
            <Button text="Desktop Mode" onClick={() => handleClick(ViewMode.Desktop)} />
            <Button text="Mobile Mode" onClick={() => handleClick(ViewMode.Mobile)} />
        </div>
    );
};

LoadingPage.getInitialProps = () => ({
    namespacesRequired: [ResourceType.SOCCER]
});

export default withTranslation()(LoadingPage);