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
                for(let l = 0; l < stepsv1.length; l++){
                    const stepPathv1 = `../screenshots/${tests[i]}/${versiones[0]}/${features[k]}/${escenarios[z]}/${stepsv1[l]}`
                    const stepPathv2 = `../screenshots/${tests[i]}/${versiones[1]}/${features[k]}/${escenarios[z]}/${stepsv2[l]}`
                    const data = await compareImages(
                        fs.readFileSync(stepPathv1),
                        fs.readFileSync(stepPathv2)
                    )
                    fs.writeFileSync(`./reports/${tests[i]}-${features[k]}-${escenarios[z]}-${stepsv1[l]}.png`, data.getBuffer())
                    //console.log(data)
                }
            }
        }
    }
}





executeComparison()