const puppeteer = require('puppeteer');
const fs = require('fs');
const Main = require(`../main/Main`);

(async () => {
    let main = null;
    // Leer el archivo JSON
    const ejecutarData = JSON.parse(fs.readFileSync('./ejecutar.json', 'utf8'));
    // Obtener las versiones disponibles
    const versionesDisponibles = ejecutarData.map(data => data.Version.version);
    // Listar las versiones disponibles por consola
    console.log("Versiones disponibles:");
    versionesDisponibles.forEach((version, index) => {
        console.log(`${index + 1}. ${version}`);
    });
    // Preguntar al usuario por la versión que desea ejecutar
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question(`Seleccione la versión que desea ejecutar: `,
        async (versionIndex) => {
            const version = versionesDisponibles[versionIndex - 1];
            console.log(`Seleccionó la versión ${version}`);
            //Instancia Main: Version y URL
            vjson = ejecutarData.find(data => data.Version.version === version);
            const url = vjson.Version.url;
            funcionalidades = vjson.Version.funcionalidades;
            main = new Main(version, url, funcionalidades);

            // Ejecutar las funcionalidades
            for (const filename in main.getFuncionalidades()) {
                // Importar el módulo correspondiente
                const module = require(`../funcionalidades/${filename}`);
                module.loadPages(main.getVersion());
                console.log(module);
                console.log(`Ejecutando ${filename}...`);
                // Ejecutar las funciones correspondientes
                const funcList = funcionalidades[filename];
                for (const functionName of funcList) {
                }
            }
            readline.close();
        });

    return;
    // Ejecutar las funcionalidades
    const browser = await puppeteer.launch();
    await browser.close();
})();
