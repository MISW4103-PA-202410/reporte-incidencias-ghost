let LoginPage;
let PrincipalPage;
let PostPage;
let feature = 'create-post'
let path = `./screenshots/v5.8/${feature}/`;

//Pages
function loadPages(version){
    LoginPage = require(`../clases/${version}/LoginPage`);
    PrincipalPage = require(`../clases/${version}/PrincipalPage`);
    PostPage = require(`../clases/${version}/PostPage`);
}

//"create_post.js": ["post_basico", "post_sin_titulo", "post_image", "schedule_post"],
async function post_basico(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const postPage = new PostPage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        //Screenshot log in
        await page.screenshot({path: `${path}_log_in.png`});
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }
    //Screenshot principal
    await page.screenshot({path: `${path}_principal.png`});

    //Navegar a la sección de Posts
    await principalPage.navigateToPosts();

    //WHEN
    //Crear un nuevo post
    await postPage.newPost();
    const title = "Post de prueba";
    const content = "Contenido de post de prueba";
    await postPage.fillPostData(title, content);

    //Publicar el post
    await postPage.submitPost();

    //THEN
    await principalPage.navigateToPosts();
    const postExist = await postPage.postLook(title);
    if(!postExist ){
        console.log("\t x El post no fue publicado exitosamente");
        return;
    }
    //Prueba finalizada con éxito
    console.log("\t - Post Basico publicado exitosamente");
}

async function post_sin_titulo(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const postPage = new PostPage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }

    //Navegar a la sección de Posts
    await principalPage.navigateToPosts();

    //WHEN
    //Crear un nuevo post
    await postPage.newPost();
    const title = "";
    const content = "Contenido de post de prueba sin titulo";
    await postPage.fillPostData(title, content);

    //Publicar el post
    await postPage.submitPost();

    //THEN
    await principalPage.navigateToPosts();
    const postExist = await postPage.postLook("(Untitled)");
    if(!postExist){
        console.log("\t x El post sin título no fue publicado exitosamente");
        return;
    }
    //Prueba finalizada
    console.log("\t - Post sin título publicado exitosamente");
}


async function post_image(page){
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const postPage = new PostPage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }

    //Navegar a la sección de Posts
    await principalPage.navigateToPosts();

    //WHEN
    //Crear un nuevo post
    await postPage.newPost();
    const title = "Post de prueba con imagen";
    const content = "Contenido de post de prueba con imagen";
    await postPage.fillPostData(title, content);
    //Subir imagen
    const uploaded = await postPage.uploadImage('../docs/image_feature.jpeg');
    //Publicar el post
    await postPage.submitPost();

    //THEN
    if(!uploaded){
        console.log("\t x No se pudo subir la imagen");
        return;
    }
    await principalPage.navigateToPosts();
    const postExist = await postPage.postLook(title);
    if(!postExist ){
        console.log("\t x El post con imagen no fue publicado exitosamente");
        return;
    }

    //Prueba finalizada
    console.log("\t - Post con imagen publicado exitosamente");
}

async function schedule_post(page){
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const postPage = new PostPage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }

    //Navegar a la sección de Posts
    await principalPage.navigateToPosts();

    //WHEN
    //Crear un nuevo post
    await postPage.newPost();
    const title = "Post de prueba programado";
    const content = "Contenido de post de prueba programado";
    await postPage.fillPostData(title, content);

    //Programar el post
    await postPage.scheduleLater();

    //THEN
    await principalPage.navigateToPosts();
    postPage.eschedulePosts();
    const postExist = await postPage.postLook(title);
    if(!postExist ){
        console.log("\t x El post programado no fue publicado exitosamente");
        return;
    }

    //Prueba finalizada
    console.log("\t - Post programado exitosamente");

}

module.exports = { post_basico, post_sin_titulo, post_image, schedule_post,loadPages};