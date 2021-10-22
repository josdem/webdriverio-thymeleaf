const OrderPage = require("../pageobjects/order.page")
const SearchPage = require("../pageobjects/search.page")
const EntreePage = require("../pageobjects/entree.page")
const CheckoutPage = require("../pageobjects/checkout.page")

describe("Ordering end to end", () => {
  it("sends zip code, city and state", async () => {
    await OrderPage.open()
    await OrderPage.selectZipCodeCityAndState()
  })

  it("select drive up carryout", async () => {
    await SearchPage.selectDriveUpCarryout()
  })

  it("select pizza item", async () => {
    await EntreePage.selectPizza()
  })

  it("validate pizza item", async () => {
    await CheckoutPage.validateItem()
  })
})
