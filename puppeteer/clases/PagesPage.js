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

    async fillPageData(title, content) {
        const html = await this.page.content();
        //console.log(html);
        // Espera a que el campo de título esté disponible en la página
        await this.page.waitForSelector('textarea[placeholder="Page title"]');
        // Ingresa el título del post
        await this.page.type('textarea[placeholder="Page title"]', title);
        // Ingresa el contenido del post
        await this.page.type('[data-lexical-editor="true"]', content);
    }

    async uploadAudio(filePath) {

        //Esperar a que el botón "Add feature image" esté disponible en la página
        await this.page.waitForSelector('button[aria-label="Add a card"]');
        await this.page.click('button[aria-label="Add a card"]');
        const html = await this.page.content();
        console.log(html);
        //selector de file input
        await this.page.waitForSelector('button[data-kg-card-menu-item="Audio"]');
        const [fileChooser] =  await Promise.all([
            this.page.waitForFileChooser(),
            this.page.click('button[data-kg-card-menu-item="Audio"]')
        ]);
        await fileChooser.accept([filePath]);

        //Esperar a que la imagen se cargue
        try{
            await this.page.waitForSelector('.gh-editor-feature-image-container');
            return true;
        }
        catch{
            return false;
        }
    }

    async submitPost() {
        await new Promise(r => setTimeout(r, 3000));
        // Espera a que el botón "Publish" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="publish-flow"]');
        // Publica el post haciendo clic en el botón "Publish"
        await this.page.click('button[data-test-button="publish-flow"]');
        // Espear a que el botón "Continue" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="continue"]');
        // Continúa con la publicación haciendo clic en el botón "Continue"
        await this.page.click('button[data-test-button="continue"]');
        // Espera aa que el botón "Publish post, right now" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="confirm-publish"]');
        // Publica el post haciendo clic en el botón "Publish post, right now"
        await this.page.click('button[data-test-button="confirm-publish"]');
        //Esperar a que el post se publique
        await this.page.waitForSelector('a[data-test-complete-bookmark=""]');
        //Completa la publicación haciendo clic en el botón "Done"
        await this.page.click('a.ember-view.gh-back-to-editor');
        // Espera a que la publicación se complete
        await new Promise(r => setTimeout(r, 500));
    }
}

module.exports = PagesPage;