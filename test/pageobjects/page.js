const properties = require(`../properties/${process.env.NODE_ENV}.properties`)

module.exports = class Page {
  open(path) {
    return browser.url(properties.url)
  }
}
