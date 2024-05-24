Feature: Tags

@user22 @web
Scenario: Como usuario me registro y creo un nuevo tag con descripción de 505 carácteres
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "22"
  And I wait for 1 seconds
  And I fill the description with random text with length 505
  And I click the save tag button
  And I verify the error message for description


@user23 @web
Scenario: Como usuario me registro y creo un nuevo tag de Facebook con imagen aleatoria
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "23"
  And I wait for 1 seconds
  And I fill the Facebook image with a random one
  And I wait for 5 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 2 seconds
  And I click the random name tag created
  And I delete the tag created

@user24 @web
Scenario: Como usuario me registro y creo un nuevo tag de Facebook con imagen, título y descripción aleatoria
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "24"
  And I wait for 1 seconds
  And I fill all facebook fields with random values with length between 50 and 80 characters
  And I wait for 5 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 2 seconds
  And I click the random name tag created
  And I wait for 1 seconds
  And I delete the tag created