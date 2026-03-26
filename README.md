Overview

This project demonstrates a scalable web automation framework using Playwright with JavaScript for end-to-end testing of web applications.

Tech Stack
Language: JavaScript
Automation Tool: Playwright
Test Runner: Playwright Test
CI/CD: GitHub Actions
Version Control: Git & GitHub

End-to-end UI automation using Playwright
Page Object Model (POM) design pattern
Cross-browser testing (Chromium, Firefox, WebKit)
Parallel test execution
Built-in HTML reporting
CI integration using GitHub Actions

Install dependencies
 -npm install
Run all tests
 -npx playwright test
Run tests in headed mode
 -npx playwright test --headed
Run specific test
 -npx playwright test tests/example.spec.js

Reports
HTML reports generated after execution
View report using:
 -npx playwright show-report
CI/CD Integration

Integrated with GitHub Actions to automatically run tests on code push and pull requests.

Author
Manibharathi – QA Automation Engineer
