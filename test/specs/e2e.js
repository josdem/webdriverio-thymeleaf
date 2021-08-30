const { async } = require("rxjs");
const OrderPage = require("../pageobjects/order.page");
const SearchPage = require("../pageobjects/search.page");
const EntreePage = require("../pageobjects/entree.page");
const CheckoutPage = require("../pageobjects/checkout.page");

describe("Ordering end to end", () => {
  it("should send zip code, city and state", async () => {
    await OrderPage.open();
    await OrderPage.selectZipCodeCityAndState();
  });

  it("should select drive up carryout", async () => {
    await SearchPage.selectDriveUpCarryout();
  });

  it("should select pizza item", async () => {
    await EntreePage.selectPizza();
  });

  it("should validate pizza item", async () => {
    await CheckoutPage.validateItem();
  });
});
