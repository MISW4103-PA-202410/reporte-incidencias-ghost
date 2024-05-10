let config = require('konfig')({path: './config'})

module.exports = {
  baseUrl: config["properties-3"].baseUrl,
  pageTimeout: config["properties-3"].pageTimeout,
  headlessMode: config["properties-3"].headlessMode,
  chromiumPath: config["properties-3"].chromiumPath,
  reportConfig: config["properties-3"].reportConfig
}