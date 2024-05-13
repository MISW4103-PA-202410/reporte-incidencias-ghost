Feature: Crear post

@user1 @web
Scenario: Como usuario me registro y creo un post
  Given I navigate to page "http://34.68.28.121/ghost/#/setup"
  And I wait for 3 seconds
  When I enter to the setup page v "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v3.42" feature "crear-post" scenario "1" step "1"
  And I wait for 1 seconds
  And I click in the add post button v and take a screenshot for version "v3.42" feature "crear-post" scenario "1" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" v and take a screenshot for version "v3.42" feature "crear-post" scenario "1" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" v and take a screenshot for version "v3.42" feature "crear-post" scenario "1" step "4"
  And I wait for 1 seconds
  And I click publish post button v and take a screenshot for version "v3.42" feature "crear-post" scenario "1" step "5"
  And I wait for 1 seconds
  And I click publish post confirm button v and take a screenshot for version "v3.42" feature "crear-post" scenario "1" step "6"
  And I wait for 1 seconds
  And I go back to dashboard v and take a screenshot for version "v3.42" feature "crear-post" scenario "1" step "7"
  And I wait for 2 seconds

@user2 @web
Scenario: Como usuario me registro y creo un post sin titulo
  Given I navigate to page "http://34.68.28.121/ghost/#/setup"
  And I wait for 3 seconds
  When I enter to the setup page v "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v3.42" feature "crear-post" scenario "2" step "1"
  And I wait for 1 seconds
  And I click in the add post button v and take a screenshot for version "v3.42" feature "crear-post" scenario "2" step "2"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" v and take a screenshot for version "v3.42" feature "crear-post" scenario "2" step "3"
  And I wait for 1 seconds
  And I click publish post button v and take a screenshot for version "v3.42" feature "crear-post" scenario "2" step "4"
  And I wait for 1 seconds
  And I click publish post confirm button v and take a screenshot for version "v3.42" feature "crear-post" scenario "2" step "5"
  And I wait for 1 seconds
  And I go back to dashboard v and take a screenshot for version "v3.42" feature "crear-post" scenario "2" step "6"
  And I wait for 2 seconds

@user3 @web
Scenario: Como usuario me registro y creo un post con una imagen
  Given I navigate to page "http://34.68.28.121/ghost/#/setup"
  And I wait for 3 seconds
  When I enter to the setup page v "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v3.42" feature "crear-post" scenario "3" step "1"
  And I wait for 1 seconds
  And I click in the add post button v and take a screenshot for version "v3.42" feature "crear-post" scenario "3" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" v and take a screenshot for version "v3.42" feature "crear-post" scenario "3" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" v and take a screenshot for version "v3.42" feature "crear-post" scenario "3" step "4"
  And I wait for 1 seconds
  And I attach an image to a post v and take a screenshot for version "v3.42" feature "crear-post" scenario "3" step "5"
  And I wait for 1 seconds
  And I click publish post button v and take a screenshot for version "v3.42" feature "crear-post" scenario "3" step "6"
  And I wait for 1 seconds
  And I click publish post confirm button v and take a screenshot for version "v3.42" feature "crear-post" scenario "3" step "8"
  And I wait for 1 seconds
  And I go back to dashboard v and take a screenshot for version "v3.42" feature "crear-post" scenario "4" step "9"
  And I wait for 2 seconds

@user4 @web
Scenario: Como usuario me registro y creo un post programado
  Given I navigate to page "http://34.68.28.121/ghost/#/setup"
  And I wait for 3 seconds
  When I enter to the setup page v "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v3.42" feature "crear-post" scenario "4" step "1"
  And I wait for 2 seconds
  And I click in the add post button v and take a screenshot for version "v3.42" feature "crear-post" scenario "4" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" v and take a screenshot for version "v3.42" feature "crear-post" scenario "4" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" v and take a screenshot for version "v3.42" feature "crear-post" scenario "4" step "4"
  And I wait for 1 seconds
  And I click publish post button v and take a screenshot for version "v3.42" feature "crear-post" scenario "4" step "5"
  And I wait for 1 seconds
  And I click on schedule for later button v and take a screenshot for version "v3.42" feature "crear-post" scenario "4" step "6"
  And I wait for 1 seconds
  And I click publish post confirm button v and take a screenshot for version "v3.42" feature "crear-post" scenario "4" step "7"
  And I wait for 1 seconds
  And I navigate to page "http://34.68.28.121/ghost/#/dashboard"
  And I wait for 1 seconds