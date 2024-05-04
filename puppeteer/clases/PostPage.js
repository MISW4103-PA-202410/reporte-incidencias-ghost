class PostPage {
    constructor(page) {
    this.page = page;
    }

    async newPost() {
        // Espera a que el botón "New post" esté disponible en la página
        await this.page.waitForSelector('a[data-test-new-post-button=""]');
        // Navega a la página de creación de un nuevo post haciendo clic en el botón "New post"
        await this.page.click('a[data-test-new-post-button=""]');
        // Espera a que la navegación se complete
        await new Promise(r => setTimeout(r, 500));
    }

    async fillPostData(title, content) {
        const html = await this.page.content();
        //console.log(html);
        // Espera a que el campo de título esté disponible en la página
        await this.page.waitForSelector('textarea[placeholder="Post title"]');
        // Ingresa el título del post
        await this.page.type('textarea[placeholder="Post title"]', title);
        // Ingresa el contenido del post
        await new Promise(r => setTimeout(r, 1000));
        await this.page.type('[data-lexical-editor="true"]', content);
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

    async uploadImage(filePath) {
        //Esperar a que el botón "Add feature image" esté disponible en la página
        await this.page.waitForSelector('.gh-editor-feature-image-add-button');
        const [fileChooser] =  await Promise.all([
            this.page.waitForFileChooser(),
            this.page.click('.gh-editor-feature-image-add-button')
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

    async scheduleLater(){
        await new Promise(r => setTimeout(r, 3000));
        // Espera a que el botón "Publish" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="publish-flow"]');
        // Publica el post haciendo clic en el botón "Publish"
        await this.page.click('button[data-test-button="publish-flow"]');

        //Habilitar la opción de programar la publicación
        const spans = await this.page.$$('span');

        // Iterar sobre los elementos para encontrar el que contiene "Right now"
        for (const span of spans) {
            const text = await this.page.evaluate(span => span.innerText, span);
            if (text.trim() === 'Right now') {
                await span.click();
                break; // Salir del bucle una vez que se hace clic en el elemento correcto
            }
        }

        //Seleccionar la opción de programar la publicación
        await this.page.evaluate(() => {
            const labels = Array.from(document.querySelectorAll('label'));
            const label = labels.find(label => label.textContent.trim() === 'Schedule for later');
            if (label) {
                label.click();
            } else {
                throw new Error('Elemento no encontrado');
            }
        });

        // Espear a que el botón "Continue" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="continue"]');
        // Continúa con la publicación haciendo clic en el botón "Continue"
        await this.page.click('button[data-test-button="continue"]');

        // Espera aa que el botón "Publish post, right now" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="confirm-publish"]');
        // Publica el post haciendo clic en el botón "Publish post, right now"
        await this.page.click('button[data-test-button="confirm-publish"]');

        //dashboard
        await this.page.goto('http://34.170.53.250/ghost/#/dashboard');

        //Screen shot
        await this.page.screenshot({path: 'screenshot.png'});
        // Espera a que la publicación se complete
        await new Promise(r => setTimeout(r, 500));
    }

    async firstPost(){
        //Screen shot
        await this.page.screenshot({path: 'screenshot.png'});
        await this.page.waitForSelector('h3.gh-content-entry-title');
        const h3Title = await this.page.$('h3.gh-content-entry-title');
        const title = await this.page.evaluate(h3Title => h3Title.innerText, h3Title);
        return title;
    }

    async eschedulePosts(){
        await this.page.waitForSelector('a[title="Scheduled"]');
        await this.page.click('a[title="Scheduled"]');
        await new Promise(r => setTimeout(r, 500));
    }

}


module.exports = PostPage;