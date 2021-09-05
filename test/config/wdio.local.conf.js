const { config } = require("../../wdio.conf")

config.services = config.services.concat("chromedriver")

config.capabilities = [
  {
    browserName: "chrome",
  },
]

exports.config = config
