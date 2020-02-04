import React from "react";
import App, { AppContext } from "next/app";
import Sentry from "../common/helpers/sentry";
import { appWithTranslation } from "../common/helpers/Localizer";
import DeviceHelper from "../common/helpers/device-helper";

interface CustomErrorInfo extends React.ErrorInfo {
  [key: string]: string;
}

class Score247App extends App<{ isMobile: boolean }> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const isMobile = new DeviceHelper(ctx).isMobile();

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, isMobile };
  }

  componentDidCatch(error: Error, errorInfo: CustomErrorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      // <DeviceContext.Provider value={{ isMobile: isMobile }}>
      <Component {...pageProps} />
      // </DeviceContext.Provider>
    );
  }
}

export default appWithTranslation(Score247App);
