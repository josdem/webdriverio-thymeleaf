const { config } = require("../../wdio.conf")

config.user = process.env.SAUCE_USERNAME
config.key = process.env.SAUCE_ACCESS_KEY

config.services = config.services.concat("sauce")

config.capabilities = [
  {
    platformName: "iOS",
    browserName: "Safari",
    "appium:deviceName": "iPhone 12 Simulator",
    "appium:platformVersion": "14.5",
    "sauce:options": {
      appiumVersion: "1.21.0",
    },
  },
]

exports.config = config
