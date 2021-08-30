const Page = require("./page");
let properties = require("../config/properties");

class SearchPage extends Page {
  get driveUpCarryout() {
    return $('a[data-guid="drive-up-carryout"]');
  }

  async selectDriveUpCarryout() {
    const driveUpCarryoutConst = await this.driveUpCarryout;
    await expect(driveUpCarryoutConst).toBeExisting();
    driveUpCarryoutConst.click();
  }
}

module.exports = new SearchPage();
