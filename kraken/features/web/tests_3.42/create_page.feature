Feature: Crear page

@user1 @web
Scenario: Como usuario me registro y creo una página con un embed de youtube
  Given I navigate to page "http://localhost:2369/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page v "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the pages menu button v and take a screenshot for version "v3.42" feature "crear-page" scenario "1" step "1"
  And I wait for 1 seconds
  And I click in the new page button v and take a screenshot for version "v3.42" feature "crear-page" scenario "1" step "2"
  And I wait for 1 seconds
  And I click button to add a card v and take a screenshot for version "v3.42" feature "crear-page" scenario "1" step "3"
  And I click youtube embeds button v and take a screenshot for version "v3.42" feature "crear-page" scenario "1" step "4"
  And I insert the youtube url v and take a screenshot for version "v3.42" feature "crear-page" scenario "1" step "5"
  And I enter the page title "<PAGE_TITLE>" v and take a screenshot for version "v3.42" feature "crear-page" scenario "1" step "6"
  And I wait for 2 seconds
  And I click in the publish page button v and take a screenshot for version "v3.42" feature "crear-page" scenario "1" step "7"
  And I click in the continue publish page button v and take a screenshot for version "v3.42" feature "crear-page" scenario "1" step "8"
  And I wait for 1 seconds
  And I click publish confirm button v and take a screenshot for version "v3.42" feature "crear-page" scenario "1" step "9"
  And I wait for 2 seconds




@user2 @web
Scenario: Como usuario me registro y creo una página con url definida
  Given I navigate to page "http://localhost:2369/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page v "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the pages menu button v and take a screenshot for version "v3.42" feature "crear-page" scenario "2" step "1"
  And I wait for 1 seconds
  And I click in the new page button v and take a screenshot for version "v3.42" feature "crear-page" scenario "2" step "2"
  And I enter the page title "<PAGE_TITLE>" v and take a screenshot for version "v3.42" feature "crear-page" scenario "2" step "3"
  And I click side options menu v and take a screenshot for version "v3.42" feature "crear-page" scenario "2" step "4"
  And I wait for 1 seconds
  And I set the page url "<PAGE_URL>" v and take a screenshot for version "v3.42" feature "crear-page" scenario "2" step "5"
  And I close the side options menu v and take a screenshot for version "v3.42" feature "crear-page" scenario "2" step "6"
  And I click in the publish page button v and take a screenshot for version "v3.42" feature "crear-page" scenario "2" step "7"
  And I click in the continue publish page button v and take a screenshot for version "v3.42" feature "crear-page" scenario "2" step "8"
  And I wait for 1 seconds
  And I click publish confirm button v and take a screenshot for version "v3.42" feature "crear-page" scenario "2" step "9"
