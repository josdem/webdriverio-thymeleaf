const Page = require('./page');

class OrderPage extends Page {
    get zipCode() { return $('input[id="Postal_Code_Sep"]') }

    async selectZipCodeCityAndState() {
        (await this.zipCode).setValue("48197");
    }

    open() {
        return super.open();
    }
}

module.exports = new OrderPage();
