Feature: Create View

@user3 @web
Scenario: Como usuario me registro y cambio el nombre y el correo de mi perfil
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  When I enter to the setup page "<SETUP_VALUES>"
  And I click the profile button and take a screenshot for version "<VERSION>" feature "editar-perfil" scenario "3" step "1"
  And I click the configure button and take a screenshot for version "<VERSION>" feature "editar-perfil" scenario "3" step "2"
  And I change info profile "<PROFILE_VALUES>" and take a screenshot for version "<VERSION>" feature "editar-perfil" scenario "3" step "3"
  And I click the save profile button and take a screenshot for version "<VERSION>" feature "editar-perfil" scenario "3" step "4"
  And I wait for 2 seconds 
  And I click the quit button and take a screenshot for version "<VERSION>" feature "editar-perfil" scenario "3" step "5"
  And I click the profile button and take a screenshot for version "<VERSION>" feature "editar-perfil" scenario "3" step "6"
  And I click the sign out button and take a screenshot for version "<VERSION>" feature "editar-perfil" scenario "3" step "7"
  And I sign in with email "<SETUP_VALUES_NEW_EMAIL>" and take a screenshot for version "<VERSION>" feature "editar-perfil" scenario "3" step "8"
  And I click the profile button and take a screenshot for version "<VERSION>" feature "editar-perfil" scenario "3" step "9"
  And I click the configure button and take a screenshot for version "<VERSION>" feature "editar-perfil" scenario "3" step "10"
  And I change info profile "<OLD_PROFILE_VALUES>" and take a screenshot for version "<VERSION>" feature "editar-perfil" scenario "3" step "11"
  And I click the save profile button and take a screenshot for version "<VERSION>" feature "editar-perfil" scenario "3" step "12"
  And I wait for 3 seconds 


