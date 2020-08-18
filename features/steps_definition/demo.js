const { equal } = require('assert')
const { promiseChainRemote } = require('wd')
const { Before, Given, When, Then, After } = require('cucumber')
const config = require('../../config')

const driver = promiseChainRemote(config.appium.hostname, config.appium.port)

Before({ timeout: 50000 }, async () => {
  await driver.init(config.android)
  await driver.sleep(6000)
})

After(async() => {
	await driver.quit()
})

Given('I am in app home page', { timeout: 30000 }, async () => {
  let isWelcomeMessage = await driver.hasElementByAccessibilityId('welcome-message');
  equal(isWelcomeMessage, true)
})

When('I click on "test" button', async () => {
  const testButton = await driver.elementByAccessibilityId('button-test');
  testButton.click();
})

Then('I see "Its works!"', async () => {
  await driver.setImplicitWaitTimeout(1500)
  const hasMessage = await driver.hasElementByXPath("//*[@text='Its works!']");
  equal(hasMessage, true)
})
