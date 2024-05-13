const { Given, When, Then } = require("@cucumber/cucumber");
const path = require("path");
const fs = require('fs');
const { assert, expect } = require("chai");
const { Console } = require("console");

When("I enter to the setup page v {kraken-string}", async function (values) {
  const setupValues = values.split(";");
  let button = await this.driver.$('button[tabindex="3"]');

  const buttonExists = await button.isExisting();

  if (!buttonExists) {
    let blogTitle = await this.driver.$("#blog-title");
    await blogTitle.setValue(setupValues[0]);
    let fullName = await this.driver.$("#name");
    await fullName.setValue(setupValues[1]);
    let email = await this.driver.$("#email");
    await email.setValue(setupValues[2]);
    let password = await this.driver.$("#password");
    await password.setValue(setupValues[3]);
    let button = await this.driver.$("#setup > button");
    return await button.click();
  } else {
    let email = await this.driver.$('input[name="identification"]');
    await email.setValue(setupValues[2]);
    let password = await this.driver.$('input[name="password"]');
    await password.setValue(setupValues[3]);
    
    return await button.click();
  }
});

When("I enter to the setup page v {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
  const setupValues = values.split(";");
  let button = await this.driver.$('button[tabindex="3"]');

  const buttonExists = await button.isExisting();

  if (!buttonExists) {
    let blogTitle = await this.driver.$("#blog-title");
    await blogTitle.setValue(setupValues[0]);
    let fullName = await this.driver.$("#name");
    await fullName.setValue(setupValues[1]);
    let email = await this.driver.$("#email");
    await email.setValue(setupValues[2]);
    let password = await this.driver.$("#password");
    await password.setValue(setupValues[3]);
    let newButton = await this.driver.$("#setup > button");
    await newButton.click();
  } else {
    let email = await this.driver.$('input[name="identification"]');
    await email.setValue(setupValues[2]);
    let password = await this.driver.$('input[name="password"]');
    await password.setValue(setupValues[3]);
    await button.click();
  }

  // Captura de pantalla después de realizar las acciones
  const screenshot = await this.driver.takeScreenshot();
  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  fs.mkdirSync(screenshotsBasePath, { recursive: true });
  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
  return ;
});


/**
 *
 * TAGS
 *
 */

When("I click in the tags menu button v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('a[href="#/tags/"].ember-view');
  
    await element.click();
  
    const screenshot = await this.driver.takeScreenshot();
  
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
  });

  When("I click in the new tag button v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-green');
    await element.click();
  
    const screenshot = await this.driver.takeScreenshot();
  
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
  
  });


  When("I fill the tag name {kraken-string} v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
    let element = await this.driver.$("#tag-name");
    await element.setValue(values); 
  
    const screenshot = await this.driver.takeScreenshot();
  
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
  
  });

  When("I click the save tag button v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('section.view-actions > button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
    await element.click();
  
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
  });

  When("I verify the tag name created is {kraken-string} v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
    let element = await this.driver.$(
      "section.content-list > ol.tags-list.gh-list > li:nth-child(4) > a.ember-view.gh-list-data.gh-tag-list-title.gh-list-cellwidth-70"
    );
    let tagName = await element.getText();
    assert.equal(tagName, values);
  
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
  
    return await element.click();
  });
  
  When("I click in the add image to tag v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('span[accept="image/gif,image/jpg,image/jpeg,image/png,image/svg+xml"]');
    await element.click();
  
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
  });

  When("I click in the expand meta data button v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$("div.flex.flex-column.br3.shadow-1.bg-grouped-table.mt2 > section:nth-child(1) > div.flex > div:nth-child(2)");
    await element.click();
  
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
  });


  When("I fill the meta data {kraken-string} v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
    const setupValues = values.split(";");
  
    let element = await this.driver.$("#meta-title");
    await element.setValue(setupValues[0]);
    element = await this.driver.$("#meta-description");
    await element.setValue(setupValues[1]);
    element = await this.driver.$("#canonical-url");
    await element.setValue(setupValues[2]);
  
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
  
    return await element.click();  // assuming you want to click the last element set
  });
  /**
 *
 * PAGES
 *
 */

  When("I click in the pages menu button v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('a[href="#/pages/"]');
    await element.click();
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    return ; 
  }); 

  When("I click in the new page button v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    await element.click()
    
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    return ;
  });

  When("I enter the page title {kraken-string} v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (title, version, feature, scenario, step) {
    let element = await this.driver.$('textarea[placeholder="Page Title"]');
    await element.setValue(title);
    await element.keys(["Enter"]);

    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    return ;
  });

  When("I click button to add a card v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('button[aria-label="Add a card"]');
    await element.scrollIntoView();
    await element.click();

    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    return ;
    
  });


  When("I click youtube embeds button v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('div[title="YouTube"]');
    await element.click();

    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    return ;
  });

  When("I insert the youtube url v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('input[placeholder="Paste URL to add embedded content..."]');
    await element.setValue("https://www.youtube.com/watch?v=edVYLVDDgh0");
    await element.keys(["Enter"]);
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    return ;
  });

  When("I click in the publish page button v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('section.view-actions.br2.bg-white');
    await element.click();
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    return ;
  });

  When("I click in the continue publish page button v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
    await element.click();
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    return ;
  });

  When("I click publish confirm button v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('span.gh-notification-actions > a');
    await element.click();
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    return ;
  });


  When("I close the side options menu v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$('button.close.settings-menu-header-action');
    await element.click();
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    return ;
  });

  
  When("I set the page url {kraken-string} v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (url, version, feature, scenario, step) {
    let element = await this.driver.$("#url");
     await element.setValue(url);
     const screenshot = await this.driver.takeScreenshot();
     const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
     fs.mkdirSync(screenshotsBasePath, { recursive: true });
   
     const screenshotFilename = `paso_${step}.png`;
     const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
     fs.writeFileSync(screenshotPath, screenshot, 'base64');
     return ;
  });

  When("I click side options menu v and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
    let element = await this.driver.$("button.post-settings");
    await element.click();
    const screenshot = await this.driver.takeScreenshot();
    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
    fs.mkdirSync(screenshotsBasePath, { recursive: true });
  
    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    return ;
  });