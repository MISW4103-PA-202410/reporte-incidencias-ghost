const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');

class KrakenWorld {
  constructor(input) {
    let params = input.parameters;
    this.userId = params.id;
    this.device = params.device || {};
    this.testScenarioId = params.testScenarioId;
    this.attach = input.attach;
    this.randomTagName = null;  // Añadir la propiedad randomTagName
  }

  generateRandomTagName(int) {
    const randomWord = faker.lorem.word();
    const uniqueIdentifier = Date.now();
    this.randomTagName = `${randomWord}${int}${uniqueIdentifier}`;
    return this.randomTagName;
  }
}

setWorldConstructor(KrakenWorld);
setDefaultTimeout(30 * 1000);