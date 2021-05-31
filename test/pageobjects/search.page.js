const Page = require('./page');
let properties = require('../config/properties');

class SearchPage extends Page {
    get driveUpCarryout() { return $('a[class="link"]') }

    async selectDriveUpCarryout() {
        const driveUpCarryoutConst = await this.driveUpCarryout;
        await expect(driveUpCarryoutConst).toBeExisting(); 
        driveUpCarryoutConst.click();
    }

}

module.exports = new SearchPage();
