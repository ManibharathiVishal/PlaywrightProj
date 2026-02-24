const {BasePage} = require("../utils/basePage.spec.js")

class LoginFun extends BasePage {
    constructor(page){
        super(page)
        this.username = "//input[@placeholder='Username']"
        this.password = "//input[@placeholder='Password']"
        this.submit = "//button[@type='submit']"
        this.welcomeText  = "//h6[text()='Dashboard']"
        
    }

    async goto (){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    
    async login(username, password){
        await this.type(this.username, username)
        await this.type(this.password, password)
        await this.click(this.submit)
    }

    async getWelcomeMessage() {
    return await this.getText(this.welcomeText);
  }
}

module.exports = {LoginFun}