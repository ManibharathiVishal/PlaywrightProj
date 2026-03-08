const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../pages/LoginPage');

let browser, page, loginPage;

Given('user navigates to login page', { timeout: 20000 }, async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.open();
});

When('user enters username and password', async () => {
  await loginPage.login('Admin', 'admin123');
});

Then('user should see dashboard', async () => {
  await page.waitForSelector('//h6[text()="Dashboard"]');
  await browser.close();
});