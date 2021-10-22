const Page = require("./page")

class SearchPage extends Page {
  get driveUpCarryoutButton() {
    return $('a[data-guid="drive-up-carryout"]')
  }

  async selectDriveUpCarryout() {
    const driveUpCarryOut = await this.driveUpCarryoutButton
    await expect(driveUpCarryOut).toBeExisting()
    driveUpCarryOut.click()
  }
}

module.exports = new SearchPage()
