Feature: Tags

@user18 @web
Scenario: Como usuario me registro y creo un nuevo tag con descripción aleatoria y quito la descripción y luego guardo
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "1"
  And I wait for 2 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "1"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "2"
  And I fill with a random name the tag name "18"
  And I fill the description with random text
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I click the random name tag created
  And I delete the description
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I click the random name tag created
  And I wait for 2 seconds
  And I verify the description is empty
  And I delete the tag created
  And I wait for 1 seconds