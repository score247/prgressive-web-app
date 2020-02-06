import React from "react";
import { NextPageContext } from "next";
import Router from "next/router";
import cookies from "next-cookies";
import DeviceHelper from "../common/helpers/device-helper";
import { DeviceContextProvider } from "../contexts/device-context";
import { ViewMode, HttpStatusCode, CookieName } from "../common/constants";

type WithLoadingProps = {
    viewMode: string;
};

const withLoadingPage = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return class extends React.Component<P & WithLoadingProps> {
        static async getInitialProps(ctx: NextPageContext) {
            const loadingUrl = "/loading";
            const isMobile = new DeviceHelper(ctx).isMobile();
            const viewMode = cookies(ctx)[CookieName.VIEW_MODE];
            const { res } = ctx;

            if (isMobile && !viewMode) {
                if (res) {
                    res.writeHead(HttpStatusCode.FOUND, { Location: loadingUrl });
                    res.end();
                } else {
                    Router.push(loadingUrl);
                }
            }

            return { viewMode };
        }

        render() {
            const { viewMode } = this.props;
            return (
                <DeviceContextProvider value={{ isMobile: viewMode === ViewMode.MOBILE }}>
                    <WrappedComponent {...this.props} />
                </DeviceContextProvider>
            );
        }
    };
};

export default withLoadingPage;