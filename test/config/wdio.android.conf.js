const { config } = require("../../wdio.conf")

config.user = process.env.SAUCE_USERNAME
config.key = process.env.SAUCE_ACCESS_KEY

config.services = config.services.concat("sauce")

config.capabilities = [
  {
    platformName: "Android",
    browserName: "Chrome",
    "appium:deviceName": "Google Pixel 3a GoogleAPI Emulator",
    "appium:platformVersion": "11.0",
    "sauce:options": {
      appiumVersion: "1.20.2",
    },
  },
]

exports.config = config
