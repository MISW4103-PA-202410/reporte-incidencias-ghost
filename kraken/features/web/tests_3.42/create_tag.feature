Feature: Crear tag


@user1 @web
Scenario: Como usuario me registro y creo un nuevo tag
  Given I navigate to page "http://localhost:2369/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page v "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the tags menu button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "1" step "2"
  And I click in the new tag button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "1" step "3"
  And I fill the tag name "<TAG_NAME>" v and take a screenshot for version "v3.42" feature "crear-tag" scenario "1" step "4"
  And I click the save tag button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "1" step "5"
  And I wait for 1 seconds
  And I click in the tags menu button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "1" step "6"
  And I wait for 1 seconds
  And I verify the tag name created is "<TAG_NAME>" v and take a screenshot for version "v3.42" feature "crear-tag" scenario "1" step "7"

@user2 @web
Scenario: Como usuario me registro y creo un nuevo tag con una imagen
  Given I navigate to page "http://localhost:2369/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page v "<SETUP_VALUES>"
  And I click in the tags menu button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "1"
  And I click in the new tag button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "2"
  And I fill the tag name "<TAG_NAME>" v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "3"
  And I click in the add image to tag v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "4"
  And I wait for 6 seconds
  And I click the save tag button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "5"
  And I click in the tags menu button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "6"
  And I verify the tag name created is "<TAG_NAME>" v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "7"



@user3 @web
Scenario: Como usuario me registro y creo un tag con Meta data completa
  Given I navigate to page "http://localhost:2369/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page v "<SETUP_VALUES>"
  And I click in the tags menu button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "3" step "1"
  And I click in the new tag button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "3" step "2"
  And I fill the tag name "<TAG_NAME>" v and take a screenshot for version "v3.42" feature "crear-tag" scenario "3" step "3"
  And I click in the expand meta data button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "3" step "4"
  And I wait for 2 seconds
  And I fill the meta data "<META_DATA_VALUES>" v and take a screenshot for version "v3.42" feature "crear-tag" scenario "3" step "5"
  And I click the save tag button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "3" step "6"
  And I click in the tags menu button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "3" step "7"
  And I verify the tag name created is "<TAG_NAME>" v and take a screenshot for version "v3.42" feature "crear-tag" scenario "3" step "8"