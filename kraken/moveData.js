const fs = require('fs');
const path = require('path');

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

// Itera sobre cada herramienta, cada característica y sus escenarios
Object.entries(features).forEach(([tool, featuresByTool]) => {
  Object.entries(featuresByTool).forEach(([feature, scenarios]) => {
    scenarios.forEach(scenario => {
      copyImagesForSteps(tool, feature, scenario);
    });
  });
});
