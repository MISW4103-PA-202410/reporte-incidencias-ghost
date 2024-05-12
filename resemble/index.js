const compareImages = require("resemblejs/compareImages")
const fs = require('fs');
const fse = require('fs-extra');

async function executeComparison() {
    const puppeteer = 'screenshots/puppeteer'
    const kraken = 'screenshots/kraken'
    let html = '';

    //directorio de reportes
    if (!fse.ensureDirSync('./reports')) {
        console.log('Directory not found')
    }

    //Lista
    const tests = ['puppeteer', 'kraken']
    const versiones = ['v5.82', 'v3.42']

    for (let i = 0; i < tests.length; i++) {
        const features = fs.readdirSync(`../screenshots/${tests[i]}/${versiones[0]}`)
        for (let k = 0; k < features.length; k++) {
            const featurePathv1 = `../screenshots/${tests[i]}/${versiones[0]}/${features[k]}`
            const featurePathv2 = `../screenshots/${tests[i]}/${versiones[1]}/${features[k]}`
            //Revisar que existan las carpetas
            if (!fs.existsSync(featurePathv1) || !fs.existsSync(featurePathv2)) {
                console.log('Directory not found: ' + features[k])
                continue
            }
            //Revisar que existan escenarios
            const escenarios = fs.readdirSync(featurePathv1)
            for (let z = 0; z < escenarios.length; z++) {
                const escenarioPathv1 = `../screenshots/${tests[i]}/${versiones[0]}/${features[k]}/${escenarios[z]}`
                const escenarioPathv2 = `../screenshots/${tests[i]}/${versiones[1]}/${features[k]}/${escenarios[z]}`
                if (!fs.existsSync(escenarioPathv1) || !fs.existsSync(escenarioPathv2)) {
                    console.log('Directory not found ' + escenarios[z] + ' in ' + features[k])
                    continue
                }
                const stepsv1 = fs.readdirSync(escenarioPathv1)
                const stepsv2 = fs.readdirSync(escenarioPathv2)
                if(stepsv1.length != stepsv2.length){
                    console.log('Different steps')
                    continue
                }
                //Ordenar los pasos, el numero esta al final
                stepsv1.sort((a, b) => {
                    return a.match(/\d+/) - b.match(/\d+/)
                })
                stepsv2.sort((a, b) => {
                    return a.match(/\d+/) - b.match(/\d+/)
                })
                for(let l = 0; l < stepsv1.length; l++){
                    const stepPathv1 = `../screenshots/${tests[i]}/${versiones[0]}/${features[k]}/${escenarios[z]}/${stepsv1[l]}`
                    const stepPathv2 = `../screenshots/${tests[i]}/${versiones[1]}/${features[k]}/${escenarios[z]}/${stepsv2[l]}`

                    const data = await compareImages(
                        fs.readFileSync(stepPathv1),
                        fs.readFileSync(stepPathv2)
                    )
                    //Guardar imagen
                    const stepwithOutExt = stepsv1[l].split('.').slice(0, -1).join('.')
                    const reportImgPath =`./reports/${tests[i]}-${features[k]}-${escenarios[z]}-${stepwithOutExt}.png`
                    fs.writeFileSync(reportImgPath, data.getBuffer())
                    //Generar reporte
                    const info = {
                        test: tests[i],
                        feature: features[k],
                        escenario: escenarios[z],
                        step: stepwithOutExt,
                        isSameDimensions: data.isSameDimensions,
                        misMatchPercentage: data.misMatchPercentage,
                        stepPathv1: '../' + stepPathv1,
                        stepPathv2: '../' + stepPathv2,
                        diffPath: `${tests[i]}-${features[k]}-${escenarios[z]}-${stepwithOutExt}.png`
                    }
                    //Generar HTML
                    html += htmlReportCard(info)
                }
            }
        }
    }
    //Generar archivo HTML
    fs.writeFileSync('./reports/index.html', htmlFile(html))
}

function htmlReportCard(info) {
    return `
    <div class="card">
        <div class="card-header">
            <p class="display-5">${info.test} - ${info.feature} - ${info.escenario} - ${info.step}</p>
        </div>
        <div class="card-body">
            <p class="card-text"> Dimensiones Iguales: ${info.isSameDimensions}</p>
            <p class="card-text">Porcentaje Diferencia: ${info.misMatchPercentage}%</p>
        </div>
        <div id="imageContainer">
            <div class="imageWrapper">
                <h2>Version 5.82</h2>
                <img id="image1" src="${info.stepPathv1}" alt="Imagen 1">
            </div>
            <div class="imageWrapper">
                <h2>Version 3.42</h2>
                <img id="image2" src="${info.stepPathv2}" alt="Imagen 2">
            </div>
            <div class="imageWrapper">
                <h2>Diferencia</h2>
                <img id="diffImage" src="${info.diffPath}" alt="Diferencia">
            </div>
        </div>
    </div>
    `
}

function htmlFile(html) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reporte de comparación</title>
        <style>
            #imageContainer {
                display: flex;
                justify-content: space-between;
            }
            .imageWrapper {
                flex: 1;
                text-align: center;
            }
            img {
                max-width: 100%;
                height: auto;
            }
        </style>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </head>
    <body>
        ${html}
    </body>
    </html>
    `
}

executeComparison()