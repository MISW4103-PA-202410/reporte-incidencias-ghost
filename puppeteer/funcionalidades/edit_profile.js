const LoginPage = require('../clases/LoginPage');
const PrincipalPage = require('../clases/PrincipalPage');
const ProfilePage = require('../clases/ProfilePage');
const UserHistoryPage = require('../clases/UserHistoryPage');

//"edit_profile.js": ["change_password", "8k_cover_image", "change_name_and_email", "add_social_networks", "user_activity"]

async function change_password(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const profilePage = new ProfilePage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }
    //Navegar al perfil
    await principalPage.navigateToProfile();

    // Abrir el diálogo de cambio de contraseña
    await profilePage.openChangePassword();
    
    //Llenar los campos de texto con la contraseña antigua y la nueva contraseña
    const oldPassword = "PRUEBAS12345";
    const newPassword = "PRUEBAS123456";
    await profilePage.fillPassword(oldPassword, newPassword);
    
    //WHEN
    //Guardar la nueva contraseña
    await profilePage.saveChangePassword();
    await new Promise(r => setTimeout(r, 1000));
    
    //THEN
    // Verificar que la contraseña fue cambiada exitosamente
    
    // Salir de la sesión
    await Promise.all([
        page.waitForNavigation(),
        formPage.signOut()
    ]);
    
    const correo = "equipo20@misw4103.com";
    
    // Ingresar con la nueva contraseña
    await formPage.login(correo, newPassword)
    
    // Verificar que se haya ingresado correctamente
    
    if(!await principalPage.isHomePage()){
        console.log("\t x La contraseña no fue cambiada exitosamente");
        return;
    }

    // Cambiar la contraseña a la original

    //Navegar al perfil
    await principalPage.navigateToProfile();
    await profilePage.openChangePassword();
    await profilePage.fillPassword(newPassword, oldPassword);
    await profilePage.saveChangePassword();
    await new Promise(r => setTimeout(r, 1000));

    //Prueba finalizada con éxito
    console.log("\t - Cambio de contraseña exitoso");
};

async function cover_8k_image(page) {
        //Page Object
        const formPage = new LoginPage(page);
        const principalPage = new PrincipalPage(page);
        const profilePage = new ProfilePage(page);
    
        //GIVEN
        //Ingresar
        if(await formPage.isSignInPage()){
            await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
        }
        else{
            await principalPage.navigateToSite();
        }
        //Navegar al perfil
        await principalPage.navigateToProfile();

        //Upload cover image
        await profilePage.addImage('../docs/cover-8k.jpg');
        await profilePage.saveProfile();

        //THEN
        //Verify that the image was uploaded
        await Promise.all([
            page.waitForNavigation(),
            principalPage.navigateToSite()
        ]);
        await Promise.all([
            page.waitForNavigation(),
            principalPage.navigateToProfile()
        ]);

        await new Promise(r => setTimeout(r, 1000));
        if(!await profilePage.imageExist('cover-8k.jpg')){
            console.log("\t x La imagen no fue cargada exitosamente");
            return;
        }
        
        //Delete cover image
        await profilePage.deleteCoverImage();
        await profilePage.saveProfile();

        //Prueba finalizada con éxito
        console.log("\t - Carga de imagen de cover exitosa");
}

async function change_name_and_email(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const profilePage = new ProfilePage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }
    //Navegar al perfil
    await principalPage.navigateToProfile();
    
    //WHEN
    //Guardar el cambio el nombre y correo
    const name = "Equipo 20 - 2024";
    const email = "equipo2024@misw4103.com";
    await profilePage.changeName(name);
    await profilePage.changeEmail(email);
    
    await profilePage.saveProfile();
    await new Promise(r => setTimeout(r, 1000));
    
    //THEN
    // Verificar que el nombre y el correo fueron cambiados exitosamente
    
    // Acceder de nuevo al perfil
    await Promise.all([
        page.waitForNavigation(),
        principalPage.navigateToSite(),
        principalPage.navigateToProfile()
    ]);
    
    const nameValue = await profilePage.getProfileName();
    const emailValue = await profilePage.getProfileEmail();
    
    if(nameValue !== name || emailValue !== email){
        console.log("\t x El nombre o el correo no fueron cambiados exitosamente");
        return;
    }

    // Cambiar el nombre y el correo a los originales

    //Navegar al perfil
    await profilePage.changeName("Equipo 20");
    await profilePage.changeEmail("equipo20@misw4103.com");
    await profilePage.saveProfile();
    await new Promise(r => setTimeout(r, 1000));

    //Prueba finalizada con éxito
    console.log("\t - Cambio de nombre y correo exitoso");
}

async function add_social_networks(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const profilePage = new ProfilePage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }
    //Navegar al perfil
    await principalPage.navigateToProfile();
    
    //WHEN
    //Guardar el cambio de facebook y twitter
    const facebook = "https://www.facebook.com/Equipo20";
    const twitter = "https://twitter.com/Equipo20";
    await profilePage.changeFacebook(facebook);
    await profilePage.changeTwitter(twitter);

    await profilePage.saveProfile();
    await new Promise(r => setTimeout(r, 1000));
    
    //THEN
    // Verificar que facebook y twitter fueron cambiados exitosamente
    
    // Acceder de nuevo al perfil
    await Promise.all([
        page.waitForNavigation(),
        principalPage.navigateToSite(),
        principalPage.navigateToProfile()
    ]);
    
    const facebookValue = await profilePage.getFacebook();
    const twitterValue = await profilePage.getTwitter();
    
    if(facebookValue !== facebook || twitterValue !== twitter){
        console.log("\t x Facebook o Twitter no fueron cambiados exitosamente");
        return;
    }

    // Vaciar facebook y twitter
    await profilePage.changeFacebook("");
    await profilePage.changeTwitter("");
    await profilePage.saveProfile();
    await new Promise(r => setTimeout(r, 1000));

    //Prueba finalizada con éxito
    console.log("\t - Cambio de redes sociales exitoso");
}

async function user_activity(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const profilePage = new ProfilePage(page);
    const userHistory = new UserHistoryPage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }
    //Navegar al perfil
    await principalPage.navigateToProfile();
    const name = await profilePage.getProfileName();
    
    //WHEN
    // Quiero ver la actividad del usuario
    await profilePage.openActions();
    await profilePage.openUserActivity();
    await new Promise(r => setTimeout(r, 300));
    
    //THEN
    // Verificar que el modal de actividad del usuario se abrió y que se muestra la actividad del usuario

    if(!await userHistory.isOpen()){
        console.log("\t x No se abrió el modal de actividad del usuario");
        return;
    }

    const activities = await userHistory.getActivities();

    if(activities.length === 0){
        console.log("\t x No se muestra la actividad del usuario");
        return;
    }

    // Debe haber por lo menos una actividad realizada por el usuario
    const activity = activities[0];
    if(activity.user_name !== name){
        console.log("\t x No se muestra la actividad del usuario");
        return;
    }

    //Prueba finalizada con éxito
    console.log("\t - Visualización de actividad del usuario exitosa");

}

module.exports = { change_password, cover_8k_image, change_name_and_email, add_social_networks, user_activity };