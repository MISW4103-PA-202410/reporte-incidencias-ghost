Feature: Tags

@user2 @web
Scenario: Como usuario me registro y creo un nuevo tag con nombre repetido
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 3 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "2" step "1"
  And I wait for 3 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "2" step "2"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "2" step "3"
  And I wait for 1 seconds
  And I fill with a random name the tag name "2"
  And I wait for 1 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "2" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "2" step "6"
  And I wait for 1 seconds
  And I click the random name tag created
  And I delete the tag created
