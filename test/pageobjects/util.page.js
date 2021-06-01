const Page = require('./page');
let properties = require('../config/properties');

class UtilPage extends Page {

    async waitForLoading() {
        await browser.pause(properties.timeToWait)
    }

}

module.exports = new UtilPage();
