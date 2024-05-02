const LoginPage = require('../clases/LoginPage');
const PrincipalPage = require('../clases/PrincipalPage');
const PostPage = require('../clases/PostPage');

//"create_post.js": ["post_basico", "post_sin_titulo", "post_image", "schedule_post"],
async function post_basico(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const postPage = new PostPage(page);

    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }

    //Navegar a la sección de Posts
    await principalPage.navigateToPosts();

    //Crear un nuevo post
    await postPage.newPost();
    const title = "Post de prueba";
    const content = "Contenido de post de prueba";
    await postPage.fillPostData(title, content);

    //Publicar el post
    await postPage.submitPost();
    //await page.screenshot({path: './pagina.png'})

    //Prueba finalizada
    console.log("\t - Post Basico publicado exitosamente");
}

async function post_sin_titulo(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const postPage = new PostPage(page);

    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }

    //Navegar a la sección de Posts
    await principalPage.navigateToPosts();

    //Crear un nuevo post
    await postPage.newPost();
    const title = "";
    const content = "Contenido de post de prueba sin titulo";
    await postPage.fillPostData(title, content);

    //Publicar el post
    await postPage.submitPost();
    //await page.screenshot({path: './pagina.png'})
    //Prueba finalizada
    console.log("\t - Post sin título publicado exitosamente");
}


async function post_image(page){
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const postPage = new PostPage(page);

    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }

    //Navegar a la sección de Posts
    await principalPage.navigateToPosts();

    //Crear un nuevo post
    await postPage.newPost();
    const title = "Post de prueba con imagen";
    const content = "Contenido de post de prueba con imagen";
    await postPage.fillPostData(title, content);
    //Subir imagen
    const uploaded = await postPage.uploadImage('../docs/image_feature.jpeg');
    if(!uploaded){
        console.log("No se pudo subir la imagen");
        return;
    }
    //Publicar el post
    await postPage.submitPost();
    //await page.screenshot({path: './pagina.png'})

    //Prueba finalizada
    console.log("\t - Post con imagen publicado exitosamente");
}

async function schedule_post(page){
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const postPage = new PostPage(page);

    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }

    //Navegar a la sección de Posts
    await principalPage.navigateToPosts();

    //Crear un nuevo post
    await postPage.newPost();
    const title = "Post de prueba programado";
    const content = "Contenido de post de prueba programado";
    await postPage.fillPostData(title, content);

    //Programar el post
    await postPage.scheduleLater();

    //Prueba finalizada
    console.log("\t - Post programado exitosamente");

}

module.exports = { post_basico, post_sin_titulo, post_image, schedule_post};