Feature: Crear page

    @run @pages @data_gen
    Scenario: escenario_1 - Crear una page con un título y un audio con archivo .mp3
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_1 - {dinamic_data_pool(titles)}" como nombre de la página
        And agrego un audio: "{data_pool(audio_path)}" a la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el audio "si" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_14 - Crear una page con un título y un audio con archivo .csv
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_14 - {dinamic_data_pool(titles)}" como nombre de la página
        And agrego un audio: "{data_pool(csv_path)}" a la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el audio "no" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_15 - Crear una page con un título y un audio con archivo .mp4
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_15 - {dinamic_data_pool(titles)}" como nombre de la página
        And agrego un audio: "{data_pool(video_path)}" a la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el audio "no" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_16 - Crear una page con un título y un audio con archivo .wav
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_16 - {dinamic_data_pool(titles)}" como nombre de la página
        And agrego un audio: "{data_pool(audio_path_wav)}" a la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el audio "si" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_17 - Crear una page con un título y un audio con archivo .ogg
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_17 - {dinamic_data_pool(titles)}" como nombre de la página
        And agrego un audio: "{data_pool(audio_path_ogg)}" a la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el audio "si" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_18 - Crear una page con un título y un audio con archivo inesxistene .mp3
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_18 - {dinamic_data_pool(titles)}" como nombre de la página
        And agrego un audio: "{dinamic_data_pool(audio_files)}" a la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el audio "no" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_19 - Crear una page con un título y un audio con archivo inesxistene .mp3
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_19 - {dinamic_data_pool(titles)}" como nombre de la página
        And agrego un audio: "{data_pool(audio_path_acc)}" a la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el audio "no" se agregó correctamente

    @run @pages @v5 @data_gen
    Scenario: escenario_3 - Crear una page básica con una URL definida (slug)
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_3 - {dinamic_data_pool(titles)}" como nombre de la página
        And abro las configuraciones de la página
        And cambio el slug de la página por "{dinamic_data_pool(slugs)}"
        And cierro las configuraciones de la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And "si" puedo navegar a la URL con el slug asignado

    @run @pages @data_gen
    Scenario: escenario_20 - Crear una page básica con una URL definida (slug) con caracteres especiales
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_20 - {dinamic_data_pool(titles)}" como nombre de la página
        And abro las configuraciones de la página
        And cambio el slug de la página por "{data_pool(invalid_slug_specials)}"
        And cierro las configuraciones de la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el slug "no" se agregó correctamente
        And "no" puedo navegar a la URL con el slug asignado

    @run @pages @data_gen
    Scenario: escenario_21 - Crear una page básica con una URL definida (slug) con caracteres especiales y cotidianos
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_20 - {dinamic_data_pool(titles)}" como nombre de la página
        And abro las configuraciones de la página
        And cambio el slug de la página por "{data_pool(invalid_slug_caracters_special)}"
        And cierro las configuraciones de la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el slug "no" se agregó correctamente
        And "no" puedo navegar a la URL con el slug asignado

    @run @pages @data_gen
    Scenario: escenario_22 - Crear una page básica con una URL definida (slug) con una oracións
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_22 - {dinamic_data_pool(titles)}" como nombre de la página
        And abro las configuraciones de la página
        And cambio el slug de la página por "{faker(sentence_3)}"
        And cierro las configuraciones de la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el slug "no" se agregó correctamente
        And "no" puedo navegar a la URL con el slug asignado

    @run @pages @data_gen
    Scenario: escenario_23 - Crear una page básica con una URL definida (slug) con 100 caracteres
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_23 - {dinamic_data_pool(titles)}" como nombre de la página
        And abro las configuraciones de la página
        And cambio el slug de la página por "{faker(alphaNumeric_100)}"
        And cierro las configuraciones de la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el slug "si" se agregó correctamente
        And "si" puedo navegar a la URL con el slug asignado

    @run @pages @data_gen
    Scenario: escenario_24 - Crear una page básica con una URL definida (slug) con 150 caracteres
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_24 - {dinamic_data_pool(titles)}" como nombre de la página
        And abro las configuraciones de la página
        And cambio el slug de la página por "{faker(alphaNumeric_150)}"
        And cierro las configuraciones de la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el slug "si" se agregó correctamente
        And "si" puedo navegar a la URL con el slug asignado

    @run @pages @data_gen
    Scenario: escenario_25 - Crear una page básica con una URL definida (slug) con palabra reservada
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_25 - {dinamic_data_pool(titles)}" como nombre de la página
        And abro las configuraciones de la página
        And cambio el slug de la página por "{data_pool(invalid_slug_reserved_words)}"
        And cierro las configuraciones de la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el slug "si" se agregó correctamente
        And "si" puedo navegar a la URL con el slug asignado

    @run @pages @v5 @data_gen
    Scenario: escenario_4 - Crear una page básica, previsualizarla y dejarla en borrador
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_4 - {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        When ingreso a la previsualización
        Then puedo previsualizar correctamente la página
        And salgo de la previsualización
        When guardo el borrador de la página
        Then la página debe existir en la lista
        And la página debe tener el estado "Draft"

    @run @pages @data_gen
    Scenario: escenario_26 - Crear una page básica, previsualizarla y publicarla
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_26 - {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        When ingreso a la previsualización
        Then puedo previsualizar correctamente la página
        And salgo de la previsualización
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista

    @run @pages @data_gen
    Scenario: escenario_27 - Crear una page básica, previsualizarla y ver el título en la previsualizacion
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_27 - {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        When ingreso a la previsualización
        Then puedo previsualizar correctamente la página
        And "si" veo el título en la previsualización
        And salgo de la previsualización
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista

    @run @pages @data_gen
    Scenario: escenario_28 - Crear una page básica,ingreso un título invalido y previsualizo la página
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_28 - {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And reescribo "escenario_28 - {faker(alphaNumeric_256)}" como el nombre de la página
        When ingreso a la previsualización
        Then puedo previsualizar correctamente la página
        And "no" veo el título en la previsualización
        And salgo de la previsualización

    @run @pages @v5 @data_gen
    Scenario: escenario_2 - Crear una page con un título, un párrafo y un video embebido de YouTube
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_2 -  {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{data_pool(link_yt_valid)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "si" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_5 - Crear una page con un título, un párrafo y un video embebido de YouTube usando una cadena alfanumerica aleatoria
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_5 - {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{faker(alphaNumeric)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "no" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_6 - Crear una page con un título, un párrafo y un video embebido de YouTube usando un link incompleto
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_6 - {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{data_pool(link_yt_incomplete)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "no" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_7 - Crear una page con un título, un párrafo y un video embebido de YouTube usando un link de la página principal de YT
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_7 - {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{data_pool(link_yt_mainpage)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "no" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_8 - Crear una page con un título, un párrafo y un video embebido de YouTube usando un link aleatorio
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_8 - {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{faker(url)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "no" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_9 - Crear una page con un título, un párrafo y un video embebido de YouTube usando una cadena vacía
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_9 - {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{data_pool(link_empty)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "no" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_10 - Crear una page con un título, un párrafo y un video embebido de YouTube usando un link de video de FaceBook
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_10 - {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{data_pool(link_fb_video)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "no" se agregó correctamente

    @run @pages @data_gen
    Scenario: escenario_11 - Crear una page con un título, un párrafo básico
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_11 - {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista

    @run @pages @data_gen
    Scenario: escenario_12 - Crear una page con un título de mas de 255
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_12 - {faker(sentence_255)}" como nombre de la página
        When publico la página
        Then la página no se publico

    @run @pages @data_gen
    Scenario: escenario_13 - Crear una page con un título sencillo y luego reescribir con de mas de 255 caracteres
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_13 - {dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And ingreso "{faker(sentence_255)}" como nombre de la página
        When publico la página
        Then la página no se publico

    @run @pages @data_gen
    Scenario: escenario_29 - Crear una page con y reescribir con un título de mas de 255 e intentar publicar
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_29 - {dinamic_data_pool(titles)}" como nombre de la página
        And interrupo la publicación de la página
        And reescribo "escenario_29 - {faker(alphaNumeric_256)}" como el nombre de la página
        When publico la página
        And reintento ingresar al editor de página
        Then editor de página esta disponible

    @run @pages @data_gen
    Scenario: escenario_30 - Crear una page en draft y actualizar su visualización
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "escenario_30 - {dinamic_data_pool(titles)}" como nombre de la página
        And abro las configuraciones de la página
        And selecciono la visibilidad "{data_pool(member_option)}"
        When guardo el borrador de la página
        Then se guarda la página
