### Kraken

#### Prerrequisitos

1. NVM

en caso de no tener las versiones de node instalarlas con este comando:"

`nvm install v18.17.0`

que serán necesarias para ejecutar tanto kraken como backstop.



#### Instalación y Configuración (Entrega semana 7)

1. Clonar el repositorio
2. Ejecutar el comando `cd reporte-incidencias-ghost`
3. Ejecutar el comando `cd kraken`
4. Ejecutar el comando nvm `nvm use v18.17.0`
5. Instalar las dependencias con el comando `npm i`

En la carpeta kraken/features/web/tests_5.82/tag  se encuentran los escenarios en formato .feature para tag (agrupados en 5 aproximadamente en cada archivo para mayor comodidad corriendo los tests) tambien se tiene uno llamado tag_5_issue.feature que contiene 2 escenarios que fallan y están documentados en las issues del proyecto puesto que se trata de un error del aplicativo. La manera apropiada de correrlos es la siguiente:

1. Mover el `escenario.feature` a probar a dos niveles arriba, en la carpeta `Kraken/features`.
2. Cerciorarse de que únicamente haya un archivo `.feature` en dicha carpeta. Si hay más de un archivo, es indispensable mover a la carpeta tests_5.82 todos aquellos que no se deseen ejecutar.

Para correr la feature seleccionada, que movimos a nuestra carpeta /kraken/features/, es necesario correr el siguiente comando:

```
npx kraken-node run
```

### Instrucciones backstop

Por favor antes de comenzar las pruebas de backstop debe cambiar a otra versión de node `nvm use v18.17.0` y ubicarse en la carpeta kraken también como con la ejecución de las pruebas de kraken.

1. Es necesario que haya ejecutado cada una de las pruebas de kraken y de puppeteer, puede verificar ya que el resultado de estas pruebas deja las capturas en la carpeta screenshots en la raíz de nuestro proyecto donde posterior a la ejecución de las pruebas quedarán las capturas de cada uno de los pasos para ambas versiones /screenshots/{herramienta_utilizada}/v3.42 y /screenshots/{herramienta_utilizada}/v5.82.

3. Moverse a la carpeta kraken con el siguiente comando `cd kraken` desde la raiz del proyecto (repositorio)

3. Ejecutar `node moveData.js` , para mover las capturas de referencia que vamos a usar, en este caso está programado para tomar la versión 3.42 como referencia y dentro de nuestro backstop.json configuramos las capturas para la versión 5.82.

4. Ejecutar `npx backstop test`, posterior a esto se abrirá una ventana en Chrome con el reporte correspondiente a los 10 escenarios y la comparativa entre ambas versiones. 
