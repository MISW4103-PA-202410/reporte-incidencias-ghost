const constants = require("../support/constants");

class PagesPage {
    constructor(page) {
        this.page = page;
    }

    async newPage() {
        // Espera a que el botón "New post" esté disponible en la página
        await this.page.waitForSelector('a[data-test-new-page-button=""]');
        // Navega a la página de creación de un nuevo post haciendo clic en el botón "New post"
        await this.page.click('a[data-test-new-page-button=""]');
        // Espera a que la navegación se complete
        await new Promise(r => setTimeout(r, 500));
    }

    async isPageEditorVisible() {
        try{
            // Espera a que el campo de título esté disponible en la página
            await this.page.waitForSelector('button[data-test-button="confirm-publish"]', { timeout: 2000 });
            return false;
        }
        catch{
            return true;
        }
    }

    async fillPageData(title, content) {
        // Espera a que el campo de título esté disponible en la página
        await this.page.waitForSelector('textarea[placeholder="Page title"]');
        // Ingresa el título del post
        await this.page.type('textarea[placeholder="Page title"]', title);
        // Ingresa el contenido del post
        await new Promise(r => setTimeout(r, 600));
        await this.page.type('[data-lexical-editor="true"]', content);
        // Simula presionar la tecla "Enter" después de ingresar el contenido
        await this.page.keyboard.press('Enter');
    }

    async reWriteTitle(title){
        await this.page.waitForSelector('textarea[placeholder="Page title"]');
        await this.page.click('textarea[placeholder="Page title"]', {clickCount: 3});
        await this.page.type('textarea[placeholder="Page title"]', title);
        await this.page.keyboard.press('Enter');
        await new Promise(r => setTimeout(r, 3000));
    }

    async uploadAudio(filePath) {
        //Esperar a que el botón "Add feature image" esté disponible en la página
        await this.page.waitForSelector('button[aria-label="Add a card"]');
        await this.page.click('button[aria-label="Add a card"]');
        //selector de file input
        await this.page.waitForSelector('button[data-kg-card-menu-item="Audio"]');
        const [fileChooser] =  await Promise.all([
            this.page.waitForFileChooser(),
            this.page.click('button[data-kg-card-menu-item="Audio"]')
        ]);
        await fileChooser.accept([filePath]);
        //Esperar a que la imagen se cargue
        try{
            await this.page.waitForSelector('div[data-testid="audio-card-populated"]', { timeout: 30000 });
            return true;
        }
        catch{
            return false;
        }
    }

    async submitPost() {
        try{
            await new Promise(r => setTimeout(r, 3000));
            // Espera a que el botón "Publish" esté disponible en la página
            await this.page.waitForSelector('button[data-test-button="publish-flow"]', { timeout: 5000 });
            // Publica el post haciendo clic en el botón "Publish"
            await this.page.click('button[data-test-button="publish-flow"]');
            // Espear a que el botón "Continue" esté disponible en la página
            await this.page.waitForSelector('button[data-test-button="continue"]', { timeout: 10000 });
            // Continúa con la publicación haciendo clic en el botón "Continue"
            await this.page.click('button[data-test-button="continue"]');
            await new Promise(r => setTimeout(r, 1000));
            // Espera aa que el botón "Publish post, right now" esté disponible en la página
            await this.page.waitForSelector('button[data-test-button="confirm-publish"]', { timeout: 1000 });
            // Publica el post haciendo clic en el botón "Publish post, right now"
            await this.page.click('button[data-test-button="confirm-publish"]');
            await new Promise(r => setTimeout(r, 1000));
            //Esperar a que el post se publique
            await this.page.waitForSelector('a[data-test-complete-bookmark=""]', { timeout: 5000 });
            //Completa la publicación haciendo clic en el botón "Done"
            await this.page.click('a.ember-view.gh-back-to-editor');
            // Espera a que la publicación se complete
            await new Promise(r => setTimeout(r, 500));
            return true;
        }catch{
            return false;
        }
    }
    async stopPublishFlow(){
        await new Promise(r => setTimeout(r, 3000));
        // Espera a que el botón "Publish" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="publish-flow"]', { timeout: 5000 });
        // Publica el post haciendo clic en el botón "Publish"
        await this.page.click('button[data-test-button="publish-flow"]');
        // Stop de pusblish flow
        await this.page.waitForSelector('button[data-test-button="close-publish-flow"]', { timeout: 1500 });
        // Stop de pusblish flow
        await this.page.click('button[data-test-button="close-publish-flow"]');
    }

    async retrySubmitPost() {
        // Espera a que el botón esté disponible
        await this.page.waitForSelector('button[data-test-button="confirm-publish"]');
        // Haz clic en el botón
        await this.page.click('button[data-test-button="confirm-publish"]');
    }

    async embededYotubeVideo(url){
        let youtubeFrame;
        //Esperar a que el botón "Add feature image" esté disponible en la página
        await this.page.waitForSelector('button[aria-label="Add a card"]');
        await this.page.click('button[aria-label="Add a card"]');

        //selector de file input
        await this.page.waitForSelector('button[data-kg-card-menu-item="YouTube"]');
        await this.page.click('button[data-kg-card-menu-item="YouTube"]');

        //Esperar a que el input de youtube esté disponible
        await this.page.waitForSelector('input[placeholder="Paste URL to add embedded content..."]');
        await this.page.type('input[placeholder="Paste URL to add embedded content..."]', url);
        await this.page.keyboard.press('Enter');

        try{
            // Esperar a que el iframe esté disponible en la página
            await this.page.waitForSelector('iframe[data-testid="embed-iframe"]', { timeout: 5000 });
            // Obtener todos los frames de la página
            const frames = this.page.frames();
            // Buscar el frame que contiene el iframe de YouTube
            for (const frame of frames) {
                const frameHtml = await frame.content();
                if (frameHtml.includes('www.youtube.com/embed')) {
                    youtubeFrame = frame;
                    break;
                }
            }
        }
        catch{
            await this.page.waitForSelector('div[data-testid="embed-url-error-container"]');
            youtubeFrame = null;
        }
        if (!youtubeFrame) {
            return false;
        }else{
            return true;
        }
    }

    async pageLook(pageTitle) {
        // Espera a que se carguen todos los elementos h3 con la clase especificada
        await this.page.waitForSelector('h3.gh-content-entry-title');
        // Obtiene todos los elementos h3 con la clase especificada
        const h3Titles = await this.page.$$('h3.gh-content-entry-title');
        // Itera sobre los elementos y verifica si alguno coincide con el título proporcionado
        for (const h3Title of h3Titles) {
            const title = await this.page.evaluate(h3 => h3.innerText, h3Title);
            if (title === pageTitle) {
                return true; // Retorna true si encuentra el título
            }
        }
        return false; // Retorna false si no encuentra el título
    }

    async openSettings(){
        await this.page.waitForSelector('button[data-test-psm-trigger=""]');
        await this.page.click('button[data-test-psm-trigger=""]');
        await new Promise(r => setTimeout(r, 200));
    }

    async closeSettings(){
        await this.page.waitForSelector('button[data-test-psm-trigger=""]');
        await this.page.click('button[data-test-psm-trigger=""]');
        await new Promise(r => setTimeout(r, 2000));

    }

    async addSlug(slug){
        await this.page.waitForSelector('input[name="post-setting-slug"]');
        //Borrar slug estandar
        await this.page.click('input[name="post-setting-slug"]', {clickCount: 3});
        await this.page.type('input[name="post-setting-slug"]', slug);
        await this.page.keyboard.press('Tab');

        try{
            //Veriicar si permite ingresar el slug
            await this.page.waitForSelector('div[class="gh-alert-content"', { timeout: 5000 });
            //Promesa
            await new Promise(r => setTimeout(r, 20000));
            return false;
        }
        catch{
            return true;
        }
    }

    async navigateToPage(slug) {
        const url = `${constants.baseUrl}/${slug}/`;
        try {
            await this.page.goto(url);
            await this.page.waitForSelector('h1.gh-article-title.is-title', { timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }

    async selectPostVisibility(optionValue) {
        // Esperar a que el select esté disponible
        await this.page.waitForSelector('select[data-test-select="post-visibility"]');
        // Seleccionar la opción deseada por su valor
        await this.page.select('select[data-test-select="post-visibility"]', optionValue);
    }

    async previewPage() {
        await this.page.waitForSelector('button[data-test-button="publish-preview"]');
        await this.page.click('button[data-test-button="publish-preview"]');
        await new Promise(r => setTimeout(r, 500));

        try{
            await this.page.waitForSelector('iframe.gh-pe-iframe');
            return true;
        }
        catch{
            return false;
        }
    }

    async previewTitle(){
        await this.page.waitForSelector('iframe.gh-pe-iframe');
        const frameHandle = await this.page.$('iframe.gh-pe-iframe');
        const frame = await frameHandle.contentFrame();
        await frame.waitForSelector('h1.gh-article-title');
        const title = await frame.$eval('h1.gh-article-title', el => el.innerText);
        return title;
    }


    async closePreview() {
        await this.page.waitForSelector('button.gh-btn.gh-btn-editor.gh-editor-preview-trigger.active');
        await this.page.click('button.gh-btn.gh-btn-editor.gh-editor-preview-trigger.active');
        await new Promise(r => setTimeout(r, 1000));
    }

    async saveDraft() {
        await this.page.waitForSelector('a[data-test-breadcrumb=""]');
        await this.page.click('a[data-test-breadcrumb=""]');
    }

    async savedPage(page) {
        // Espera un tiempo razonable para que el modal aparezca
        try {
            await this.page.waitForSelector('.modal-content', { visible: true, timeout: 3000 });
            return true; // El modal está visible
        } catch (error) {
            return false; // El modal no está visible
        }
    }

    async draftPages(){
        await this.page.waitForSelector('a[title="Scheduled"]');
        await this.page.click('a[title="Scheduled"]');
        await new Promise(r => setTimeout(r, 500));
    }

    async statusPage(pageTitle) {
        await this.page.waitForSelector('h3.gh-content-entry-title');
        const h3Titles = await this.page.$$('h3.gh-content-entry-title');
        for (const h3Title of h3Titles) {
            const title = await h3Title.evaluate(node => node.innerText);
            if (title === pageTitle) {
                const status = await h3Title.evaluate((node) => {
                    let nextElement = node.nextElementSibling;
                    while (nextElement) {
                        if (nextElement.tagName === 'P' && nextElement.classList.contains('gh-content-entry-status')) {
                            return nextElement.innerText;
                        }
                        nextElement = nextElement.nextElementSibling;
                    }
                    return null;
                });
                return status;
            }
        }
        // Si no se encuentra el título, retorna null
        return null;
    }

}

module.exports = PagesPage;