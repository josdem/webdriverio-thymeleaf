const OrderPage = require('../pageobjects/order.page');

describe('Ordering end to end', () => {
    it('should order a drink', async () => {
        await OrderPage.open();
        await OrderPage.selectZipCodeCityAndState();
    });
});


