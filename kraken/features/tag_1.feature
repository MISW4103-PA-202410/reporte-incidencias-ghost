Feature: Tags

@user1 @web
Scenario: Como usuario me registro y creo un nuevo tag
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 5 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "1"
  And I wait for 3 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "2"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "3"
  And I wait for 1 seconds
  And I fill with a random name the tag name "1"
  And I wait for 1 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "6"
  And I wait for 1 seconds
  And I click the random name tag created
  And I delete the tag created
  And I wait for 1 seconds

@user2 @web
Scenario: Como usuario me registro y creo un nuevo tag con nombre repetido
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 5 seconds
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
  And I wait for 1 seconds

@user3 @web
Scenario: Como usuario me registro y creo un nuevo tag con una imagen
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 5 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "1"
  And I wait for 3 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "1"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "2"
  And I wait for 1 seconds
  And I fill with a random name the tag name "3"
  And I wait for 1 seconds
  And I click in the add image to tag and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "4"
  And I wait for 6 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I wait for 2 seconds
  And I click the random name tag created
  And I delete the tag created
  And I wait for 1 seconds

@user4 @web
Scenario: Como usuario me registro y creo un tag con Meta data completa
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 5 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "4" step "1"
  And I wait for 3 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "4" step "1"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "4" step "2"
  And I wait for 1 seconds
  And I fill with a random name the tag name "4"
  And I wait for 1 seconds
  And I click in the expand meta data button and take a screenshot for version "v5.82" feature "crear-tag" scenario "4" step "4"
  And I wait for 1 seconds
  And I fill the meta data "<META_DATA_VALUES>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "4" step "5"
  And I wait for 1 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "4" step "6"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "4" step "7"
  And I wait for 2 seconds
  And I click the random name tag created
  And I delete the tag created
  And I wait for 1 seconds

@user5 @web
Scenario: Como usuario me registro e intento crear un nuevo tag sin nombre
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 5 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "1"
  And I wait for 3 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "2"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "3"
  And I wait for 1 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "5"
  And I wait for 1 seconds
  And I verify the error message "<ERROR_NAME_MESSAGE_TAG>"
  And I wait for 1 seconds
