Feature: Tags

@user5 @web
Scenario: Como usuario me registro e intento crear un nuevo tag sin nombre
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "1"
  And I wait for 2 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "2"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "3"
  And I wait for 1 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "5"
  And I wait for 1 seconds
  And I verify the error message "<ERROR_NAME_MESSAGE_TAG>"
  And I wait for 1 seconds
