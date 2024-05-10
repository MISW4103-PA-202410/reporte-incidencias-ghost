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
const UserHistoryPage = require('../pages/UserHistoryPage')

setDefaultTimeout(constants.pageTimeout * 1000);

BeforeAll(async () => {
  // reset counter
  counter = 0
  scenarioCounter = 1

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
  const screenshotPath = scope.variables.screenshotPath;
  const featureName = gherkinDocument.feature.name.replace(/ /g, '-').toLowerCase();
  const stepNumber = stepCounter++;
  // screenshots/<version>/<nombre-feature>_escenario_<escenario>_paso_<paso>.png
  const screenshotName = `${featureName}_escenario_${scenarioCounter}_paso_${stepNumber}.png`;
  const screenshot = await scope.page.screenshot({path: `${screenshotPath}${screenshotName}`, fullPage: true});
  
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
    await scope.pages.settings.gotToLabs();
    await scope.pages.labs.deleteAllContent();

    await scope.page.close();

    console.log("Contenido eliminado");
  }