Feature: Tags

@user13 @web
Scenario: Como usuario me registro y creo un nuevo tag con título de integración de Facebook aleatoria
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "13"
  And I wait for 1 seconds
  And I fill the facebook title with a random length between 1 and 100 characters
  And I wait for 5 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 2 seconds
  And I click the random name tag created
  And I delete the tag created


@user14 @web
Scenario: Como usuario me registro y creo un nuevo tag con descripción de Facebook aleatoria entre 40 y 65 carácteres
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "14"
  And I wait for 1 seconds
  And I fill the facebook description with a random length between 40 and 65 characters
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 2 seconds
  And I click the random name tag created
  And I delete the tag created