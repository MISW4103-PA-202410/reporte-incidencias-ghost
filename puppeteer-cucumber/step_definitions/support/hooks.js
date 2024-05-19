// const { BeforeAll, AfterAll, Before, After, setDefaultTimeout, Status} = require('cucumber')
const {BeforeAll, AfterAll, Before, After, AfterStep, setDefaultTimeout, Status} = require('@cucumber/cucumber');
const scope = require('./scope')
const constants = require('./constants')
const fse = require('fs-extra')
const fs = require('fs')
const moment = require('moment')
const _ = require('lodash')
const LabsPage = require('../pages/LabsPage')
const LoginPage = require('../pages/LoginPage')
const PrincipalPage = require('../pages/PrincipalPage')
const PostPage = require('../pages/PostPage')
const PagesPage = require('../pages/PagesPage')
const ProfilePage = require('../pages/ProfilePage')
const SettingsPage = require('../pages/SettingsPage')
const TagListPage = require('../pages/TagListPage')
const TagPage = require('../pages/TagPage')
const UserHistoryPage = require('../pages/UserHistoryPage');
const { create } = require('domain');
const path = require('path');
const faker = require('faker');

setDefaultTimeout(constants.pageTimeout * 1000);

BeforeAll(async () => {
  // reset counter
  counter = 0
  scenarioCounter = 1
  oldFeatureName = ''

  const puppeteer = require('puppeteer');
  scope.driver = puppeteer;

  // set up launchProperties object with specified parameters
  // ignoreHTTPSErrors flag required for some test envs testing
  let launchProperties = { 
    headless: constants.headlessMode, 
    ignoreHTTPSErrors: true,
    defaultViewport: null,
    args: [ '--no-sandbox',
            '--disable-setuid-sandbox',
            // debug logging
            // '--enable-logging', '--v=1'
        ],
    // set 'devtools: true' => if you want to be able to launch the dev tools console too
    //  just need to add 'await scope.page.evaluate(() => {debugger})' to the step
    //  you want to stop at
    devtools: false
   }

   // if constants.chromiumPath is not empty, set executablePath to chromiumPath
   // for cases where you want to launch a specific version of chromium
   if(constants.chromiumPath !== '') {
     launchProperties.executablePath = constants.chromiumPath
   }

  
  scope.browser = await scope.driver.launch(launchProperties)

   // set default timeout to config value


  // *************************************** \\
  // clear output folders 
  //  or set them up if they don't exist
  // *************************************** \\

  // clear output/report directory if it exists or create output/report directory
  if(fse.pathExistsSync('output/report')) {
    console.log('Clear report directory ...')
    // remove any .html files in the report directory > to ensure only latest reports are in the folder
    fs.readdirSync('output/report').forEach(file => {
      if(file.match(/.*\.html/) != null) {
        console.log(`removing file: output/report/${file}`)
        fse.removeSync(`output/report/${file}`)
      }
    });
    fse.removeSync('output/results.xml')
  } else {
    fse.ensureDirSync('output/report')
  }

  // clear output/screenshots directory if it exists or create output/screenshots directory
  const version = constants.reportConfig.metadata["App Version"]
  if(fse.pathExistsSync(`output/screenshots/${version}`)) {
    console.log('Clear screenshots directory ...')
    fse.removeSync(`output/screenshots/${version}`)
    // recreate directory
    fse.ensureDirSync('output/screenshots')
    fse.ensureDirSync(`output/screenshots/${version}`)
  } else {
    fse.ensureDirSync(`output/screenshots/${version}`)
  }

  //Feature paths
  crear_page = path.join(__dirname, `../../../screenshots/puppeteer/${version}/crear-page`);
  crear_post = path.join(__dirname, `../../../screenshots/puppeteer/${version}/crear-post`);
  crear_tag = path.join(__dirname, `../../../screenshots/puppeteer/${version}/crear-tag`);
  crear_vista = path.join(__dirname, `../../../screenshots/puppeteer/${version}/crear-vista`);
  editar_perfil = path.join(__dirname, `../../../screenshots/puppeteer/${version}/editar-perfil`);

  //verificar que carpetas compartidas existan
  shared =  path.join(__dirname, `../../../screenshots/puppeteer/${version}`);
  if(fse.pathExistsSync(shared)) {
    //Features paths
    fse.removeSync(crear_page);
    fse.removeSync(crear_post);
    fse.removeSync(crear_tag);
    fse.removeSync(crear_vista);
    fse.removeSync(editar_perfil);
    // recreate directory
    fse.ensureDirSync(shared);
    fse.ensureDirSync(crear_page);
    fse.ensureDirSync(crear_post);
    fse.ensureDirSync(crear_tag);
    fse.ensureDirSync(crear_vista);
    fse.ensureDirSync(editar_perfil);
  }
  else {
    console.log("No existe la carpeta compartida");
  }

  // *************************************** \\
  // collect information about the run
  //  and to write details to json file
  // *************************************** \\
  const env = process.env.NODE_ENV
  const platform = process.platform === 'darwin' ? 'MAC OSX' : process.platform
  const browserVersion = await scope.browser.version()

  // look for arg that specifies output file location - starts with 'json:'
  let outputPath = _.find(process.argv, arg => {
    return arg.indexOf('json:') >= 0
  })
  // extract the path location from the argument,
  //  remove 'json:' from outputPath to extract out the actual path
  if(outputPath) {
    outputPath = outputPath.replace('json:','')
  }

  // update and create report-config.json to be used to generate cucumber html report
  let reportConfig = constants.reportConfig
  // append to reportConfig run specific parameters
  reportConfig.jsonFile = outputPath
  reportConfig.metadata["Test Environment"] = env
  reportConfig.metadata["Browser"] = browserVersion
  reportConfig.metadata["Platform"] = platform

  fse.writeJsonSync('output/report-config.json', reportConfig)
  // *************************************** \\

  const path_pool = path.join(__dirname, '../../data_pools/data_pool.json');
  //charging data pools
  fs.readFile(path_pool, 'utf8', (err, data) => {
    try {
        // Parsear el JSON
        const jsonData = JSON.parse(data);
        // Guardar los datos en scope.data_pool
        scope.dataPool.page = jsonData.page;
    } catch (error) {
        console.error('Error al parsear el JSON:', error);
        return;
    }
  });

  //Generar datos dinamicos
  generateDinamicDataPool();

  //Datos dinamicos invalidos
  invalidDinamicDataPool();
})

Before(async () => {

  stepCounter = 1;

  // create new page between scenarios
  scope.page = await scope.browser.newPage();
  createPageObjects(scope.page)

  // add in accept language header - this is required when running in headless mode
  await scope.page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.8,zh-TW;q=0.6'
  });

  // Clean variables
  scope.variables = {};
  scope.variables.screenshotPath = `./output/screenshots/${constants.reportConfig.metadata["App Version"]}/`;
})

AfterStep(async function({pickle, pickleStep, gherkinDocument, result, testCaseStartedId, testStepId}) {
  //Scneario counter
  const featureName = gherkinDocument.feature.name.replace(/ /g, '-').toLowerCase();
  if (oldFeatureName !== featureName) {
    scenarioCounter = 1;
    oldFeatureName = featureName;
  }
  const stepNumber = stepCounter++;
  //Paths
  const version = constants.reportConfig.metadata["App Version"];
  const scenarioName = pickle.name.split(' - ')[0];
  const screenshotPath = `../../../screenshots/puppeteer/${version}/${featureName}/${scenarioName}/`;
  const screenshotName = `paso_${stepNumber}.png`;
  const fullPath = path.join(__dirname, `${screenshotPath}${screenshotName}`);
  //Validate if the folder exists
  if (!fse.pathExistsSync(path.join(__dirname, `${screenshotPath}`))) {
    fse.ensureDirSync(path.join(__dirname, `${screenshotPath}`));
  }

  //Screenshot
  //const screenshot = await scope.page.screenshot({path: fullPath, fullPage: true});

})

After(async function (scenario) {
  // *************************************** \\
  // take screenshot at end of scenario, 
  //  if failure attach screenshot to test steps
  // *************************************** \\

  let name = scenario.pickle.name.replace(/ /g, '-')
  let result = scenario.result.status

  scenarioCounter++;

  if(Status.FAILED) {

    const stream = await scope.page.screenshot({path: `./output/screenshots/${counter}-${result}-[${name}].png`, fullPage: true});
    // close the current page at end of scenario - to ensure fresh page is loaded each time
    await scope.page.close()
    // increment counter
    counter++
    return this.attach(stream, 'image/png');
  } else {
    let timestamp = moment()
    // take screenshot of the last page
    const stream = await scope.page.screenshot({ path: `./output/screenshots/${counter}-${result}-[${name}]-${timestamp.valueOf()}.png`, fullPage: true })
    // close the current page at end of scenario - to ensure fresh page is loaded each time
    await scope.page.close()
    // increment counter
    counter++
    return this.attach(stream, 'image/png');
  }
})

AfterAll(async () => {
  await deleteContent();
  if (scope.browser) {
    // close the browser at end of run
    await scope.browser.close()
  }
})

async function createPageObjects(page) {
  scope.pages = {
    login: new LoginPage(page),
    principal: new PrincipalPage(page),
    posts: new PostPage(page),
    pages: new PagesPage(page),
    profile: new ProfilePage(page),
    settings: new SettingsPage(page),
    tagList: new TagListPage(page),
    tag: new TagPage(page),
    userHistory: new UserHistoryPage(page),
    labs: new LabsPage(page)
  }
}

async function deleteContent() {
  console.log("Eliminando contenido...");

    scope.page = await scope.browser.newPage();
    createPageObjects(scope.page);
    await Promise.all([
      scope.page.waitForNavigation({ waitUntil: 'networkidle0'}),
      scope.pages.principal.navigateToSite()
    ]);
    await scope.pages.principal.navigateToSettings();
    await scope.pages.settings.gotToLabs();
    await scope.pages.labs.deleteAllContent();

    await scope.page.close();

    console.log("Contenido eliminado");
  }

function generateDinamicDataPool(){
  // Ruta al archivo JSON
  const filePath = path.join(__dirname, '../../data_pools/dinamic_data_pool.json');
  // Leer el archivo JSON
  fs.readFile(filePath, 'utf8', (err, data) => {
      try {
        // Parsear el JSON
        const jsonData = JSON.parse(data);

        // Verificar si existen los atributos 'titles' y 'contents'
        if (jsonData.page.hasOwnProperty('titles')) {
          // Generar una cantidad aleatoria de títulos
          jsonData.page.titles = [];
          const numTitles = faker.random.number({ min: 2, max: 8 });
          for (let i = 0; i < numTitles; i++) {
            const sNumber = faker.random.number({ min: 1, max: 10 });
            jsonData.page.titles.push(faker.lorem.sentence(sNumber));
          }
        }
        if (jsonData.page.hasOwnProperty('contents')) {
          // Generar una cantidad aleatoria de contenidos
          jsonData.page.contents = [];
          const numContents = faker.random.number({ min: 1, max: 5 });
          for (let i = 0; i < numContents; i++) {
            const pNumber = faker.random.number({ min: 1, max: 5 });
            jsonData.page.contents.push(faker.lorem.paragraphs(pNumber, '\n\n'));
          }
        }
        if (jsonData.page.hasOwnProperty('audio_files')) {
          // Generar una cantidad aleatoria de archivos
          jsonData.page.audio_files = [];
          const numFiles = faker.random.number({ min: 1, max: 3});
          for (let i = 0; i < numFiles; i++) {
            const fileName = faker.system.fileName();
            const filePath = `./assets/${fileName}.mp3`;
            jsonData.page.audio_files.push(filePath);
          }
        }

        if(jsonData.page.hasOwnProperty('slugs')){
          // Generar una cantidad aleatoria de slugs
          jsonData.page.slugs = [];
          const numSlugs = faker.random.number({ min: 2, max: 3});
          for (let i = 0; i < numSlugs; i++) {
            const sNumber = faker.random.number({ min: 1, max: 3 });
            //Construir slugs con - en cambio de espacios
            let slug = faker.lorem.sentence(sNumber)
              .toLowerCase()
              .replace(/[^\w\s]/g, '')
              .replace(/\s+/g, '-');
            jsonData.page.slugs.push(slug);
          }
        }

        //Escribir en scope.dinamicDataPool.
        scope.dinamicDataPool.page = jsonData.page;
        // Escribir el archivo JSON
        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
          if (err) {
            console.error('Error al escribir el archivo JSON:', err);
            return;
          }
        });
      } catch (error) {
          console.error('Error al parsear el JSON:', error);
          return;
      }
  });
}

function invalidDinamicDataPool(){
  // Ruta al archivo JSON
  const filePath = path.join(__dirname, '../../data_pools/invalid_dinamic_data_pool.json');
  // Leer el archivo JSON
  fs.readFile(filePath, 'utf8', (err, data) => {
      try {
        // Parsear el JSON
        const jsonData = JSON.parse(data);
        //Escribir en scope.invalidDinamicDataPool.
        scope.invalidDinamicDataPool.page = jsonData.page;
      } catch (error) {
          console.error('Error al parsear el JSON:', error);
          return;
      }
  });
}