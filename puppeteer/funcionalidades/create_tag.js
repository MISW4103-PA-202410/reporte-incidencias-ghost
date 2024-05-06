const LoginPage = require('../clases/LoginPage');
const PrincipalPage = require('../clases/PrincipalPage');
const TagListPage = require('../clases/TagListPage');
const TagPage = require('../clases/TagPage');

//"create_tag.js": ["tag_basico", "tag_duplicado", "tag_image", "tag_metadata"]
async function tag_basico(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const tagListPage = new TagListPage(page);
    const tagPage = new TagPage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }
    //Navegar a la sección de tags
    await principalPage.navigateToTags();

    //WHEN
    //Crear un nuevo tag con nombre y descripción
    await tagListPage.newTag();
    const name = "Tag de prueba";
    const description = "Descripción de tag de prueba";
    await tagPage.fillTagName(name);
    await tagPage.fillDescription(description);
    const saved = await tagPage.saveTag();
    
    //THEN
    // Verificar que el tag fue creado exitosamente
    if(!saved){
        console.log("\t x El tag no fue creado exitosamente");
        return;
    }
    const slug = await tagPage.getSlug();

    await principalPage.navigateToSite();
    await principalPage.navigateToTags();

    const tags = await tagListPage.getTags();
    const tagExist = tags.find(tag => tag.name === name && tag.slug === slug);

    if(!tagExist){
        console.log("\t x El tag no fue creado exitosamente");
        return;
    }

    //Prueba finalizada con éxito
    console.log("\t - Tag Básico creado exitosamente");
}

async function tag_duplicado(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const tagListPage = new TagListPage(page);
    const tagPage = new TagPage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }
    //Navegar a la sección de tags
    await principalPage.navigateToTags();

    //Existe tag con nombre y descripción
    await tagListPage.newTag();
    const name = "Tag de prueba duplicado";
    const description = "Descripción de tag de prueba";
    await tagPage.fillTagName(name);
    await tagPage.fillDescription(description);
    const saved = await tagPage.saveTag();
    if (!saved) {
        console.log("\t x El primer tag no fue creado exitosamente");
        return;
    }

    //WHEN
    //Crear un nuevo tag con el mismo nombre
    await principalPage.navigateToTags();
    await tagListPage.newTag();
    await tagPage.fillTagName(name);
    await tagPage.fillDescription(description);
    const originalSlug = await tagPage.getSlug();
    const saved2 = await tagPage.saveTag();

    
    //THEN
    // Verificar que el segundo tag fue creado exitosamente con un slug diferente
    if(!saved2){
        console.log("\t x El tag no fue creado exitosamente");
        return;
    }
    const slug = await tagPage.getSlug();

    if(slug === originalSlug){
        console.log("\t x El tag no fue creado exitosamente");
        return;
    }

    await principalPage.navigateToSite();
    await principalPage.navigateToTags();

    const tags = await tagListPage.getTags();
    const tagExist = tags.find(tag => tag.name === name && tag.slug === slug);

    if(!tagExist){
        console.log("\t x El tag no fue creado exitosamente");
        return;
    }

    //Prueba finalizada con éxito
    console.log("\t - Tag duplicado creado exitosamente");
}

async function tag_image(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const tagListPage = new TagListPage(page);
    const tagPage = new TagPage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }
    //Navegar a la sección de tags
    await principalPage.navigateToTags();

    //WHEN
    //Crear un nuevo tag con nombre y descripción
    await tagListPage.newTag();
    const name = "Tag de prueba con imagen";
    const description = "Descripción de tag de prueba con imagen";
    const filePath = "../docs/image_feature.jpeg";
    await tagPage.fillTagName(name);
    await tagPage.fillDescription(description);
    await tagPage.addImage(filePath);
    const saved = await tagPage.saveTag();
    
    //THEN
    // Verificar que el tag fue creado exitosamente
    if(!saved){
        console.log("\t x El tag no fue creado exitosamente");
        return;
    }
    const slug = await tagPage.getSlug();

    await principalPage.navigateToSite();
    await principalPage.navigateToTags();

    const tags = await tagListPage.getTags();
    const tagExist = tags.find(tag => tag.name === name && tag.slug === slug);

    if(!tagExist){
        console.log("\t x El tag no fue creado exitosamente");
        return;
    }

    //Verificar que la imagen fue cargada exitosamente
    await tagListPage.goToTag(tagExist.slug);

    const imageExist = await tagPage.imageExist();
    if(!imageExist){
        console.log("\t x La imagen no fue cargada exitosamente");
        return;
    }

    //Prueba finalizada con éxito
    console.log("\t - Tag con imagen creado exitosamente");
}

async function tag_metadata(page) {
    //Page Object
    const formPage = new LoginPage(page);
    const principalPage = new PrincipalPage(page);
    const tagListPage = new TagListPage(page);
    const tagPage = new TagPage(page);

    //GIVEN
    //Ingresar
    if(await formPage.isSignInPage()){
        await formPage.login('equipo20@misw4103.com', 'PRUEBAS12345');
    }
    else{
        await principalPage.navigateToSite();
    }
    //Navegar a la sección de tags
    await principalPage.navigateToTags();

    //WHEN
    //Crear un nuevo tag con nombre, descripción y metadata
    await tagListPage.newTag();
    const name = "Tag de prueba con metadata";
    const description = "Descripción de tag de prueba con metadata";
    const metadata = {
        title: "Metadata title",
        description: "Metadata description"
    };
    await tagPage.fillTagName(name);
    await tagPage.fillDescription(description);
    await tagPage.fillMetadata(metadata.title, metadata.description);
    const saved = await tagPage.saveTag();
    
    //THEN
    // Verificar que el tag fue creado exitosamente
    if(!saved){
        console.log("\t x El tag no fue creado exitosamente");
        return;
    }
    const slug = await tagPage.getSlug();

    await principalPage.navigateToSite();
    await principalPage.navigateToTags();

    const tags = await tagListPage.getTags();
    const tagExist = tags.find(tag => tag.name === name && tag.slug === slug);

    if(!tagExist){
        console.log("\t x El tag no fue creado exitosamente");
        return;
    }

    //Verificar que la metadata fue guardada exitosamente
    await tagListPage.goToTag(tagExist.slug);

    const tagMetadata = await tagPage.getMetadata();

    if(tagMetadata.title !== metadata.title || tagMetadata.description !== metadata.description){
        console.log("\t x La metadata no fue guardada exitosamente");
        return;
    }

    //Prueba finalizada con éxito
    console.log("\t - Tag con metadata creado exitosamente");
}

module.exports = { tag_basico, tag_duplicado, tag_image, tag_metadata};