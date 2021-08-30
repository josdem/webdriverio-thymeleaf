const Page = require("./page");
let properties = require("../config/properties");

class CheckoutPage extends Page {
  get itemFromCart() {
    return $('div[class="media-cart"]');
  }

  async validateItem() {
    const itemConst = await this.itemFromCart;
    await expect(itemConst).toBeExisting();
  }
}

module.exports = new CheckoutPage();
