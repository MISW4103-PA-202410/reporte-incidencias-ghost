Feature: Crear page

    @run @pages
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

    @run @pages
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

    @run @pages
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

    @run @pages
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

    @run @pages
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

    @run @pages
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

    @run @pages @debug
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

    @run @pages @v5
    Scenario: escenario_3 - Crear una page básica con una URL definida (slug)
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

    @run @pages @v5
    Scenario: escenario_4 - Crear una page básica, previsualizarla y dejarla en borrador
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

    @run @pages @v5
    Scenario: escenario_2 - Crear una page con un título, un párrafo y un video embebido de YouTube
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "{dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{data_pool(link_yt_valid)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "si" se agregó correctamente

    @run @pages @v5
    Scenario: escenario_5 - Crear una page con un título, un párrafo y un video embebido de YouTube usando una cadena alfanumerica aleatoria
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "{dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{faker(alphaNumeric)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "no" se agregó correctamente

    @run @pages @v5
    Scenario: escenario_6 - Crear una page con un título, un párrafo y un video embebido de YouTube usando un link incompleto
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "{dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{data_pool(link_yt_incomplete)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "no" se agregó correctamente

    @run @pages @v5
    Scenario: escenario_7 - Crear una page con un título, un párrafo y un video embebido de YouTube usando un link de la página principal de YT
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "{dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{data_pool(link_yt_mainpage)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "no" se agregó correctamente

    @run @pages @v5
    Scenario: escenario_8 - Crear una page con un título, un párrafo y un video embebido de YouTube usando un link aleatorio
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "{dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{faker(url)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "no" se agregó correctamente

    @run @pages @v5
    Scenario: escenario_9 - Crear una page con un título, un párrafo y un video embebido de YouTube usando una cadena vacía
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "{dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{data_pool(link_empty)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "no" se agregó correctamente

    @run @pages @v5
    Scenario: escenario_10 - Crear una page con un título, un párrafo y un video embebido de YouTube usando un link de video de FaceBook
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "{dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And agrego un video embebido de YouTube con link "{data_pool(link_fb_video)}"
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista
        And el video "no" se agregó correctamente

    @run @pages @v5
    Scenario: escenario_11 - Crear una page con un título, un párrafo básico
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "{dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        When publico la página
        Then abro la sección de "Pages"
        And la página debe existir en la lista

    @run @pages @v5
    Scenario: escenario_12 - Crear una page con un título de mas de 255
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "{faker(sentence_255)}" como nombre de la página
        When publico la página
        Then la página no se publico

    @run @pages @v5
    Scenario: escenario_13 - Crear una page con un título sencillo y luego reescribir con de mas de 255 caracteres
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Pages"
        And doy click en "New page"
        And ingreso "{dinamic_data_pool(titles)}" como nombre de la página
        And ingreso "{dinamic_data_pool(contents)}" como contenido de la página
        And ingreso "{faker(sentence_255)}" como nombre de la página
        When publico la página
        Then la página no se publico