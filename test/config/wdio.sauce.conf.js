const { config } = require("../../wdio.conf")

config.user = process.env.SAUCE_USERNAME
config.key = process.env.SAUCE_ACCESS_KEY

config.services = config.services.concat("sauce")

config.capabilities = [
  {
    browserName: "chrome",
    browserVersion: "92",
    platformName: "Windows 10",
    "sauce:options": {
      screenResolution: "1920x1080",
    },
  },
]

exports.config = config
