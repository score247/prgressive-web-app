const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
  excludeFile: (str) => /\*.{spec,test}.js/.test(str)
})