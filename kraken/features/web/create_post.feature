Feature: Crear post

@user1 @web
Scenario: Como usuario me registro y creo un post
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the add post button
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>"
  And I enter a description for the post "<POST_DESCRIPTION>"
  And I click publish post button
  And I click final review post button
  And I click publish confirm button
  And I go back to dashboard
  And I wait for 2 seconds

@user2 @web
Scenario: Como usuario me registro y creo un post sin titulo
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the add post button
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>"
  And I click publish post button
  And I click final review post button
  And I click publish confirm button
  And I go back to dashboard
  And I wait for 2 seconds

@user3 @web
Scenario: Como usuario me registro y creo un post con una imagen
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the add post button
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>"
  And I enter a description for the post "<POST_DESCRIPTION>"
  And I attach an image to a post
  And I click publish post button
  And I click final review post button
  And I click publish confirm button
  And I go back to dashboard
  And I wait for 2 seconds

@user4 @web
Scenario: Como usuario me registro y creo un post programado
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click in the add post button
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>"
  And I enter a description for the post "<POST_DESCRIPTION>"
  And I click publish post button
  And I wait for 1 seconds
  And I click on publish settings button
  And I click on schedule for later button
  And I click final review post button
  And I click publish confirm button
  And I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds