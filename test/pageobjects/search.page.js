const Page = require('./page');
let properties = require('../config/properties');

class SearchPage extends Page {
    get driveUpCarryout() { return $('a[class="link"]') }

    async selectDriveUpCarryout() {
        (await this.driveUpCarryout).click();
    }

}

module.exports = new SearchPage();
