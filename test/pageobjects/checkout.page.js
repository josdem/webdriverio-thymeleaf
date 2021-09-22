const Page = require("./page")

class CheckoutPage extends Page {
  get itemFromCart() {
    return $('div[id="cart"]')
  }

  async validateItem() {
    const itemConst = await this.itemFromCart
    await expect(itemConst).toBeExisting()
  }
}

module.exports = new CheckoutPage()
