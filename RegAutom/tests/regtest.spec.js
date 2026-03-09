const { test } = require("@playwright/test");
const { Registration } = require("../page/regpage");
const { FakerData } = require("../utils/fakerData");

test("registration", async ({ page }) => {

  const register = new Registration(page);
  const user = FakerData.userData();

  await register.urlnav();
  await register.enterFirstName(user.firstName);
  await register.enterLastName(user.lastName);
  await register.enterGender();
  await register.enterCourse();
  await register.enterStreetAddress(user.streetAddress);
  await register.enterCity(user.city);
  await register.enterState(user.state);
  await register.enterZip(user.zip);
  await register.enterCountry();
  await register.enterEmailId(user.email);
  await register.enterDemoDate(user.dob);
  await register.enterTime();
  await register.enterPhno(user.phone);
  await page.waitForTimeout(2000);
  await register.enterQuery(user.query);
  await page.waitForTimeout(2000);
  await register.enterEgtext();
  await page.waitForTimeout(2000);
  await register.submitForm();

  async function verifyTransaction(){
    await page.waitForLoadState('networkidle');
    await register.transaction.waitFor({ state: 'visible' });
    const text = await register.transaction.textContent();
    const digits = text.match(/\d+/)[0];
    console.log(text);
    console.log("id: " + digits);
  }
  await verifyTransaction();

});