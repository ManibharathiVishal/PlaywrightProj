const{test, expect} = require ('@playwright/test')
 
test("login with valid creds", async ({page}) =>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.locator("//input[@name='username']").fill("Admin")
   await page.locator("//input[@name='password']").fill("admin123")
   await page.locator("//button[@type='submit']").click()
   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
   
})

test("addition of emp", async ({page})=>{
   await page.waitForTimeout(3000)
   await page.locator("//ul[@class='oxd-main-menu']/child :: li[1]").click({force:true})
   await page.waitForTimeout(3000)
   await page.locator("//div[@class='orangehrm-header-container']/descendant::button").click()


})