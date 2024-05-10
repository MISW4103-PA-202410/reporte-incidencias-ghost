// Steps for crear-tag.feature

const { Given, When, Then } = require('cucumber')
const scope = require('./support/scope')
const constants = require('./support/constants')
const _ = require('lodash')
const chai = require('chai')

Given('ingreso {string} como nombre del tag', async (nombre) => {
    scope.variables.tagName = nombre;
    await scope.pages.tag.fillTagName(nombre);
});

Given('ingreso {string} como descripción del tag', async (descripcion) => {
    scope.variables.tagDescription = descripcion;
    await scope.pages.tag.fillDescription(descripcion);
});

Given('agrego una imagen al tag', async () => {
    await scope.pages.tag.addImage('./assets/image_feature.jpeg');
});

Given('ingreso datos de meta data con título {string} y descripción {string}', async (metaTitle, metaDescription) => {
    scope.variables.tagMetaTitle = metaTitle;
    scope.variables.tagMetaDescription = metaDescription;
    await scope.pages.tag.fillMetadata(metaTitle, metaDescription);
});

When('guardo el tag', async () => {
    scope.variables.tagSaveSuccess = await scope.pages.tag.saveTag();
    scope.variables.tagSlug = await scope.pages.tag.getSlug();
});

Then('el tag se guarda exitosamente', async () => {
    chai.assert(scope.variables.tagSaveSuccess, 'El tag no se guardó exitosamente');
});

Then('el tag se encuentra en la lista', async () => {
    const tags = await scope.pages.tagList.getTags();
    const { tagName, tagSlug } = scope.variables;
    const tagExist = tags.find(tag => tag.name === tagName && tag.slug === tagSlug);
    chai.assert(tagExist, 'El tag no se encuentra en la lista');
});

Then('existen dos tags con nombre {string}', async (nombre) => {
    const tags = await scope.pages.tagList.getTags();
    const tagExist = tags.filter(tag => tag.name === nombre);
    chai.assert(tagExist.length === 2, 'No existen dos tags con el mismo nombre');
});

Then('los dos tags tienen slug diferente', async () => {
    const tags = await scope.pages.tagList.getTags();
    const { tagName } = scope.variables;
    const tagExist = tags.filter(tag => tag.name === tagName);
    chai.assert(tagExist[0].slug !== tagExist[1].slug, 'Los tags tienen el mismo slug');
});

Then('abro la página del tag', async () => {
    await scope.pages.tagList.goToTag(scope.variables.tagSlug);
});

Then('el tag debe tener la imagen', async () => {
    const imageExist = await scope.pages.tag.imageExist();
    chai.assert(imageExist, 'La imagen no se encuentra en la página del tag');
});

Then('el tag debe contener la información de meta data', async () => {
    const metadata = await scope.pages.tag.getMetadata();
    const { tagMetaTitle, tagMetaDescription } = scope.variables;
    chai.assert(metadata.title === tagMetaTitle, 'El título de la metadata no coincide');
    chai.assert(metadata.description === tagMetaDescription, 'La descripción de la metadata no coincide');
});