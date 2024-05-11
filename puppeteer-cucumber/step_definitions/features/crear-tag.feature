Feature: Crear Tag

    @run @tags @v5
    Scenario: Crear una tag básico
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Tags"
        And doy click en "New tag"
        And ingreso "Tag de prueba" como nombre del tag
        And ingreso "Descripción de tag de prueba" como descripción del tag
        When guardo el tag
        Then el tag se guarda exitosamente
        And abro la sección de "Tags"
        And el tag se encuentra en la lista

    @done @run @tags
    Scenario: Crear tag con nombre ya existente
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Tags"
        And doy click en "New tag"
        And ingreso "Tag de prueba duplicado" como nombre del tag
        And ingreso "Descripción de tag de prueba" como descripción del tag
        When guardo el tag
        Then el tag se guarda exitosamente
        And abro la sección de "Tags"
        And doy click en "New tag"
        And ingreso "Tag de prueba duplicado" como nombre del tag
        And ingreso "Descripción de tag de prueba" como descripción del tag
        When guardo el tag
        Then el tag se guarda exitosamente
        And abro la sección de "Tags"
        And existen dos tags con nombre "Tag de prueba duplicado"
        And los dos tags tienen slug diferente

    @run @tags 
    Scenario: Crear tag con una imagen
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Tags"
        And doy click en "New tag"
        And ingreso "Tag de prueba con imagen" como nombre del tag
        And ingreso "Descripción de tag de prueba" como descripción del tag
        And agrego una imagen al tag
        When guardo el tag
        Then el tag se guarda exitosamente
        And abro la sección de "Tags"
        And el tag se encuentra en la lista
        And abro la página del tag
        And el tag debe tener la imagen

    @run @tags @v5
    Scenario: Crear tag con Meta Data
        Given inicio la aplicación
        And inicio sesión si es necesario
        And abro la sección de "Tags"
        And doy click en "New tag"
        And ingreso "Tag de prueba con imagen" como nombre del tag
        And ingreso "Descripción de tag de prueba" como descripción del tag
        And ingreso datos de meta data con título "Metatitulo" y descripción "MetaDesc"
        When guardo el tag
        Then el tag se guarda exitosamente
        And abro la sección de "Tags"
        And el tag se encuentra en la lista
        And abro la página del tag
        And el tag debe contener la información de meta data
