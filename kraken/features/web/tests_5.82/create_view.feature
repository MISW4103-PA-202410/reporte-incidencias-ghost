Feature: Create View

@user1 @web
Scenario: Como usuario me registro y creo una vista color gris
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click Posts and take a screenshot for version "v5.82" feature "crear-view" scenario "1" step "1"
  And I wait for 1 seconds
  And I click dropdown visibility and take a screenshot for version "v5.82" feature "crear-view" scenario "1" step "2"
  And I wait for 1 seconds
  And I click Paid members only and take a screenshot for version "v5.82" feature "crear-view" scenario "1" step "3"
  And I wait for 1 seconds
  And I click new view and take a screenshot for version "v5.82" feature "crear-view" scenario "1" step "4"
  And I wait for 1 seconds
  And I enter view name "<VIEW_NAME>" and take a screenshot for version "v5.82" feature "crear-view" scenario "1" step "5"
  And I wait for 1 seconds
  And I click Save view and take a screenshot for version "v5.82" feature "crear-view" scenario "1" step "6"
  And I wait for 1 seconds
  And I check the created view "<VIEW_NAME>" and take a screenshot for version "v5.82" feature "crear-view" scenario "1" step "7"
  And I wait for 1 seconds
  And I click new view and take a screenshot for version "v5.82" feature "crear-view" scenario "1" step "8"
  Then I should delete the view and take a screenshot for version "v5.82" feature "crear-view" scenario "1" step "9"


@user2 @web
Scenario: Como usuario me registro y creo una vista pública de color naranja
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click Posts and take a screenshot for version "v5.82" feature "crear-view" scenario "2" step "1"
  And I click dropdown visibility and take a screenshot for version "v5.82" feature "crear-view" scenario "2" step "2"
  And I click Public and take a screenshot for version "v5.82" feature "crear-view" scenario "2" step "3"
  And I click new view and take a screenshot for version "v5.82" feature "crear-view" scenario "2" step "4"
  And I enter view name "<VIEW_NAME>" and take a screenshot for version "v5.82" feature "crear-view" scenario "2" step "5"
  And I select orange color and take a screenshot for version "v5.82" feature "crear-view" scenario "2" step "6"
  And I click Save view and take a screenshot for version "v5.82" feature "crear-view" scenario "2" step "7"
  And I check the created view "<VIEW_NAME>" and take a screenshot for version "v5.82" feature "crear-view" scenario "2" step "8"
  And I click new view and take a screenshot for version "v5.82" feature "crear-view" scenario "2" step "9"
  Then I should delete the view and take a screenshot for version "v5.82" feature "crear-view" scenario "2" step "10"


@user3 @web
Scenario: Como usuario me registro y creo una vista pública de color naranja asociada a la etiqueta news
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  When I enter to the setup page "<SETUP_VALUES>"
  And I wait for 1 seconds
  And I click Posts and take a screenshot for version "v5.82" feature "crear-view" scenario "3" step "1"
  And I click the dropdown tags and take a screenshot for version "v5.82" feature "crear-view" scenario "3" step "2"
  And I select news Tag and take a screenshot for version "v5.82" feature "crear-view" scenario "3" step "3"
  And I click dropdown visibility and take a screenshot for version "v5.82" feature "crear-view" scenario "3" step "4"
  And I click Public and take a screenshot for version "v5.82" feature "crear-view" scenario "3" step "5"
  And I click new view and take a screenshot for version "v5.82" feature "crear-view" scenario "3" step "6"
  And I enter view name "<VIEW_NAME>" and take a screenshot for version "v5.82" feature "crear-view" scenario "3" step "7"
  And I select orange color and take a screenshot for version "v5.82" feature "crear-view" scenario "3" step "8"
  And I click Save view and take a screenshot for version "v5.82" feature "crear-view" scenario "3" step "9"
  And I check the created view "<VIEW_NAME>" and take a screenshot for version "v5.82" feature "crear-view" scenario "3" step "10"
  And I click new view and take a screenshot for version "v5.82" feature "crear-view" scenario "3" step "11"
  Then I should delete the view and take a screenshot for version "v5.82" feature "crear-view" scenario "3" step "12"













