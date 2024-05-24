Feature: Tags

@user7 @web
Scenario: Como usuario me registro y creo un nuevo tag con nombre aleatorio
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button 
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "7"
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click the random name tag created
  And I wait for 1 seconds
  And I verify the tag name created is the same as the random name
  And I delete the tag created


@user8 @web
Scenario: Como usuario me registro y creo un nuevo tag con una imagen aleatoria
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "8"
  And I wait for 1 seconds
  And I click in the add image to tag and select a random image
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click the random name tag created
  And I wait for 1 seconds
  And I delete the tag created


@user9 @web
Scenario: Como usuario me registro y creo un nuevo tag con descripción aleatoria
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "9"
  And I wait for 1 seconds
  And I fill the description with random text
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 2 seconds
  And I click the random name tag created
  And I wait for 1 seconds
  And I delete the tag created