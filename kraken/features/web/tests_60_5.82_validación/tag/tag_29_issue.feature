Feature: Tags

@user29 @web
Scenario: Como usuario me registro y creo un nuevo tag con una descripción en X de 500 caracteres - ISSUE reportada, no muestra cantidad máxima de caracteres y solo manda error
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "29"
  And I wait for 1 seconds
  And I fill the tag description in x with 500 characters
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click the random name tag created
  And I delete the tag created
  And I wait for 1 seconds