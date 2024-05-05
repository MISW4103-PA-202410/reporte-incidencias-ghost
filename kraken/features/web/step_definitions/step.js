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
