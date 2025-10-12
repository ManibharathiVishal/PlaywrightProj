const {BasePage} = require("../utils/basePage.spec")

class LoginPage extends BasePage{
    constructor(page){
        super(page)
        this.username = "//input[@id='email']"
        this.password = "//input[@id='passwd']"
        this.submit = "//button[@id='SubmitLogin']"
       this.welcomeText= "//h3[text()='Successfully Logged in...']"
    }

    async goto(){
        await this.page.goto("https://demo.guru99.com/test/login.html")
    }
    async login(username, password){
        await this.page.fill(this.username, username)
        await this.page.fill(this.password, password)
        await this.page.click(this.submit)
    }

    async validation() {
    return await this.getText(this.welcomeText);   // reuse BasePage.getText
  }

}

module.exports = {LoginPage}