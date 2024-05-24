Feature: Create View

@user4 @web
Scenario: Como usuario me registro y cambio la configuración de mis redes sociales de twitter y facebook
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "editar-perfil" scenario "4" step "1"
  And I wait for 2 seconds
  And I click the profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "4" step "2"
  And I wait for 1 seconds
  And I click the configure button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "4" step "3"
  And I wait for 1 seconds
  And I change info profile socialMedia "<SOCIAL_MEDIA>" and take a screenshot for version "v5.82" feature "editar-perfil" scenario "4" step "4"
  And I wait for 1 seconds
  And I click the save profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "4" step "5"
  And I wait for 2 seconds 

