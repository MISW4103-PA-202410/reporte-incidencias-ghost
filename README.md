### Integrangtes

- Juan Avelino: ja.avelino@uniandes.edu.co
- Andrés Arévalo: a.arevalof@uniandes.edu.co
- Brian Rivera: b.riverah@uniandes.edu.co
- Andrés Peña: ca.penad@uniandes.edu.co


## Instalación

### Kraken

#### Prerrequisitos

1. Ubuntu 22.04 LTS (Idealmente usar Pop!_OS 22.04 LTS x86_64)
2. NVM
3. Node.js v.16.14.2 (usar NVM si se tienen versiones adicionales)
4. Android SDK
5. Appium
6. Java JDK (Idealmente usar OpenJDK 17.0.8.1).

#### Instalación y Configuración


En la carpeta Kraken/features/TESTS se encuentran los escenarios en formato .feature a ejecutar, la manera apropiada de correrlos es la siguiente:

1. Mover el `escenario.feature` a probar a dos niveles arriba en la carpeta `Kraken/features`.
2. Cerciorarse de que únicamente haya un archivo `.feature` en dicha carpeta. Si hay más de un archivo, es indispensable mover a la carpeta TESTS todos aquellos que no se deseen ejecutar.
3. Ejecutar el siguiente comando en la terminal de Bash:

```
npx kraken-node run
```

4. Algunas pruebas requieren la carga manual de una imagen desde el computador local, se recomienda subir una imagen en el transcurso de 5 segundos o se recomienda cancelar la acción. Esto con el fin de garantizar el correcto funcionamiento de las pruebas.


NOTA IMPORTANTE: Tener en cuenta que tenemos una carpeta que se llama TESTS que contiene los escenarios para editar perfil que se ejecutan individualmente cada uno y los demás escenarios que sí están agrupados, por defecto se ejecuta el escenario create_post que es el que se encuentra inicialmente en la carpeta `Kraken/features`.

## Instrucciones Puppeteer

1. Clonar el repositorio.
2. Posicionarse en el directorio puppeteer. Ej: cd puppeteer
3. Instalar módulos de node con npm install.
4. Acceder al directorio puppeteer/main. Ej: cd main
5. Ejecutar la suite de pruebas con el comando: node index.js.
6. Se empezará a ejecutar las pruebas y en la consola aparecen los resultados.
