// Steps for editar-perfil.feature

const { Given, When, Then } = require('@cucumber/cucumber');
const scope = require('./support/scope')
const constants = require('./support/constants')
const _ = require('lodash')
const chai = require('chai')


Given('abro el diálogo de cambio de contraseña', async () => {
    await scope.pages.profile.openChangePassword();
});

Given('ingreso la contraseña antigua', async () => {
    const oldPassword = "PRUEBAS12345";
    scope.variables.oldPassword = oldPassword;
    await scope.pages.profile.fillPassword(oldPassword, "");
});

Given('ingreso {string} como contraseña nueva', async (newPassword) => {
    scope.variables.newPassword = newPassword;
    await scope.pages.profile.fillPassword("", newPassword);
});

When('guardo el cambio de contraseña', async () => {
    await scope.pages.profile.saveChangePassword();
    await new Promise(r => setTimeout(r, 1000));
});

Then('ingreso las contraseñas para restablecer', async () => {
    const { oldPassword, newPassword } = scope.variables;
    await scope.pages.profile.fillPassword(newPassword, oldPassword);
});

// Write the steps for
// And cambio mi nombre a "Equipo 20 - 2024"
//         And cambio mi correo a "equipo2024@misw4103.com"
//         When guardo mi perfil
//         Then abro la sección de "Profile"
//         And el nombre debe corresponder al nuevo
//         And el correo debe corresponder al nuevo
//         And cambio el nombre y el correo a los originales
//         And guardo mi perfil

Given('cambio mi nombre a {string}', async (newName) => {
    scope.variables.newName = newName;
    scope.variables.oldName = await scope.pages.profile.getProfileName();
    await scope.pages.profile.changeName(newName);
});

Given('cambio mi correo a {string}', async (newEmail) => {
    scope.variables.newEmail = newEmail;
    scope.variables.oldEmail = await scope.pages.profile.getProfileEmail();
    await scope.pages.profile.changeEmail(newEmail);
});

Given('agrego una imagen de cover de 8K', async () => {
    await scope.pages.profile.addImage("./assets/cover-8k.jpg");
});

Given('selecciono acciones', async () => {
    await scope.pages.profile.openActions();
});
    
When('abro mi historial de actividades', async () => {
    await scope.pages.profile.openUserActivity();
});

When('guardo mi perfil', async () => {
    await scope.pages.profile.saveProfile();
    await new Promise(r => setTimeout(r, 1000));
});

Then('el nombre debe corresponder al nuevo', async () => {
    const { newName } = scope.variables;
    const name = await scope.pages.profile.getProfileName();
    chai.assert(name === newName, 'El nombre no corresponde al nuevo');
});

Then('el correo debe corresponder al nuevo', async () => {
    const { newEmail } = scope.variables;
    const email = await scope.pages.profile.getProfileEmail();
    chai.assert(email === newEmail, 'El correo no corresponde al nuevo');
});

Then('cambio el nombre y el correo a los originales', async () => {
    const { oldName, oldEmail } = scope.variables;
    await scope.pages.profile.changeName(oldName);
    await scope.pages.profile.changeEmail(oldEmail);
    await new Promise(r => setTimeout(r, 300));
});

Then('la imagen debe estar en el perfil', async () => {
    const imageExist = await scope.pages.profile.imageExist("cover-8k.jpg");
    chai.assert(imageExist, 'La imagen no está en el perfil');
});

Then('elimino la imagen', async () => {
    await scope.pages.profile.deleteCoverImage();
});

Then('puedo ver el modal del historial', async () => {
    const modalExist = await scope.pages.userHistory.isOpen();
    chai.assert(modalExist, 'El modal no existe');
});

Then('puedo ver las actividades que he realizado en Ghost', async () => {
    const activities = await scope.pages.userHistory.getActivities();
    chai.assert(activities.length > 0, 'No hay actividades');
});

Then('existe al menos una actividad', async () => {
    const activities = await scope.pages.userHistory.getActivities();
    chai.assert(activities.length > 0, 'No hay actividades');
});

// Write the steps for
// And cambio mi usuario de Facebook a "Equipo20"
// And cambio mi usuario de Twitter a "TwEquipo20"
// Then abro la sección de "Profile"
// And el usuario de Facebook debe corresponder al nuevo
// And el usuario de Twitter debe corresponder al nuevo
// And vacio mi usuario de Facebook
// And vacio mi usuario de Twitter

Given('cambio mi usuario de Facebook a {string}', async (facebook) => {
    scope.variables.newFacebook = facebook;
    await scope.pages.profile.changeFacebook(facebook);
});

Given('cambio mi usuario de Twitter a {string}', async (twitter) => {
    scope.variables.newTwitter = twitter;
    await scope.pages.profile.changeTwitter(twitter);
});

Then('el usuario de Facebook debe corresponder al nuevo', async () => {
    const { newFacebook } = scope.variables;
    const facebook = await scope.pages.profile.getFacebook();
    chai.assert(("https://www.facebook.com/" + newFacebook) === facebook, 'El usuario de Facebook no corresponde al nuevo');
});

Then('el usuario de Twitter debe corresponder al nuevo', async () => {
    const { newTwitter } = scope.variables;
    const twitter = await scope.pages.profile.getTwitter();
    chai.assert(("https://twitter.com/" + newTwitter) === twitter, 'El usuario de Twitter no corresponde al nuevo');
});

Then('vacio mi usuario de Facebook', async () => {
    await scope.pages.profile.changeFacebook("");
});

Then('vacio mi usuario de Twitter', async () => {
    await scope.pages.profile.changeTwitter("");
});