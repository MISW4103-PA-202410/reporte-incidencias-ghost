Feature: Crear post

@user1 @web
Scenario: Como primer usuario me registro y creo un post
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter blog title "<BLOG_TITLE>"
  And I wait for 1 seconds
  And I enter full name "<FULL_NAME>"
  And I wait for 1 seconds
  And I enter email address "<EMAIL>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click create account and start publishing button
  And I wait for 10 seconds