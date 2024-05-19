Feature: Tags

@user26 @web
Scenario: Como usuario me registro y creo un nuevo tag con imagen en Facebook, X y el Tag
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
  And I fill the Facebook image with a random one
  And I wait for 1 seconds
  And I fill the X image with a random one
  And I wait for 1 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I wait for 2 seconds
  And I verify the tag name created is "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "7"
  And I click the tag created with the name "<TAG_NAME>"
  And I delete the tag created
  And I wait for 1 seconds


@user27 @web
Scenario: Como usuario me registro y creo un nuevo tag con la información de X completa
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
  And I fill all x fields with random values with length between 50 and 70 characters
  And I wait for 1 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I wait for 2 seconds
  And I verify the tag name created is "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "7"
  And I click the tag created with the name "<TAG_NAME>"
  And I delete the tag created
  And I wait for 1 seconds


@user28 @web
Scenario: Como usuario me registro y creo un nuevo tag en x con 75 caracteres en el título
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
  And I fill the X title with 75 characters
  And I wait for 1 seconds
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "6"
  And I wait for 2 seconds
  And I verify the tag name created is "<TAG_NAME>" and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "7"
  And I click the tag created with the name "<TAG_NAME>"
  And I delete the tag created
  And I wait for 1 seconds


@user30 @web
Scenario: Como usuario me registro y creo un nuevo tag con una URL canónica inválida
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
  And I click in the expand meta data button and take a screenshot for version "v5.82" feature "crear-tag" scenario "4" step "4"
  And I wait for 1 seconds
  And I fill the metadata URL canonic with invalid URL
  And I click the save tag button and take a screenshot for version "v5.82" feature "crear-tag" scenario "3" step "5"
  And I verify that the metadata URL canonic is invalid
