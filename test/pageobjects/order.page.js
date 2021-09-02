const Page = require("./page")
let properties = require("../config/properties")

class OrderPage extends Page {
  get zipCode() {
    return $('input[id="Postal_Code_Sep"]')
  }
  get city() {
    return $('input[id="City_Sep"]')
  }
  get state() {
    return $('select[id="Region_Sep"] option[value="MI"]')
  }
  get searchLocationsButton() {
    return $('button[type="submit"]')
  }

  async selectZipCodeCityAndState() {
    const zipCodeConst = await this.zipCode
    await expect(zipCodeConst).toBeExisting()
    zipCodeConst.setValue(properties.zipCode)
    const cityConst = await this.city
    await expect(cityConst).toBeExisting()
    cityConst.setValue(properties.city)
    const stateConst = await this.state
    await expect(stateConst).toBeExisting()
    stateConst.click()
    const searchLocationsButtonConst = await this.searchLocationsButton
    await expect(searchLocationsButtonConst).toBeExisting()
    searchLocationsButtonConst.click()
  }

  open() {
    return super.open()
  }
}

module.exports = new OrderPage()
