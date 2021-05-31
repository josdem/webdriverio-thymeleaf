const Page = require('./page');
let properties = require('../config/properties');

class OrderPage extends Page {
    get zipCode() { return $('input[id="Postal_Code_Sep"]') }
    get city() { return $('input[id="City_Sep"]') }
    get state() { return $('select[id="Region_Sep"] option[value="MI"]') }
    get searchLocationsButton() { return $('button[type="submit"]') }

    async selectZipCodeCityAndState() {
        (await this.zipCode).setValue(properties.zipCode);
        (await this.city).setValue(properties.city);
        (await this.state).click();
        (await this.searchLocationsButton).click();
    }

    open() {
        return super.open();
    }
}

module.exports = new OrderPage();
