const Page = require('./page');

class OrderPage extends Page {
    get zipCode () { return $('#Postal_Code_Sep') }

    async selectZipCodeCityAndState () {
        await (await this.zipCode).click();
    }

    open () {
        return super.open();
    }
}

module.exports = new OrderPage();
