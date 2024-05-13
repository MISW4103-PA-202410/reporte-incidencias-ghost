# Pruebas E2E de Ghost versiones 3.42 y 5.82

Este proyecto utiliza CucumberJS para la definición de escenarios de prueba a través del patrón Given-When-Then y el lenguaje Gherkin. También utiliza Puppeteer para la interacción con la aplicación bajo pruebas y es acá donde se utiliza el patrón Page Object.

## Prerrequisitos
- Tener instalado NodeJS en la versión v18.17.0.

## Instrucciones de instalación

1. Clone el repositorio.
`git clone https://github.com/MISW4103-PA-202410/reporte-incidencias-ghost.git`

2. Diríjase a la carpeta "puppeteer-cucumber".
`cd puppeteer-cucumber`

3. Instale las dependencias del sistema de pruebas.
`npm install`

## Ejecución de las pruebas

### 20 escenarios en la versión 5.82 de Ghost

Ejecute el siguiente comando para hacer las pruebas E2E de los 20 escenarios descritos en la wiki en la versión 5.82 de Ghost.
`npx cucumber-js --config config/cucumber.json -p ghost-5 --tags=@run`

### Escenarios escogidos y adaptados con puppeteer para comparación entre versiones
1. Crear página
    - Página con título, contenido y video embebido de YouTube.
    - Página básica con slug definidio.
    - Previsualizar una página y dejarla en borrador.
2. Crear Tag
    - Tag básico con nombre y descripción.
    - Tag con metadata.

### Escenarios escogidos en la versión 3.42 de Ghost
Ejecute el siguiente comando para hacer las pruebas E2E de los 20 escenarios descritos en la wiki en la versión 3.42 de Ghost.
`npx cucumber-js --config config/cucumber.json -p ghost-3 --tags=@v3`

### Escenarios escogidos en la versión 5.82 de Ghost
Ejecute el siguiente comando para hacer las pruebas E2E de los 20 escenarios descritos en la wiki en la versión 5.82 de Ghost.
`npx cucumber-js --config config/cucumber.json -p ghost-5 --tags=@v5`

## Toma de capturas de pantalla

Por cada paso ejecutado en las pruebas se toma una captura de pantalla que se almacena en la siguiente ruta:

./screenshots/puppeteer/<versión_ghost>/<nombre-feature>/escenario_<número>/paso_<número>.png

*Nota:* La carpeta `screenshots` es la que se ubica en la raíz del repositorio reporte-incidencias-ghost.