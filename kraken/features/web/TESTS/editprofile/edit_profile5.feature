Feature: Create View

@user5 @web
Scenario: Como usuario me registro y listo la actividad del usuario
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  When I enter to the setup page "<SETUP_VALUES>"
  And I click the profile button
  And I click the configure button
  And I wait for 1 seconds
  And I click the dot points
  And I wait for 2 seconds
  And I click the userActivityButton
  And I verify history
  And I wait for 2 seconds


