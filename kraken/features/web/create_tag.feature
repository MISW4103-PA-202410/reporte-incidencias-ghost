Feature: Crear page

@user1 @web
Scenario: Como usuario me registro y creo un nuevo tag
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the tags menu button
  And I click in the new tag button
  And I enter the tag name "<TAG_NAME>"
  And I click the save tag button
  And I see the tag has been saved

@user2 @web
Scenario: Como usuario me registro y creo un nuevo tag con nombre repetido
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the tags menu button
  And I click in the new tag button
  And I enter the tag name "<TAG_NAME>"
  And I click the save tag button
  And I see the tag has been saved
  And I check the slug has been changed
  