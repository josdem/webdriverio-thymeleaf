const properties = require("../config/properties")

module.exports = class Page {
  open(path) {
    return browser.url(properties.url)
  }
}
