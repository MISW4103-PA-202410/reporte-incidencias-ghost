Feature: Editar perfil

    @run @profile
    Scenario: escenario_1 - Cambiar contraseña
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And abro el diálogo de cambio de contraseña
        And ingreso la contraseña antigua
        And ingreso "PRUEBAS123456" como contraseña nueva
        When guardo el cambio de contraseña
        Then salgo de la sesión
        And inicio sesión con la contraseña "PRUEBAS123456"
        And debo entrar a la página de inicio
        And abro la sección de "Profile"
        And abro el diálogo de cambio de contraseña
        And ingreso las contraseñas para restablecer
        And guardo el cambio de contraseña

    @run @profile
    Scenario: escenario_2 - Cambiar imagen de cover a 8K
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And agrego una imagen de cover de 8K
        When guardo mi perfil
        Then navego a Home
        And abro la sección de "Profile"
        And la imagen debe estar en el perfil
        And elimino la imagen
        And guardo mi perfil


    @run @profile
    Scenario: escenario_3 - Cambiar correo electrónico y nombre
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And cambio mi nombre a "Equipo 20 - 2024"
        And cambio mi correo a "equipo2024@misw4103.com"
        When guardo mi perfil
        Then navego a Home
        And abro la sección de "Profile"
        And el nombre debe corresponder al nuevo
        And el correo debe corresponder al nuevo
        And cambio el nombre y el correo a los originales
        And guardo mi perfil

    @run @profile
    Scenario: escenario_4 - Anclar los perfiles de redes sociales (facebook y X - twitter)
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And cambio mi usuario de Facebook a "Equipo20"
        And cambio mi usuario de Twitter a "TwEquipo20"
        When guardo mi perfil
        Then navego a Home
        And abro la sección de "Profile"
        And el usuario de Facebook debe corresponder al nuevo
        And el usuario de Twitter debe corresponder al nuevo
        And vacio mi usuario de Facebook
        And vacio mi usuario de Twitter
        And guardo mi perfil

    @run @profile
    Scenario: escenario_5 - Ver el historial de actividad del usuario
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And selecciono acciones
        When abro mi historial de actividades
        Then puedo ver el modal del historial
        And puedo ver las actividades que he realizado en Ghost
        And existe al menos una actividad