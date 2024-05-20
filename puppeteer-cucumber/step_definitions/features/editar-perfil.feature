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

    @run @profile @data_gen
    Scenario Outline: escenario_6 - Cambiar contraseña casos inválidos
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And abro el diálogo de cambio de contraseña
        And ingreso la contraseña antigua
        And ingreso "<password>" como contraseña nueva
        When guardo el cambio de contraseña
        Then se muestra error al cambiar la contraseña

        Examples:
        | password      |
        | {data_pool(password_invalid_too_short)}    |
        | {data_pool(password_invalid_just_special)}    |
        | {data_pool(password_invalid_just_numbers)}    |
        | {data_pool(password_invalid_just_letters)}    |
        | {data_pool(password_invalid_too_long)}    |

    @run @profile @data_gen
    Scenario Outline: escenario_7 - Cambiar contraseña casos válidos
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And abro el diálogo de cambio de contraseña
        And ingreso la contraseña antigua
        And ingreso "<password>" como contraseña nueva
        When guardo el cambio de contraseña
        Then salgo de la sesión
        And inicio sesión con la contraseña "<password>"
        And debo entrar a la página de inicio
        And abro la sección de "Profile"
        And abro el diálogo de cambio de contraseña
        And ingreso las contraseñas para restablecer
        And guardo el cambio de contraseña

        Examples:
        | password           |
        | PRUEBAS12345678    |
        | Pruebas1234567!    |
        | OtraContrasena123# |
        | {data_pool(password)} |

    @run @profile @date_gen
    Scenario Outline: escenario 8 - Cambiar correo casos válidos
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And cambio mi correo a "<email>"
        When guardo mi perfil
        Then navego a Home
        And abro la sección de "Profile"
        And el correo debe corresponder al nuevo
        And cambio el nombre y el correo a los originales
        And guardo mi perfil

        Examples:
            | email           |
            | test@gmail.com    |
            | test2@ghost.com    |
            | es.tudiante@uniandes.edu.co |
            | {data_pool(email)} |
            | {faker(email)} |

    @run @profile @date_gen
    Scenario Outline: escenario 9 - Cambiar correo casos inválidos
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And cambio mi correo a "<email>"
        When guardo mi perfil
        Then se muestra error al cambiar el correo
        And navego a Home
        And abro la sección de "Profile"
        And el correo debe corresponder al original

        Examples:
            | email           |
            | {data_pool(email_invalid_no_dot_end)} |
            | {data_pool(email_invalid_no_end)} |
            | {data_pool(email_invalid_no_user)} |
            | {data_pool(email_invalid_2_@)} |

    @run @profile @date_gen
    Scenario Outline: escenario 10 - Cambiar nombre casos válidos
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And cambio mi nombre a "<name>"
        When guardo mi perfil
        Then navego a Home
        And abro la sección de "Profile"
        And el nombre debe corresponder al nuevo
        And cambio el nombre y el correo a los originales
        And guardo mi perfil

        Examples:
            | name           |
            | Juan    |
            | Paula    |
            | Santiago Arboleda Garzón |
            | {data_pool(name)} |
            | {faker(name)} |

    @run @profile @date_gen
    Scenario Outline: escenario 11 - Cambiar nombre casos inválidos
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And cambio mi nombre a "<name>"
        When guardo mi perfil
        Then se muestra error al cambiar el nombre
        And navego a Home
        And abro la sección de "Profile"
        And el nombre debe corresponder al original

        Examples:
            | name           |
            | 123456789123456879    |
            | {data_pool(name_invalid)} |
            | {data_pool(name_invalid_email)} |
            | {data_pool(name_invalid_special)} |

    @run @profile @date_gen @debug
    Scenario Outline: escenario 12 - Cambiar redes casos válidos
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And cambio mi usuario de Facebook a "<username>"
        And cambio mi usuario de Twitter a "<username>"
        When guardo mi perfil
        Then navego a Home
        And abro la sección de "Profile"
        And el usuario de Facebook debe corresponder al nuevo
        And el usuario de Twitter debe corresponder al nuevo
        And vacio mi usuario de Facebook
        And vacio mi usuario de Twitter
        And guardo mi perfil

        Examples:
            | username           |
            | ja.vos    |
            | {data_pool(social_user)} |
            | {faker(username)} |

    @run @profile @date_gen
    Scenario Outline: escenario 12 - Cambiar redes casos inválidos
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Profile"
        And cambio mi usuario de Facebook a "<username>"
        And cambio mi usuario de Twitter a "<username>"
        When guardo mi perfil
        Then se muestra error al cambiar el usuario de Facebook o Twitter
        And navego a Home
        And abro la sección de "Profile"
        And el usuario de Facebook debe corresponder al orignal
        And el usuario de Twitter debe corresponder al original

        Examples:
            | username           |
            | https://www.google.com    |
            | {data_pool(social_user_invalid)} |
            | {data_pool(social_user_invalid_url)} |
            | {data_pool(social_user_invalid_spaces)} |
            | {data_pool(social_user_invalid_100)} |