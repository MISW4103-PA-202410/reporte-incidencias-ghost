const { Given, When, Then } = require("@cucumber/cucumber");

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

When("I click publish post right now button", async function () {
  let element = await this.driver.$('[data-test-button="confirm-publish"]');
  return await element.click();
});

When("I go back to dashboard", async function () {
  let element = await this.driver.$(".ember-view.gh-back-to-editor");
  return await element.click();
});
