import React from "react";
import App, { AppContext } from "next/app";
import Sentry from "../common/helpers/sentry";
import { appWithTranslation } from "../common/helpers/Localizer";

interface CustomErrorInfo extends React.ErrorInfo {
  [key: string]: string;
}

class Score247App extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
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
    return <Component {...pageProps} />;
  }
}

export default appWithTranslation(Score247App);
