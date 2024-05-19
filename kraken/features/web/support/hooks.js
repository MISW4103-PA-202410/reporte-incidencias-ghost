const { After, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

function generateRealisticDescriptionsForX(count) {
  let descriptions = [];
  for (let i = 0; i < count; i++) {
    let description = `
      ${faker.company.name()} is known for ${faker.company.bsBuzz()}. 
      They are located at ${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}.
      The company specializes in ${faker.company.bsNoun()} and has a reputation for ${faker.company.catchPhrase()}.
      Their mission is to ${faker.company.bs()}. Customers can reach out via email at ${faker.internet.email()} or by phone at ${faker.phone.number()}.
      One of their popular products is the ${faker.commerce.productName()}, which is loved for its ${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}.
      Additionally, the company emphasizes ${faker.hacker.ingverb()} and ${faker.hacker.noun()} in their daily operations.
      Here is an interesting quote from the company: "${faker.hacker.phrase()}".
      They also provide the following service: ${faker.lorem.sentence()}.
      Check out their website: ${faker.internet.url()}
      Follow them on Twitter: @${faker.internet.userName()}
      Here's a popular tweet from them: "${faker.hacker.phrase()} #${faker.hacker.abbreviation()} ${faker.internet.url()} 😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🥳"
      这是一个测试段落。 😊😊😊 #测试
      Aquí hay una frase en español: "${faker.lorem.sentence()}". 
      Voici une phrase en français: "${faker.lorem.sentence()}". 
      Hier ist ein Satz auf Deutsch: "${faker.lorem.sentence()}". 
    `;
    descriptions.push(description);
  }
  return descriptions;
}

function generateRealisticParagraphsForFooterAndHeader(count) {
  let paragraphs = [];
  for (let i = 0; i < count; i++) {
    let paragraph = `
      ${faker.person.fullName()} lives at ${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}. 
      You can contact them via email at ${faker.internet.email()} or call them at ${faker.phone.number()}. 
      They often say: "${faker.hacker.phrase()}". Their favorite colors are ${faker.color.human()} and ${faker.color.human()}.
      They enjoy ${faker.company.catchPhrase()} and ${faker.lorem.sentence()}. 
      Also, they often use emojis like 😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🥳.
      Here's a snippet of HTML code:
      <script>
        console.log('${faker.hacker.phrase()}');
      </script>
      And a sample of JavaScript code:
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-${faker.string.alphanumeric(8)}"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-${faker.string.alphanumeric(8)}');
      </script>
      这是一个测试段落。 😊😊😊
      Aquí hay una frase en español: "${faker.lorem.sentence()}". 
      Voici une phrase en français: "${faker.lorem.sentence()}". 
      Hier ist ein Satz auf Deutsch: "${faker.lorem.sentence()}". 
    `;
    paragraphs.push(paragraph);
  }
  return paragraphs;
}

Before(async function() {
  // Generar 5 párrafos realistas para el pie de página y encabezado
  const realisticParagraphs = generateRealisticParagraphsForFooterAndHeader(5);
  
  // Generar 5 descripciones realistas para "X"
  const realisticDescriptions = generateRealisticDescriptionsForX(5);

  // Ruta del archivo
  const dataPath = path.join(__dirname, '../../web/resources');
  
  // Crear el directorio si no existe
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath, { recursive: true });
  }

  // Guardar los párrafos en un archivo JSON
  const paragraphsFilePath = path.join(dataPath, 'realisticParagraphsFooterAndHeader.json');
  try {
    fs.writeFileSync(paragraphsFilePath, JSON.stringify(realisticParagraphs, null, 2));
  } catch (err) {
    console.error("Error writing to file", err);
  }

  // Guardar las descripciones en un archivo JSON
  const descriptionsFilePath = path.join(dataPath, 'realisticDescriptionsForX.json');
  try {
    fs.writeFileSync(descriptionsFilePath, JSON.stringify(realisticDescriptions, null, 2));
  } catch (err) {
    console.error("Error writing to file", err);
  }

  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
});

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
