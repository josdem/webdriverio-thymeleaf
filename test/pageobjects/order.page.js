const Page = require('./page');
let properties = require('../config/properties');

class OrderPage extends Page {
    get zipCode() { return $('input[id="Postal_Code_Sep"]') }

    async selectZipCodeCityAndState() {
        (await this.zipCode).setValue(properties.zipCode);
    }

    open() {
        return super.open();
    }
}

module.exports = new OrderPage();
