Feature: Crear post

@user1 @web
Scenario: Como primer usuario me registro y creo un post
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 5 seconds