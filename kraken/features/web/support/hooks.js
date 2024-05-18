const { After, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

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
    `;
    paragraphs.push(paragraph);
  }
  return paragraphs;
}

Before(async function() {
  // Generar 5 párrafos realistas
  const realisticParagraphs = generateRealisticParagraphsForFooterAndHeader(5);
  
  // Ruta del archivo
  const dataPath = path.join(__dirname, '../../web/resources');
  
  // Crear el directorio si no existe
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath, { recursive: true });
  }

  // Guardar los párrafos en un archivo JSON
  const filePath = path.join(dataPath, 'realisticParagraphsFooterAndHeader.json');
  try {
    fs.writeFileSync(filePath, JSON.stringify(realisticParagraphs, null, 2));
  } catch (err) {
    console.error("Error writing to file", err);
  }

  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
});

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
