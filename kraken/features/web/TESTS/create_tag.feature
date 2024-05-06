Feature: Crear page

@user1 @web
Scenario: Como usuario me registro y creo un nuevo tag
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the tags menu button
  And I click in the new tag button
  And I fill the tag name "<TAG_NAME>"
  And I click the save tag button
  And I click in the tags menu button
  And I verify the tag name created is "<TAG_NAME>"

  
@user2 @web
Scenario: Como usuario me registro y creo un nuevo tag con nombre repetido
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the tags menu button
  And I click in the new tag button
  And I fill the tag name "<TAG_NAME>"
  And I click the save tag button
  And I click in the tags menu button
  And I verify the tag name created is "<TAG_NAME>"

@user3 @web
Scenario: Como usuario me registro y creo un nuevo tag con una imagen
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I click in the tags menu button
  And I click in the new tag button
  And I fill the tag name "<TAG_NAME>"
  And I click in the add image to tag
  And I wait for 5 seconds
  And I click the save tag button
  And I click in the tags menu button
  And I verify the tag name created is "<TAG_NAME>"



@user4 @web
Scenario: Como usuario me registro y creo un tag con Meta data completa
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I click in the tags menu button
  And I click in the new tag button
  And I fill the tag name "<TAG_NAME>"
  And I click in the expand meta data button
  And I wait for 1 seconds
  And I fill the meta data "<META_DATA_VALUES>"
  And I click the save tag button
  And I click in the tags menu button
  And I verify the tag name created is "<TAG_NAME>"