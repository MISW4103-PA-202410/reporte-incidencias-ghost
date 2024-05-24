Feature: Tags

@user19 @web
Scenario: Como usuario me registro y creo un nuevo tag con una imagen en X aleatoria
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "19"
  And I wait for 1 seconds
  And I fill the X image with a random one
  And I wait for 5 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 2 seconds
  And I click the random name tag created
  And I wait for 2 seconds
  And I delete the tag created

@user20 @web
Scenario: Como usuario me registro y creo un nuevo tag con una descripción en X aleatoria
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "20"
  And I wait for 1 seconds
  And I fill the tag description in x with 126 characters
  And I wait for 5 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 2 seconds
  And I click the random name tag created
  And I wait for 2 seconds
  And I delete the tag created


@user21 @web
Scenario: Como usuario me registro y creo un nuevo tag con un color aleatorio
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button 
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "21"
  And I choose a color for the tag "<BAD_COLOR_HEX>"
  And I click the save tag button
  And I verify the error message "<ERROR_NAME_MESSAGE_HEX_COLOR>"