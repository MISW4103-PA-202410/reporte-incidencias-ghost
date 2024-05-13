Feature: Create View

@user5 @web
Scenario: Como usuario me registro y listo la actividad del usuario
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  When I enter to the setup page "<SETUP_VALUES>"
  And I click the profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "5" step "1"
  And I click the configure button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "5" step "2"
  And I wait for 1 seconds
  And I click the dot points button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "5" step "3"
  And I wait for 2 seconds
  And I click the userActivityButton button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "5" step "4"
  And I verify history and take a screenshot for version "v5.82" feature "editar-perfil" scenario "5" step "5"
  And I wait for 2 seconds


