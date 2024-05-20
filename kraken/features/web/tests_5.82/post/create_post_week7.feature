Feature: Crear post

@user1 @web
Scenario: Como usuario me registro y creo un post con una url random
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "4"
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I set a random name for the post slug
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds

@user2 @web
Scenario: Como usuario me registro y creo un post con una opción aleatoria de privacidad del post
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "4"
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I click on the post access select
  And I wait for 1 seconds
  And I set a semi-random post access value
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds

@user3 @web
Scenario: Como usuario me registro y creo un post con un extracto aleatorio
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "4"
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I set a random excerpt
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds

@user4 @web
Scenario: Como usuario me registro y creo un post con un título generado aleatoriamente
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I set a random title for the post
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "4"
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I set a random excerpt
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds

@user5 @web
Scenario: Como usuario me registro y creo un post con un título y una desripción generadas aleatoriamente
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I set a random title for the post
  And I wait for 1 seconds
  And I set a random description for the post
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I set a random excerpt
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds

@user6 @web
Scenario: Como usuario me registro y creo un post con una imagen aleatoria dentro un set de imagenes definidas
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "1"
  And I wait for 1 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "4"
  And I wait for 1 seconds
  And I attach a random image from a pool of images
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "6"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "7"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "8"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "9"
  And I wait for 2 seconds

@user7 @web
Scenario: Como usuario me registro y publico un post y luego lo elimino
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "1"
  And I wait for 1 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "4"
  And I wait for 1 seconds
  And I attach a random image from a pool of images
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "6"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "7"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "8"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "9"
  And I wait for 2 seconds


@user8 @web
Scenario: Como usuario me registro y creo un post con una url númerica
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "4"
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I set a random name for the post slug numeric only
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds

@user9 @web
Scenario: Como usuario me registro y creo un post con una url alfanúmerica
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "4"
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I set a random name for the post slug with alphanumeric and numeric characters combined
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds


@user10 @web
Scenario: Como usuario me registro y creo un post con caracteres especiales
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "4"
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I set a random name for the post slug with special characters only and verify is not allowed
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds

@user11 @web
Scenario: Como usuario me registro y creo un post con una url con espacios en blanco
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "4"
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I set a random name for the post slug with whitespaces
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds

@user12 @web
Scenario: Como usuario me registro intento crear un post con una imagen adjunta que es invalida
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "1"
  And I wait for 1 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "4"
  And I wait for 1 seconds
  And I attach a wrong type of image
  And I wait for 3 seconds
  And I verify any image wasn't attached
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "6"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "7"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "8"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "3" step "9"
  And I wait for 2 seconds

@user13 @web
Scenario: Creo un post con un titúlo y un archivo .csv
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "1"
  And I wait for 1 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "3"
  And I wait for 1 seconds
  And I click in the add element button in posts
  And I wait for 1 seconds
  And I click in the add file button in posts and attach the .csv file
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "8"
  And I wait for 2 seconds

@user14 @web
Scenario: Creo un post con un titúlo y un audio de tipo mp3
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "1"
  And I wait for 1 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "3"
  And I wait for 1 seconds
  And I click in the add element button in posts
  And I wait for 1 seconds
  And I click in the add audio button in posts and attach a .mp3 file
  And I wait for 2 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "8"
  And I wait for 2 seconds

@user15 @web
Scenario: Creo un post con un titúlo y un audio de tipo aac
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "1"
  And I wait for 1 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "3"
  And I wait for 1 seconds
  And I click in the add element button in posts
  And I wait for 1 seconds
  And I click in the add audio button in posts and attach a .aac file
  And I wait for 2 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "8"
  And I wait for 2 seconds

@user16 @web
Scenario: Creo un post con un titúlo y un audio de tipo ogg
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "1"
  And I wait for 1 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "3"
  And I wait for 1 seconds
  And I click in the add element button in posts
  And I wait for 1 seconds
  And I click in the add audio button in posts and attach a .ogg file
  And I wait for 2 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "8"
  And I wait for 2 seconds

@user17 @web
Scenario: Creo un post con un titúlo y un audio de tipo wav
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "1"
  And I wait for 1 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "3"
  And I wait for 1 seconds
  And I click in the add element button in posts
  And I wait for 1 seconds
  And I click in the add audio button in posts and attach a .wav file
  And I wait for 2 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "8"
  And I wait for 2 seconds

@user18 @web
Scenario: Como usuario me registro y creo un post con un título y una desripción de más de 500 palabras generadas aleatoriamente
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I set a random title for the post
  And I wait for 1 seconds
  And I set a random description of more than 500 words for the post
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I set a random excerpt
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds

@user19 @web
Scenario: Como usuario me registro y creo un post con un extracto de únicamente caracteres especiales
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "4"
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I set a random excerpt with special characters
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds

@user20 @web
Scenario: Como usuario me registro y creo un post con un extracto de únicamente vacíos
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "4"
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I set an empty lenght void random excerpt
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds

@user21 @web
Scenario: Como usuario me registro e intento crear un post con un extracto de más de 300 caracteres
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "4"
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I set more than 300 characters in excerpt
  And I wait for 1 seconds
  And I check that excerpt throws error for more than 300 characters

@user22 @web
Scenario: Como usuario me registro y creo un post destacado
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 2 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "1"
  And I wait for 3 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "3"
  And I wait for 1 seconds
  And I enter a description for the post "<POST_DESCRIPTION>" and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "4"
  And I wait for 1 seconds
  And I click the side bar menu option in posts
  And I wait for 1 seconds
  And I click on the feature this post option
  And I wait for 1 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "5" step "8"
  And I wait for 2 seconds

@user23 @web
Scenario: Creo un post con un titúlo y agrego un número random de divisores
  Given I navigate to page "http://34.170.53.250/ghost/#/setup"
  And I wait for 1 seconds
  When I enter to the setup page "<SETUP_VALUES_REMOTE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "1"
  And I wait for 1 seconds
  And I click in the add post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "2"
  And I wait for 1 seconds
  And I enter a title for the post "<POST_TITLE>" and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "3"
  And I wait for 1 seconds
  And I click in the add element button in posts
  And I wait for 1 seconds
  And I add a random number of dividers
  And I wait for 2 seconds
  And I click publish post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "5"
  And I wait for 1 seconds
  And I click final review post button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "6"
  And I wait for 1 seconds
  And I click publish confirm button and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "7"
  And I wait for 1 seconds
  And I go back to dashboard and take a screenshot for version "v5.82" feature "crear-post" scenario "1" step "8"
  And I wait for 2 seconds