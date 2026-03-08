class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = 'input[name="username"]';
    this.password = 'input[name="password"]';
    this.loginBtn = 'button[type="submit"]';
  }

  async open() {
  await this.page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    { waitUntil: 'domcontentloaded' }
  );
}

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }
}
module.exports = LoginPage;