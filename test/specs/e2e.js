const OrderPage = require('../pageobjects/order.page');

describe('Ordering by carryout', () => {
    it('should click on carryoyt', async () => {
        await OrderPage.open();
        await OrderPage.selectZipCodeCityAndState();
    });
});


