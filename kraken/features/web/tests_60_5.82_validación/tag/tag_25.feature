Feature: Tags

@user25 @web
Scenario: Como usuario me registro y creo un nuevo tag con un título en metadata de 50 caracteres aleatorio
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "25"
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

@user26 @web
Scenario: Como usuario me registro y creo un nuevo tag con imagen en Facebook, X y el Tag
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "26"
  And I wait for 1 seconds
  And I click in the add image to tag and select a random image
  And I wait for 1 seconds
  And I fill the Facebook image with a random one
  And I wait for 1 seconds
  And I fill the X image with a random one
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 2 seconds
  And I click the random name tag created
  And I delete the tag created
  And I wait for 1 seconds

@user27 @web
Scenario: Como usuario me registro y creo un nuevo tag con la información de X completa
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "27"
  And I wait for 1 seconds
  And I fill all x fields with random values with length between 50 and 70 characters
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 2 seconds
  And I click the random name tag created
  And I wait for 1 seconds
  And I delete the tag created
  And I wait for 1 seconds
