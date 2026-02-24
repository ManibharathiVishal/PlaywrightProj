const {BasePage} = require("../utils/basepage.spec")

class Registration extends BasePage {
    constructor(page) {
    super(page)
    this.firstname = "//input[@placeholder='First Name']" 
    this.lastname = "//input[@placeholder='Last Name']"
    this.address = "//textarea[@class='form-control ng-pristine ng-untouched ng-valid']"
    this.email = "//input[@type='email']"
    this.phone = "//input[@type='tel']"
    this.gender = "//input[@value='FeMale']"
    this.hobbies = "(//label[text()='Hobbies']/following-sibling::div//input[@type='checkbox'])[2]"
    this.language = "//div[@id='msdd']"
    this.langdd = "//div[@style='display: block;']//descendant::ul/li[3]"
    this.skills = "//select[@id='Skills']"
    this.skildd = "//select[@id='Skills']//descendant::option[4]"
    this.country = "//span[@id='select2-country-container']"
    this.coundd = "//span[@class='select2-results']/ul/li[2]"
    this.year = "//select[@id='yearbox']"
    this.yeardd = "//select[@id='yearbox']//option[text()='1996']"
    this.month = "//select[@placeholder='Month']"
    this.monthdd = "//select[@placeholder='Month']/option[6]"
    this.date = "//select[@placeholder='Day']"
    this.datedd = "//select[@placeholder='Day']/option[12]"
    this.pass = "//input[@id='firstpassword']"
    this.confirmpass =  "//input[@id='secondpassword']"
    }

    async urlnav(){
        await this.page.goto("https://demo.automationtesting.in/Register.html")
    }

    async details(){
        await page.fill
    }
}