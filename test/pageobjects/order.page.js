const Page = require("./page")
const properties = require(`../properties/${process.env.NODE_ENV}.properties`)

class OrderPage extends Page {
  get zipCodeInput() {
    return $('[id="Postal_Code_Sep"]')
  }
  get cityInput() {
    return $('[id="City_Sep"]')
  }
  get stateSelector() {
    return $('[id="Region_Sep"] [value="MI"]')
  }
  get searchLocationsButton() {
    return $('[type="submit"]')
  }

  async selectZipCodeCityAndState() {
    const zipCodeConst = await this.zipCodeInput
    await expect(zipCodeConst).toBeExisting()
    zipCodeConst.setValue(properties.zipCode)
    const cityConst = await this.cityInput
    await expect(cityConst).toBeExisting()
    cityConst.setValue(properties.city)
    const stateConst = await this.stateSelector
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
