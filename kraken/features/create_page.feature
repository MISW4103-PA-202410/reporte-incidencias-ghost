Feature: Crear page

@user1 @web
Scenario: Como usuario me registro y creo una págoma
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