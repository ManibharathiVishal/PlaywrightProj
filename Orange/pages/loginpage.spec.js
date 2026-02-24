
const{BasePage} = require("../utils/base.spec.js")

class LoginPage extends BasePage{
    constructor(page){
        super(page)
        this.username= "//input[@placeholder='Username']"
        this.password = "//input[@placeholder='Password']"
        this.submit = "//button[@type='submit']"
        this.text = "//h6[text()='Dashboard']"
    }

    async navurl(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async login(username, password){
        await this.typing(this.username,username)
        await this.typing(this.password,password)
        await this.clicking(this.submit)
        
    }

    async validation(){
        return await this.val(this.text)
    }
}

module.exports = {LoginPage}