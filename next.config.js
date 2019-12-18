const withSass = require('@zeit/next-sass')
const env = process.env.SETTINGENV || 'development';
const appSettings = { ...require('./appsettings.json'), ...require(`./appsettings.${env}.json`)};


module.exports = withSass({
  /* config options here */
  excludeFile: (str) => /\*.{spec,test}.js/.test(str),
  publicRuntimeConfig: appSettings
});
