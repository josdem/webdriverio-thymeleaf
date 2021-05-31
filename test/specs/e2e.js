const { async } = require('rxjs');
const OrderPage = require('../pageobjects/order.page');
const SearchPage = require('../pageobjects/search.page');
const EntreePage = require('../pageobjects/entree.page');
let properties = require('../config/properties');

describe('Ordering end to end', () => {
    it('should send zip code, city and state', async () => {
        await OrderPage.open();
        await OrderPage.selectZipCodeCityAndState();
        browser.pause(properties.timeToWait);
    });

    it('should select drive up carryout', async () => {
        await SearchPage.selectDriveUpCarryout();
    });

    it('should have pizza option', async () => {
        await EntreePage.validatePizza();
    });

});


