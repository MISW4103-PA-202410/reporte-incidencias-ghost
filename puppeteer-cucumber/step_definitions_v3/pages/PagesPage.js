const constants = require("../support/constants");

class PagesPage {
    constructor(page) {
        this.page = page;
    }

    async newPage() {
        // Espera a que el botón "New page" esté disponible en la página
        await this.page.waitForSelector('a[href="#/editor/page/"]');
        // Navega a la página de creación de un nuevo post haciendo clic en el botón "New page"
        await this.page.click('a[href="#/editor/page/"]');
        // Espera a que la navegación se complete
        await new Promise(r => setTimeout(r, 500));
    }

    async fillPageData(title, content) {
        // Espera a que el campo de título esté disponible en la página
        await this.page.waitForSelector('textarea[placeholder="Page Title"]');
        // Ingresa el título del post
        await this.page.type('textarea[placeholder="Page Title"]', title);
        // Ingresa el contenido del post
        await new Promise(r => setTimeout(r, 500));
        await this.page.type('[data-placeholder="Begin writing your page..."]', content);
        // Simula presionar la tecla "Enter" después de ingresar el contenido
        await this.page.keyboard.press('Enter');
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
            await this.page.waitForSelector('div[data-testid="audio-card-populated"]');
            return true;
        }
        catch{
            return false;
        }
    }

    async submitPage() {
        await new Promise(r => setTimeout(r, 3000));
        // Espera a que el botón "Publish" esté disponible en la página
        await this.page.evaluate(() => {
            [...document.querySelectorAll('span')].find(span => span.textContent.includes("Publish")).click();
            
        });
        await new Promise(r => setTimeout(r, 500));
        // Publica el post haciendo clic en el botón "Publish"
        await this.page.evaluate(() => {
            [...document.querySelectorAll('button')].find(span => span.innerText.includes("Publish")).click();
            
        });
        await new Promise(r => setTimeout(r, 1000));
    }

    async embededYotubeVideo(url){
        //Esperar a que el botón "Add feature image" esté disponible en la página
        await this.page.waitForSelector('button[aria-label="Add a card"]');
        await this.page.click('button[aria-label="Add a card"]');

        //selector de file input
        await this.page.waitForSelector('div[title="YouTube"]');
        await this.page.click('div[title="YouTube"]');

        //Esperar a que el input de youtube esté disponible
        await this.page.waitForSelector('input[placeholder="Paste URL to add embedded content..."]');
        await this.page.type('input[placeholder="Paste URL to add embedded content..."]', url);
        await this.page.keyboard.press('Enter');

        // Esperar a que el iframe esté disponible en la página
        await this.page.waitForSelector('div.koenig-embed-video>iframe');

        // Obtener todos los frames de la página
        const frames = this.page.frames();

        // Buscar el frame que contiene el iframe de YouTube
        let youtubeFrame;
        for (const frame of frames) {
            const frameHtml = await frame.content();
            if (frameHtml.includes('www.youtube.com/embed')) {
                youtubeFrame = frame;
                break;
            }
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
        await this.page.waitForSelector('button.post-settings');
        await this.page.click('button.post-settings');
        await new Promise(r => setTimeout(r, 200));
    }

    async closeSettings(){
        await this.page.waitForSelector('button.close.settings-menu-header-action');
        await this.page.click('button.close.settings-menu-header-action');
        await new Promise(r => setTimeout(r, 2000));

    }

    async addSlug(slug){
        await this.page.waitForSelector('input[name="post-setting-slug"]');
        //Borrar slug estandar
        await this.page.click('input[name="post-setting-slug"]', {clickCount: 3});
        await this.page.type('input[name="post-setting-slug"]', slug);
        await new Promise(r => setTimeout(r, 1000));
    }

    async navigateToPage(slug) {
        const url = `${constants.baseUrl}/${slug}/`;
        try {
            await this.page.goto(url);
            await this.page.waitForSelector('h1.post-full-title', { timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
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


    async closePreview() {
        await this.page.waitForSelector('button.gh-btn.gh-btn-editor.gh-editor-preview-trigger.active');
        await this.page.click('button.gh-btn.gh-btn-editor.gh-editor-preview-trigger.active');
        await new Promise(r => setTimeout(r, 1000));
    }

    async saveDraft() {
        await this.page.waitForSelector('a[data-test-breadcrumb=""]');
        await this.page.click('a[data-test-breadcrumb=""]');
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