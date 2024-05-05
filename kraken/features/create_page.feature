Feature: Crear page

@user1 @web
Scenario: Como usuario me registro y creo una página con un audio
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the pages menu button
  And I wait for 1 seconds
  And I click in the new page
  And I enter the page title "<PAGE_TITLE>"
  And I click button to add a card
  And I click button to add an audio element
  And I click in the publish page button
  And I click in the continue publish page button
  And I click publish confirm button

@user2 @web
Scenario: Como usuario me registro y creo una página con un embed de youtube
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the pages menu button
  And I wait for 1 seconds
  And I click in the new page
  And I enter the page title "<PAGE_TITLE>"
  And I click button to add a card
  And I click youtube embeds
  And I insert the youtube url
  And I click in the publish page button
  And I click in the continue publish page button
  And I click publish confirm button

@user3 @web
Scenario: Como usuario me registro y creo una página con url definida
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the pages menu button
  And I wait for 1 seconds
  And I click in the new page
  And I enter the page title "<PAGE_TITLE>"
  And I click side options menu
  And I set the page url "<PAGE_URL>"
  And I click side options menu
  And I click in the publish page button
  And I click in the continue publish page button
  And I click publish confirm button

@user4 @web
Scenario: Como usuario me registro y creo una página la previsualizo y la dejo en draft
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the pages menu button
  And I wait for 1 seconds
  And I click in the new page
  And I enter the page title "<PAGE_TITLE_DRAFT>"
  And I click the description field
  And I click in the preview page button
  And I click the back button
  And I click the back button