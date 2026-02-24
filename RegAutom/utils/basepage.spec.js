class BasePage{
    constructor(page){
        this.page = page
    }

    async clicking(selector){
        await this.page.click(selector)
    }

    async typing(selector){
        await this.page.fill(selector)
    }

    
}
module.exports = BasePage