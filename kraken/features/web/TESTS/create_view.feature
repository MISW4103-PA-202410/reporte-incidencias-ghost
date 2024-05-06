Feature: Create View

@user1 @web
Scenario: Como usuario me registro y creo una vista color gris
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click Posts
  And I wait for 1 seconds
  And I click dropdown visibility
  And I wait for 1 seconds
  And I click Paid members only
  And I wait for 1 seconds
  And I click new view
  And I wait for 1 seconds
  And I enter view name "<VIEW_NAME>"
  And I wait for 1 seconds
  And I click Save view
  And I wait for 1 seconds
  And I check the created view "<VIEW_NAME>"
  And I wait for 1 seconds
  And I click new view
  Then I should delete the view


@user2 @web
Scenario: Como usuario me registro y creo una vista pública de color naranja
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  When I enter to the setup page "<SETUP_VALUES>"
  And I click Posts
  And I click dropdown visibility
  And I click Public
  And I click new view
  And I enter view name "<VIEW_NAME>"
  And I select orange color
  And I click Save view
  And I check the created view "<VIEW_NAME>"
  And I click new view
  Then I should delete the view


@user3 @web
Scenario: Como usuario me registro y creo una vista pública de color naranja asociada a la etiqueta news
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  When I enter to the setup page "<SETUP_VALUES>"
  And I click Posts
  And I click the dropdown tags
  And I select news Tag
  And I click dropdown visibility
  And I click Public
  And I click new view
  And I enter view name "<VIEW_NAME>"
  And I select orange color
  And I click Save view
  And I check the created view "<VIEW_NAME>"
  And I click new view
  Then I should delete the view













