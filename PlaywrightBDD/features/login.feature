Feature: Login functionality

  Scenario: User logs in with valid credentials
    Given I open the application
    When I login with username and password
    Then I should see the welcome message