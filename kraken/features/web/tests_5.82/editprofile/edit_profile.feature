Feature: edit profile


@user1 @web
Scenario: Como usuario me registro cambio mi contraseña y cierro sesión luego vuelvo a iniciar sesión con la contraseña nueva y cambio la contraseña a la anterior (Ejecutar SOLA!)
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "1"
  And I wait for 1 seconds
  And I click the profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "1"
  And I wait for 1 seconds
  And I click the configure button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "2"
  And I wait for 1 seconds
  And I click the change password button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "3"
  And I wait for 1 seconds
  And I fill the password fields "<NEW_PASSWORD_FIELDS>" and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "4"
  And I wait for 1 seconds
  And I click the change password button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "5"
  And I wait for 2 seconds 
  And I click the save profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "6"
  And I wait for 1 seconds
  And I click the quit button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "7"
  And I wait for 1 seconds
  And I click the profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "8"
  And I wait for 1 seconds
  And I click the sign out button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "9"
  And I wait for 1 seconds
  And I enter to the setup page "<SETUP_VALUES_NEW>" and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "10"
  And I wait for 1 seconds
  And I click the profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "11"
  And I wait for 1 seconds
  And I click the configure button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "12"
  And I wait for 1 seconds
  And I click the password change button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "13"
  And I wait for 1 seconds
  And I fill the password fields "<OLD_PASSWORD_FIELDS>" and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "14"
  And I wait for 1 seconds
  And I click the change password button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "15"
  And I wait for 2 seconds
  And I click the save profile button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "16"
  And I wait for 1 seconds
  And I click the quit button and take a screenshot for version "v5.82" feature "editar-perfil" scenario "1" step "17"

