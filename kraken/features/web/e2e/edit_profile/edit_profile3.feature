Feature: Create View

@user3 @web
Scenario: Como usuario me registro y cambio el nombre y el correo de mi perfil
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "1"
  And I wait for 2 seconds
  And I click the profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "2"
  And I wait for 1 seconds
  And I click the configure button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "3"
  And I wait for 1 seconds
  And I change info profile "<PROFILE_VALUES>" and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "4"
  And I wait for 1 seconds
  And I click the save profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "5"
  And I wait for 2 seconds 
  And I click the quit button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "6"
  And I wait for 1 seconds
  And I click the profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "7"
  And I wait for 1 seconds
  And I click the sign out button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "8"
  And I wait for 1 seconds
  And I sign in with email "<SETUP_VALUES_NEW_EMAIL>" and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "9"
  And I wait for 1 seconds
  And I click the profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "10"
  And I wait for 1 seconds
  And I click the configure button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "11"
  And I wait for 1 seconds
  And I change info profile "<OLD_PROFILE_VALUES>" and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "12"
  And I wait for 1 seconds
  And I click the save profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "3" step "13"
  And I wait for 2 seconds 


