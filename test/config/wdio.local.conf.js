const { config } = require("../../wdio.conf")

config.capabilities = [
  {
    browserName: "chrome",
  },
]

exports.config = config
