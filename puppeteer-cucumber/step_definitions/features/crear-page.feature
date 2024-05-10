Feature: Crear page

    @run @pages
    Scenario: Crear una page con un título y un audio
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "Page de prueba" como nombre de la página
        And agrego un audio a la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el audio se agregó correctamente

    @run @pages
    Scenario: Crear una page con un título, un párrafo y un video embebido de YouTube
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "Página de prueba YT" como nombre de la página
        And ingreso "contenido de la página con link a youtube" como contenido de la página
        And agrego un video embebido de YouTube con link "https://www.youtube.com/watch?v=edVYLVDDgh0"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video se agregó correctamente
       
    @run @pages
    Scenario: Crear una page básica con una URL definida (slug)
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "Page de prueba con slug" como nombre de la página
        And abro las configuraciones de la página
        And cambio el slug de la página por "slug-de-prueba"
        And cierro las configuraciones de la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And puedo navegar a la URL con el slug asignado

    @run @pages @debug
    Scenario: Crear una page básica, previsualizarla y dejarla en borrador
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "Page de prueba con preview" como nombre de la página
        And ingreso "contenido de la página con preview" como contenido de la página
        When ingreso a la previsualización
        Then puedo previsualizar correctamente la página
        And salgo de la previsualización
        When guardo el borrador de la página
        Then la página debe existir en la lista
        And la página debe tener el estado "Draft"