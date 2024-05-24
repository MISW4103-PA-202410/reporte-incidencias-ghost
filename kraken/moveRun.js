const fs = require('fs-extra');
const { spawn } = require('child_process');
const path = require('path');

// Lista de directorios base
const sourceDirs = [
  path.join(__dirname, './features/web/e2e/view'),
  path.join(__dirname, './features/web/e2e/edit_profile'),
  path.join(__dirname, './features/web/tests_60_5.82_validación/tag'),
  path.join(__dirname, './features/web/tests_60_5.82_validación/post'),
];
const destDir = path.join(__dirname, './features/');
const reportFilePath = path.join(__dirname, 'test_report.txt');
const logFilePath = path.join(__dirname, 'execution_log.txt');

// Función para mover un archivo
async function moveFile(file, fromDir, toDir) {
  const sourceFile = path.join(fromDir, file);
  const destFile = path.join(toDir, file);
  try {
    await fs.move(sourceFile, destFile, { overwrite: true }); // Mueve el archivo
    console.log(`Archivo movido con éxito: ${file}`);
    return destFile;
  } catch (err) {
    console.error(`Error moviendo el archivo ${file}:`, err);
    throw err;
  }
}

// Función para ejecutar el script
function runScript(filePath) {
  return new Promise((resolve, reject) => {
    const process = spawn('npx', ['kraken-node', 'run'], { shell: true });

    let output = '';

    process.stdout.on('data', (data) => {
      output += data.toString();
    });

    process.stderr.on('data', (data) => {
      output += data.toString();
    });

    process.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(output));
        return;
      }
      resolve(output);
    });

    process.on('error', (err) => {
      console.error(`Error ejecutando el script para ${filePath}: ${err.message}`);
      reject(err);
    });
  });
}

// Función para filtrar la salida relevante
function filterOutput(output) {
  const successPattern = /(\d+ scenario[s]? \(\d+ passed\)[\s\S]*?executing steps: \d+m\d+\.\d+s)/g;
  const failurePattern = /(\d+ scenario[s]? \(\d+ failed\)[\s\S]*?executing steps: \d+m\d+\.\d+s\))/g;
  const detailedFailurePattern = /(Failures:\s*1\).*?√ After)/gs;

  const successMatches = output.match(successPattern);
  const failureMatches = output.match(failurePattern);
  const detailedFailureMatches = output.match(detailedFailurePattern);

  const successResults = successMatches ? successMatches.join('\n\n') : '';
  const failureResults = failureMatches ? failureMatches.join('\n\n') : '';
  const detailedFailureResults = detailedFailureMatches ? detailedFailureMatches.join('\n\n') : '';

  let result = '';
  if (successResults) {
    result += `Successful tests:\n${successResults}\n\n`;
  }
  if (failureResults) {
    result += `Failed tests:\n${failureResults}\n\n`;
  }
  if (detailedFailureResults) {
    result += `Detailed failure steps:\n${detailedFailureResults}`;
  }

  return result.trim() || 'No se encontraron resultados relevantes';
}

// Función para copiar imágenes para cada paso en cada escenario
function copyImagesForSteps(tool, feature, scenario) {
  const sourceDirectoryBase = directoriesBase[tool];
  const scenarioDirectory = path.join(sourceDirectoryBase, feature, scenario);
  fs.readdir(scenarioDirectory, (err, files) => {
    if (err) {
      console.error(`Error leyendo el directorio ${scenarioDirectory}:`, err);
      return;
    }

    // Filtrar solo archivos PNG
    files.filter(file => file.endsWith('.png')).forEach((file, index) => {
      const originalImagePath = path.join(scenarioDirectory, file);
      const pasoNumber = index + 1; // Calcula el número de paso basado en el índice
      const targetFileName = `backstop_default_${tool}_${feature}_${scenario}_Paso_${pasoNumber}_0_document_0_default.png`;
      const targetImagePath = path.join(targetDirectory, targetFileName);

      fs.copyFile(originalImagePath, targetImagePath, err => {
        if (err) {
          console.error('Error al mover la imagen:', err);
        } else {
          console.log(`Imagen movida exitosamente a ${targetImagePath}`);
        }
      });
    });
  });
}

// Define las características y sus escenarios para Kraken y Puppeteer
let features = {
  "kraken": {
    "crear-tag": ["escenario_2"],
    "crear-post": ["escenario_1", "escenario_2", "escenario_3", "escenario_4"]
  },
  "puppeteer": {
    "crear-tag": ["escenario_1","escenario_4"],
    "crear-page": ["escenario_2", "escenario_3", "escenario_4"]
  }
};

// Directores base para Kraken y Puppeteer
const directoriesBase = {
  "kraken": '../screenshots/kraken/v3.42/',
  "puppeteer": '../screenshots/puppeteer/v3.42/'
};

const targetDirectory = path.join(__dirname, 'backstop_data/bitmaps_reference');

// Asegúrate de que el directorio objetivo existe
if (!fs.existsSync(targetDirectory)) {
  fs.mkdirSync(targetDirectory, { recursive: true });
}

// Función principal
async function main() {
  const report = [];
  const log = [];
  try {
    for (const sourceDir of sourceDirs) {
      report.push(`\n=== Analizando la carpeta: ${sourceDir} ===\n`);
      log.push(`\n=== Analizando la carpeta: ${sourceDir} ===\n`);

      const files = await fs.readdir(sourceDir); // Lee los archivos en la carpeta de origen
      const sortedFiles = files.sort(); // Ordena los archivos alfabéticamente

      for (const file of sortedFiles) {
        console.log(`Ejecutando pruebas del archivo: ${file} en el directorio: ${sourceDir}`);
        log.push(`=== Ejecutando pruebas del archivo: ${file} en el directorio: ${sourceDir} ===`);

        // Mover cualquier archivo .feature de vuelta a la carpeta de origen antes de mover el nuevo archivo
        const existingFiles = await fs.readdir(destDir);
        for (const existingFile of existingFiles) {
          if (path.extname(existingFile) === '.feature') {
            await moveFile(existingFile, destDir, sourceDir);
            console.log(`Archivo existente retornado a su ubicación original: ${existingFile}`);
            log.push(`Archivo existente retornado a su ubicación original: ${existingFile}`);
          }
        }

        const destFilePath = await moveFile(file, sourceDir, destDir); // Mueve el archivo a la carpeta de destino

        try {
          const result = await runScript(destFilePath); // Ejecuta el script por cada archivo movido
          log.push(`Resultado de ejecución para ${file}:\n${result}`);
          const filteredResult = filterOutput(result);
          console.log(`Pruebas exitosas para: ${file}`);
          log.push(`Pruebas exitosas para: ${file}`);
          report.push(`Pruebas exitosas para: ${file}\n${filteredResult}`);
        } catch (err) {
          const filteredError = filterOutput(err.message);
          console.error(`Fallaron las pruebas para: ${file}`);
          log.push(`Fallaron las pruebas para: ${file}\n${err.message}`);
          report.push(`Fallaron las pruebas para: ${file}\n${filteredError}`);
        } finally {
          await moveFile(file, destDir, sourceDir); // Mueve el archivo de vuelta a la carpeta de origen
          console.log(`Archivo retornado a su ubicación original: ${file}`);
          log.push(`Archivo retornado a su ubicación original: ${file}`);
        }

        log.push(`=== Fin de pruebas para el archivo: ${file} en el directorio: ${sourceDir} ===\n`);
      }

      report.push(`\n=== Fin del análisis de la carpeta: ${sourceDir} ===\n`);
      log.push(`\n=== Fin del análisis de la carpeta: ${sourceDir} ===\n`);
    }
  } catch (err) {
    console.error('Error en el proceso:', err);
    log.push(`Error en el proceso: ${err}`);
  } finally {
    // Escribir el reporte en un archivo de texto
    await fs.writeFile(reportFilePath, report.join('\n\n'), 'utf8');
    console.log(`Reporte final guardado en: ${reportFilePath}`);
    log.push(`Reporte final guardado en: ${reportFilePath}`);
    
    // Escribir el log completo en un archivo de texto
    await fs.writeFile(logFilePath, log.join('\n\n'), 'utf8');
    console.log(`Log de ejecución guardado en: ${logFilePath}`);

    // Ejecución adicional al final de todas las pruebas
    Object.entries(features).forEach(([tool, featuresByTool]) => {
      Object.entries(featuresByTool).forEach(([feature, scenarios]) => {
        scenarios.forEach(scenario => {
          copyImagesForSteps(tool, feature, scenario);
        });
      });
    });
  }
}

main();
