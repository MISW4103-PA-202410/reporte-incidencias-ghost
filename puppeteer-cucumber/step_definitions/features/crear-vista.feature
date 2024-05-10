Feature: Crear vista

    @run @views
    Scenario: Crear vista para filtro de usuario
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Posts"
        And aplico un filtro de usuario
        When creo una vista con nombre "Admin View"
        Then abro la sección de "Posts"
        And la vista con nombre "Admin View" se encuentra en el menu
        And borro la vista con nombre "Admin View"

    @done @run @views
    Scenario: Crear vista con color con fitro de usuario y visibilidad
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Posts"
        And aplico un filtro de usuario
        And aplico un filtro con el estado "Published"
        When creo una vista con nombre "Publicados admin"
        Then abro la sección de "Posts"
        And la vista con nombre "Publicados admin" se encuentra en el menu
        And borro la vista con nombre "Publicados admin"

    @run @views
    Scenario: Crear vista con filtro de tags
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Posts"
        And aplico un filtro por el primer tag
        When creo una vista con nombre "Primer tag"
        Then abro la sección de "Posts"
        And la vista con nombre "Primer tag" se encuentra en el menu
        And borro la vista con nombre "Primer tag"