const { Given, When, Then } = require("@cucumber/cucumber");
const path = require("path");
const fs = require('fs');
const { assert, expect } = require("chai");
const { Console } = require("console");
const { version } = require("os");

When("I enter to the setup page {kraken-string}", async function (values) {
  const setupValues = values.split(";");
  let button = await this.driver.$('button[data-test-button="sign-in"]');

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
    let email = await this.driver.$("#identification");
    await email.setValue(setupValues[2]);
    let password = await this.driver.$("#password");
    await password.setValue(setupValues[3]);
    
    return await button.click();
  }
});

When("I enter to the setup page {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
  const setupValues = values.split(";");
  let button = await this.driver.$('button[data-test-button="sign-in"]');

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
    let email = await this.driver.$("#identification");
    await email.setValue(setupValues[2]);
    let password = await this.driver.$("#password");
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

When ("I sign in with email {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
  const setupValues = values.split(";");
  let email = await this.driver.$("#identification");
  await email.setValue(setupValues[0]);
  let password = await this.driver.$("#password");
  await password.setValue(setupValues[1]);
  let button = await this.driver.$('button.login.gh-btn.gh-btn-login');

  const screenshot = await this.driver.takeScreenshot();
  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  fs.mkdirSync(screenshotsBasePath, { recursive: true });
  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');

  return await button.click();
});

async function actionAndScreenshot(elementSelector, action, driver, screenshotDetails) {
  let element;
  if (action === 'click') {
    element = await driver.$(elementSelector);
    await element.click();
  } else if (action === 'setValue') {
    let inputs = await driver.$$(elementSelector);
    inputs[0].setValue(screenshotDetails.value[0]);
    inputs[1].setValue(screenshotDetails.value[1]);
    if (screenshotDetails.value[2]) {
      inputs[2].setValue(screenshotDetails.value[2]);
    }
  } else if (action === 'clearValue') {
    let sections = await driver.$$(elementSelector);
    for (let section of sections) {
      const labelText = await section.getText();
      if (labelText.includes("Full name")) {
        let inputs = await section.$$('input[type="text"]');
        await inputs[0].clearValue();
        await inputs[1].clearValue();
      }
    }
  }

  const screenshot = await driver.takeScreenshot();
  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${screenshotDetails.version}/${screenshotDetails.feature}/escenario_${screenshotDetails.scenario}`);
  fs.mkdirSync(screenshotsBasePath, { recursive: true });
  const screenshotFilename = `paso_${screenshotDetails.step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
}


/**
 *
 * POSTS STEPS
 *
 */

When("I click in the add post button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot("#ember20", 'click', this.driver, {version, feature, scenario, step});
});

When("I click Posts and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot('a[href="#/posts/"].ember-view', 'click', this.driver, {version, feature, scenario, step});
});

When("I enter a title for the post {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (title, version, feature, scenario, step) {
  let element = await this.driver.$("#ember49");

  await element.setValue(title);

  const screenshot = await this.driver.takeScreenshot();

  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);

  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);

  fs.writeFileSync(screenshotPath, screenshot, 'base64');
});

When(
  "I enter a description for the post {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (description, version, feature, scenario, step) {
    let element = await this.driver.$(".kg-prose > p");
    await element.scrollIntoView();
    await element.click();
    await element.keys(description);

    const screenshot = await this.driver.takeScreenshot();

    const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);

    fs.mkdirSync(screenshotsBasePath, { recursive: true });

    const screenshotFilename = `paso_${step}.png`;
    const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);

    fs.writeFileSync(screenshotPath, screenshot, 'base64');
  }
);

When("I click publish post button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot('.gh-editor-publish-buttons > button:nth-child(2)', 'click', this.driver, {version, feature, scenario, step});
});

When("I click final review post button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot('.gh-publish-cta > button', 'click', this.driver, {version, feature, scenario, step});
});

When("I click publish confirm button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot('[data-test-button="confirm-publish"]', 'click', this.driver, {version, feature, scenario, step});
});

When("I go back to dashboard and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot('.epm-modal-container > div > div > div > p > a', 'click', this.driver, {version, feature, scenario, step});
});

When("I attach an image to a post and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  let element = await this.driver.$(".gh-editor-feature-image-add-button");
  await element.click();
  let fileInput = await this.driver.$('input[type="file"]');

  // Set the file path to the file input element
  await fileInput.setValue(
    path.resolve("../kraken/features/web/resources/image_feature.jpeg")
  );
  const screenshot = await this.driver.takeScreenshot();

  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);

  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);

  fs.writeFileSync(screenshotPath, screenshot, 'base64');
});

When("I click on publish settings button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  await actionAndScreenshot('.gh-publish-setting.last', 'click', this.driver, {version, feature, scenario, step});
});

When("I click on schedule for later button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  await actionAndScreenshot('.gh-publish-schedule > div:nth-child(2)', 'click', this.driver, {version, feature, scenario, step});
});

/**
 *
 * PAGES STEPS
 *
 */

When("I click in the pages menu button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  await actionAndScreenshot('a[href="#/pages/"]', 'click', this.driver, {version, feature, scenario, step});
});

When("I click in the new page and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  await actionAndScreenshot('a[href="#/editor/page/"]', 'click', this.driver, {version, feature, scenario, step});
});

When("I enter the page title {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (title, version, feature, scenario, step) {
  let element = await this.driver.$('textarea[placeholder="Page title"]');
  await element.setValue(title);
  const screenshot = await this.driver.takeScreenshot();

  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);

  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);

  fs.writeFileSync(screenshotPath, screenshot, 'base64');
});

When("I click button to add a card and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  let element = await this.driver.$(".kg-prose > p");
  await element.scrollIntoView();
  await element.click();
  let button = await this.driver.$('div[data-kg-plus-button="true"] > button');
  await button.click();
  const screenshot = await this.driver.takeScreenshot();

  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);

  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
});

When("I click button to add an audio element and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  let element = await this.driver.$('button[data-kg-card-menu-item="Audio"]');
  await element.click();
  let fileInput = await this.driver.$('input[name="audio-input"]');
  // Set the file path to the file input element
  await fileInput.setValue(
    path.resolve("../kraken/features/web/resources/audio.mp3")
  );
  const screenshot = await this.driver.takeScreenshot();

  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);

  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
});

When("I click in the publish page button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  await actionAndScreenshot('button[data-test-button="publish-flow"]', 'click', this.driver, {version, feature, scenario, step});
});

When("I click in the continue publish page button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  await actionAndScreenshot('button[data-test-button="continue"]', 'click', this.driver, {version, feature, scenario, step});
});

When("I click youtube embeds and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  await actionAndScreenshot('button[data-kg-card-menu-item="YouTube"]', 'click', this.driver, {version, feature, scenario, step});
});

When("I insert the youtube url and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  let element = await this.driver.$('input[data-testid="embed-url"]');
  await element.setValue("https://www.youtube.com/watch?v=edVYLVDDgh0");
  await element.keys(["Enter"]);
  const screenshot = await this.driver.takeScreenshot();

  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);

  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
});

When("I click side options menu and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  await actionAndScreenshot('.settings-menu-toggle', 'click', this.driver, {version, feature, scenario, step});
});

When("I set the page url {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (url, version, feature, scenario, step) {
  let element = await this.driver.$("#url");
  await element.setValue(url);
  const screenshot = await this.driver.takeScreenshot();

  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);

  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
});

When("I click in the preview page button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  await actionAndScreenshot('button[data-test-button="publish-preview"]', 'click', this.driver, {version, feature, scenario, step});
});

When("I click the back button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  await actionAndScreenshot('.gh-editor-back-button', 'click', this.driver, {version, feature, scenario, step});
});

When("I click the editor back button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  await actionAndScreenshot('.gh-editor-back-button', 'click', this.driver, {version, feature, scenario, step});
});

When("I click the description field and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}",  async function (version, feature, scenario, step) {
  await actionAndScreenshot('.kg-prose > p', 'click', this.driver, {version, feature, scenario, step});
});

/**
 *
 * TAGS
 *
 */

When("I click in the tags menu button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  let element = await this.driver.$('a[href="#/tags/"].ember-view');

  await element.click();

  const screenshot = await this.driver.takeScreenshot();

  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);

  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);

  fs.writeFileSync(screenshotPath, screenshot, 'base64');
});

When("I click in the new tag button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  let element = await this.driver.$('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary');
  await element.click();

  const screenshot = await this.driver.takeScreenshot();

  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);

  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);

  fs.writeFileSync(screenshotPath, screenshot, 'base64');

});

When("I fill the tag name {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
  let element = await this.driver.$("#tag-name ");
  await element.setValue(values); 

  const screenshot = await this.driver.takeScreenshot();

  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);

  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);

  fs.writeFileSync(screenshotPath, screenshot, 'base64');

});

When("I verify the tag name created is {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
  let element = await this.driver.$(
    '.view-container.content-list > ol > li:last-of-type > a:first-of-type'
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

When("I click the save tag button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  let element = await this.driver.$('button[data-test-button="save"]');
  await element.click();

  const screenshot = await this.driver.takeScreenshot();
  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
});

When("I see the tag has been saved", async function () {
  let element = await this.driver.$(
    'span[data-test-task-button-state="success"]'
  );
  if (element !== undefined) return;
  throw new Error();
});

When("I check the slug has been changed", async function () {
  let element = await this.driver.$("#tag-slug");
  const values = element.getValue().split("-2");
  if (values[1] !== "2") return;
  throw new Error();
});


When("I click in the add image to tag and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  let element = await this.driver.$("span.x-file-input > label > div.gh-btn.gh-btn-white");
  await element.click();
  let fileInput = await this.driver.$('input[type="file"]');

  // Set the file path to the file input element
  await fileInput.setValue(
    path.resolve("../kraken/features/web/resources/image_feature.jpeg")
  );

  const screenshot = await this.driver.takeScreenshot();
  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
});

When("I fill the meta data {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
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

When("I click in the expand meta data button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  let element = await this.driver.$("button.gh-btn.gh-btn-expand > span");
  await element.click();

  const screenshot = await this.driver.takeScreenshot();
  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  fs.mkdirSync(screenshotsBasePath, { recursive: true });

  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
});

/**
 *
 * View
 *
 */
When("I click dropdown visibility and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot("div.gh-contentfilter-menu.gh-contentfilter-visibility", 'click', this.driver, {version, feature, scenario, step});
});

When("I click Public and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot("ul.ember-power-select-options > li:nth-child(2)", 'click', this.driver, {version, feature, scenario, step});
});

When("I select orange color and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot("div.flex.justify-between.mt3.nl1 > div:nth-child(8)", 'click', this.driver, {version, feature, scenario, step});
});

When("I click Paid members only and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot("ul.ember-power-select-options > li:nth-child(4)", 'click', this.driver, {version, feature, scenario, step});
});

When("I click new view and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot("div.dropdown.gh-contentfilter-menu.gh-contentfilter-actions > button.gh-contentfilter-menu-trigger.gh-contentfilter-button.gh-btn-save-view", 'click', this.driver, {version, feature, scenario, step});
});

When("I enter view name {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
  let element = await this.driver.$(
    "input.ember-text-field.gh-input.ember-view"
  );
  await element.setValue(values);
  const screenshot = await this.driver.takeScreenshot();
  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  fs.mkdirSync(screenshotsBasePath, { recursive: true });
  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
  return ;
});

When("I click Save view and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot("div.modal-footer > button.gh-btn.gh-btn-black.gh-btn-icon.ember-view", 'click', this.driver, {version, feature, scenario, step});
});

When("I check the created view {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
  let element = await this.driver.$(`a[title="${values}"] > span.gh-nav-viewname`);
  assert.equal(await element.getText(), values);
  await actionAndScreenshot(`a[title="${values}"] > span.gh-nav-viewname`, 'click', this.driver, {value: values, version, feature, scenario, step});
});

Then("I should delete the view and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot("div.modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon", 'click', this.driver, {version, feature, scenario, step});
});

When("I click the dropdown tags and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot("div.gh-contentfilter-menu.gh-contentfilter-tag", 'click', this.driver, {version, feature, scenario, step});
});

When("I select news Tag and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  await actionAndScreenshot("ul.ember-power-select-options > li:nth-child(3)", 'click', this.driver, {version, feature, scenario, step});
});

/**
 *
 * Profile
 *
 */

When("I click the profile button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  return actionAndScreenshot("div.gh-user-avatar.relative", 'click', this.driver, {version, feature, scenario, step});
});

When("I click the configure button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  return await actionAndScreenshot('a[data-test-nav="user-profile"]', 'click', this.driver, {version, feature, scenario, step});
});

When("I click the password change button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  // Seleccionando el botón por algunas clases clave
  let buttonSelector =
    'div.relative.flex-col.gap-6.rounded-xl > button[type="button"]';
  let buttons = await this.driver.$$(buttonSelector);
  

  // Iterar sobre los botones encontrados y hacer clic en el que tiene el texto correcto
  for (let button of buttons) {
    if ((await button.getText()) === "Change password") {
      await button.click();
      const screenshot = await this.driver.takeScreenshot();
      const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
      fs.mkdirSync(screenshotsBasePath, { recursive: true });
      const screenshotFilename = `paso_${step}.png`;
      const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
      fs.writeFileSync(screenshotPath, screenshot, 'base64');
      return ;
    }
  }

  throw new Error("Password change button not found");
});

When("I fill the password fields {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
  const setupValues = values.split(";");
  let passwordInputs = await this.driver.$$(
    'div.flex > div.relative > input[type="password"]'
  );
  await passwordInputs[0].setValue(setupValues[0]);
  await passwordInputs[1].setValue(setupValues[1]);
  await passwordInputs[2].setValue(setupValues[2]);

  const screenshot = await this.driver.takeScreenshot();
  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  fs.mkdirSync(screenshotsBasePath, { recursive: true });
  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
  return ;

});

When("I click the change password button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  let passwordInputs = await this.driver.$$(
    "div.relative.flex-col.gap-6 > button"
  );
  for (let button of passwordInputs) {
    if ((await button.getText()) === "Change password") {
      await button.click();
      const screenshot = await this.driver.takeScreenshot();
      const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
      fs.mkdirSync(screenshotsBasePath, { recursive: true });
      const screenshotFilename = `paso_${step}.png`;
      const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
      fs.writeFileSync(screenshotPath, screenshot, 'base64');
      return ;
    }
  }
});

When("I click the save profile button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  let element = await this.driver.$$(
    "button.cursor-pointer.bg-black.text-white"
  );
  for (let button of element) {
    if ((await button.getText()) === "Save & close") {
      await button.click();
      const screenshot = await this.driver.takeScreenshot();
      const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
      fs.mkdirSync(screenshotsBasePath, { recursive: true });
      const screenshotFilename = `paso_${step}.png`;
      const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
      fs.writeFileSync(screenshotPath, screenshot, 'base64');
      return ;
    }
  }
  return await element.click();
});

When("I click the quit button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  
  return await actionAndScreenshot("#done-button", 'click', this.driver, {version, feature, scenario, step});
});

When("I click the sign out button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  return await actionAndScreenshot('a[href="#/signout/"]', 'click', this.driver, {version, feature, scenario, step});
});

When("I click the cover image button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  let fileInput = await this.driver.$('#cover-image');

  // Set the file path to the file input element
  await fileInput.setValue(
    path.resolve("../kraken/features/web/resources/pexels-iriser-1379636.jpg")
  );
  await actionAndScreenshot("div.flex.items-end.gap-4.justify-end.flex-nowrap", 'click', this.driver, {version, feature, scenario, step});
});

When("I clear values and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  const userSections = await this.driver.$$(
    "div.relative.flex-col.gap-6.rounded-xl.transition-all"
  );

  // Recorrer cada sección para encontrar la que contiene 'Full name'
  for (let section of userSections) {
    const labelText = await section.getText();
    if (labelText.includes("Full name")) {
      // Asumiendo que hay exactamente dos inputs en la sección donde se encuentra 'Full name'
      const inputs = await section.$$('input[type="text"]');
      await inputs[0].clearValue();
      await inputs[1].clearValue();
    }
  }

  const screenshot = await this.driver.takeScreenshot();
  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  fs.mkdirSync(screenshotsBasePath, { recursive: true });
  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
  return ;

});

When("I change info profile {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
  const setupValues = values.split(";");
  const columnas = await this.driver.$$("div.relative.flex-col.gap-6.rounded-xl.transition-all > div.flex.flex-col.gap-x-5.gap-y-7.undefined > div.flex.flex-col");
  for (let columna of columnas) {
    const labelText = await columna.getText();
    if (labelText.includes("Full name")) {
      const input = await columna.$('div.relative.order-2.flex > input');
      await input.click();
      await input.keys(['Control', 'a']);
      await input.keys(['Delete']); 
      const value = await input.getValue();
      if(value.length > 0){
        await input.keys(['Meta', 'a']);
        for (let i = 0; i < value.length; i++) {
          await input.keys('Backspace'); // Press backspace for each character
        }
      }
      await input.setValue(setupValues[0]);
    }
    if (labelText.includes("Email")) {
      const input = await columna.$('div.relative.order-2.flex > input');
      await input.click();
      await input.keys(['Control', 'a']);
      await input.keys(['Delete']); 
      const value = await input.getValue();
      if(value.length > 0){
        await input.keys(['Meta', 'a']);
        for (let i = 0; i < value.length; i++) {
          await input.keys('Backspace'); // Press backspace for each character
        }
      }
      await input.setValue(setupValues[1]);
    }
  }
  const screenshot = await this.driver.takeScreenshot();
  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  fs.mkdirSync(screenshotsBasePath, { recursive: true });
  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
  return ;
}





);





When("I change info profile socialMedia {kraken-string} and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (values, version, feature, scenario, step) {
  const setupValues = values.split(";");
  // Obtener todos los contenedores que podrían contener los campos de entrada
  const userSections = await this.driver.$$(
    "div.relative.flex-col.gap-6.rounded-xl.transition-all"
  );

  for (let section of userSections) {
    const labelText = await section.getText();
    if (labelText.includes("Location")) {
      const inputs = await section.$$('input[type="text"]');
      await inputs[2].setValue(setupValues[0]);
      await inputs[3].setValue(setupValues[1]);
    }
  }
  const screenshot = await this.driver.takeScreenshot();
  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  fs.mkdirSync(screenshotsBasePath, { recursive: true });
  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');

});

When ("I click the dot points button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  const dotPoints = await this.driver.$$("button.flex.h-8.cursor-pointer.items-center.justify-center");
  for (let dotPoint of dotPoints) {
    if ((await dotPoint.getText()).includes("Actions")) {
      await dotPoint.click();
      const screenshot = await this.driver.takeScreenshot();
      const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
      fs.mkdirSync(screenshotsBasePath, { recursive: true });
      const screenshotFilename = `paso_${step}.png`;
      const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
      fs.writeFileSync(screenshotPath, screenshot, 'base64');
      return ;
    }
  }


});


When ("I click the userActivityButton button and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  return await actionAndScreenshot("button.cursor-pointer.px-4.text-left.text-sm", 'click', this.driver, {version, feature, scenario, step});
});


When ("I verify history and take a screenshot for version {kraken-string} feature {string} scenario {string} step {string}", async function (version, feature, scenario, step) {
  const Activity = await this.driver.$$('div.flex.grow.items-center.gap-3.undefined');

  const count = Activity.length;

  assert.isAtLeast(count, 1);

  const screenshot = await this.driver.takeScreenshot();
  const screenshotsBasePath = path.resolve(__dirname, `../../../../screenshots/kraken/${version}/${feature}/escenario_${scenario}`);
  fs.mkdirSync(screenshotsBasePath, { recursive: true });
  const screenshotFilename = `paso_${step}.png`;
  const screenshotPath = path.join(screenshotsBasePath, screenshotFilename);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
  return ;

});