const withPlugins = require("next-compose-plugins");
const sass = require("@zeit/next-sass");
const offline = require("next-offline");
const env = process.env.SETTINGENV || "development";
const appSettings = {
  ...require("./appsettings.json"),
  ...require(`./appsettings.${env}.json`)
};
const nextConfig = {
  excludeFile: str => /\*.{spec,test}.js/.test(str),
  publicRuntimeConfig: appSettings
};

console.log(process.env.NODE_ENV);

module.exports = withPlugins(
  [
    sass,
    [
      offline,
      {
        workboxOpts: {
          swDest: "static/service-worker.js"
        },
        experimental: {
          async rewrites() {
            return [
              {
                source: "/service-worker.js",
                destination: "/_next/static/service-worker.js"
              }
            ];
          }
        }
      }
    ]
  ],
  nextConfig
);
