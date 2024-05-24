Feature: Tags

@user10 @web
Scenario: Como usuario me registro y creo un nuevo tag con información completa y luego cancelo la creación
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "10"
  And I wait for 1 seconds
  And I fill the tag with basic random information
  And I click in the tags menu button
  And I wait for 1 seconds
  And I cancel the tag creation


@user11 @web
Scenario: Como usuario me registro y creo un nuevo tag con header pseudo-aleatorio
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "11"
  And I wait for 1 seconds
  And I fill the header with random text
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click the random name tag created
  And I wait for 1 seconds
  And I delete the tag created


@user12 @web
Scenario: Como usuario me registro y creo un nuevo tag con footer pseudo-aleatorio
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "12"
  And I wait for 1 seconds
  And I fill the footer with random text
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click the random name tag created
  And I delete the tag created