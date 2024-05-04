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
        console.log("\t x No se pudo subir el audio");
        return;
    }
    await principalPage.navigateToPages();
    const pageExist = await pagesPage.pageLook(title);
    if(!pageExist){
        console.log("\t x La página con audio no fue publicada exitosamente");
        return;
    }
    //Prueba finalizada
    console.log("\t - Página con audio publicada exitosamente");

}

async function create_page_link_youtube(page) {

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
    const title = "Página de prueba YT";
    const content = "contenido de la página con link a youtube";
    await pagesPage.fillPageData(title, content);

    //Subir un audio
    const url = 'https://www.youtube.com/watch?v=edVYLVDDgh0';
    const uploaded = await pagesPage.embededYotubeVideo(url);

    //Publicar la página
    await pagesPage.submitPost();

    //THEN
    if(!uploaded){
        console.log("\t x No se pudo subir el video de youtube");
        return;
    }
    await principalPage.navigateToPages();
    const pageExist = await pagesPage.pageLook(title);
    if(!pageExist){
        console.log("\t x La página con video de youtube no fue publicada exitosamente");
        return;
    }

    //Prueba finalizada
    console.log("\t - Página con video de youtube publicada exitosamente");

}

async function publicar_page_slug(page) {
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
    const title = "Página de prueba con slug";
    const content = "";
    await pagesPage.fillPageData(title, content);

    //agregar slug
    pagesPage.openSettings();
    const slug = 'slug-de-prueba';
    await pagesPage.addSlug(slug);

    //Publicar la página
    await pagesPage.submitPost();

    //THEN
    await principalPage.navigateToPages();
    const pageExist = await pagesPage.pageLook(title);
    if(!pageExist){
        console.log("\t x La página con slug no fue publicada exitosamente");
        return;
    }

    const existe = await pagesPage.navigateToPage(slug);
    if(!existe){
        console.log("\t x Página con slug no es navegable");
        return;
    }

    //Prueba finalizada
    console.log("\t - Página con slug publicada exitosamente");
}


async function draft_page_preview(page) {
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
    const title = "Página de prueba con preview";
    const content = "contenido de la página con preview";
    await pagesPage.fillPageData(title, content);

    //Preview de la página
    const preview = await pagesPage.previewPage();
    await pagesPage.closePreview();

    //Draft de la página
    await pagesPage.saveDraft();

    //THEN
    if(!preview){
        console.log("\t x No se pudo hacer preview de la página");
        return;
    }

    const pageExist = await pagesPage.pageLook(title);
    if(!pageExist){
        console.log("\t x La página no fue guardada");
        return;
    }
    const firstPageStatus = await pagesPage.statusPage(title);
    if(firstPageStatus !== 'Draft'){
        console.log("\t x La página no fue guardada como Draft");
        return;
    }

    //Prueba finalizada
    console.log("\t - Página guardada como Draft exitosamente");
}

module.exports = {create_page_audio,create_page_link_youtube,publicar_page_slug,draft_page_preview};
