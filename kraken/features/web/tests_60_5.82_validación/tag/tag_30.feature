Feature: Tags

@user30 @web
Scenario: Como usuario me registro y creo un nuevo tag con una URL canónica inválida
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
  And I click in the expand meta data button
  And I wait for 1 seconds
  And I fill the metadata URL canonic with invalid URL
  And I click the save tag button
  And I verify that the metadata URL canonic is invalid
