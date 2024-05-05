const { Given, When, Then } = require("@cucumber/cucumber");

When("I enter blog title {kraken-string}", async function (title) {
  let element = await this.driver.$("#blog-title");
  return await element.setValue(title);
});

When("I enter full name {kraken-string}", async function (name) {
  let element = await this.driver.$("#name");
  return await element.setValue(name);
});

When("I enter email address {kraken-string}", async function (email) {
  let element = await this.driver.$("#email");
  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#password");
  return await element.setValue(password);
});

When("I click create account and start publishing button", async function () {
  let element = await this.driver.$("#ember4");
  return await element.click();
});

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
