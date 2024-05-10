// Steps for crear-vista.feature

const { Given, When, Then } = require('cucumber')
const scope = require('./support/scope')
const constants = require('./support/constants')
const _ = require('lodash')
const chai = require('chai')

// Write the steps for
// And aplico un filtro de usuario
// When creo una vista con nombre "Admin View"
// Then la vista con nombre "Admin View" se encuentra en el menu
// And borro la vista con nombre "Admin View"

Given('aplico un filtro de usuario', async () => {
    await scope.pages.posts.filterByUser();
});


Given('aplico un filtro con el estado {string}', async (estado) => {
    await scope.pages.posts.filterByStatus(estado);
});

// Write steps for
// aplico un filtro por el primer tag

Given('aplico un filtro por el primer tag', async () => {
    await scope.pages.posts.filterByTag();
});

When('creo una vista con nombre {string}', async (nombre) => {
    scope.variables.viewName = nombre;
    await scope.pages.posts.saveView(nombre);
});

Then('la vista con nombre {string} se encuentra en el menu', async (nombre) => {
    const views = await scope.pages.posts.getViews();
    const viewExist = views.find(view => view === nombre);
    chai.assert(viewExist, 'La vista no se encuentra en el menu');
});

Then('borro la vista con nombre {string}', async (nombre) => {
    await scope.pages.posts.navigateToView(nombre);
    await scope.pages.posts.deleteView();
});