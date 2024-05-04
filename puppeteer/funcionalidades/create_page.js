const LoginPage = require('../clases/LoginPage');
const PrincipalPage = require('../clases/PrincipalPage');
const PagesPage = require('../clases/PagesPage');

async function create_page_audio(page) {

    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const pagesPage = new PagesPage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }

    //Navegar a la sección de Pages
    await principalPage.navigateToPages();

    //WHEN
    //Crear una nueva página
    await pagesPage.newPage();
    const title = "Página de prueba";
    const content = "";
    await pagesPage.fillPageData(title, content);

    //Subir un audio
    const uploaded = await pagesPage.uploadAudio('../docs/audio.mp3');

    //Publicar la página
    await pagesPage.submitPost();

    //THEN
    if(!uploaded){
        console.log("No se pudo subir el audio");
        return;
    }
    //Prueba finalizada
    console.log("\t - Página con audio publicada exitosamente");

}

module.exports = {create_page_audio};
