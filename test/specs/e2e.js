const { async } = require('rxjs');
const OrderPage = require('../pageobjects/order.page');

describe('Ordering end to end', () => {
    it('should send zip code, city and state', async () => {
        await OrderPage.open();
        await OrderPage.selectZipCodeCityAndState();
    });

    it('should select drive up carryout', async () => {
        await OrderPage.selectDriveUpCarryout();
    });

});


