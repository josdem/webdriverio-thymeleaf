const Page = require('./page');
let properties = require('../config/properties');

class EntreePage extends Page {
    get pizza() { return $('div[class="media-pizza"]') }

    async validatePizza() {
        await expect(this.pizza).toBeExisting();
    }

}

module.exports = new EntreePage();
