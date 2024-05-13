Feature: Create View

@user2 @web
Scenario: Como usuario me registro y cambio la configuración agregando una imagen de portada
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  When I enter to the setup page "<SETUP_VALUES>"
  And I click the profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "2" step "1"
  And I click the configure button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "2" step "2"
  And I click the cover image button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "2" step "3"
  And I wait for 5 seconds
  And I click the save profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "2" step "4"
  And I wait for 1 seconds
  And I click the quit button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "2" step "5"
  And I click the profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "2" step "6"
  And I click the configure button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "2" step "7"
  And I click the cover image button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "2" step "8"
  And I click the save profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "2" step "9"
  And I wait for 1 seconds

