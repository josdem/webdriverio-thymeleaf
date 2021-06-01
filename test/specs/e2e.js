const { async } = require('rxjs');
const OrderPage = require('../pageobjects/order.page');
const SearchPage = require('../pageobjects/search.page');
const EntreePage = require('../pageobjects/entree.page');
const UtilPage = require('../pageobjects/util.page');
let properties = require('../config/properties');

describe('Ordering end to end', () => {
    it('should send zip code, city and state', async () => {
        await UtilPage.waitForLoading();
        await OrderPage.open();
        await OrderPage.selectZipCodeCityAndState();
        await SearchPage.selectDriveUpCarryout();
    });

    it('should select drive up carryout', async () => {
        await UtilPage.waitForLoading();
        await SearchPage.selectDriveUpCarryout();
    });

    it('should have pizza option', async () => {
        await UtilPage.waitForLoading();
        await EntreePage.validatePizza();
    });

});


