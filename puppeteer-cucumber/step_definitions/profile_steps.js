// Steps for editar-perfil.feature

const { Given, When, Then } = require('@cucumber/cucumber');
const scope = require('./support/scope')
const constants = require('./support/constants')
const _ = require('lodash')
const chai = require('chai')
const [ dataGenerator ] = require('./utils');

async function reloadProfilePage() {
    await Promise.all([
        scope.page.waitForNavigation({ waitUntil: 'networkidle0'}),
        scope.pages.principal.navigateToSite()
    ]);
    await scope.pages.principal.navigateToProfile();
    await new Promise(r => setTimeout(r, 1000));
}

Given('abro el diálogo de cambio de contraseña', async () => {
    await scope.pages.profile.openChangePassword();
});

Given('ingreso la contraseña antigua', async () => {
    const oldPassword = "PRUEBAS12345";
    scope.variables.oldPassword = oldPassword;
    await scope.pages.profile.fillPassword(oldPassword, "");
});

Given('ingreso {string} como contraseña nueva', async (newPassword) => {

    newPassword = newPassword.startsWith("{") ? dataGenerator(newPassword) : newPassword;

    scope.variables.newPassword = newPassword;
    console.log("\nProbando contraseña: " + newPassword);
    await scope.pages.profile.fillPassword("", newPassword);
});

When('guardo el cambio de contraseña', async () => {
    scope.variables.passwordResult = await scope.pages.profile.saveChangePassword();
    await new Promise(r => setTimeout(r, 1000));
});

Then('ingreso las contraseñas para restablecer', async () => {
    const { oldPassword, newPassword } = scope.variables;
    await scope.pages.profile.fillPassword(newPassword, oldPassword);
});

Then('se muestra error al cambiar la contraseña', async () => {
    let error;
    try {
        error = await scope.pages.profile.getPasswordError();
        console.log("\nPassword Error: " + error);

    } catch (e) {
        // Password may be changed successfully, so we should restore it
        const { oldPassword, newPassword } = scope.variables;
        await new Promise(r => setTimeout(r, 2000));
        await scope.pages.profile.openChangePassword();
        await scope.pages.profile.fillPassword(newPassword, "PRUEBAS12345");
        await scope.pages.profile.saveChangePassword();
    }

    chai.assert(error, 'No se muestra el error al cambiar la contraseña');
});

Given('cambio mi nombre a {string}', async (newName) => {

    newName = newName.startsWith("{") ? dataGenerator(newName) : newName;

    scope.variables.newName = newName;
    scope.variables.oldName = await scope.pages.profile.getProfileName();
    console.log("\nProbando nombre: " + newName);
    await scope.pages.profile.changeName(newName);
});

Given('cambio mi correo a {string}', async (newEmail) => {

    newEmail = newEmail.startsWith("{") ? dataGenerator(newEmail) : newEmail;

    scope.variables.newEmail = newEmail;
    scope.variables.oldEmail = await scope.pages.profile.getProfileEmail();
    console.log("\nProbando correo: " + newEmail);
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

Then('el nombre debe corresponder al original', async () => {
    const { oldName } = scope.variables;
    const name = await scope.pages.profile.getProfileName();
    chai.assert(name === oldName, 'El nombre no corresponde al original');
});

Then('se muestra error al cambiar el nombre', async () => {
    let error;
    try {
        error = await scope.pages.profile.getNameError();
        console.log("\nName Error: " + error);
    } catch (e) {
        console.log("\nNo error found. Restoring original values.");
    
        await reloadProfilePage();
        const { oldName } = scope.variables;
        await scope.pages.profile.changeName(oldName || "Equipo 20");
        await new Promise(r => setTimeout(r, 300));
        await scope.pages.profile.saveProfile();
    }
    chai.assert(error, 'No se muestra el error al cambiar el nombre');
});

Then('el correo debe corresponder al nuevo', async () => {
    const { newEmail } = scope.variables;
    const email = await scope.pages.profile.getProfileEmail();
    chai.assert(email === newEmail, 'El correo no corresponde al nuevo');
});

Then('el correo debe corresponder al original', async () => {
    const { oldEmail } = scope.variables;
    const email = await scope.pages.profile.getProfileEmail();
    chai.assert(email === oldEmail, 'El correo no corresponde al original');
});

Then('se muestra error al cambiar el correo', async () => {
    let error;
    try {
        error = await scope.pages.profile.getEmailError();
        console.log("\nEmail Error: " + error);
    } catch (e) {
        console.log("\nNo error found. Restoring original values.");
        await reloadProfilePage();

        const { oldEmail } = scope.variables;
        await scope.pages.profile.changeEmail(oldEmail || "equipo20@misw4103.com");
        await new Promise(r => setTimeout(r, 300));
        await scope.pages.profile.saveProfile();
    }
    chai.assert(error, 'No se muestra el error al cambiar el correo');
});

Then('cambio el nombre y el correo a los originales', async () => {
    const { oldName, oldEmail } = scope.variables;
    await scope.pages.profile.changeName(oldName || "Equipo 20");
    await scope.pages.profile.changeEmail("equipo20@misw4103.com");
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

Given('cambio mi usuario de Facebook a {string}', async (facebook) => {

    facebook = facebook.startsWith("{") ? dataGenerator(facebook) : facebook;

    scope.variables.newFacebook = facebook;
    scope.variables.oldFacebook = await scope.pages.profile.getFacebook();
    await scope.pages.profile.changeFacebook(facebook);
});

Given('cambio mi usuario de Twitter a {string}', async (twitter) => {

    twitter = twitter.startsWith("{") ? dataGenerator(twitter) : twitter;

    scope.variables.newTwitter = twitter;
    scope.variables.oldTwitter = await scope.pages.profile.getTwitter();
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

Then('se muestra error al cambiar el usuario de Facebook o Twitter', async () => {
    let errors;
    try {
        errors = await scope.pages.profile.getFBorTwitterErrors();
        console.log("\nSocial Errors: " + error);
    } catch (e) {
        console.log("\nNo error found. Cleaning values.");
        await reloadProfilePage();
        await scope.pages.profile.changeFacebook("");
        await scope.pages.profile.changeTwitter("");
        await new Promise(r => setTimeout(r, 300));
        await scope.pages.profile.saveProfile();
    }
    chai.assert(errors && errors.length > 0, 'No se muestra el error al cambiar el usuario de Facebook o Twitter');
});

Then('vacio mi usuario de Facebook', async () => {
    await scope.pages.profile.changeFacebook("");
});

Then('vacio mi usuario de Twitter', async () => {
    await scope.pages.profile.changeTwitter("");
});

Then('el usuario de Facebook debe corresponder al orignal', async () => {
    const { oldFacebook } = scope.variables;
    const facebook = await scope.pages.profile.getFacebook();
    chai.assert(("https://www.facebook.com/" + oldFacebook) === facebook, 'El usuario de Facebook no corresponde al original');
});

Then('el usuario de Twitter debe corresponder al original', async () => {
    const { oldTwitter } = scope.variables;
    const twitter = await scope.pages.profile.getTwitter();
    chai.assert(("https://twitter.com/" + oldTwitter) === twitter, 'El usuario de Twitter no corresponde al original');
});