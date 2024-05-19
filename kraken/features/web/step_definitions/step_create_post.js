const { faker } = require("@faker-js/faker");
const { Given, When, Then } = require("@cucumber/cucumber");
const path = require('path');
const fs = require('fs')

When("I click the side bar menu option in posts", async function () {
  let element = await this.driver.$("button[data-test-psm-trigger]");
  await element.click();
});

When("I set a random name for the post slug", async function () {
  let element = await this.driver.$(".post-setting-slug");
  await element.setValue(faker.lorem.word());
});

When("I click on the post access select", async function () {
  let element = await this.driver.$('select[data-test-select="post-visibility"]');
  await element.click();
});

When("I set a semi-random post access value", async function () {
  const randomOptionIdx = faker.number.int({min: 1, max: 4});
  let element = await this.driver.$(`select[data-test-select="post-visibility"] > option:nth-child(${randomOptionIdx})`);
  await element.click();
});

When("I set a random excerpt", async function () {
  let element = await this.driver.$('#custom-excerpt');
  await element.setValue(faker.lorem.paragraph());
});

When("I set a random title for the post", async function () {
  let element = await this.driver.$("#ember49");
  await element.setValue(faker.lorem.words());
});

When("I set a random description for the post", async function () {
  let element = await this.driver.$(".kg-prose > p");
  await element.scrollIntoView();
  await element.click();
  await element.keys(faker.lorem.paragraphs());
});

When("I attach a random image from a pool of images", async function () {
  const path_pool = path.resolve("../kraken/features/web/resources/data_pools/images_pool.json");
  //charging data pools
  fs.readFile(path_pool, 'utf8', async (err, data) => {
    try {
        // Parsear el JSON
        const imagesPoolPaths = JSON.parse(data);
        let element = await this.driver.$(".gh-editor-feature-image-add-button");
        await element.click();
        let fileInput = await this.driver.$('input[type="file"]');

        const randomIdx = faker.number.int({min: 0, max: 2});
        // Set the file path to the file input element
        await fileInput.setValue(
        path.resolve(imagesPoolPaths[randomIdx])
        );
    } catch (error) {
        console.error('Error al parsear el JSON:', error);
        return;
    }
  });
});

When("I set a random name for the post slug numeric only", async function () {
  let element = await this.driver.$(".post-setting-slug");
  await element.setValue(faker.number.int(100000000));
});

When("I set a random name for the post slug with alphanumeric and numeric characters combined", async function () {
  let element = await this.driver.$(".post-setting-slug");
  await element.setValue(faker.string.alphanumeric(10));
});

When("I set a random name for the post slug with special characters only and verify is not allowed", async function () {
  let element = await this.driver.$(".post-setting-slug");
  const specialChar = faker.string.fromCharacters("!@#$%^&*()_+{}|:<>?/~", 10)
  await element.setValue(specialChar);
  let sideButton = await this.driver.$("button[data-test-psm-trigger]");
  await sideButton.click();
  let alert = await this.driver.$(".gh-alert-content");
  if(alert == null) throw new Error('No se generó la alerta de error');
  await sideButton.click();
  if(element.getValue() === specialChar) throw new Error('El valor no se cambió, el comportamiento es inadecuado');
});

When("I set a random name for the post slug with whitespaces", async function () {
  let element = await this.driver.$(".post-setting-slug");
  await element.setValue(faker.string.fromCharacters(' ', 5));
});

When("I attach a wrong type of image", async function () {
  let element = await this.driver.$(".gh-editor-feature-image-add-button");
  await element.click();
  let fileInput = await this.driver.$('input[type="file"]');
  // Set the file path to the file input element
  await fileInput.setValue(
  path.resolve('../kraken/features/web/resources/video.mp4')
  );
});

When("I verify any image wasn't attached", async function () {
  let element = await this.driver.$(".gh-editor-feature-image-add-button");
  if(element == null) throw new Error('La imagen fue adjuntada, porque no está disponible el botón de agregar imagen')
});

When("I click in the add element button in posts", async function () {
  let element = await this.driver.$(".kg-prose > p");
  await element.scrollIntoView();
  await element.click();
  let addButton = await this.driver.$('button[aria-label="Add a card"]');
  await addButton.click();
});

When("I click in the add file button in posts and attach the .csv file", async function () {
  let element = await this.driver.$('[data-kg-card-menu-item="File"]');
  await element.click();
  let fileUploader = await this.driver.$('input[name="file-input"]');
  await fileUploader.setValue(
    path.resolve('../kraken/features/web/resources/data.csv')
  );
});

When("I click in the add file button in posts and attach the .json file", async function () {
  let element = await this.driver.$('[data-kg-card-menu-item="File"]');
  await element.click();
  let fileUploader = await this.driver.$('input[name="file-input"]');
  await fileUploader.setValue(
    path.resolve('../kraken/features/web/resources/randomColor.json')
  );
});