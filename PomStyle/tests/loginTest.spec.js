const {test, expect} = require("@playwright/test")
const {LoginFun} = require("../pages/login.spec")

test.describe("login func", async()=>{

    test("login", async({page})=>{
        const lp = new LoginFun(page)

        await lp.goto()
        await lp.login("Admin", "admin123")
        const msg = await lp.getWelcomeMessage()
        expect(msg).toContain("Dashboard")
    })
})