Feature: Create View

@user2 @web
Scenario: Como usuario me registro y cambio la configuración agregando una imagen de portada
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  When I enter to the setup page "<SETUP_VALUES>"
  And I click the profile button
  And I click the configure button
  And I click the cover image button
  And I wait for 5 seconds
  And I click the save profile button
  And I wait for 1 seconds
  And I click the quit button
  And I click the profile button
  And I click the configure button
  And I click the cover image button
  And I click the save profile button
  And I wait for 1 seconds

