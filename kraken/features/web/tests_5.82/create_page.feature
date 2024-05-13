Feature: Crear page

@user1 @web
Scenario: Como usuario me registro y creo una página con un audio
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "<VERSION>" feature "crear-page" scenario "1" step "1"
  And I wait for 1 seconds
  And I click in the pages menu button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "1" step "2"
  And I wait for 1 seconds
  And I click in the new page and take a screenshot for version "<VERSION>" feature "crear-page" scenario "1" step "3"
  And I wait for 1 seconds
  And I enter the page title "<PAGE_TITLE>" and take a screenshot for version "<VERSION>" feature "crear-page" scenario "1" step "4"
  And I wait for 1 seconds
  And I click button to add a card and take a screenshot for version "<VERSION>" feature "crear-page" scenario "1" step "5"
  And I wait for 1 seconds
  And I click button to add an audio element and take a screenshot for version "<VERSION>" feature "crear-page" scenario "1" step "6"
  And I wait for 1 seconds
  And I click in the publish page button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "1" step "7"
  And I wait for 1 seconds
  And I click in the continue publish page button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "1" step "8"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "1" step "9"

@user2 @web
Scenario: Como usuario me registro y creo una página con un embed de youtube
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "<VERSION>" feature "crear-page" scenario "2" step "1"
  And I wait for 1 seconds
  And I click in the pages menu button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "2" step "2"
  And I wait for 1 seconds
  And I click in the new page and take a screenshot for version "<VERSION>" feature "crear-page" scenario "2" step "3"
  And I wait for 1 seconds
  And I enter the page title "<PAGE_TITLE>" and take a screenshot for version "<VERSION>" feature "crear-page" scenario "2" step "4"
  And I wait for 1 seconds
  And I click button to add a card and take a screenshot for version "<VERSION>" feature "crear-page" scenario "2" step "5"
  And I wait for 1 seconds
  And I click youtube embeds and take a screenshot for version "<VERSION>" feature "crear-page" scenario "2" step "6"
  And I wait for 1 seconds
  And I insert the youtube url and take a screenshot for version "<VERSION>" feature "crear-page" scenario "2" step "7"
  And I wait for 1 seconds
  And I click in the publish page button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "2" step "8"
  And I wait for 1 seconds
  And I click in the continue publish page button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "2" step "9"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "2" step "10"

@user3 @web
Scenario: Como usuario me registro y creo una página con url definida
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "<VERSION>" feature "crear-page" scenario "3" step "1"
  And I wait for 1 seconds
  And I click in the pages menu button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "3" step "2"
  And I wait for 1 seconds
  And I click in the new page and take a screenshot for version "<VERSION>" feature "crear-page" scenario "3" step "3"
  And I wait for 1 seconds
  And I enter the page title "<PAGE_TITLE>" and take a screenshot for version "<VERSION>" feature "crear-page" scenario "3" step "4"
  And I wait for 1 seconds
  And I click side options menu and take a screenshot for version "<VERSION>" feature "crear-page" scenario "3" step "5"
  And I wait for 1 seconds
  And I set the page url "<PAGE_URL>" and take a screenshot for version "<VERSION>" feature "crear-page" scenario "3" step "6"
  And I wait for 1 seconds
  And I click side options menu and take a screenshot for version "<VERSION>" feature "crear-page" scenario "3" step "7"
  And I wait for 1 seconds
  And I click in the publish page button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "3" step "8"
  And I wait for 1 seconds
  And I click in the continue publish page button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "3" step "9"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "3" step "10"

@user4 @web
Scenario: Como usuario me registro y creo una página la previsualizo y la dejo en draft
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "<VERSION>" feature "crear-page" scenario "4" step "1"
  And I wait for 1 seconds
  And I click in the pages menu button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "4" step "2"
  And I wait for 1 seconds
  And I click in the new page and take a screenshot for version "<VERSION>" feature "crear-page" scenario "4" step "3"
  And I wait for 1 seconds
  And I enter the page title "<PAGE_TITLE_DRAFT>" and take a screenshot for version "<VERSION>" feature "crear-page" scenario "4" step "4"
  And I wait for 1 seconds
  And I click the description field and take a screenshot for version "<VERSION>" feature "crear-page" scenario "4" step "5"
  And I wait for 1 seconds
  And I click in the preview page button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "4" step "6"
  And I wait for 1 seconds
  And I click the back button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "4" step "7"
  And I wait for 1 seconds
  And I click the back button and take a screenshot for version "<VERSION>" feature "crear-page" scenario "4" step "8"