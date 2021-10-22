const properties = require(`../properties/${process.env.NODE_ENV}.properties`)
const OrderPage = require("../pageobjects/order.page")
const REDIRECTION = "https://webdriver.io"

describe("Mocking the response", () => {
  it("changes localhost to webdriverio", async () => {
    const pageMock = await browser.mock(properties.url)
    pageMock.respond(REDIRECTION)
    await OrderPage.open()
    console.log(await browser.getTitle())
  })
})
