const { Given, When, Then } = require('@cucumber/cucumber');
const scope = require('./support/scope')
const constants = require('./support/constants')
const _ = require('lodash')
const expect = require('expect-puppeteer')
const chai = require('chai')
const should = chai.should()

// Common steps

// Iniciar aplicación
// Iniciar sesión si es necesario
// Abrir sección
// Dar click
// Cerrar sesión

Given('inicio la aplicación', {timeout: 60000}, async () => {
    let url = constants.baseUrl + '/ghost';
    await scope.page.goto(url, { waitUntil: 'networkidle0' });
});

Given('inicio sesión si es necesario', async () => {
    if(await scope.pages.login.isSignInPage()){
        await scope.pages.login.login('equipo20@misw4103.com', 'PRUEBAS12345');
    } else {
        await scope.pages.principal.navigateToSite();
    }

    if(!(await scope.pages.principal.isHomePage())) {
        throw new Error('No se pudo iniciar sesión');
    }
});

Then('inicio sesión con la contraseña {string}', async (password) => {
    await scope.pages.login.login('equipo20@misw4103.com', password);

    if(!(await scope.pages.principal.isHomePage())) {
        throw new Error('No se pudo iniciar sesión');
    }
});

Given("navego a Home", async () => {
    await Promise.all([
        scope.page.waitForNavigation({ waitUntil: 'networkidle0'}),
        scope.pages.principal.navigateToSite()
    ]);
});

Given('abro la sección de {string}', async (section) => {
    let navigateToPage;
    switch (section) {
        case 'Home':
            navigateToPage = scope.pages.principal.navigateToSite;
            break;
        case 'Pages':
            navigateToPage = scope.pages.principal.navigateToPages;
            break;
        case 'Posts':
            navigateToPage = scope.pages.principal.navigateToPosts;
            break;
        case 'Tags':
            navigateToPage = scope.pages.principal.navigateToTags;
            break;
        case 'Profile':
            navigateToPage = scope.pages.principal.navigateToProfile;
            break;
        case 'Settings':
            navigateToPage = scope.pages.principal.navigateToSettings;
            break;
        default:
            throw new Error(`Sección no soportada: ${section}`);
    }

    await Promise.all([
        //scope.page.waitForNavigation({ waitUntil: 'networkidle0'}),
        navigateToPage()
    ]);
});

Given('doy click en {string}', async (element) => {
    switch (element) {
        case 'New post':
            await scope.pages.posts.newPost();
            break;
        case 'New page':
            await scope.pages.pages.newPage();
            break;
        case 'New tag':
            await scope.pages.tagList.newTag();
            break;
        default:
            throw new Error(`Elemento no soportado: ${element}`);
    }
});

Then("debo entrar a la página de inicio", async () => {
    chai.assert(await scope.pages.principal.isHomePage(), 'No se pudo iniciar sesión');
});

Then('salgo de la sesión', async () => {
    await scope.pages.login.signOut();
    await new Promise(r => setTimeout(r, 2000));
});