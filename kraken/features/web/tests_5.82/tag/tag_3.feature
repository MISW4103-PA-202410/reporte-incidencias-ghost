Feature: Tags

@user11 @web
Scenario: Como usuario me registro y creo un nuevo tag con header pseudo-aleatorio
 Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "1"
  And I wait for 3 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "1"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "2"
  And I wait for 1 seconds
  And I fill the tag name "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "3"
  And I wait for 1 seconds
  And I fill the header with random text
  And I wait for 5 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I wait for 2 seconds
  And I verify the tag name created is "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "7"
  And I click the tag created with the name "<TAG_NAME>"
  And I delete the tag created
  And I wait for 1 seconds


@user12 @web
Scenario: Como usuario me registro y creo un nuevo tag con footer pseudo-aleatorio
 Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "1"
  And I wait for 3 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "1"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "2"
  And I wait for 1 seconds
  And I fill the tag name "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "3"
  And I wait for 1 seconds
  And I fill the footer with random text
  And I wait for 5 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I wait for 2 seconds
  And I verify the tag name created is "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "7"
  And I click the tag created with the name "<TAG_NAME>"
  And I delete the tag created
  And I wait for 1 seconds


@user13 @web
Scenario: Como usuario me registro y creo un nuevo tag con título de integración de Facebook aleatoria
 Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "1"
  And I wait for 3 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "1"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "2"
  And I wait for 1 seconds
  And I fill the tag name "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "3"
  And I wait for 1 seconds
  And I fill the facebook title with a random length between 1 and 100 characters
  And I wait for 5 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I wait for 2 seconds
  And I verify the tag name created is "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "7"
  And I click the tag created with the name "<TAG_NAME>"
  And I delete the tag created
  And I wait for 1 seconds


@user14 @web
Scenario: Como usuario me registro y creo un nuevo tag con descripción de Facebook aleatoria entre 40 y 65 carácteres
 Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "1"
  And I wait for 3 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "1"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "2"
  And I wait for 1 seconds
  And I fill the tag name "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "3"
  And I wait for 1 seconds
  And I fill the facebook description with a random length between 40 and 65 characters
  And I wait for 5 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I wait for 2 seconds
  And I verify the tag name created is "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "7"
  And I click the tag created with the name "<TAG_NAME>"
  And I delete the tag created
  And I wait for 1 seconds


