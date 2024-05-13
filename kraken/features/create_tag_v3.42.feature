Feature: Crear tag

@user1 @web
Scenario: Como usuario me registro y creo un nuevo tag con una imagen
  Given I navigate to page "http://34.68.28.121/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page v "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v3.42" feature "crear-tag" scenario "1" step "1"
  And I wait for 1 seconds
  And I click in the tags menu button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "2"
  And I wait for 1 seconds
  And I click in the new tag button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "3"
  And I wait for 1 seconds
  And I fill the tag name "<TAG_NAME>" v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "4"
  And I wait for 1 seconds
  And I click in the add image to tag v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "5"
  And I wait for 1 seconds
  And I click the save tag button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "6"
  And I wait for 1 seconds
  And I click in the tags menu button v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "7"
  And I wait for 1 seconds
  And I verify the tag name created is "<TAG_NAME>" v and take a screenshot for version "v3.42" feature "crear-tag" scenario "2" step "8"
