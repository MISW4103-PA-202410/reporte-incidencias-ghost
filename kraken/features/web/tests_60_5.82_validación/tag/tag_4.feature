Feature: Tags

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


@user5 @web
Scenario: Como usuario me registro e intento crear un nuevo tag sin nombre
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button 
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I verify the error message "<ERROR_NAME_MESSAGE_TAG>"


@user6 @web
Scenario: Como usuario me registro y creo un nuevo tag con un color aleatorio
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button 
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "6"
  And I choose a random color for the tag
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 2 seconds
  And I click the random name tag created
  And I wait for 1 seconds
  And I verify the random color in the tag
  And I delete the tag created

