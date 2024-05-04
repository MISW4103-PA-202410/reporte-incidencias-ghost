const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    // Leer el archivo JSON
    const ejecutarData = JSON.parse(fs.readFileSync('./ejecutar.json', 'utf8'));
    const browser = await puppeteer.launch();

    for (const [fileName, functions] of Object.entries(ejecutarData)) {
        console.log(`Ejecutando ${fileName}...`);
        for (const functionName of functions) {
            // Importar el módulo correspondiente
            const module = require(`../funcionalidades/${fileName}`);
            const page = await browser.newPage();
            await page.setViewport({
                width: 1920,
                height: 1080,
                deviceScaleFactor: 1,
            });

            try {
                await page.goto('http://34.170.53.250/ghost/');
                console.log(`Ejecutando ${functionName} de ${fileName}...`);
                await module[functionName](page);
            } catch (error) {
                console.error(`Error al ejecutar ${functionName} de ${fileName}:`, error);
            }
        }
    }
})();
