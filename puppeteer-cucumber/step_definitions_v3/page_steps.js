// Steps for crear-page.feature

const { Given, When, Then } = require('@cucumber/cucumber');
const scope = require('./support/scope')
const constants = require('./support/constants')
const _ = require('lodash')
const chai = require('chai')

Given('ingreso {string} como nombre de la página', async (nombre) => {
    scope.variables.pageTitle = nombre;
    await scope.pages.pages.fillPageData(nombre, '');
});

Given('ingreso {string} como contenido de la página', async (contenido) => {
    scope.variables.pageContent = contenido;
    await scope.pages.pages.fillPageData('', contenido);
});

Given('agrego un audio a la página', async () => {
    const uploaded = await scope.pages.pages.uploadAudio('./assets/audio.mp3');
    
    scope.variables.audioUploaded = uploaded;
});

Given('agrego un video embebido de YouTube con link {string}', async (url) => {
    const uploaded = await scope.pages.pages.embededYotubeVideo(url);
    scope.variables.videoUploaded = uploaded;
});

Given('abro las configuraciones de la página', async () => {
    await scope.pages.pages.openSettings();
});

Given('cambio el slug de la página por {string}', async (slug) => {
    scope.variables.pageSlug = slug;
    await scope.pages.pages.addSlug(slug);
});

Given('cierro las configuraciones de la página', async () => {
    await scope.pages.pages.closeSettings();
});

When('publico la página', async () => {
    await scope.pages.pages.submitPage();
});

When('ingreso a la previsualización', async () => {
    scope.variables.previewSuccess = await scope.pages.pages.previewPage();
});

When('guardo el borrador de la página', async () => {
    await scope.pages.pages.saveDraft();
});

Then('la página debe existir en la lista', async () => {
    const pageExist = await scope.pages.pages.pageLook(scope.variables.pageTitle);
    chai.assert(pageExist, 'La página con audio no fue publicada exitosamente');
});

Then('el audio se agregó correctamente', async () => {
    chai.assert(scope.variables.audioUploaded, 'No se pudo subir el audio');
});

Then('el video se agregó correctamente', async () => {
    chai.assert(scope.variables.videoUploaded, 'No se pudo subir el video de youtube');
});

Then('puedo navegar a la URL con el slug asignado', async () => {
    const pageExists = await scope.pages.pages.navigateToPage(scope.variables.pageSlug);
    chai.assert(pageExists, 'No se pudo navegar a la página con el slug asignado');
});

Then('puedo previsualizar correctamente la página', async () => {
    chai.assert(scope.variables.previewSuccess, 'No se pudo previsualizar la página');
});

Then('salgo de la previsualización', async () => {
    await scope.pages.pages.closePreview();
});

Then('la página debe tener el estado {string}', async (estado) => {
    const pageStatus = await scope.pages.pages.statusPage(scope.variables.pageTitle);
    chai.assert.equal(pageStatus, estado, 'La página no tiene el estado correcto');
});