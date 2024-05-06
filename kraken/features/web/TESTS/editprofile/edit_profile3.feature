Feature: Create View

@user3 @web
Scenario: Como usuario me registro y cambio el nombre y el correo de mi perfil
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  When I enter to the setup page "<SETUP_VALUES>"
  And I click the profile button
  And I click the configure button
  And I change info profile "<PROFILE_VALUES>"
  And I click the save profile button
  And I wait for 2 seconds
  And I click the quit button
  And I click the profile button
  And I click the sign out button
  And I sign in with email "<SETUP_VALUES_NEW_EMAIL>"
  And I click the profile button
  And I click the configure button
  And I change info profile "<OLD_PROFILE_VALUES>"
  And I click the save profile button
  And I wait for 3 seconds


