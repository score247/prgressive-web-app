import * as Sentry from '@sentry/browser';
/**
 * Initialize Sentry and export it.
 */
Sentry.init({
  dsn: 'https://83c6b7e30522412a9cdcb5594d650916@sentry.nexdev.net/89',
  enabled: process.env.NODE_ENV === 'production',
  // environment: process.env.APP_STAGE,
  // release: process.env.APP_VERSION_RELEASE
});

export default Sentry;
