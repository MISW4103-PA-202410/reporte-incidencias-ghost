Feature: Tags

@user6 @web
Scenario: Como usuario me registro y creo un nuevo tag con un color aleatorio
 Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "1"
  And I wait for 3 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "2"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "3"
  And I wait for 1 seconds
  And I fill the tag name "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "4"
  And I choose a random color for the tag
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "2" step "5"
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "2" step "6"
  And I click the tag created with the name "<TAG_NAME>"
  And I verify the random color in the tag
  And I delete the tag created
  And I wait for 2 seconds


@user7 @web
Scenario: Como usuario me registro y creo un nuevo tag con nombre aleatorio
 Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "1"
  And I wait for 3 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "2"
  And I wait for 1 seconds
  And I click in the new tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "3"
  And I wait for 1 seconds
  And I fill with a random name the tag name
  And I wait for 1 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "1" step "6"
  And I wait for 1 seconds
  And I click the random name tag created
  And I verify the tag name created is the same as the random name
  And I delete the tag created
  And I wait for 2 seconds

@user8 @web
Scenario: Como usuario me registro y creo un nuevo tag con una imagen aleatoria
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
  And I click in the add image to tag and select a random image
  And I wait for 1 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I wait for 2 seconds
  And I verify the tag name created is "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "7"
  And I click the tag created with the name "<TAG_NAME>"
  And I delete the tag created
  And I wait for 2 seconds


@user9 @web
Scenario: Como usuario me registro y creo un nuevo tag con descripción aleatoria
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
  And I fill the description with random text
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I wait for 2 seconds
  And I verify the tag name created is "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "7"
  And I click the tag created with the name "<TAG_NAME>"
  And I delete the tag created
  And I wait for 2 seconds

@user10 @web
Scenario: Como usuario me registro y creo un nuevo tag con descripción aleatoria
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
  And I fill the tag with basic random information
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I wait for 1 seconds
  And I cancel the tag creation
  And I wait for 2 seconds
  And I verify that there is no tag with the name "<TAG_NAME>"
  And I wait for 2 seconds
