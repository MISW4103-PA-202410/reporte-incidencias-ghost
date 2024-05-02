const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920, // Ancho en píxeles
        height: 1080, // Alto en píxeles
        deviceScaleFactor: 1,
    });

    // Leer el archivo JSON
    const ejecutarData = JSON.parse(fs.readFileSync('ejecutar.json', 'utf8'));

    for (const [fileName, functions] of Object.entries(ejecutarData)) {
        const module = require(`../funcionalidades/${fileName}`);
        //console.log(module);
        for (const functionName of functions) {
            await page.goto('http://34.170.53.250/ghost/');
            console.log(`Ejecutando ${functionName} de ${fileName}...`);
            await module[functionName](page);
        }
    }

    await browser.close();
})().catch(e=>console.log(e));