import React from "react";
import cookies from "next-cookies";
import DeviceHelper from "../common/helpers/device-helper";
import { NextPageContext } from "next";
import { DeviceContextProvider } from "../contexts/device-context";
import { ViewMode, HttpStatusCode } from "../common/constants";
import Router from "next/router";

type WithLoadingProps = {
    viewMode: string;
};

const withLoadingPage = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return class extends React.Component<P & WithLoadingProps> {
        static async getInitialProps(ctx: NextPageContext) {
            const loadingUrl = "/loading";
            const isMobile = new DeviceHelper(ctx).isMobile();
            const viewMode = cookies(ctx)["ViewMode"];
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
                <DeviceContextProvider value={{ isMobile: viewMode === ViewMode.Mobile }}>
                    <WrappedComponent {...this.props} />
                </DeviceContextProvider>
            );
        }
    };
};

export default withLoadingPage;