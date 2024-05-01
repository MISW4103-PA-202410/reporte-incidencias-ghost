const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Leer el archivo JSON
    const ejecutarData = JSON.parse(fs.readFileSync('ejecutar.json', 'utf8'));

    for (const [fileName, functions] of Object.entries(ejecutarData)) {
        const module = require(`../funcionalidades/${fileName}`);
        console.log(module);
        for (const functionName of functions) {
            console.log(typeof module);
            await page.goto('http://34.170.53.250/ghost/');
            console.log(`Ejecutando ${functionName} de ${fileName}...`);
            await module[functionName](page);
        }
    }

    await browser.close();
})().catch(e=>console.log(e));