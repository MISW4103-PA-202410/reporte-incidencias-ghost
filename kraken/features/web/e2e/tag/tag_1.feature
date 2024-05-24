Feature: Tags

@user1 @web
Scenario: Como usuario me registro y creo un nuevo tag
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button 
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "1"
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click the random name tag created
  And I wait for 1 seconds
  And I delete the tag created

@user2 @web
Scenario: Como usuario me registro y creo un nuevo tag con nombre repetido
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "2"
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click the random name tag created
  And I delete the tag created

@user3 @web
Scenario: Como usuario me registro y creo un nuevo tag con una imagen
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "3"
  And I wait for 1 seconds
  And I click in the add image to tag
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click the random name tag created
  And I wait for 1 seconds
  And I delete the tag created

@user4 @web
Scenario: Como usuario me registro y creo un tag con Meta data completa
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button 
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "4"
  And I wait for 1 seconds
  And I click in the expand meta data button
  And I wait for 1 seconds
  And I fill the meta data "<META_DATA_VALUES>"
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click the random name tag created
  And I wait for 1 seconds
  And I delete the tag created