Feature: Crear post

    @run @posts
    Scenario: Crear un post básico con título y un párrafo de cuerpo y publicar
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Posts"
        And doy click en "New post"
        And ingreso "Post de prueba" como nombre del post
        And ingreso "Contenido de post de prueba" como contenido
        When publico el post
        Then abro la sección de "Posts"
        And el post debe existir en la lista

    @done @run @posts
    Scenario: Crear un post sin título y publicar
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Posts"
        And doy click en "New post"
        And ingreso "" como nombre del post
        And ingreso "Contenido de post de prueba sin título" como contenido
        When publico el post
        Then abro la sección de "Posts"
        And el post "(Untitled)" debe existir en la lista

    @run @posts
    Scenario: Crear un post básico con feature image y publicar
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Posts"
        And doy click en "New post"
        And ingreso "Post con imagen" como nombre del post
        And ingreso "Contenido de post de prueba con imagen" como contenido
        And agrego una imagen destacada al post
        When publico el post
        Then abro la sección de "Posts"
        And el post debe existir en la lista

    @run @posts
    Scenario: Crear un post y programar su publicación en el futuro
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Posts"
        And doy click en "New post"
        And ingreso "Post de prueba programado" como nombre del post
        And ingreso "Contenido de post de prueba programado" como contenido
        When programo la publicación del post
        Then abro la sección de "Posts"
        And me dirijo a los Posts programados
        And el post debe existir en la lista