const compareImages = require("resemblejs/compareImages")
const fs = require('fs');
const fse = require('fs-extra');

async function executeComparison() {
    const puppeteer = 'screenshots/puppeteer'
    const kraken = 'screenshots/kraken'

    //directorio de reportes
    if (!fse.ensureDirSync('./reports')) {
        console.log('Directory not found')
    }

    //Lista
    const tests = ['puppeteer', 'kraken']
    const versiones = ['v5.82', 'v3.42']

    for (let i = 0; i < tests.length; i++) {
        for (let j = 0; j < versiones.length; j++) {
            //Listar lo que hay en el directorio de puppeteer/version
            const files = fs.readdirSync(`../screenshots/${tests[i]}/${versiones[j]}`)
            console.log('files')
            console.log(files)
        }
    }
}

executeComparison()