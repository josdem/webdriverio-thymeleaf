const { config } = require("../../wdio.conf")

config.services = config.services.concat("chromedriver","intercept")

config.capabilities = [
  {
    browserName: "chrome",
  },
]

exports.config = config
