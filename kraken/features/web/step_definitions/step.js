const { Given, When, Then } = require("@cucumber/cucumber");
const path = require("path");

When("I enter to the setup page {kraken-string}", async function (values) {
  let button = await this.driver.$("#ember5");
  const setupValues = values.split(";");
  if (button === undefined) {
    button = await this.driver.$("#ember4");
    let blogTitle = await this.driver.$("#blog-title");
    await blogTitle.setValue(setupValues[0]);
    let fullName = await this.driver.$("#name");
    await fullName.setValue(setupValues[1]);
    let email = await this.driver.$("#email");
    await email.setValue(setupValues[2]);
    let password = await this.driver.$("#password");
    await password.setValue(setupValues[3]);
  } else {
    let email = await this.driver.$("#identification");
    await email.setValue(setupValues[2]);
    let password = await this.driver.$("#password");
    await password.setValue(setupValues[3]);
  }
  return await button.click();
});

/**
 *
 * POSTS STEPS
 *
 */

When("I click in the add post button", async function () {
  let element = await this.driver.$("#ember20");
  return await element.click();
});

When("I enter a title for the post {kraken-string}", async function (title) {
  let element = await this.driver.$("#ember49");
  return await element.setValue(title);
});

When(
  "I enter a description for the post {kraken-string}",
  async function (description) {
    let element = await this.driver.$(".kg-prose > p");
    await element.scrollIntoView();
    await element.click();
    return await element.keys(description);
  }
);

When("I click publish post button", async function () {
  let element = await this.driver.$(
    ".gh-editor-publish-buttons > button:nth-child(2)"
  );
  return await element.click();
});

When("I click final review post button", async function () {
  let element = await this.driver.$(".gh-publish-cta > button");
  return await element.click();
});

When("I click publish confirm button", async function () {
  let element = await this.driver.$('[data-test-button="confirm-publish"]');
  return await element.click();
});

When("I go back to dashboard", async function () {
  let element = await this.driver.$(".ember-view.gh-back-to-editor");
  return await element.click();
});

When("I attach an image to a post", async function () {
  let element = await this.driver.$(".gh-editor-feature-image-add-button");
  await element.click();
  let fileInput = await this.driver.$('input[type="file"]');

  // Set the file path to the file input element
  return await fileInput.setValue(
    path.resolve("../kraken/features/web/resources/image_feature.jpeg")
  );
});

When("I click on publish settings button", async function () {
  let element = await this.driver.$(".gh-publish-setting.last ");
  return await element.click();
});

When("I click on schedule for later button", async function () {
  let element = await this.driver.$(".gh-publish-schedule > div:nth-child(2)");
  return await radioelementButton.click();
});

/**
 *
 * PAGES STEPS
 *
 */

When("I click in the pages menu button", async function () {
  let element = await this.driver.$('a[href="#/pages/"]');
  return await element.click();
});

When("I click in the new page", async function () {
  let element = await this.driver.$('a[href="#/editor/page/"]');
  return await element.click();
});

When("I enter the page title {kraken-string}", async function (title) {
  let element = await this.driver.$('textarea[placeholder="Page title"]');
  return await element.setValue(title);
});

When("I click button to add a card", async function () {
  let element = await this.driver.$(".kg-prose > p");
  await element.scrollIntoView();
  await element.click();
  let button = await this.driver.$('div[data-kg-plus-button="true"] > button');
  return await button.click();
});

When("I click button to add an audio element", async function () {
  let element = await this.driver.$('button[data-kg-card-menu-item="Audio"]');
  await element.click();
  let fileInput = await this.driver.$('input[name="audio-input"]');
  // Set the file path to the file input element
  return await fileInput.setValue(
    path.resolve("../kraken/features/web/resources/audio.mp3")
  );
});

When("I click in the publish page button", async function () {
  let element = await this.driver.$('button[data-test-button="publish-flow"]');
  return await element.click();
});

When("I click in the continue publish page button", async function () {
  let element = await this.driver.$('button[data-test-button="continue"]');
  return await element.click();
});

When("I click youtube embeds", async function () {
  let element = await this.driver.$('button[data-kg-card-menu-item="YouTube"]');
  return await element.click();
});

When("I insert the youtube url", async function () {
  let element = await this.driver.$('input[data-testid="embed-url"]');
  await element.setValue("https://www.youtube.com/watch?v=edVYLVDDgh0");
  return await element.keys(["Enter"]);
});

When("I click side options menu", async function () {
  let element = await this.driver.$(".settings-menu-toggle");
  return await element.click();
});

When("I set the page url {kraken-string}", async function (url) {
  let element = await this.driver.$("#url");
  return await element.setValue(url);
});

When("I click in the preview page button", async function () {
  let element = await this.driver.$(
    'button[data-test-button="publish-preview"]'
  );
  return await element.click();
});

When("I click the back button", async function () {
  let element = await this.driver.$(".gh-editor-back-button");
  return await element.click();
});

When("I click the editor back button", async function () {
  let element = await this.driver.$(".gh-editor-back-button");
  return await element.click();
});

When("I click the description field", async function () {
  let element = await this.driver.$(".kg-prose > p");
  await element.scrollIntoView();
});

/**
 *
 * TAGS
 *
 */

When("I click in the tags menu button", async function () {
  let element = await this.driver.$('a[href="#/pages/"]');
  return await element.click();
});

When("I click in the new tag button", async function () {
  let element = await this.driver.$('a[href="#/tags/new/"]');
  return await element.click();
});

When("I enter the tag name", async function (name) {
  let element = await this.driver.$("#tag-name");
  return await element.setValue(name);
});

When("I click the save tag button", async function () {
  let element = await this.driver.$('button[data-test-button="save"]');
  return await element.click();
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
