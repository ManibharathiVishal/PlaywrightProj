const {test, expect} = require("@playwright/test")
const {LoginPage} = require("../pages/loginpage.spec")

test.describe("login fun", async()=>{

    test("login", async({page})=>{
        const p = new LoginPage(page)

      await  p.goto()
        await p.login("admin", "admin@123")
        const msg = await p.validation()
        expect(msg).toContain("Successfully Logged in...")
    })
})