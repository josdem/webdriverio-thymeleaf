const Page = require("./page")

class EntreePage extends Page {
  get pizza() {
    return $('a[id="pizza"]')
  }

  async selectPizza() {
    const pizzaConst = await this.pizza
    expect(pizzaConst).toBeExisting()
    await pizzaConst.click()
  }
}

module.exports = new EntreePage()
