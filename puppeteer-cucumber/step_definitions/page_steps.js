// Steps for crear-page.feature
const { Given, When, Then } = require('@cucumber/cucumber');
const { dataGenerator } = require('./utils');
const scope = require('./support/scope')
const constants = require('./support/constants')
const _ = require('lodash')
const chai = require('chai')
var faker = require('faker');

Given('ingreso {string} como nombre de la página', async (data) => {
    //Separa el data por " - "
    const escenario = data.split(' - ')[0];
    data = data.split(' - ')[1];
    //Get the data
    const nombre = dataGenerator(data);
    //Upload tittle
    const title = escenario + " - " + nombre
    scope.variables.pageTitle = title;
    await scope.pages.pages.fillPageData(title, '');
});

Given('reescribo {string} como el nombre de la página', async (data) => {
    //Separa el data por " - "
    const escenario = data.split(' - ')[0];
    data = data.split(' - ')[1];
    //Get the data
    const nombre = dataGenerator(data);
    //Re-write the title
    const title = escenario + " - " + nombre
    scope.variables.pageTitle = title;
    await scope.pages.pages.reWriteTitle(nombre, '');
});


Given('ingreso {string} como contenido de la página', async (data) => {
    //Get the data
    const contenido = dataGenerator(data);
    //Upload content
    scope.variables.pageContent = contenido;
    await scope.pages.pages.fillPageData('', contenido);
});

Given('agrego un audio: {string} a la página', async (data) => {
    //Get the data
    const audio = dataGenerator(data);
    //Upload audio
    const uploaded = await scope.pages.pages.uploadAudio(audio);
    scope.variables.audioUploaded = uploaded;
});

Given('agrego un video embebido de YouTube con link {string}', async (data) => {
    //Get the data
    const url = dataGenerator(data);
    //Upload linkk
    const uploaded = await scope.pages.pages.embededYotubeVideo(url);
    scope.variables.videoUploaded = uploaded;
});

Given('abro las configuraciones de la página', async () => {
    await scope.pages.pages.openSettings();
});

Given('cambio el slug de la página por {string}', async (data) => {
    //Get the data
    const slug = dataGenerator(data);
    //Upload slug
    scope.variables.pageSlug = slug;
    const uploadedSlug = await scope.pages.pages.addSlug(slug);
    scope.variables.slugUploaded = uploadedSlug;
});

Given('cierro las configuraciones de la página', async () => {
    await scope.pages.pages.closeSettings();
});

When('publico la página', async () => {
    const published = await scope.pages.pages.submitPost();
    scope.variables.pagePublished = published;
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

Then('el audio {string} se agregó correctamente', async (assert) => {

    if (assert === 'si') {
        chai.assert(scope.variables.audioUploaded, 'No se pudo subir el audio');
    }
    else if (assert === 'no') {
        chai.assert(!scope.variables.audioUploaded, 'Se subió el audio');
    }
});

Then('el video {string} se agregó correctamente', async (assert) => {
    if (assert === 'si') {
        chai.assert(scope.variables.videoUploaded, 'No se pudo subir el video de youtube');
    }
    else if (assert === 'no') {
        chai.assert(!scope.variables.videoUploaded, 'Se subió el video de youtube');
    }
});

Then('el slug {string} se agregó correctamente', async (assert) => {
    if (assert === 'si') {
        chai.assert(scope.variables.slugUploaded, 'No se pudo agregar el slug');
    }
    else if (assert === 'no') {
        chai.assert(!scope.variables.slugUploaded, 'Se agregó el slug');
    }
});

Then('{string} puedo navegar a la URL con el slug asignado', async (assert) => {
    const pageExists = await scope.pages.pages.navigateToPage(scope.variables.pageSlug);
    if(assert === 'si'){
        chai.assert(pageExists, 'No se pudo navegar a la página con el slug asignado');
    }else if(assert === 'no'){
        chai.assert(!pageExists, 'Se pudo navegar a la página con el slug asignado');
    }
});

Then('puedo previsualizar correctamente la página', async () => {
    chai.assert(scope.variables.previewSuccess, 'No se pudo previsualizar la página');
});

Then('{string} veo el título en la previsualización', async (assert) => {
    const title = await scope.pages.pages.previewTitle();
    if (assert === 'si') {
        chai.assert.equal(title, scope.variables.pageTitle, 'El título no se muestra en la previsualización');
    } else if (assert === 'no') {
        chai.assert.notEqual(title, scope.variables.pageTitle, 'El título se muestra en la previsualización');
    }
});

Then('salgo de la previsualización', async () => {
    await scope.pages.pages.closePreview();
});

Then('la página debe tener el estado {string}', async (estado) => {
    const pageStatus = await scope.pages.pages.statusPage(scope.variables.pageTitle);
    chai.assert.equal(pageStatus, estado, 'La página no tiene el estado correcto');
});

Then('la página no se publico', async () => {
    chai.assert(!scope.variables.pagePublished, 'La página no se publicó');
});