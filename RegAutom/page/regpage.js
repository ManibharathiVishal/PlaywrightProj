

class Registration {
    constructor(page) {
    this.page = page;
    this.firstname = page.locator("//input[@id='vfb-5']");
    this.lastname = page.locator("//input[@id='vfb-7']");
    this.streetAddress = page.locator("//input[@id='vfb-13-address']");
    this.city = page.locator("//input[@id='vfb-13-city']");
    this.state = page.locator("//input[@id='vfb-13-state']");
    this.postal = page.locator("//input[@id='vfb-13-zip']");
    this.countrydd = page.locator("//span[contains(@aria-labelledby,'select2-vfb-13-country')]");
    this.countryList = "//ul[@class='select2-results__options']";
    this.country = page.locator("//li[contains(@id,'Fiji')]");
    this.email = page.locator("//input[@id='vfb-14']");
    this.date = page.locator("//input[@id='vfb-18']")
    this.phone = page.locator("//input[@id='vfb-19']");
    this.gender = page.locator("//input[@type='radio'and@value='Female']");
    this.course = page.locator("//label[text()='Java']");
    this.timeHourFocus = page.locator("//span[@class='selection']/following::span[@aria-labelledby='select2-vfb-16-hour-container']");
    this.timeHour = page.locator("//ul[@id='select2-vfb-16-hour-results']//li[2]");
    this.timeMinFocus = page.locator("//span[@class='selection']/following::span[@aria-labelledby='select2-vfb-16-min-container']");
    this.timeMin = page.locator("//ul[@id='select2-vfb-16-min-results']//li[2]");
    this.query = page.locator("//textarea[@id='vfb-23']");
    this.egtext = page.locator("//span[@class='vfb-span']//label[text()='Example: 33']");
    this.verification = page.locator("//input[@id='vfb-3']");
    this.submit = page.locator("//input[@id='vfb-4']");
    this.transaction = page.locator("//div[@id='messageContainer']");
    
    }

    async urlnav(){
        await this.page.goto("https://vinothqaacademy.com/demo-site/", {waitUntil: "load"});
        //await page.pause();
    }

    async enterFirstName(fname){
        await this.firstname.fill(fname);
    }

    async enterLastName(lname){
        await this.lastname.fill(lname);
    }

    async enterGender(){
        await this.gender.click();
    }

    async enterCourse(){
        await this.course.waitFor({ state: 'visible' });
        await this.course.click();
    }

    async enterStreetAddress(addr1){
        await this.streetAddress.fill(addr1);
    }

    async enterCity(city){
        await this.streetAddress.fill(city);
    }

     async enterState(state){
        await this.streetAddress.fill(state);
    }

     async enterZip(zip){   
        await this.streetAddress.fill(zip);
    }

     async enterCountry(){
        await this.countrydd.click();
        await this.page.waitForSelector(this.countryList);
        await this.country.click();
     }

    async enterEmailId(mail){
        await this.email.fill(mail);
    }

    async enterDemoDate(date){
        await this.date.fill(date);
    }

    async enterTime(){
        await this.timeHourFocus.waitFor({ state: 'visible' });
        await this.timeHourFocus.click();
        await this.timeHour.waitFor({ state: 'visible' });
        await this.timeHour.click();
        await this.timeMinFocus.waitFor({ state: 'visible' });
        await this.timeMinFocus.click();
        await this.timeMin.waitFor({ state: 'visible' });
        await this.timeMin.click();
    }

    async enterPhno(ph){
        await this.phone.fill(ph);
    }

    async enterQuery(ques){
        await this.query.fill(ques);
    }
    
    async enterEgtext(){
        await this.egtext.waitFor({ state: 'visible' });
        const text = await this.egtext.textContent();
        const digits = text.match(/\d+/)[0];
        console.log(text);
        console.log(digits);
        await this.verification.fill(digits);
    }

    async submitForm(){
        await this.submit.click();
    }

        
    
   
     
}
module.exports = { Registration };