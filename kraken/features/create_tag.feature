Feature: Crear page



  
@user3 @web
Scenario: Como usuario me registro y creo un nuevo tag con una imagen
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 2 seconds
  And I click in the tags menu button and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "3" step "1"
  And I click in the new tag button and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "3" step "2"
  And I fill the tag name "<TAG_NAME>" and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "3" step "3"
  And I click in the add image to tag and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "3" step "4"
  And I wait for 6 seconds
  And I click the save tag button and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "3" step "5"
  And I click in the tags menu button and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "3" step "6"
  And I verify the tag name created is "<TAG_NAME>" and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "3" step "7"



@user4 @web
Scenario: Como usuario me registro y creo un tag con Meta data completa
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 2 seconds
  And I click in the tags menu button and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "4" step "1"
  And I click in the new tag button and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "4" step "2"
  And I fill the tag name "<TAG_NAME>" and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "4" step "3"
  And I click in the expand meta data button and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "4" step "4"
  And I wait for 1 seconds
  And I fill the meta data "<META_DATA_VALUES>" and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "4" step "5"
  And I click the save tag button and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "4" step "6"
  And I click in the tags menu button and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "4" step "7"
  And I verify the tag name created is "<TAG_NAME>" and take a screenshot for version "<VERSION>" feature "crear-tag" scenario "4" step "8"
