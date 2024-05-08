const LoginPage = require('../clases/LoginPage');
const PrincipalPage = require('../clases/PrincipalPage');
const PostPage = require('../clases/PostPage');

//"create_view.js": ["view_admin", "view_user_visibility", "view_tags"]

async function view_admin(page) {
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

    //Filter posts by first user (admin)
    await postPage.filterByUser();

    //WHEN
    // Save the view of the current filter
    const viewName = "Admin View";
    await postPage.saveView(viewName);
    
    //THEN
    // Verify that the view was saved
    await principalPage.navigateToSite();
    await principalPage.navigateToPosts();

    // The view must exist in menu

    const views = await postPage.getViews();
    const viewExist = views.find(view => view === viewName);

    if(!viewExist){
        console.log("\t x La vista no fue guardada exitosamente");
        return;
    }

    // Delete the view
    await postPage.navigateToView(viewName);
    await postPage.deleteView();

    //Prueba finalizada con éxito
    console.log("\t - Vista Admin guardada exitosamente");
}

async function view_user_visibility(page) {
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

    //Filter posts by first user (admin)
    await postPage.filterByUser();
    //Filter posts by Published posts
    await postPage.filterByStatus("Published");

    //WHEN
    // Save the view of the current filter
    const viewName = "Admin and Published";
    await postPage.saveView(viewName);
    
    //THEN
    // Verify that the view was saved
    await principalPage.navigateToSite();
    await principalPage.navigateToPosts();

    // The view must exist in menu

    const views = await postPage.getViews();
    const viewExist = views.find(view => view === viewName);

    if(!viewExist){
        console.log("\t x La vista no fue guardada exitosamente");
        return;
    }

    // Delete the view
    await postPage.navigateToView(viewName);
    await postPage.deleteView();

    //Prueba finalizada con éxito
    console.log("\t - Vista filtrada por usuario y visibilidad guardada exitosamente");
}

async function view_tags(page) {
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

    //Filter posts by first tag
    await postPage.filterByTag();

    //WHEN
    // Save the view of the current filter
    const viewName = "First tag";
    await postPage.saveView(viewName);
    
    //THEN
    // Verify that the view was saved
    await principalPage.navigateToSite();
    await principalPage.navigateToPosts();

    // The view must exist in menu

    const views = await postPage.getViews();
    const viewExist = views.find(view => view === viewName);

    if(!viewExist){
        console.log("\t x La vista no fue guardada exitosamente");
        return;
    }

    // Delete the view
    await postPage.navigateToView(viewName);
    await postPage.deleteView();

    //Prueba finalizada con éxito
    console.log("\t - Vista por tag guardada exitosamente");
}

module.exports = { view_admin, view_user_visibility, view_tags };