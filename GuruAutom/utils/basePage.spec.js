class BasePage{
    constructor(page){
        this.page=page
    }

    async click(selector){
        this.page.click(selector)
    }

    async fill(selector){
        this.page.fill(selector)
    }

    async getText(selector){
        return await this.page.textContent(selector)
    }
}

module.exports = {BasePage}