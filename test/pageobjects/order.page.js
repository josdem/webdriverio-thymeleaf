const Page = require('./page');
let properties = require('../config/properties');

class OrderPage extends Page {
    get zipCode() { return $('input[id="Postal_Code_Sep"]') }
    get city() { return $('input[id="City_Sep"]') }
    get state() { return $('select[id="Region_Sep"] option[value="MI"]') }
    get searchLocationsButton() { return $('button[type="submit"]') }

    async selectZipCodeCityAndState() {
        const zipCodeConst = await this.zipCode;
        (await zipCodeConst).setValue(properties.zipCode);
        const cityConst = await this.city;
        (await cityConst).setValue(properties.city);
        const stateConst = await this.state;
        (await stateConst).click();
        const searchLocationsButtonConst = this.searchLocationsButton;
        (await searchLocationsButtonConst).click();
    }

    open() {
        return super.open();
    }
}

module.exports = new OrderPage();
