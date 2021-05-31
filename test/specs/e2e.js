const { async } = require('rxjs');
const OrderPage = require('../pageobjects/order.page');
const SearchPage = require('../pageobjects/search.page');
const EntreePage = require('../pageobjects/entree.page');
let properties = require('../config/properties');

describe('Ordering end to end', () => {
    it('should send zip code, city and state', async () => {
        await OrderPage.open();
        await OrderPage.selectZipCodeCityAndState();
        await SearchPage.selectDriveUpCarryout();
    });

    it('should select drive up carryout', async () => {
        await browser.pause(properties.timeToWait);
        await SearchPage.selectDriveUpCarryout();
    });

    it('should have pizza option', async () => {
        await browser.pause(properties.timeToWait);
        await EntreePage.validatePizza();
    });

});


