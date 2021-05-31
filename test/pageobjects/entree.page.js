const Page = require('./page');
let properties = require('../config/properties');

class EntreePage extends Page {
    get pizza() { return $('div[class="media-pizza"]') }

    async validatePizza() {
        const pizzaConst = await this.pizza;
        await expect(pizzaConst).toBeExisting();
    }

}

module.exports = new EntreePage();
