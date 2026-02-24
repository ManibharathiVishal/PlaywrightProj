const{test, expect} = require("@playwright/test")

test("registering into real", async({page})=>{
    await page.goto("https://bolt.playrealbrokerage.com/login")

    await page.locator("//p[text()='Join Real']").click()

    await page.locator("//input[@data-testid='firstName']").fill("Jane")

    await page.locator("//input[@data-testid='lastName']").fill("Doe")

    await page.locator("//input[@data-testid='username']").fill("JaneDoe12")

    await page.locator("//input[@data-testid='emailAddress']").fill("janedoe1@gmail.com")

    await page.locator("input[placeholder='Select your country']").click()

    //await page.waitForSelector("//input[@value='CANADA']")
   await page.locator('div[role="option"] >> text=Canada').click();

    //await page.locator("//input[@value='CANADA']").click()
})