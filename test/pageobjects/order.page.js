const Page = require('./page');
let properties = require('../config/properties');

class OrderPage extends Page {
    get zipCode() { return $('input[id="Postal_Code_Sep"]') }
    get city() { return $('input[id="City_Sep"]') }
    get state() { return $('select[id="Region_Sep"] option[value="MI"]') }
    
    async selectZipCodeCityAndState() {
        (await this.zipCode).setValue(properties.zipCode);
        (await this.city).setValue(properties.city);
        (await this.state).click();
        await browser.pause(10000);
    }

    open() {
        return super.open();
    }
}

module.exports = new OrderPage();
