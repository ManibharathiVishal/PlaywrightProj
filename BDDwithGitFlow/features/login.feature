Feature: OrangeHRM Login

  Scenario: Valid login
    Given user navigates to login page
    When user enters username and password
    Then user should see dashboard