Feature: Create View

@user4 @web
Scenario: Como usuario me registro y cambio la configuración de mis redes sociales de twitter y facebook
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  When I enter to the setup page "<SETUP_VALUES>"
  And I click the profile button
  And I click the configure button
  And I change info profile socialMedia "<SOCIAL_MEDIA>"
  And I click the save profile button
  And I wait for 2 seconds

