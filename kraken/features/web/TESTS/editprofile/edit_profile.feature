Feature: edit profile


@user1 @web
Scenario: Como usuario me registro cambio mi contraseña y cierro sesión luego vuelvo a iniciar sesión con la contraseña nueva y cambio la contraseña a la anterior (Ejecutar SOLA!)
  Given I navigate to page "http://localhost:2368/ghost/#/setup"
  When I enter to the setup page "<SETUP_VALUES>"
  And I click the profile button
  And I click the configure button
  And I click the password change button
  And I fill the password fields "<NEW_PASSWORD_FIELDS>"
  And I click the change password button
  And I wait for 2 seconds
  And I click the save profile button
  And I wait for 1 seconds
  And I click the quit button
  And I click the profile button
  And I click the sign out button
  And I enter to the setup page "<SETUP_VALUES_NEW>"
  And I click the profile button
  And I click the configure button
  And I wait for 1 seconds
  And I click the password change button
  And I fill the password fields "<OLD_PASSWORD_FIELDS>"
  And I click the change password button
  And I wait for 2 seconds
  And I click the save profile button
  And I wait for 1 seconds
  And I click the quit button

