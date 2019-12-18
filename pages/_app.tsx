import React from 'react';
import App from 'next/app';
import Sentry from '../common/helpers/sentry';

export default class MyApp extends App {
  componentDidCatch(error: Error, errorInfo: any) {
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
      <Component {...pageProps} />
    );
  }
}
