class BasePage {
  constructor(page) {
    this.page = page;
  }

    async clicking(selector){
        await this.page.click(selector)
    }

    async typing(selector){
        await this.page.fill(selector)
    }

    async val(selector){
        return await this.page.textContent(selector)
    }
}
module.exports = BasePage