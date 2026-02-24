const{LoginPage} = require("../pages/loginpage.spec")
const{test, expect} = require("@playwright/test")

test.describe("login fun", async()=>{
    
    test("login", async({page})=>{
        const p = new LoginPage(page)
        
        await p.navurl()
        await p.login("Admin", "admin123")
        const msg = await p.validation()
         expect(msg).toContain("Dashboard")
    })
})