const{test, expect} = require("@playwright/test")

test("validation", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin@123")
    await page.keyboard.press("Enter")



})