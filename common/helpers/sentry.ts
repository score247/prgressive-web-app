import * as Sentry from '@sentry/browser';
import appSettings from '../../app-settings';

/**
 * Initialize Sentry and export it.
 */
Sentry.init({
  dsn: appSettings.sentryDSN
});

export default Sentry;
