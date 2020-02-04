import React from "react";
import cookies from "next-cookies";
import DeviceHelper from "../common/helpers/device-helper";
import { redirectToLoading } from "../common/helpers/redirect-to-loading";
import { NextPageContext } from "next";
import { DeviceContextProvider } from "../contexts/device-context";
import { ViewMode } from "../common/constants";
import Router from "next/router";

type Props = {
    viewMode: string;
};

export function withLoadingPage(WrappedComponent: any) {
    return class extends React.Component<Props> {
        static async getInitialProps(ctx: NextPageContext) {
            const isMobile = new DeviceHelper(ctx).isMobile();
            const viewMode = cookies(ctx)["ViewMode"];

            if (isMobile && !viewMode) {
                if (ctx.res) {
                    ctx.res.writeHead(302, { Location: "/loading" });
                    ctx.res.end();
                } else {
                    Router.push("/loading");
                }
                redirectToLoading(ctx.res);
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
}