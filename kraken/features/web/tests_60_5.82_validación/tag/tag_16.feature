Feature: Tags

@user16 @web
Scenario: Como usuario me registro y creo un nuevo tag con una imagen aleatoria y luego lo edito para borrar la imagen
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "16"
  And I wait for 1 seconds
  And I click in the add image to tag and select a random image
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click the random name tag created
  And I delete the image created
  And I wait for 1 seconds
  And I click the save tag button
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click the random name tag created
  And I wait for 1 seconds
  And I verify that the image was deleted
  And I delete the tag created

@user17 @web
Scenario: Como usuario me registro y creo un nuevo tag con una imagen aleatoria y luego quito el nombre y pongo uno aleatorio
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I wait for 1 seconds
  And I fill with a random name the tag name "17"
  And I wait for 1 seconds
  And I click the save tag button
  And I wait for 1 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click the random name tag created
  And I fill the name of the tag for a random name
  And I wait for 1 seconds
  And I click the save tag button
  And I click in the tags menu button
  And I click the tag created with the random name
  And I wait for 1 seconds
  And I delete the tag created


@user18 @web
Scenario: Como usuario me registro y creo un nuevo tag con descripción aleatoria y quito la descripción y luego guardo
 Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>"
  And I wait for 2 seconds
  And I click in the tags menu button
  And I wait for 1 seconds
  And I click in the new tag button
  And I fill with a random name the tag name "18"
  And I fill the description with random text
  And I click the save tag button
  And I click in the tags menu button
  And I click the random name tag created
  And I delete the description
  And I click the save tag button
  And I click in the tags menu button
  And I click the random name tag created
  And I wait for 2 seconds
  And I verify the description is empty
  And I delete the tag created