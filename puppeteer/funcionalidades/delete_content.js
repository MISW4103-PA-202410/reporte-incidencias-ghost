const LoginPage = require('../clases/LoginPage');
const PrincipalPage = require('../clases/PrincipalPage');
const SettingsPage = require('../clases/SettingsPage');
const LabsPage = require('../clases/LabsPage');

//"delete_content.js": ["delete_content"]
async function delete_content(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const settingsPage = new SettingsPage(page);
    const labsPage = new LabsPage(page);

    console.log("Eliminando contenido...");

    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }

    await principalPage.navigateToSettings();
    await settingsPage.gotToLabs();
    await labsPage.deleteAllContent();

    console.log("Contenido eliminado");

}

module.exports = { delete_content };