// Steps for crear-post.feature

const { Given, When, Then } = require('cucumber')
const scope = require('./support/scope')
const constants = require('./support/constants')
const _ = require('lodash')
const expect = require('expect-puppeteer')
const chai = require('chai')
const should = chai.should()

Given('ingreso {string} como nombre del post', async (nombre) => {
    scope.variables.postTitle = nombre;
    await scope.pages.posts.fillPostData(nombre, '');
});

Given('ingreso {string} como contenido', async (contenido) => {
    scope.variables.postContent = contenido;
    await scope.pages.posts.fillPostData('', contenido);
});

Given('agrego una imagen destacada al post', async () => {
    await scope.pages.posts.uploadImage('./assets/image_feature.jpeg');
});

When('publico el post', async () => {
    await scope.pages.posts.submitPost();
});

When('programo la publicación del post', async () => {
    await scope.pages.posts.scheduleLater();
});

Then('el post debe existir en la lista', async () => {
    await scope.pages.principal.navigateToPosts();
    const postExist = await scope.pages.posts.postLook(scope.variables.postTitle);
    chai.assert(postExist, 'El post no existe en la lista');
});

Then('el post {string} debe existir en la lista', async (title) => {
    await scope.pages.principal.navigateToPosts();
    const postExist = await scope.pages.posts.postLook(title);
    chai.assert(postExist, 'El post no existe en la lista');
});

//Then me dirijo a los Posts programados
Then('me dirijo a los Posts programados', async () => {
    await scope.pages.posts.showScheduledPosts();
});